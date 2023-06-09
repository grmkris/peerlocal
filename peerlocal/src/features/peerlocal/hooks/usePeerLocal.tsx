import { useQuery } from "@tanstack/react-query";
import { subgraph } from "../../graph-client/graphClient";

export const useCommunites = () => {
  return useQuery({
    queryKey: ["useCommunities"],
    queryFn: () => {
      return subgraph.Communites();
    },
  });
};

export const useCommunityMembers = (props: { communityId?: number }) => {
  return useQuery({
    queryKey: ["useCommunityMembers", props.communityId],
    queryFn: () => {
      return subgraph.CommunityMembers({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};

export const useOffers = (props: { communityId?: string }) => {
  return useQuery({
    queryKey: ["useOffers", props.communityId],
    queryFn: () => {
      return subgraph.Offers({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};

export const useOffersAccepted = (props: { communityId?: number }) => {
  return useQuery({
    queryKey: ["useOffers", props.communityId],
    queryFn: () => {
      return subgraph.OffersAccepted({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};

export const useIPFS = (props: { ipfsHash?: string }) => {
  return useQuery({
    queryKey: ["useIPFS", props.ipfsHash],
    queryFn: () => {
      return fetch("https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/"+props.ipfsHash)
    },
    enabled: !!props.ipfsHash,
  });
};