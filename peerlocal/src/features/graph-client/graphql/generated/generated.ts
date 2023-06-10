import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Community = {
  __typename?: 'Community';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['String'];
  ipfsMetadata: Scalars['String'];
  members: Array<Member>;
  offers: Array<Offer>;
  owner: Scalars['Bytes'];
  stakingRequirement: Scalars['BigInt'];
  stakingToken: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};


export type CommunityMembersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Member_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Member_Filter>;
};


export type CommunityOffersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Offer_Filter>;
};

export type CommunityCreated = {
  __typename?: 'CommunityCreated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ipfsMetadata: Scalars['String'];
  owner: Scalars['Bytes'];
  stakingRequirement: Scalars['BigInt'];
  stakingToken: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type CommunityCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CommunityCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ipfsMetadata?: InputMaybe<Scalars['String']>;
  ipfsMetadata_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadata_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadata_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadata_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<CommunityCreated_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingRequirement?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingToken?: InputMaybe<Scalars['Bytes']>;
  stakingToken_contains?: InputMaybe<Scalars['Bytes']>;
  stakingToken_gt?: InputMaybe<Scalars['Bytes']>;
  stakingToken_gte?: InputMaybe<Scalars['Bytes']>;
  stakingToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingToken_lt?: InputMaybe<Scalars['Bytes']>;
  stakingToken_lte?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CommunityCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  IpfsMetadata = 'ipfsMetadata',
  Owner = 'owner',
  StakingRequirement = 'stakingRequirement',
  StakingToken = 'stakingToken',
  TransactionHash = 'transactionHash'
}

export type Community_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Community_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata?: InputMaybe<Scalars['String']>;
  ipfsMetadata_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadata_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_gt?: InputMaybe<Scalars['String']>;
  ipfsMetadata_gte?: InputMaybe<Scalars['String']>;
  ipfsMetadata_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadata_lt?: InputMaybe<Scalars['String']>;
  ipfsMetadata_lte?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_contains?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsMetadata_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsMetadata_starts_with?: InputMaybe<Scalars['String']>;
  ipfsMetadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  members_?: InputMaybe<Member_Filter>;
  offers_?: InputMaybe<Offer_Filter>;
  or?: InputMaybe<Array<InputMaybe<Community_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingRequirement?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingToken?: InputMaybe<Scalars['Bytes']>;
  stakingToken_contains?: InputMaybe<Scalars['Bytes']>;
  stakingToken_gt?: InputMaybe<Scalars['Bytes']>;
  stakingToken_gte?: InputMaybe<Scalars['Bytes']>;
  stakingToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  stakingToken_lt?: InputMaybe<Scalars['Bytes']>;
  stakingToken_lte?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  stakingToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Community_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  IpfsMetadata = 'ipfsMetadata',
  Members = 'members',
  Offers = 'offers',
  Owner = 'owner',
  StakingRequirement = 'stakingRequirement',
  StakingToken = 'stakingToken',
  TransactionHash = 'transactionHash'
}

export type Member = {
  __typename?: 'Member';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  community: Community;
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MemberJoinedCommunity = {
  __typename?: 'MemberJoinedCommunity';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  member: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type MemberJoinedCommunity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MemberJoinedCommunity_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member?: InputMaybe<Scalars['Bytes']>;
  member_contains?: InputMaybe<Scalars['Bytes']>;
  member_gt?: InputMaybe<Scalars['Bytes']>;
  member_gte?: InputMaybe<Scalars['Bytes']>;
  member_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member_lt?: InputMaybe<Scalars['Bytes']>;
  member_lte?: InputMaybe<Scalars['Bytes']>;
  member_not?: InputMaybe<Scalars['Bytes']>;
  member_not_contains?: InputMaybe<Scalars['Bytes']>;
  member_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<MemberJoinedCommunity_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MemberJoinedCommunity_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  Member = 'member',
  TransactionHash = 'transactionHash'
}

export type Member_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Member_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  community?: InputMaybe<Scalars['String']>;
  community_?: InputMaybe<Community_Filter>;
  community_contains?: InputMaybe<Scalars['String']>;
  community_contains_nocase?: InputMaybe<Scalars['String']>;
  community_ends_with?: InputMaybe<Scalars['String']>;
  community_ends_with_nocase?: InputMaybe<Scalars['String']>;
  community_gt?: InputMaybe<Scalars['String']>;
  community_gte?: InputMaybe<Scalars['String']>;
  community_in?: InputMaybe<Array<Scalars['String']>>;
  community_lt?: InputMaybe<Scalars['String']>;
  community_lte?: InputMaybe<Scalars['String']>;
  community_not?: InputMaybe<Scalars['String']>;
  community_not_contains?: InputMaybe<Scalars['String']>;
  community_not_contains_nocase?: InputMaybe<Scalars['String']>;
  community_not_ends_with?: InputMaybe<Scalars['String']>;
  community_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  community_not_in?: InputMaybe<Array<Scalars['String']>>;
  community_not_starts_with?: InputMaybe<Scalars['String']>;
  community_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  community_starts_with?: InputMaybe<Scalars['String']>;
  community_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<Member_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Member_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Community = 'community',
  CommunityBlockNumber = 'community__blockNumber',
  CommunityBlockTimestamp = 'community__blockTimestamp',
  CommunityCommunityId = 'community__communityId',
  CommunityId = 'community__id',
  CommunityIpfsMetadata = 'community__ipfsMetadata',
  CommunityOwner = 'community__owner',
  CommunityStakingRequirement = 'community__stakingRequirement',
  CommunityStakingToken = 'community__stakingToken',
  CommunityTransactionHash = 'community__transactionHash',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Offer = {
  __typename?: 'Offer';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  community: Community;
  communityId: Scalars['BigInt'];
  id: Scalars['String'];
  metadata: Scalars['String'];
  offerId: Scalars['BigInt'];
  offerStatus: Scalars['Int'];
  owner: Scalars['Bytes'];
  reputationRequirement: Scalars['BigInt'];
  stakingRequirement: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OfferAccepted = {
  __typename?: 'OfferAccepted';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  member: Scalars['Bytes'];
  offerId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OfferAccepted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OfferAccepted_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member?: InputMaybe<Scalars['Bytes']>;
  member_contains?: InputMaybe<Scalars['Bytes']>;
  member_gt?: InputMaybe<Scalars['Bytes']>;
  member_gte?: InputMaybe<Scalars['Bytes']>;
  member_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member_lt?: InputMaybe<Scalars['Bytes']>;
  member_lte?: InputMaybe<Scalars['Bytes']>;
  member_not?: InputMaybe<Scalars['Bytes']>;
  member_not_contains?: InputMaybe<Scalars['Bytes']>;
  member_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  offerId?: InputMaybe<Scalars['BigInt']>;
  offerId_gt?: InputMaybe<Scalars['BigInt']>;
  offerId_gte?: InputMaybe<Scalars['BigInt']>;
  offerId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerId_lt?: InputMaybe<Scalars['BigInt']>;
  offerId_lte?: InputMaybe<Scalars['BigInt']>;
  offerId_not?: InputMaybe<Scalars['BigInt']>;
  offerId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<OfferAccepted_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OfferAccepted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  Member = 'member',
  OfferId = 'offerId',
  TransactionHash = 'transactionHash'
}

export type OfferClosed = {
  __typename?: 'OfferClosed';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  member: Scalars['Bytes'];
  offerId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OfferClosed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OfferClosed_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member?: InputMaybe<Scalars['Bytes']>;
  member_contains?: InputMaybe<Scalars['Bytes']>;
  member_gt?: InputMaybe<Scalars['Bytes']>;
  member_gte?: InputMaybe<Scalars['Bytes']>;
  member_in?: InputMaybe<Array<Scalars['Bytes']>>;
  member_lt?: InputMaybe<Scalars['Bytes']>;
  member_lte?: InputMaybe<Scalars['Bytes']>;
  member_not?: InputMaybe<Scalars['Bytes']>;
  member_not_contains?: InputMaybe<Scalars['Bytes']>;
  member_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  offerId?: InputMaybe<Scalars['BigInt']>;
  offerId_gt?: InputMaybe<Scalars['BigInt']>;
  offerId_gte?: InputMaybe<Scalars['BigInt']>;
  offerId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerId_lt?: InputMaybe<Scalars['BigInt']>;
  offerId_lte?: InputMaybe<Scalars['BigInt']>;
  offerId_not?: InputMaybe<Scalars['BigInt']>;
  offerId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<OfferClosed_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OfferClosed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  Member = 'member',
  OfferId = 'offerId',
  TransactionHash = 'transactionHash'
}

export type OfferCreated = {
  __typename?: 'OfferCreated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newOffer_communityId: Scalars['BigInt'];
  newOffer_metadata: Scalars['String'];
  newOffer_offerStatus: Scalars['Int'];
  newOffer_owner: Scalars['Bytes'];
  newOffer_reputationRequirement: Scalars['BigInt'];
  newOffer_stakingRequirement: Scalars['BigInt'];
  offerId: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type OfferCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OfferCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOffer_communityId?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_gt?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_gte?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newOffer_communityId_lt?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_lte?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_not?: InputMaybe<Scalars['BigInt']>;
  newOffer_communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newOffer_metadata?: InputMaybe<Scalars['String']>;
  newOffer_metadata_contains?: InputMaybe<Scalars['String']>;
  newOffer_metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  newOffer_metadata_ends_with?: InputMaybe<Scalars['String']>;
  newOffer_metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOffer_metadata_gt?: InputMaybe<Scalars['String']>;
  newOffer_metadata_gte?: InputMaybe<Scalars['String']>;
  newOffer_metadata_in?: InputMaybe<Array<Scalars['String']>>;
  newOffer_metadata_lt?: InputMaybe<Scalars['String']>;
  newOffer_metadata_lte?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_contains?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOffer_metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  newOffer_metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOffer_metadata_starts_with?: InputMaybe<Scalars['String']>;
  newOffer_metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOffer_offerStatus?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_gt?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_gte?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  newOffer_offerStatus_lt?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_lte?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_not?: InputMaybe<Scalars['Int']>;
  newOffer_offerStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  newOffer_owner?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_contains?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_gt?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_gte?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOffer_owner_lt?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_lte?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_not?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOffer_owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOffer_reputationRequirement?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newOffer_reputationRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_not?: InputMaybe<Scalars['BigInt']>;
  newOffer_reputationRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newOffer_stakingRequirement?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  newOffer_stakingRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_not?: InputMaybe<Scalars['BigInt']>;
  newOffer_stakingRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerId?: InputMaybe<Scalars['BigInt']>;
  offerId_gt?: InputMaybe<Scalars['BigInt']>;
  offerId_gte?: InputMaybe<Scalars['BigInt']>;
  offerId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerId_lt?: InputMaybe<Scalars['BigInt']>;
  offerId_lte?: InputMaybe<Scalars['BigInt']>;
  offerId_not?: InputMaybe<Scalars['BigInt']>;
  offerId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<OfferCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OfferCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  NewOfferCommunityId = 'newOffer_communityId',
  NewOfferMetadata = 'newOffer_metadata',
  NewOfferOfferStatus = 'newOffer_offerStatus',
  NewOfferOwner = 'newOffer_owner',
  NewOfferReputationRequirement = 'newOffer_reputationRequirement',
  NewOfferStakingRequirement = 'newOffer_stakingRequirement',
  OfferId = 'offerId',
  TransactionHash = 'transactionHash'
}

export type Offer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  community?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['BigInt']>;
  communityId_gt?: InputMaybe<Scalars['BigInt']>;
  communityId_gte?: InputMaybe<Scalars['BigInt']>;
  communityId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  communityId_lt?: InputMaybe<Scalars['BigInt']>;
  communityId_lte?: InputMaybe<Scalars['BigInt']>;
  communityId_not?: InputMaybe<Scalars['BigInt']>;
  communityId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  community_?: InputMaybe<Community_Filter>;
  community_contains?: InputMaybe<Scalars['String']>;
  community_contains_nocase?: InputMaybe<Scalars['String']>;
  community_ends_with?: InputMaybe<Scalars['String']>;
  community_ends_with_nocase?: InputMaybe<Scalars['String']>;
  community_gt?: InputMaybe<Scalars['String']>;
  community_gte?: InputMaybe<Scalars['String']>;
  community_in?: InputMaybe<Array<Scalars['String']>>;
  community_lt?: InputMaybe<Scalars['String']>;
  community_lte?: InputMaybe<Scalars['String']>;
  community_not?: InputMaybe<Scalars['String']>;
  community_not_contains?: InputMaybe<Scalars['String']>;
  community_not_contains_nocase?: InputMaybe<Scalars['String']>;
  community_not_ends_with?: InputMaybe<Scalars['String']>;
  community_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  community_not_in?: InputMaybe<Array<Scalars['String']>>;
  community_not_starts_with?: InputMaybe<Scalars['String']>;
  community_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  community_starts_with?: InputMaybe<Scalars['String']>;
  community_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_ends_with?: InputMaybe<Scalars['String']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_not?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadata_starts_with?: InputMaybe<Scalars['String']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offerId?: InputMaybe<Scalars['BigInt']>;
  offerId_gt?: InputMaybe<Scalars['BigInt']>;
  offerId_gte?: InputMaybe<Scalars['BigInt']>;
  offerId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerId_lt?: InputMaybe<Scalars['BigInt']>;
  offerId_lte?: InputMaybe<Scalars['BigInt']>;
  offerId_not?: InputMaybe<Scalars['BigInt']>;
  offerId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  offerStatus?: InputMaybe<Scalars['Int']>;
  offerStatus_gt?: InputMaybe<Scalars['Int']>;
  offerStatus_gte?: InputMaybe<Scalars['Int']>;
  offerStatus_in?: InputMaybe<Array<Scalars['Int']>>;
  offerStatus_lt?: InputMaybe<Scalars['Int']>;
  offerStatus_lte?: InputMaybe<Scalars['Int']>;
  offerStatus_not?: InputMaybe<Scalars['Int']>;
  offerStatus_not_in?: InputMaybe<Array<Scalars['Int']>>;
  or?: InputMaybe<Array<InputMaybe<Offer_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reputationRequirement?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_not?: InputMaybe<Scalars['BigInt']>;
  reputationRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirement?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_gte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirement_lt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_lte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not?: InputMaybe<Scalars['BigInt']>;
  stakingRequirement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Offer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Community = 'community',
  CommunityId = 'communityId',
  CommunityBlockNumber = 'community__blockNumber',
  CommunityBlockTimestamp = 'community__blockTimestamp',
  CommunityCommunityId = 'community__communityId',
  CommunityId = 'community__id',
  CommunityIpfsMetadata = 'community__ipfsMetadata',
  CommunityOwner = 'community__owner',
  CommunityStakingRequirement = 'community__stakingRequirement',
  CommunityStakingToken = 'community__stakingToken',
  CommunityTransactionHash = 'community__transactionHash',
  Id = 'id',
  Metadata = 'metadata',
  OfferId = 'offerId',
  OfferStatus = 'offerStatus',
  Owner = 'owner',
  ReputationRequirement = 'reputationRequirement',
  StakingRequirement = 'stakingRequirement',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  newOwner: Scalars['Bytes'];
  previousOwner: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner?: InputMaybe<Scalars['Bytes']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type PeerLocalInitalized = {
  __typename?: 'PeerLocalInitalized';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  erc20: Scalars['Bytes'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type PeerLocalInitalized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PeerLocalInitalized_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  erc20?: InputMaybe<Scalars['Bytes']>;
  erc20_contains?: InputMaybe<Scalars['Bytes']>;
  erc20_gt?: InputMaybe<Scalars['Bytes']>;
  erc20_gte?: InputMaybe<Scalars['Bytes']>;
  erc20_in?: InputMaybe<Array<Scalars['Bytes']>>;
  erc20_lt?: InputMaybe<Scalars['Bytes']>;
  erc20_lte?: InputMaybe<Scalars['Bytes']>;
  erc20_not?: InputMaybe<Scalars['Bytes']>;
  erc20_not_contains?: InputMaybe<Scalars['Bytes']>;
  erc20_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<PeerLocalInitalized_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum PeerLocalInitalized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Erc20 = 'erc20',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  collateralTokenReturned?: Maybe<CollateralTokenReturned>;
  collateralTokenReturneds: Array<CollateralTokenReturned>;
  collateralTokenStaked?: Maybe<CollateralTokenStaked>;
  collateralTokenStakeds: Array<CollateralTokenStaked>;
  communities: Array<Community>;
  community?: Maybe<Community>;
  communityCreated?: Maybe<CommunityCreated>;
  communityCreateds: Array<CommunityCreated>;
  member?: Maybe<Member>;
  memberJoinedCommunities: Array<MemberJoinedCommunity>;
  memberJoinedCommunity?: Maybe<MemberJoinedCommunity>;
  members: Array<Member>;
  offer?: Maybe<Offer>;
  offerAccepted?: Maybe<OfferAccepted>;
  offerAccepteds: Array<OfferAccepted>;
  offerClosed?: Maybe<OfferClosed>;
  offerCloseds: Array<OfferClosed>;
  offerCreated?: Maybe<OfferCreated>;
  offerCreateds: Array<OfferCreated>;
  offers: Array<Offer>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  peerLocalInitalized?: Maybe<PeerLocalInitalized>;
  peerLocalInitalizeds: Array<PeerLocalInitalized>;
  reputationTokenBurn?: Maybe<ReputationTokenBurn>;
  reputationTokenBurns: Array<ReputationTokenBurn>;
  reputationTokenMint?: Maybe<ReputationTokenMint>;
  reputationTokenMints: Array<ReputationTokenMint>;
  reputationTokenReturned?: Maybe<ReputationTokenReturned>;
  reputationTokenReturneds: Array<ReputationTokenReturned>;
  reputationTokenStaked?: Maybe<ReputationTokenStaked>;
  reputationTokenStakeds: Array<ReputationTokenStaked>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryCollateralTokenReturnedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollateralTokenReturnedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralTokenReturned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralTokenReturned_Filter>;
};


export type QueryCollateralTokenStakedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollateralTokenStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralTokenStaked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralTokenStaked_Filter>;
};


export type QueryCommunitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Community_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Community_Filter>;
};


export type QueryCommunityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCommunityCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCommunityCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommunityCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CommunityCreated_Filter>;
};


export type QueryMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMemberJoinedCommunitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberJoinedCommunity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MemberJoinedCommunity_Filter>;
};


export type QueryMemberJoinedCommunityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Member_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Member_Filter>;
};


export type QueryOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOfferAcceptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOfferAcceptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferAccepted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferAccepted_Filter>;
};


export type QueryOfferClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOfferClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferClosed_Filter>;
};


export type QueryOfferCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOfferCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferCreated_Filter>;
};


export type QueryOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryPeerLocalInitalizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPeerLocalInitalizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PeerLocalInitalized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PeerLocalInitalized_Filter>;
};


export type QueryReputationTokenBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationTokenBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenBurn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenBurn_Filter>;
};


export type QueryReputationTokenMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationTokenMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenMint_Filter>;
};


export type QueryReputationTokenReturnedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationTokenReturnedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenReturned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenReturned_Filter>;
};


export type QueryReputationTokenStakedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReputationTokenStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenStaked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenStaked_Filter>;
};

export type ReputationTokenBurn = {
  __typename?: 'ReputationTokenBurn';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  burnAmount: Scalars['BigInt'];
  id: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
};

export type ReputationTokenBurn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReputationTokenBurn_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  burnAmount?: InputMaybe<Scalars['BigInt']>;
  burnAmount_gt?: InputMaybe<Scalars['BigInt']>;
  burnAmount_gte?: InputMaybe<Scalars['BigInt']>;
  burnAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  burnAmount_lt?: InputMaybe<Scalars['BigInt']>;
  burnAmount_lte?: InputMaybe<Scalars['BigInt']>;
  burnAmount_not?: InputMaybe<Scalars['BigInt']>;
  burnAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ReputationTokenBurn_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationTokenBurn_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  BurnAmount = 'burnAmount',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type ReputationTokenMint = {
  __typename?: 'ReputationTokenMint';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  mintAmount: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ReputationTokenMint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReputationTokenMint_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  mintAmount?: InputMaybe<Scalars['BigInt']>;
  mintAmount_gt?: InputMaybe<Scalars['BigInt']>;
  mintAmount_gte?: InputMaybe<Scalars['BigInt']>;
  mintAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintAmount_lt?: InputMaybe<Scalars['BigInt']>;
  mintAmount_lte?: InputMaybe<Scalars['BigInt']>;
  mintAmount_not?: InputMaybe<Scalars['BigInt']>;
  mintAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ReputationTokenMint_Filter>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationTokenMint_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MintAmount = 'mintAmount',
  TransactionHash = 'transactionHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  collateralTokenReturned?: Maybe<CollateralTokenReturned>;
  collateralTokenReturneds: Array<CollateralTokenReturned>;
  collateralTokenStaked?: Maybe<CollateralTokenStaked>;
  collateralTokenStakeds: Array<CollateralTokenStaked>;
  communities: Array<Community>;
  community?: Maybe<Community>;
  communityCreated?: Maybe<CommunityCreated>;
  communityCreateds: Array<CommunityCreated>;
  member?: Maybe<Member>;
  memberJoinedCommunities: Array<MemberJoinedCommunity>;
  memberJoinedCommunity?: Maybe<MemberJoinedCommunity>;
  members: Array<Member>;
  offer?: Maybe<Offer>;
  offerAccepted?: Maybe<OfferAccepted>;
  offerAccepteds: Array<OfferAccepted>;
  offerClosed?: Maybe<OfferClosed>;
  offerCloseds: Array<OfferClosed>;
  offerCreated?: Maybe<OfferCreated>;
  offerCreateds: Array<OfferCreated>;
  offers: Array<Offer>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  peerLocalInitalized?: Maybe<PeerLocalInitalized>;
  peerLocalInitalizeds: Array<PeerLocalInitalized>;
  reputationTokenBurn?: Maybe<ReputationTokenBurn>;
  reputationTokenBurns: Array<ReputationTokenBurn>;
  reputationTokenMint?: Maybe<ReputationTokenMint>;
  reputationTokenMints: Array<ReputationTokenMint>;
  reputationTokenReturned?: Maybe<ReputationTokenReturned>;
  reputationTokenReturneds: Array<ReputationTokenReturned>;
  reputationTokenStaked?: Maybe<ReputationTokenStaked>;
  reputationTokenStakeds: Array<ReputationTokenStaked>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionCollateralTokenReturnedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollateralTokenReturnedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralTokenReturned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralTokenReturned_Filter>;
};


export type SubscriptionCollateralTokenStakedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollateralTokenStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralTokenStaked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralTokenStaked_Filter>;
};


export type SubscriptionCommunitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Community_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Community_Filter>;
};


export type SubscriptionCommunityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCommunityCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCommunityCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CommunityCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CommunityCreated_Filter>;
};


export type SubscriptionMemberArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMemberJoinedCommunitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberJoinedCommunity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MemberJoinedCommunity_Filter>;
};


export type SubscriptionMemberJoinedCommunityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMembersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Member_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Member_Filter>;
};


export type SubscriptionOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOfferAcceptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOfferAcceptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferAccepted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferAccepted_Filter>;
};


export type SubscriptionOfferClosedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOfferClosedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferClosed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferClosed_Filter>;
};


export type SubscriptionOfferCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOfferCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OfferCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OfferCreated_Filter>;
};


export type SubscriptionOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Offer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Offer_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionPeerLocalInitalizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPeerLocalInitalizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PeerLocalInitalized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PeerLocalInitalized_Filter>;
};


export type SubscriptionReputationTokenBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationTokenBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenBurn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenBurn_Filter>;
};


export type SubscriptionReputationTokenMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationTokenMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenMint_Filter>;
};


export type SubscriptionReputationTokenReturnedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationTokenReturnedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenReturned_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenReturned_Filter>;
};


export type SubscriptionReputationTokenStakedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReputationTokenStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReputationTokenStaked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReputationTokenStaked_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type CollateralTokenReturned = {
  __typename?: 'collateralTokenReturned';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  stakingRequirementReturned: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type CollateralTokenReturned_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralTokenReturned_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CollateralTokenReturned_Filter>>>;
  stakingRequirementReturned?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_gt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_gte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirementReturned_lt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_lte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_not?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementReturned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CollateralTokenReturned_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  StakingRequirementReturned = 'stakingRequirementReturned',
  TransactionHash = 'transactionHash'
}

export type CollateralTokenStaked = {
  __typename?: 'collateralTokenStaked';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  stakingRequirementStaked: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type CollateralTokenStaked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralTokenStaked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<CollateralTokenStaked_Filter>>>;
  stakingRequirementStaked?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_gt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_gte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakingRequirementStaked_lt?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_lte?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_not?: InputMaybe<Scalars['BigInt']>;
  stakingRequirementStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum CollateralTokenStaked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  StakingRequirementStaked = 'stakingRequirementStaked',
  TransactionHash = 'transactionHash'
}

export type ReputationTokenReturned = {
  __typename?: 'reputationTokenReturned';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  reputationRequirementReturned: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ReputationTokenReturned_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReputationTokenReturned_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ReputationTokenReturned_Filter>>>;
  reputationRequirementReturned?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_gt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_gte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationRequirementReturned_lt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_lte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_not?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementReturned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationTokenReturned_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReputationRequirementReturned = 'reputationRequirementReturned',
  TransactionHash = 'transactionHash'
}

export type ReputationTokenStaked = {
  __typename?: 'reputationTokenStaked';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['Bytes'];
  reputationRequirementStaked: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type ReputationTokenStaked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReputationTokenStaked_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['Bytes']>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  or?: InputMaybe<Array<InputMaybe<ReputationTokenStaked_Filter>>>;
  reputationRequirementStaked?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_gt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_gte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reputationRequirementStaked_lt?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_lte?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_not?: InputMaybe<Scalars['BigInt']>;
  reputationRequirementStaked_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ReputationTokenStaked_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReputationRequirementStaked = 'reputationRequirementStaked',
  TransactionHash = 'transactionHash'
}

export type SubgraphMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', timestamp?: number | null, number: number } } | null };

export type CommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunitiesQuery = { __typename?: 'Query', communities: Array<{ __typename?: 'Community', id: string, owner: any, ipfsMetadata: string, transactionHash: any, communityId: any, stakingRequirement: any, blockTimestamp: any }> };

export type CommunityQueryVariables = Exact<{
  communityId: Scalars['ID'];
}>;


export type CommunityQuery = { __typename?: 'Query', community?: { __typename?: 'Community', id: string, ipfsMetadata: string, owner: any, stakingRequirement: any, communityId: any, blockTimestamp: any, blockNumber: any, transactionHash: any, members: Array<{ __typename?: 'Member', transactionHash: any, blockNumber: any, id: any }>, offers: Array<{ __typename?: 'Offer', id: string, blockNumber: any, metadata: string, stakingRequirement: any, offerStatus: number, reputationRequirement: any, blockTimestamp: any }> } | null };


export const SubgraphMetadataDocument = gql`
    query SubgraphMetadata {
  _meta {
    block {
      timestamp
      number
    }
  }
}
    `;
export const CommunitiesDocument = gql`
    query Communities {
  communities {
    id
    owner
    ipfsMetadata
    transactionHash
    communityId
    stakingRequirement
    blockTimestamp
    ipfsMetadata
  }
}
    `;
export const CommunityDocument = gql`
    query Community($communityId: ID!) {
  community(id: $communityId) {
    id
    ipfsMetadata
    owner
    stakingRequirement
    communityId
    members {
      transactionHash
      blockNumber
      id
    }
    offers {
      id
      blockNumber
      metadata
      stakingRequirement
      offerStatus
      reputationRequirement
      blockNumber
      blockTimestamp
    }
    blockTimestamp
    blockNumber
    transactionHash
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SubgraphMetadata(variables?: SubgraphMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubgraphMetadataQuery>(SubgraphMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubgraphMetadata', 'query');
    },
    Communities(variables?: CommunitiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CommunitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommunitiesQuery>(CommunitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Communities', 'query');
    },
    Community(variables: CommunityQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CommunityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommunityQuery>(CommunityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Community', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;