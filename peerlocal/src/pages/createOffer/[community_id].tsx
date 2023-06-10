import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../features/Layout";
import {
  useCommunity,
  useOfferIPFS,
} from "src/features/peerlocal/hooks/usePeerLocal";
import { useOffer } from "src/features/peerlocal/hooks/usePeerLocal";
import { usePeerLocalContract } from "src/features/peerlocal/hooks/usePeerLocalContract";
import { useSigner } from "wagmi";
import { useImmer } from "use-immer";
import { useMutation } from "@tanstack/react-query";
import { pinJSONtoPinata, uploadFile } from "../createCommunity";

const Listing: NextPage = () => {
  const router = useRouter();
  const listing_id = router.query.community_id as string;
  const { createOffer, joinCommunity } = usePeerLocalContract();
  const [offerData, updateOfferData] = useImmer({
    Name: "",
    Description: "",
    Availability: "",
    Pickup: "",
    Deposit: "",
    Image: "",
  });

  const uploadImage = useMutation(async (variables: { file: File }) => {
    const data = new FormData();
    console.log("uploadImage", variables.file);
    const result = await uploadFile(variables.file);
    console.log("result", result);
    if (!result) throw new Error("Error uploading image");
    updateOfferData((draft) => {
      draft.Image = "https://bear.mypinata.cloud/ipfs/" + result;
    });
  });

  const createofferHandler = useMutation({
    mutationFn: async (variables: {}) => {
      const result = await pinJSONtoPinata(offerData);
      console.log("result", result);
      console.log("listing_id", listing_id);
      const tx = await createOffer.mutateAsync({
        communityId: listing_id,
        stakingReq: 0,
        metadata: result,
        reputationReq: 0,
      });
      // @ts-ignore
      const event = await tx.wait();
      console.log("event", event);
      // @ts-ignore
      console.log("event.events[0]?.args", event.events[0]?.args[0]);
      // @ts-ignore
      return event.events[0]?.args[0];
    },
  });

  const handleFileChange = async (e: any) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    await uploadImage.mutateAsync({ file });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    updateOfferData((draft) => {
      // @ts-ignore
      draft[name] = value;
    });
  };

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createofferHandler.mutateAsync(offerData);
  };
  return (
    <>
      <Head>
        <title>Welcome Personal Page</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-row">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <h1>Create a Listing</h1>
              Name:
              <input
                type="text"
                name="Name"
                onChange={handleInputChange}
                required
              />
              Description:
              <input
                type="text"
                name="Description"
                onChange={handleInputChange}
                required
              />
              Availability:
              <input
                type="text"
                name="Availability"
                onChange={handleInputChange}
                required
              />
              Pickup:
              <input
                type="text"
                name="Pickup"
                onChange={handleInputChange}
                required
              />
              Deposit:
              <input
                type="text"
                name="Deposit"
                onChange={handleInputChange}
                required
              />
              Image:
              <input
                type="file"
                name="Image"
                onChange={handleFileChange}
                required
              />
            </div>
            <input className={"btn"} type="submit" value="Create Listing" />
            <button className="btn-neutral btn" onClick={() => router.back()}>
              Back
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Listing;
