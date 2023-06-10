import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
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
  reputationTokenStaked
} from "../generated/PeerLocal/PeerLocal"

export function createCommunityCreatedEvent(
  communityId: BigInt,
  ipfsMetadata: string,
  owner: Address,
  stakingToken: Address
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
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  communityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingToken",
      ethereum.Value.fromAddress(stakingToken)
    )
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

export function createOfferClosedEvent(
  communityId: BigInt,
  offerId: BigInt,
  member: Address
): OfferClosed {
  let offerClosedEvent = changetype<OfferClosed>(newMockEvent())

  offerClosedEvent.parameters = new Array()

  offerClosedEvent.parameters.push(
    new ethereum.EventParam(
      "communityId",
      ethereum.Value.fromUnsignedBigInt(communityId)
    )
  )
  offerClosedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  offerClosedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return offerClosedEvent
}

export function createOfferCreatedEvent(
  communityId: BigInt,
  offerId: BigInt,
  newOffer: ethereum.Tuple
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
    new ethereum.EventParam("newOffer", ethereum.Value.fromTuple(newOffer))
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

export function createPeerLocalInitalizedEvent(
  erc20: Address
): PeerLocalInitalized {
  let peerLocalInitalizedEvent = changetype<PeerLocalInitalized>(newMockEvent())

  peerLocalInitalizedEvent.parameters = new Array()

  peerLocalInitalizedEvent.parameters.push(
    new ethereum.EventParam("erc20", ethereum.Value.fromAddress(erc20))
  )

  return peerLocalInitalizedEvent
}

export function createReputationTokenBurnEvent(
  burnAmount: BigInt
): ReputationTokenBurn {
  let reputationTokenBurnEvent = changetype<ReputationTokenBurn>(newMockEvent())

  reputationTokenBurnEvent.parameters = new Array()

  reputationTokenBurnEvent.parameters.push(
    new ethereum.EventParam(
      "burnAmount",
      ethereum.Value.fromUnsignedBigInt(burnAmount)
    )
  )

  return reputationTokenBurnEvent
}

export function createReputationTokenMintEvent(
  mintAmount: BigInt
): ReputationTokenMint {
  let reputationTokenMintEvent = changetype<ReputationTokenMint>(newMockEvent())

  reputationTokenMintEvent.parameters = new Array()

  reputationTokenMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )

  return reputationTokenMintEvent
}

export function createcollateralTokenReturnedEvent(
  stakingRequirementReturned: BigInt
): collateralTokenReturned {
  let collateralTokenReturnedEvent = changetype<collateralTokenReturned>(
    newMockEvent()
  )

  collateralTokenReturnedEvent.parameters = new Array()

  collateralTokenReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingRequirementReturned",
      ethereum.Value.fromUnsignedBigInt(stakingRequirementReturned)
    )
  )

  return collateralTokenReturnedEvent
}

export function createcollateralTokenStakedEvent(
  stakingRequirementStaked: BigInt
): collateralTokenStaked {
  let collateralTokenStakedEvent = changetype<collateralTokenStaked>(
    newMockEvent()
  )

  collateralTokenStakedEvent.parameters = new Array()

  collateralTokenStakedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingRequirementStaked",
      ethereum.Value.fromUnsignedBigInt(stakingRequirementStaked)
    )
  )

  return collateralTokenStakedEvent
}

export function createreputationTokenReturnedEvent(
  reputationRequirementReturned: BigInt
): reputationTokenReturned {
  let reputationTokenReturnedEvent = changetype<reputationTokenReturned>(
    newMockEvent()
  )

  reputationTokenReturnedEvent.parameters = new Array()

  reputationTokenReturnedEvent.parameters.push(
    new ethereum.EventParam(
      "reputationRequirementReturned",
      ethereum.Value.fromUnsignedBigInt(reputationRequirementReturned)
    )
  )

  return reputationTokenReturnedEvent
}

export function createreputationTokenStakedEvent(
  reputationRequirementStaked: BigInt
): reputationTokenStaked {
  let reputationTokenStakedEvent = changetype<reputationTokenStaked>(
    newMockEvent()
  )

  reputationTokenStakedEvent.parameters = new Array()

  reputationTokenStakedEvent.parameters.push(
    new ethereum.EventParam(
      "reputationRequirementStaked",
      ethereum.Value.fromUnsignedBigInt(reputationRequirementStaked)
    )
  )

  return reputationTokenStakedEvent
}
