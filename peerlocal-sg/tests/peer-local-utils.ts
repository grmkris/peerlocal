import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CommunityCreated,
  MemberJoinedCommunity,
  OfferAccepted,
  OfferCreated,
  OwnershipTransferred
} from "../generated/PeerLocal/PeerLocal"

export function createCommunityCreatedEvent(
  communityId: BigInt,
  ipfsMetadata: string,
  stakingRequirement: BigInt,
  owner: Address
): CommunityCreated {
  let communityCreatedEvent = changetype<CommunityCreated>(newMockEvent())

  communityCreatedEvent.parameters = new Array()

  communityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "communityId",
      ethereum.Value.fromUnsignedBigInt(communityId)
    )
  )
  communityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ipfsMetadata",
      ethereum.Value.fromString(ipfsMetadata)
    )
  )
  communityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingRequirement",
      ethereum.Value.fromUnsignedBigInt(stakingRequirement)
    )
  )
  communityCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return communityCreatedEvent
}

export function createMemberJoinedCommunityEvent(
  communityId: BigInt,
  member: Address
): MemberJoinedCommunity {
  let memberJoinedCommunityEvent = changetype<MemberJoinedCommunity>(
    newMockEvent()
  )

  memberJoinedCommunityEvent.parameters = new Array()

  memberJoinedCommunityEvent.parameters.push(
    new ethereum.EventParam(
      "communityId",
      ethereum.Value.fromUnsignedBigInt(communityId)
    )
  )
  memberJoinedCommunityEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return memberJoinedCommunityEvent
}

export function createOfferAcceptedEvent(
  communityId: BigInt,
  offerId: BigInt,
  member: Address
): OfferAccepted {
  let offerAcceptedEvent = changetype<OfferAccepted>(newMockEvent())

  offerAcceptedEvent.parameters = new Array()

  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "communityId",
      ethereum.Value.fromUnsignedBigInt(communityId)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return offerAcceptedEvent
}

export function createOfferCreatedEvent(
  communityId: BigInt,
  offerId: BigInt,
  owner: Address,
  metadata: string,
  reputationRequirement: BigInt,
  stakingRequirement: BigInt
): OfferCreated {
  let offerCreatedEvent = changetype<OfferCreated>(newMockEvent())

  offerCreatedEvent.parameters = new Array()

  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "communityId",
      ethereum.Value.fromUnsignedBigInt(communityId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reputationRequirement",
      ethereum.Value.fromUnsignedBigInt(reputationRequirement)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingRequirement",
      ethereum.Value.fromUnsignedBigInt(stakingRequirement)
    )
  )

  return offerCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
