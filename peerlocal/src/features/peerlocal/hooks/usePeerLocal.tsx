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
      console.log("https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/"+props.ipfsHash)
      return fetch("https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/QmNc9hDnhEMXXzRaxY6Q8ag6wa39GFf3gezSyPTgoxB2Wb?_gl=1*64u9hp*rs_ga*MTEyMzc3MTgxMS4xNjg2MzExMzI1*rs_ga_5RMPXG14TE*MTY4NjM0NzYzOC4yLjEuMTY4NjM0OTM3NC42MC4wLjA")
    },
    enabled: !!props.ipfsHash,
  });
};