// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract PeerLocal is Ownable {

    bytes32 MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER = "I am the owner of this community";

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
        string offerStatus;
    }

    event CommunityCreated(uint256 indexed communityId, string ipfsMetadata, uint256 stakingRequirement, address indexed owner);
    event MemberJoinedCommunity(uint256 indexed communityId, address indexed member);
    event OfferCreated(uint256 indexed communityId, uint256 offerId, Offer newOffer);
    event OfferAccepted(uint256 indexed communityId, uint256 indexed offerId, address indexed member);
    event PeerLocalInitalized(address indexed erc20);



    IERC20 public token; // GHO
    mapping(uint256 => Community) public communities;
    uint256 communityCounter = 0;
    uint256 offerId = 0;
    // communityId => offerId => Offer
    mapping(uint256 => mapping(uint256 => Offer)) public offers;

    mapping(uint256 => address[]) public communityMembers;
    mapping(address => uint256) public reputation;

    mapping(uint256 => string) public offerStatus;


    constructor(IERC20 _token) {
        token = _token;
        emit PeerLocalInitalized(address(_token));
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
        // add reputation to msg.sender
        reputation[msg.sender] += 1;
        // emit event
        emit MemberJoinedCommunity(communityId, msg.sender);
    }

    function createOffer(uint256 communityId, string memory metadata, uint256 reputationRequirement, uint256 stakingRequirement) public {
        require(reputation[msg.sender] >= reputationRequirement, "Insufficient reputation to create offer");
        
        //We add one to the offerCounter
        offerId += 1;
        

        Offer memory newOffer = Offer(msg.sender, communityId, metadata, reputationRequirement, stakingRequirement, "created");

        offers[communityId][offerId] = newOffer;
        // set the status of the offer to 1, created, not accept
        emit OfferCreated(communityId, offerId, newOffer);
    }

    function acceptOffer(uint256 communityId, uint256 offerId) public {
        require(token.balanceOf(msg.sender) >= offers[communityId][offerId].stakingRequirement, "Insufficient balance to accept offer");
        require(reputation[msg.sender] >= offers[communityId][offerId].reputationRequirement, "Insufficient reputation to accept offer");
        require(offerStatus[offerId] == 1); 
        // Transfer staked tokens
        token.transferFrom(msg.sender, address(this), offers[communityId][offerId].stakingRequirement);
        // Transfer staked tokens to offer owner
        token.transfer(offers[communityId][offerId].owner, offers[communityId][offerId].stakingRequirement);
        // set the status of the offer to 1, accept, not closed
        offerStatus[offerId] = 2;
        // emit event
        emit OfferAccepted(communityId, offerId, msg.sender);
    }

    function _recoverSigner(
        bytes memory signature
    ) private view returns (address) {
        return ECDSA.recover(ECDSA.toEthSignedMessageHash(MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER), signature);
    }

    function endOffer(uint256 communityId, uint256 offerId) public {
        require(offerStatus[offerId] == 2);
        offerStatus[offerId] = 2;


    }
}
