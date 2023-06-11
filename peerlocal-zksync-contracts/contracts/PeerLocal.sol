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
        IERC20 stakingToken;
    }

    struct Offer {
        address owner;
        uint256 communityId;
        string metadata;
        uint256 reputationRequirement;
        uint256 stakingRequirement;
        uint8 offerStatus; //created -> 1, active -> 2, finished -> 3
    }

    event CommunityCreated(uint256 indexed communityId, string ipfsMetadata, address indexed owner, IERC20 stakingToken, uint256 stakingRequirement);
    event MemberJoinedCommunity(uint256 indexed communityId, address indexed member);
    event OfferCreated(uint256 indexed communityId, uint256 offerId, Offer newOffer);
    event OfferAccepted(uint256 indexed communityId, uint256 indexed offerId, address indexed member);
    event OfferClosed(uint256 indexed communityId, uint256 indexed offerId, address indexed member, bool result);
    event PeerLocalInitalized(address indexed erc20);

    event reputationTokenStaked(address indexed member, uint256 reputationRequirementStaked);
    event collateralTokenStaked(address indexed member, uint256 stakingRequirementStaked);

    event reputationTokenReturned(address indexed member, uint256 reputationRequirementReturned);
    event collateralTokenReturned(address indexed member, uint256 stakingRequirementReturned);

    event ReputationTokenMint(address indexed member, uint256 mintAmount);
    event ReputationTokenBurn(uint256 burnAmount);

    uint256 communitiesCounter = 0;
    uint256 offerCounter = 0;

    mapping(uint256 => Community) public communities;
    mapping(uint256 => mapping(uint256 => Offer)) public offers;

    mapping(uint256 => address[]) public communityMembers;


    constructor(address _reputationTokenAddress) public {
        reputationToken = ReputationToken(_reputationTokenAddress);
        emit PeerLocalInitalized(address(_reputationTokenAddress));
    }


    function createCommunity(string memory _ipfsMetadata, IERC20 _stakingToken, uint256 _stakingRequirement) public {
        communities[communitiesCounter] = Community({ipfsMetadata: _ipfsMetadata, owner: msg.sender, stakingToken: _stakingToken , stakingRequirement: _stakingRequirement});
        communitiesCounter++;
        communityMembers[communitiesCounter].push(msg.sender);
        emit CommunityCreated(communitiesCounter - 1, _ipfsMetadata, msg.sender, _stakingToken, _stakingRequirement);
    }

    function joinCommunity(uint256 _communityId, bytes memory _signature) public {
        // signature has to be from the owner of the community
        // require(_recoverSigner(_signature) == communities[_communityId].owner, "Invalid signature");
        require((communities[_communityId].stakingToken).balanceOf(msg.sender) >= communities[_communityId].stakingRequirement, "Insufficient balance to join community");
        // transfer from msg.sender to this contract
        if (communities[_communityId].stakingRequirement != 0) {
            (communities[_communityId].stakingToken).transferFrom(msg.sender, address(this), communities[_communityId].stakingRequirement);
            // emit event
        }
        // add msg.sender to communityMembers
        communityMembers[_communityId].push(msg.sender);

        emit MemberJoinedCommunity(_communityId, msg.sender);
        if (communities[_communityId].stakingRequirement != 0) {
            emit collateralTokenStaked(msg.sender, communities[_communityId].stakingRequirement);
        }
    }

    function createOffer(uint256 _communityId, string memory _metadata, uint256 _reputationRequirement, uint256 _stakingRequirement) public {
        //require(reputation[msg.sender] >= reputationRequirement, "Insufficient reputation to create offer");

        //We add one to the offerCounter
        offerCounter += 1;

        Offer memory newOffer = Offer(msg.sender, _communityId, _metadata, _reputationRequirement, _stakingRequirement, 1);

        offers[_communityId][offerCounter] = newOffer;
        // set the status of the offer to 1, created, not accept
        emit OfferCreated(_communityId, offerCounter, newOffer);
    }

    function acceptOffer(uint256 _communityId, uint256 _offerId) public {
        require((communities[_communityId].stakingToken).balanceOf(msg.sender) >= offers[_communityId][_offerId].stakingRequirement, "Insufficient balance to accept offer");
        require((communities[_communityId].stakingToken).allowance(msg.sender, address(this)) >= offers[_communityId][_offerId].stakingRequirement, "Insufficient allowance to accept offer");

        //We need to check the status of the offer is 1
        require((offers[_communityId][_offerId]).offerStatus == 1);
        // Transfer staked tokens
        if (offers[_communityId][_offerId].stakingRequirement > 0) {
            (communities[_communityId].stakingToken).transferFrom(msg.sender, address(this), offers[_communityId][_offerId].stakingRequirement);
            emit collateralTokenStaked(msg.sender, offers[_communityId][_offerId].stakingRequirement);
        }
        //Stake reputation if needed
        if (offers[_communityId][_offerId].reputationRequirement > 0) {
            reputationToken.transferFrom(msg.sender, address(this), offers[_communityId][_offerId].reputationRequirement);
            emit reputationTokenStaked(msg.sender, offers[_communityId][_offerId].reputationRequirement);
        }
        // Transfer staked tokens to offer owner
        // We should transfer the tokens to the owner util we decide if the return it's ok or no!!!!
        //token.transfer(offers[communityId][offerId].owner, offers[communityId][offerId].stakingRequirement);
        //We also have to stake some

        offers[_communityId][_offerId].offerStatus = 2;

        // emit event
        emit OfferAccepted(_communityId, _offerId, msg.sender);
    }

    function _recoverSigner(
        bytes memory signature
    ) private view returns (address) {
        return ECDSA.recover(ECDSA.toEthSignedMessageHash(MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER), signature);
    }

    function endOffer(uint256 _communityId, uint256 _offerId, bool _finalResult, address multisigAddress) public {
    }

    function mintTokens(address _recipient, uint256 _amount) private {
        reputationToken.mint(_recipient, _amount);
        emit ReputationTokenMint(_recipient, _amount);
    }
     function burnTokens(uint256 _amount) private {
        reputationToken.burn(_amount);
        emit ReputationTokenBurn(_amount);
    }

}