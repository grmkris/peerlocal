// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

// We use the ReputationToken in order to reward or punish (burning ReputationToken staked) for the tool borrow/lending system. 
import "./ReputationToken.sol";  // Import the ReputationToken contract's ABI

//We import the IPool function from AAVE V3
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract PeerLocal is Ownable {

    bytes32 MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER = "I am the owner of this community";

    ReputationToken public reputationToken;

    //The Community struct is used in the communities mapping to define the Community characteristics
    struct Community {
        string ipfsMetadata;
        uint256 stakingRequirement;
        address owner;
        IERC20 stakingToken;
    }
    // The Offer struct is used in the 
    struct Offer {
        address owner;
        uint256 communityId;
        string metadata;
        uint256 reputationRequirement;
        uint256 stakingRequirement;
        uint8 offerStatus; //created -> 1, active -> 2, finished -> 3; we use numbers to avoid conversion using the == operator. 
    }

    //Events used to keep tack of the different communities and offers in The Graph dashboard
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

    event TokenDepositAAVE(uint256 communityId, address tokenDepositAAVE, uint256 amountDeposited, uint256 totalAmountInAAVE);
    event TokenRedeemAAVE(uint256 communityId, address tokenRedeemAAVE, uint256 amountRedeem, uint256 totalAmountInAAVE);

    //Counter that generates the communityId
    uint256 communitiesCounter = 0;
    //Counter that generates the offerId
    uint256 offerCounter = 0;

    //Address of the V3 AAVE IPool in Göerli Optimism Testnet
    address lendingPool = 0xCAd01dAdb7E97ae45b89791D986470F3dfC256f7;

    // communities map keeps track of the different communities created and it's characteristics
    // We use the community Id, generated with the communitiesCounter, as key, and the Community struct as value. 
    mapping(uint256 => Community) public communities;

    // offers map keeps track of the different offers created, in the different communities, and it's characteristics. 
    // We use the community Id, generated with the communitiesCounter, as first key, 
    // the offernId, generated with the counter offerCounter, as second key, and the Offer struct as value. 
    mapping(uint256 => mapping(uint256 => Offer)) public offers;

    // communityMembers map keeps stores an address array of all the community members
    //We use the communityId as key, and an address array as value. 
    mapping(uint256 => address[]) public communityMembers;

    //Mapping for the tokens deposited in AAVE
    //communityId, tokenAddress, amount deposited.
    mapping(uint256 => mapping(address => uint256)) public aaveTokenSuppliedByCommunity;


    constructor(address _reputationTokenAddress) public {
        
        reputationToken = ReputationToken(_reputationTokenAddress);
        emit PeerLocalInitalized(address(_reputationTokenAddress));

    }

    // The function createCommunity stores the _ipfsMetadata, _stakingToken and _stakingRequirement in the communities map. 
    function createCommunity(string memory _ipfsMetadata, IERC20 _stakingToken, uint256 _stakingRequirement) public {
        // We store the arguments in the communities map, using the communitiesCounter as key to create a community.
        communities[communitiesCounter] = Community({ipfsMetadata: _ipfsMetadata, owner: msg.sender, stakingToken: _stakingToken , stakingRequirement: _stakingRequirement});
        
        // We store the creator of the community as a member of the community OfferCreated
        // We store the msg.sender address in an array, with a key value the communitiesCounter that it's also the communityId. 
        communityMembers[communitiesCounter].push(msg.sender);
    
        // We increase the communitiesCounter. 
        communitiesCounter++;
        
        emit CommunityCreated(communitiesCounter - 1, _ipfsMetadata, msg.sender, _stakingToken, _stakingRequirement);
    }

    //The function joinCommunity allows user to join a community, to do it we call the function with the arguments _communityId, 
    //and the community creator, owner, signature.
    function joinCommunity(uint256 _communityId, bytes memory _signature) public {
        // signature has to be from the owner of the community
        require(_recoverSigner(_signature) == communities[_communityId].owner, "Invalid signature");
        // transfer from msg.sender to this contract
        // add msg.sender to communityMembers
        communityMembers[_communityId].push(msg.sender);

        emit MemberJoinedCommunity(_communityId, msg.sender);

        // We chack if the community has stakingRequirement to transfer the required tokens to the contract, 
        // and following deposit them to the AAVE V3 token Pool
        if (communities[_communityId].stakingRequirement != 0) {
            // transferfrom user to this contract
            IERC20 token = communities[_communityId].stakingToken;
            token.transferFrom(msg.sender, address(this), communities[_communityId].stakingRequirement);
            token.approve(lendingPool, communities[_communityId].stakingRequirement);
            // We use a wrap funtion that uses the AAVE IPool funtion IPool(_lendingPool).supply(_tokenAddress, _amount, _user, 0);
            // In out wrap function we add also the _communityId argument that we use to keep track of the deposits. 
            supply(lendingPool,address(communities[_communityId].stakingToken), communities[_communityId].stakingRequirement, _communityId, msg.sender);
            
            emit collateralTokenStaked(msg.sender, communities[_communityId].stakingRequirement);
        }
    }

    // The function createOffer allowes community members to create offers inside of a community.  
    function createOffer(uint256 _communityId, string memory _metadata, uint256 _reputationRequirement, uint256 _stakingRequirement) public {
        //We add one to the offerCounter
        offerCounter += 1;

        // We store the arguments in a new variable newOffer of type Offer struct 
        Offer memory newOffer = Offer(msg.sender, _communityId, _metadata, _reputationRequirement, _stakingRequirement, 1);

        // We store the variable new Offer in the offer map with the communityId and the OfferId (offerCounter) as keys. 
        offers[_communityId][offerCounter] = newOffer;
        // set the status of the offer to 1, created, not accept
        emit OfferCreated(_communityId, offerCounter, newOffer);
    }

    // The acceptOffer functions allow community members to accept one offer.
    function acceptOffer(uint256 _communityId, uint256 _offerId) public {
        // We check the member balance of Reputation and stake Token necessary to accept the offer, determined by the offer creator. 
        require((communities[_communityId].stakingToken).balanceOf(msg.sender) >= offers[_communityId][_offerId].stakingRequirement, "Insufficient balance to accept offer");
        require((communities[_communityId].stakingToken).allowance(msg.sender, address(this)) >= offers[_communityId][_offerId].stakingRequirement, "Insufficient allowance to accept offer");

        //We need to check the status of the offer is 1, so has not been yet accepted by any other user. 
        require((offers[_communityId][_offerId]).offerStatus == 1);
        // Transfer staked tokens to the contract, if there is staking requirements.
        if (offers[_communityId][_offerId].stakingRequirement > 0) {
            (communities[_communityId].stakingToken).transferFrom(msg.sender, address(this), offers[_communityId][_offerId].stakingRequirement);
            emit collateralTokenStaked(msg.sender, offers[_communityId][_offerId].stakingRequirement);
        }
        //Stake reputation if needed to the contract, if there is reputation requirements. 
        if (offers[_communityId][_offerId].reputationRequirement > 0) {
            reputationToken.transferFrom(msg.sender, address(this), offers[_communityId][_offerId].reputationRequirement);
            emit reputationTokenStaked(msg.sender, offers[_communityId][_offerId].reputationRequirement);
        }
        
        // We change the offerStatus to 2, that is the "active" status, that means that an offer has been accepted, but yet not closed.
        offers[_communityId][_offerId].offerStatus = 2;

        // emit event
        emit OfferAccepted(_communityId, _offerId, msg.sender);
    }

    function _recoverSigner(
        bytes memory signature
    ) private view returns (address) {
        return ECDSA.recover(ECDSA.toEthSignedMessageHash(MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER), signature);
    }

    // The function endOffer is called when the borrower returns the tool, and we use a bool type, to determine if the 
    // lending went ok or not. 
    function endOffer(uint256 _communityId, uint256 _offerId, bool _finalResult) public {
        require((offers[_communityId][_offerId]).offerStatus == 2, "Invalid offer");

        // If the lending went well, and it's true the token and reputation stake is returned        
        if (_finalResult == true){
            // Transfer staked tokens back
            if (offers[_communityId][_offerId].stakingRequirement > 0) {
                (communities[_communityId].stakingToken).transfer(msg.sender, offers[_communityId][_offerId].stakingRequirement);
                emit collateralTokenReturned(msg.sender, offers[_communityId][_offerId].stakingRequirement);

            }
            if (offers[_communityId][_offerId].reputationRequirement > 0) {
                reputationToken.transfer(msg.sender, offers[_communityId][_offerId].reputationRequirement);
                emit reputationTokenReturned(msg.sender, offers[_communityId][_offerId].reputationRequirement);
            }
            //The lender and the borrower gets 1 Reputation Token
            mintTokens(msg.sender, 1);
            mintTokens(offers[_communityId][_offerId].owner, 1);

            offers[_communityId][_offerId].offerStatus = 3;
            emit OfferClosed(_communityId, _offerId, msg.sender, true);

        }else {
            // In case didn't went erll, the reputation token is burned, and the collateral is send to the lender
            (communities[_communityId].stakingToken).transfer(offers[_communityId][_offerId].owner, offers[_communityId][_offerId].stakingRequirement);
            if (offers[_communityId][_offerId].reputationRequirement > 0) {
                burnTokens(offers[_communityId][_offerId].reputationRequirement); //the staked ones
            }
            offers[_communityId][_offerId].offerStatus = 3;
            emit OfferClosed(_communityId, _offerId, msg.sender, false);
        }

    }

    function mintTokens(address _recipient, uint256 _amount) private {
        reputationToken.mint(_recipient, _amount);
        emit ReputationTokenMint(_recipient, _amount);
    }
    function burnTokens(uint256 _amount) private {
        reputationToken.burn(_amount);
        emit ReputationTokenBurn(_amount);
    }


    // Needs the token address that we want to deposit in AAVE, and the amount, the lendingPool is
    // configured in the constructor for Goerli Optimism testnet

    //AAVE Token sypply -> Done for Testnet Optimism
    //address lendingPool = "0x794a61358D6845594F94dc1DB02A252b5b4814aD";
    function supply(address _lendingPool, address  _tokenAddress,  uint256 _amount, uint256 _communityId, address _user) private {
        IPool(_lendingPool).supply(_tokenAddress, _amount, _user, 0);

        aaveTokenSuppliedByCommunity[_communityId][_tokenAddress] += _amount;
        //event TokenDepositAAVE(uint256 communityId, address tokenDepositAAVE, uint256 amountDeposited, uint256 totalAmountInAAVE);
        emit TokenDepositAAVE(_communityId,_tokenAddress,_amount,aaveTokenSuppliedByCommunity[_communityId][_tokenAddress]);
    }

}
