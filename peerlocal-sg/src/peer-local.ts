import {
  CommunityCreated as CommunityCreatedEvent,
  MemberJoinedCommunity as MemberJoinedCommunityEvent,
  OfferAccepted as OfferAcceptedEvent,
  OfferCreated as OfferCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/PeerLocal/PeerLocal"
import {
  CommunityCreated,
  MemberJoinedCommunity,
  OfferAccepted,
  OfferCreated,
  OwnershipTransferred
} from "../generated/schema"

export function handleCommunityCreated(event: CommunityCreatedEvent): void {
  let entity = new CommunityCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.communityId = event.params.communityId
  entity.ipfsMetadata = event.params.ipfsMetadata
  entity.stakingRequirement = event.params.stakingRequirement
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberJoinedCommunity(
  event: MemberJoinedCommunityEvent
): void {
  let entity = new MemberJoinedCommunity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.communityId = event.params.communityId
  entity.member = event.params.member

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferAccepted(event: OfferAcceptedEvent): void {
  let entity = new OfferAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.communityId = event.params.communityId
  entity.offerId = event.params.offerId
  entity.member = event.params.member

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = new OfferCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.communityId = event.params.communityId
  entity.offerId = event.params.offerId
  entity.owner = event.params.owner
  entity.metadata = event.params.metadata
  entity.reputationRequirement = event.params.reputationRequirement
  entity.stakingRequirement = event.params.stakingRequirement

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
