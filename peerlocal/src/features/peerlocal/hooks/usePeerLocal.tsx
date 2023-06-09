import { useQuery } from "@tanstack/react-query";
import { subgraph } from "../../../subgraph";

export const useCommunites = () => {
  return useQuery({
    queryKey: ["useCommunities"],
    queryFn: () => {
      return subgraph.Communites();
    },
  });
};

export const useCommunityMembers = (props: { communityId?: bigint }) => {
  return useQuery({
    queryKey: ["useCommunityMembers", props.communityId],
    queryFn: () => {
      return subgraph.CommunityMembers({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};

export const useOffers = (props: { communityId?: bigint }) => {
  return useQuery({
    queryKey: ["useOffers", props.communityId],
    queryFn: () => {
      return subgraph.Offers({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};

export const useOffersAccepted = (props: { communityId?: bigint }) => {
  return useQuery({
    queryKey: ["useOffers", props.communityId],
    queryFn: () => {
      return subgraph.OffersAccepted({ communityId: props.communityId });
    },
    enabled: !!props.communityId,
  });
};
