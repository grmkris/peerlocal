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

export type CommunityCreated = {
  __typename?: 'CommunityCreated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  ipfsMetadata: Scalars['String'];
  owner: Scalars['Bytes'];
  stakingRequirement: Scalars['BigInt'];
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
  TransactionHash = 'transactionHash'
}

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

export type OfferCreated = {
  __typename?: 'OfferCreated';
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  communityId: Scalars['BigInt'];
  id: Scalars['Bytes'];
  metadata: Scalars['String'];
  offerId: Scalars['BigInt'];
  owner: Scalars['Bytes'];
  reputationRequirement: Scalars['BigInt'];
  stakingRequirement: Scalars['BigInt'];
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
  or?: InputMaybe<Array<InputMaybe<OfferCreated_Filter>>>;
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

export enum OfferCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  CommunityId = 'communityId',
  Id = 'id',
  Metadata = 'metadata',
  OfferId = 'offerId',
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

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  communityCreated?: Maybe<CommunityCreated>;
  communityCreateds: Array<CommunityCreated>;
  memberJoinedCommunities: Array<MemberJoinedCommunity>;
  memberJoinedCommunity?: Maybe<MemberJoinedCommunity>;
  offerAccepted?: Maybe<OfferAccepted>;
  offerAccepteds: Array<OfferAccepted>;
  offerCreated?: Maybe<OfferCreated>;
  offerCreateds: Array<OfferCreated>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
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

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  communityCreated?: Maybe<CommunityCreated>;
  communityCreateds: Array<CommunityCreated>;
  memberJoinedCommunities: Array<MemberJoinedCommunity>;
  memberJoinedCommunity?: Maybe<MemberJoinedCommunity>;
  offerAccepted?: Maybe<OfferAccepted>;
  offerAccepteds: Array<OfferAccepted>;
  offerCreated?: Maybe<OfferCreated>;
  offerCreateds: Array<OfferCreated>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
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

export type SubgraphMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphMetadataQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', timestamp?: number | null, number: number } } | null };

export type CommunitesQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunitesQuery = { __typename?: 'Query', communityCreateds: Array<{ __typename?: 'CommunityCreated', id: any, blockNumber: any, blockTimestamp: any, communityId: any, ipfsMetadata: string, owner: any, stakingRequirement: any, transactionHash: any }> };

export type CommunityMembersQueryVariables = Exact<{
  communityId: Scalars['BigInt'];
}>;


export type CommunityMembersQuery = { __typename?: 'Query', memberJoinedCommunities: Array<{ __typename?: 'MemberJoinedCommunity', communityId: any, transactionHash: any, blockTimestamp: any, id: any, member: any }> };

export type OffersQueryVariables = Exact<{
  communityId: Scalars['BigInt'];
}>;


export type OffersQuery = { __typename?: 'Query', offerCreateds: Array<{ __typename?: 'OfferCreated', communityId: any, id: any, reputationRequirement: any, metadata: string, stakingRequirement: any }> };

export type OffersAcceptedQueryVariables = Exact<{
  communityId: Scalars['BigInt'];
}>;


export type OffersAcceptedQuery = { __typename?: 'Query', offerAccepteds: Array<{ __typename?: 'OfferAccepted', communityId: any, id: any, member: any, transactionHash: any }> };


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
export const CommunitesDocument = gql`
    query Communites {
  communityCreateds {
    id
    blockNumber
    blockTimestamp
    communityId
    ipfsMetadata
    owner
    stakingRequirement
    transactionHash
  }
}
    `;
export const CommunityMembersDocument = gql`
    query CommunityMembers($communityId: BigInt!) {
  memberJoinedCommunities(where: {communityId: $communityId}) {
    communityId
    transactionHash
    blockTimestamp
    id
    member
  }
}
    `;
export const OffersDocument = gql`
    query Offers($communityId: BigInt!) {
  offerCreateds(where: {communityId: $communityId}) {
    communityId
    id
    reputationRequirement
    metadata
    stakingRequirement
  }
}
    `;
export const OffersAcceptedDocument = gql`
    query OffersAccepted($communityId: BigInt!) {
  offerAccepteds(where: {communityId: $communityId}) {
    communityId
    id
    member
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
    Communites(variables?: CommunitesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CommunitesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommunitesQuery>(CommunitesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Communites', 'query');
    },
    CommunityMembers(variables: CommunityMembersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CommunityMembersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CommunityMembersQuery>(CommunityMembersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CommunityMembers', 'query');
    },
    Offers(variables: OffersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OffersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OffersQuery>(OffersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Offers', 'query');
    },
    OffersAccepted(variables: OffersAcceptedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OffersAcceptedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OffersAcceptedQuery>(OffersAcceptedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OffersAccepted', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;