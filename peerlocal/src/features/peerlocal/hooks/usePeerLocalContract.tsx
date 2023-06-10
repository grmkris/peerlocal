import { useMutation } from "@tanstack/react-query";

export const usePeerLocalContract = () => {
  const createCommunity = useMutation({
    mutationFn: async (variables: { name: string; description: string }) => {
      return null;
    },
  });
  const joinCommunity = useMutation({
    mutationFn: async (variables: { communityId: string }) => {
      return null;
    },
  });
  const createOffer = useMutation({
    mutationFn: async (variables: { communityId: string; amount: string }) => {
      return null;
    },
  });
  const acceptOffer = useMutation({
    mutationFn: async (variables: { communityId: string; amount: string }) => {
      return null;
    },
  });
  const endOffer = useMutation({
    mutationFn: async (variables: { communityId: string; amount: string }) => {
      return null;
    },
  });
};
