// Import necessary libraries and modules
const { expect } = require("chai");
const { ethers } = require('hardhat');

// Test suite for the PeerLocal contract
describe("PeerLocal", function () {
  let peerLocal:any;
  let owner:any;
  let user:any;
  let token:any;

  // Deploy the contract before each test case
  beforeEach(async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.deployed();

    const PeerLocal = await ethers.getContractFactory("PeerLocal");
    peerLocal = await PeerLocal.deploy(token.address);
    await peerLocal.deployed();

    [owner, user] = await ethers.getSigners();
  });

  // Test case for creating a new community
  it("should create a new community", async function () {
    const ipfsMetadata = "ipfs:123";
    const stakingRequirement = ethers.utils.parseEther("1");

    // Call the createCommunity function
    await peerLocal.createCommunity(ipfsMetadata, stakingRequirement);

    // Get the community details
    const community = await peerLocal.communities(0);

    // Assert the community details
    expect(community.ipfsMetadata).to.equal(ipfsMetadata);
    expect(community.stakingRequirement).to.equal(stakingRequirement);
    expect(community.owner).to.equal(owner.address);
  });

  // Test case for joining a community
  it("should allow a user to join a community", async function () {
    const communityId = 0;

    // Sign the message
    const signature = await owner.signMessage(
      ethers.utils.arrayify(peerLocal.MESSAGE_TO_BE_SIGNED_BY_COMMUNIT_OWNER)
    );

    // Call the joinCommunity function
    await peerLocal.joinCommunity(communityId, signature);

    // Get the community members
    const members = await peerLocal.communityMembers(communityId);

    // Assert the user's address is in the members list
    expect(members).to.include(user.address);
  });

  // Test case for creating an offer
  it("should allow a user to create an offer", async function () {
    const communityId = 0;
    const metadata = "Offer 1";
    const reputationRequirement = 10;
    const stakingRequirement = ethers.utils.parseEther("2");

    // Increase the user's reputation
    await peerLocal.connect(user).joinCommunity(communityId, []);

    // Call the createOffer function
    await peerLocal.connect(user).createOffer(
      communityId,
      metadata,
      reputationRequirement,
      stakingRequirement
    );

    // Get the offers for the community
    const offers = await peerLocal.offers(communityId);

    // Assert the offer details
    expect(offers[0].owner).to.equal(user.address);
    expect(offers[0].metadata).to.equal(metadata);
    expect(offers[0].reputationRequirement).to.equal(reputationRequirement);
    expect(offers[0].stakingRequirement).to.equal(stakingRequirement);
  });

  // Test case for accepting an offer
  it("should allow a user to accept an offer", async function () {
    const communityId = 0;
    const offerId = 0;

    // Increase the user's reputation and balance
    await peerLocal.connect(user).joinCommunity(communityId, []);
    await token.mint(user.address, ethers.utils.parseEther("10"));

    // Call the acceptOffer function
    await peerLocal.connect(user).acceptOffer(communityId, offerId);

    // Get the offer and community details
    const offer = await peerLocal.offers(communityId, offerId);
    const community = await peerLocal.communities(communityId);

    // Assert the offer is accepted and tokens are transferred
    expect(offer.owner).to.equal(user.address);
    expect(await token.balanceOf(offer.owner)).to.equal(offer.stakingRequirement);
    expect(await token.balanceOf(peerLocal.address)).to.equal(0);
    expect(await token.balanceOf(community.owner)).to.equal(offer.stakingRequirement);
  });
});

