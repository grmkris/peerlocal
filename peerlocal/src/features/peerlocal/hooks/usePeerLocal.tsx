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
      const data = await fetch(
        "https://violet-tremendous-elephant-215.mypinata.cloud/ipfs/QmNc9hDnhEMXXzRaxY6Q8ag6wa39GFf3gezSyPTgoxB2Wb?_gl=1*64u9hp*rs_ga*MTEyMzc3MTgxMS4xNjg2MzExMzI1*rs_ga_5RMPXG14TE*MTY4NjM0NzYzOC4yLjEuMTY4NjM0OTM3NC42MC4wLjA"
      );
      return ipfsSchema.parse(data);
    },
    enabled: !!props.ipfsHash,
  });
};
