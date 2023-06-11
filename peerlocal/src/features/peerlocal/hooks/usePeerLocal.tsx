import { useQuery } from "@tanstack/react-query";
import { subgraph } from "../../graph-client/graphClient";
import { z } from "zod";

export const useCommunites = () => {
  return useQuery({
    queryKey: ["useCommunities"],
    queryFn: () => {
      return subgraph.Communities();
    },
  });
};

export const useCommunity = (props: { id: string }) => {
  return useQuery({
    queryKey: ["Community", props.id],
    queryFn: async () => {
      return subgraph.Community({
        communityId: props.id,
      });
    },
  });
};

export const useOffer = (props: { metadata: string }) => {
  return useQuery({
    queryKey: ["Community", props.metadata],
    queryFn: async () => {
      const offer = await subgraph.Offer({
        metadata: props.metadata,
      });
      return offer.offers[0];
    },
  });
};

export const ipfsSchema = z.object({
  Name: z.string(),
  Description: z.string(),
  Availability: z.string().optional(),
  Pickup: z.string().optional(),
  Deposit: z.string().optional(),
  Img: z.string(),
});

export type ipfsSchemaType = z.infer<typeof ipfsSchema>;

export const useIPFS = (props: { ipfsHash?: string }) => {
  return useQuery({
    queryKey: ["useIPFS", props.ipfsHash],
    queryFn: async () => {
      const res = await fetch(
        "https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/QmdARiC5sHPC7sLFWNvMg7BzaFL5LHpxqiTDYhrdyUy42h"
      );
      const data = await res.json();
      return ipfsSchema.parse(data);
    },
    enabled: !!props.ipfsHash,
  });
};

export const ipfsCommunitySchema = z.object({
  Name: z.string(),
  Description: z.string(),
  Image: z.string(),
});

export type ipfsCommunitySchemaType = z.infer<typeof ipfsCommunitySchema>;

export const useCommunityIPFS = (props: { ipfsHash?: string | string[] }) => {
  return useQuery({
    queryKey: ["useCommunityIPFS", props.ipfsHash],
    queryFn: async () => {
      const res = await fetch(
        "https://bear.mypinata.cloud/ipfs/" + props.ipfsHash
      );
      const data = await res.json();
      return ipfsCommunitySchema.parse(data);
    },
    enabled: !!props.ipfsHash,
  });
};

export const ipfsOfferSchema = z.object({
  Name: z.string(),
  Description: z.string(),
  Availability: z.string(),
  Pickup: z.string(),
  Image: z.string(),
  Deposit: z.string()
});

export type ipfsOfferSchemaType = z.infer<typeof ipfsOfferSchema>;

export const useOfferIPFS = (props: { ipfsHash?: string | string[] }) => {
  return useQuery({
    queryKey: ["useOfferIPFS", props.ipfsHash],
    queryFn: async () => {
      const res = await fetch(
        "https://bear.mypinata.cloud/ipfs/" + props.ipfsHash
      );
      const data = await res.json();
      return ipfsOfferSchema.parse(data);
    },
    enabled: !!props.ipfsHash,
  });
};
