// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import "./ReputationToken.sol";  // Import the ReputationToken contract's ABI


contract PeerLocal is Ownable {

    bytes32 MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER = "I am the owner of this community";

    ReputationToken public reputationToken;

    struct Community {
        string ipfsMetadata;
        uint256 stakingRequirement;
        address owner;
    }

    struct Offer {
        address owner;
        uint256 communityId;
        string metadata;
        uint256 reputationRequirement;
        uint256 stakingRequirement;
        uint8 offerStatus; //created -> 1, active -> 2, finished -> 3
    }

    event CommunityCreated(uint256 indexed communityId, string ipfsMetadata, uint256 stakingRequirement, address indexed owner);
    event MemberJoinedCommunity(uint256 indexed communityId, address indexed member);
    event OfferCreated(uint256 indexed communityId, uint256 offerId, Offer newOffer);
    event OfferAccepted(uint256 indexed communityId, uint256 indexed offerId, address indexed member);
    event OfferClosed(uint256 indexed communityId, uint256 indexed offerId, address indexed member);
    event PeerLocalInitalized(address indexed erc20);

    event reputationTokenStaked(uint256 reputationRequirementStaked);
    event collateralTokenStaked(uint256 stakingRequirementStaked);

    event reputationTokenReturned(uint256 reputationRequirementReturned);
    event collateralTokenReturned(uint256 stakingRequirementReturned);

    event ReputationTokenMint(uint256 mintAmount);
    event ReputationTokenBurn(uint256 burnAmount);





    IERC20 public token; // GHO
    mapping(uint256 => Community) public communities;
    uint256 communityCounter = 0;
    uint256 offerCounter = 0;
    // communityId => offerId => Offer
    mapping(uint256 => mapping(uint256 => Offer)) public offers;

    mapping(uint256 => address[]) public communityMembers;
    mapping(address => uint256) public reputation;

    mapping(uint256 => string) public offerStatus;


    constructor(IERC20 _token) {
        token = _token;
        emit PeerLocalInitalized(address(_token));
        reputationToken = ReputationToken(0xE5397854e5Efa5b487DcB5D39B1173608F74b728);
    }

    function createCommunity(string memory ipfsMetadata, uint256 stakingRequirement) public {
        communities[communityCounter] = Community({ipfsMetadata: ipfsMetadata, stakingRequirement: stakingRequirement, owner: msg.sender});
        communityCounter++;
        emit CommunityCreated(communityCounter - 1, ipfsMetadata, stakingRequirement, msg.sender);
    }

    function joinCommunity(uint256 communityId, bytes memory signature) public {
        // signature has to be from the owner of the community
        require(_recoverSigner(signature) == communities[communityId].owner, "Invalid signature");
        require(token.balanceOf(msg.sender) >= communities[communityId].stakingRequirement, "Insufficient balance to join community");
        // transfer from msg.sender to this contract
        token.transferFrom(msg.sender, address(this), communities[communityId].stakingRequirement);
        // add msg.sender to communityMembers
        communityMembers[communityId].push(msg.sender);
        // emit event
        emit MemberJoinedCommunity(communityId, msg.sender);
    }

    function createOffer(uint256 communityId, string memory metadata, uint256 reputationRequirement, uint256 stakingRequirement) public {
        require(reputation[msg.sender] >= reputationRequirement, "Insufficient reputation to create offer");

        //We add one to the offerCounter
        offerCounter += 1;

        Offer memory newOffer = Offer(msg.sender, communityId, metadata, reputationRequirement, stakingRequirement, 1);

        offers[communityId][offerCounter] = newOffer;
        // set the status of the offer to 1, created, not accept
        emit OfferCreated(communityId, offerCounter, newOffer);
    }

    function acceptOffer(uint256 communityId, uint256 offerId) public {
        require(token.balanceOf(msg.sender) >= offers[communityId][offerId].stakingRequirement, "Insufficient balance to accept offer");
        require(reputation[msg.sender] >= offers[communityId][offerId].reputationRequirement, "Insufficient reputation to accept offer");
        //We need to check the status of the offer is 1
        require((offers[communityId][offerId]).offerStatus == 1);
        // Transfer staked tokens
        if (offers[communityId][offerId].stakingRequirement > 0) {
            token.transferFrom(msg.sender, address(this), offers[communityId][offerId].stakingRequirement);
            emit collateralTokenStaked(offers[communityId][offerId].stakingRequirement);
        }
        //Stake reputation if needed
        if (offers[communityId][offerId].reputationRequirement > 0) {
            reputationToken.transferFrom(msg.sender, address(this), offers[communityId][offerId].reputationRequirement);
            emit reputationTokenStaked(offers[communityId][offerId].reputationRequirement);
        }
        // Transfer staked tokens to offer owner
        // We should transfer the tokens to the owner util we decide if the return it's ok or no!!!!
        //token.transfer(offers[communityId][offerId].owner, offers[communityId][offerId].stakingRequirement);
        //We also have to stake some

        offers[communityId][offerId].offerStatus = 2;

        // emit event
        emit OfferAccepted(communityId, offerId, msg.sender);
    }

    function _recoverSigner(
        bytes memory signature
    ) private view returns (address) {
        return ECDSA.recover(ECDSA.toEthSignedMessageHash(MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER), signature);
    }

    function endOffer(uint256 communityId, uint256 offerId, bool finalResult) public {
        require((offers[communityId][offerId]).offerStatus == 2);

        if (finalResult == true){
            // Transfer staked tokens back
            if (offers[communityId][offerId].stakingRequirement > 0) {
                token.transferFrom(address(this), msg.sender, offers[communityId][offerId].stakingRequirement);
                emit collateralTokenReturned(offers[communityId][offerId].stakingRequirement);

            }
            if (offers[communityId][offerId].reputationRequirement > 0) {

                reputationToken.transferFrom(address(this), msg.sender, offers[communityId][offerId].reputationRequirement);
                emit reputationTokenReturned(offers[communityId][offerId].reputationRequirement);
            }

            //Return reputation lender and borrower
            //The lender and the borrower gets 1 Reputation Token
            mintTokens(msg.sender, 1);
            mintTokens(offers[communityId][offerId].owner, 1);

            offers[communityId][offerId].offerStatus = 3;
            emit OfferClosed(communityId, offerId, msg.sender);

        }else {
            token.transferFrom(address(this), offers[communityId][offerId].owner, offers[communityId][offerId].stakingRequirement);
            if (offers[communityId][offerId].reputationRequirement > 0) {
                burnTokens(offers[communityId][offerId].reputationRequirement); //the staked ones
            }
            offers[communityId][offerId].offerStatus = 3;
            emit OfferClosed(communityId, offerId, msg.sender);
        }

    }

    function mintTokens(address recipient, uint256 amount) private {
        reputationToken.mint(recipient, amount);
        emit ReputationTokenMint(amount);
    }
     function burnTokens(uint256 amount) private {
        reputationToken.burn(amount);
        emit ReputationTokenBurn(amount);
    }
}
