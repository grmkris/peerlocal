// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PeerLocal is Ownable {
    struct Community {
        string name;
        uint256 stakingRequirement;
        address owner;
    }

    struct Offer {
        address owner;
        uint256 communityId;
        string metadata;
        uint256 reputationRequirement;
        uint256 stakingRequirement;
    }

    IERC20 public token;
    Community[] public communities;
    Offer[] public offers;

    mapping(uint256 => address[]) public communityMembers;
    mapping(address => uint256) public reputation;

    constructor(IERC20 _token) {
        token = _token;
    }

    function createCommunity(string memory name, uint256 stakingRequirement) public {
        communities.push(Community({name: name, stakingRequirement: stakingRequirement, owner: msg.sender}));
    }

    function joinCommunity(uint256 communityId) public {
        require(token.balanceOf(msg.sender) >= communities[communityId].stakingRequirement, "Insufficient balance to join community");
        communityMembers[communityId].push(msg.sender);
    }

    function createOffer(uint256 communityId, string memory metadata, uint256 reputationRequirement, uint256 stakingRequirement) public {
        require(reputation[msg.sender] >= reputationRequirement, "Insufficient reputation to create offer");
        offers.push(Offer({owner: msg.sender, communityId: communityId, metadata: metadata, reputationRequirement: reputationRequirement, stakingRequirement: stakingRequirement}));
    }

    function acceptOffer(uint256 offerId) public {
        require(token.balanceOf(msg.sender) >= offers[offerId].stakingRequirement, "Insufficient balance to accept offer");
        require(reputation[msg.sender] >= offers[offerId].reputationRequirement, "Insufficient reputation to accept offer");
        // Transfer staked tokens
        token.transferFrom(msg.sender, address(this), offers[offerId].stakingRequirement);
    }

    // Rest of your functions...
}
