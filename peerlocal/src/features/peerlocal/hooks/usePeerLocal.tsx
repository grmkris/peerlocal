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
    queryKey: ["useCommunity", props.id],
    queryFn: () => {
      return subgraph.Community({
        communityId: props.id,
      });
    },
  });
};

export const ipfsSchema = z.object({
  Name: z.string(),
  Description: z.string(),
  Availability: z.string().optional(),
  Pickup: z.string().optional(),
  Deposit: z.string().optional(),
  Image: z.string(),
});

export type ipfsSchemaType = z.infer<typeof ipfsSchema>;

export const useIPFS = (props: { ipfsHash?: string }) => {
  return useQuery({
    queryKey: ["useIPFS", props.ipfsHash],
    queryFn: async () => {
      console.log(
        "https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/" +
          props.ipfsHash
      );
      const res = await fetch(
        "https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/QmdARiC5sHPC7sLFWNvMg7BzaFL5LHpxqiTDYhrdyUy42h"
      );
      const data = await res.json();
      return ipfsSchema.parse(data);
    },
    enabled: !!props.ipfsHash,
  });
};
