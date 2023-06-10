import {
  CommunityCreated as CommunityCreatedEvent,
  MemberJoinedCommunity as MemberJoinedCommunityEvent,
  OfferAccepted as OfferAcceptedEvent,
  OfferClosed as OfferClosedEvent,
  OfferCreated as OfferCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PeerLocalInitalized as PeerLocalInitalizedEvent,
  ReputationTokenBurn as ReputationTokenBurnEvent,
  ReputationTokenMint as ReputationTokenMintEvent,
  collateralTokenReturned as collateralTokenReturnedEvent,
  collateralTokenStaked as collateralTokenStakedEvent,
  reputationTokenReturned as reputationTokenReturnedEvent,
  reputationTokenStaked as reputationTokenStakedEvent,
} from "../generated/PeerLocal/PeerLocal";
import {
  CommunityCreated,
  MemberJoinedCommunity,
  OfferAccepted,
  OfferClosed,
  OfferCreated,
  OwnershipTransferred,
  PeerLocalInitalized,
  ReputationTokenBurn,
  ReputationTokenMint,
  collateralTokenReturned,
  collateralTokenStaked,
  reputationTokenReturned,
  reputationTokenStaked,
  Community,
  Member,
  Offer,
} from "../generated/schema";

export function handleCommunityCreated(event: CommunityCreatedEvent): void {
  let entity = new CommunityCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.communityId = event.params.communityId;
  entity.ipfsMetadata = event.params.ipfsMetadata;
  entity.owner = event.params.owner;
  entity.stakingToken = event.params.stakingToken;
  entity.stakingRequirement = event.params.stakingRequirement;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let community = new Community(event.params.communityId.toString());
  community.communityId = event.params.communityId;
  community.ipfsMetadata = event.params.ipfsMetadata;
  community.blockNumber = event.block.number;
  community.blockTimestamp = event.block.timestamp;
  community.transactionHash = event.transaction.hash;
  community.owner = event.params.owner;
  community.stakingToken = event.params.stakingToken;
  community.stakingRequirement = event.params.stakingRequirement;

  community.save();
}

export function handleMemberJoinedCommunity(
  event: MemberJoinedCommunityEvent
): void {
  let entity = new MemberJoinedCommunity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.communityId = event.params.communityId;
  entity.member = event.params.member;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let community = Community.load(event.params.communityId.toString());
  if (community == null) {
    return;
  }
  // id is sender address
  let member = new Member(event.transaction.from);
  member.community = community.id;
  member.blockNumber = event.block.number;
  member.blockTimestamp = event.block.timestamp;
  member.transactionHash = event.transaction.hash;
  member.save();
}

export function handleOfferAccepted(event: OfferAcceptedEvent): void {
  let entity = new OfferAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.communityId = event.params.communityId;
  entity.offerId = event.params.offerId;
  entity.member = event.params.member;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOfferClosed(event: OfferClosedEvent): void {
  let entity = new OfferClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.communityId = event.params.communityId;
  entity.offerId = event.params.offerId;
  entity.member = event.params.member;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = new OfferCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.communityId = event.params.communityId;
  entity.offerId = event.params.offerId;
  entity.newOffer_owner = event.params.newOffer.owner;
  entity.newOffer_communityId = event.params.newOffer.communityId;
  entity.newOffer_metadata = event.params.newOffer.metadata;
  entity.newOffer_reputationRequirement =
    event.params.newOffer.reputationRequirement;
  entity.newOffer_stakingRequirement = event.params.newOffer.stakingRequirement;
  entity.newOffer_offerStatus = event.params.newOffer.offerStatus;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let community = Community.load(event.params.communityId.toString());
  if (community == null) {
    return;
  }

  let offer = new Offer(event.params.offerId.toString());
  offer.community = community.id;
  offer.owner = event.params.newOffer.owner;
  offer.communityId = event.params.newOffer.communityId;
  offer.metadata = event.params.newOffer.metadata;
  offer.reputationRequirement = event.params.newOffer.reputationRequirement;
  offer.stakingRequirement = event.params.newOffer.stakingRequirement;
  offer.offerId = event.params.offerId;
  offer.offerStatus = event.params.newOffer.offerStatus;
  offer.transactionHash = event.transaction.hash;
  offer.blockNumber = event.block.number;
  offer.blockTimestamp = event.block.timestamp;
  offer.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePeerLocalInitalized(
  event: PeerLocalInitalizedEvent
): void {
  let entity = new PeerLocalInitalized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.erc20 = event.params.erc20;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleReputationTokenBurn(
  event: ReputationTokenBurnEvent
): void {
  let entity = new ReputationTokenBurn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.burnAmount = event.params.burnAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleReputationTokenMint(
  event: ReputationTokenMintEvent
): void {
  let entity = new ReputationTokenMint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintAmount = event.params.mintAmount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlecollateralTokenReturned(
  event: collateralTokenReturnedEvent
): void {
  let entity = new collateralTokenReturned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.stakingRequirementReturned = event.params.stakingRequirementReturned;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlecollateralTokenStaked(
  event: collateralTokenStakedEvent
): void {
  let entity = new collateralTokenStaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.stakingRequirementStaked = event.params.stakingRequirementStaked;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlereputationTokenReturned(
  event: reputationTokenReturnedEvent
): void {
  let entity = new reputationTokenReturned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.reputationRequirementReturned =
    event.params.reputationRequirementReturned;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlereputationTokenStaked(
  event: reputationTokenStakedEvent
): void {
  let entity = new reputationTokenStaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.reputationRequirementStaked = event.params.reputationRequirementStaked;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
