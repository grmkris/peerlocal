import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CommunityCreated } from "../generated/schema"
import { CommunityCreated as CommunityCreatedEvent } from "../generated/PeerLocal/PeerLocal"
import { handleCommunityCreated } from "../src/peer-local"
import { createCommunityCreatedEvent } from "./peer-local-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let communityId = BigInt.fromI32(234)
    let ipfsMetadata = "Example string value"
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let stakingToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCommunityCreatedEvent = createCommunityCreatedEvent(
      communityId,
      ipfsMetadata,
      owner,
      stakingToken
    )
    handleCommunityCreated(newCommunityCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CommunityCreated created and stored", () => {
    assert.entityCount("CommunityCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CommunityCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "communityId",
      "234"
    )
    assert.fieldEquals(
      "CommunityCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsMetadata",
      "Example string value"
    )
    assert.fieldEquals(
      "CommunityCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CommunityCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "stakingToken",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
