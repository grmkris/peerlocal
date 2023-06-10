import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'
import { Layout } from "../../features/Layout";
import { useCommunity, useOfferIPFS } from "src/features/peerlocal/hooks/usePeerLocal";
import { useOffer } from "src/features/peerlocal/hooks/usePeerLocal";
import { usePeerLocalContract } from "src/features/peerlocal/hooks/usePeerLocalContract";

const Listing: NextPage = () => {
    const router = useRouter()
    const hash = router.query.listing_id ? router.query.listing_id.toString() : "0"
    const nIFPS = useOfferIPFS({ ipfsHash: hash })
    const cOffer = useOffer({ "metadata": hash, })
    console.log(cOffer.data)
    const { acceptOffer } = usePeerLocalContract()
    return (
        <>
            <Head>
                <title>Welcome Personal Page</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="card w-96 bg-base-100 min-h-[90%] shadow-xl">
                    <div className="container flex flex-col items-center justify-center gap-2 px-4 py-5 ">
                        <figure><img src={"/drill.jpg"} alt={"thomas"} /></figure>
                        <h2 className="">{nIFPS.data?.Name}</h2>
                        <p className="mt-5">{nIFPS.data?.Description}</p>
                        <p className="mt-5"> min. Reputation: <p className="text-accent"> {cOffer.data?.reputationRequirement} </p> </p>
                        <div className="flex flex-row">
                            <button className="btn btn-neutral" onClick={() => router.back()}>Back</button>
                            <button className="btn btn-primary" onClick={() => acceptOffer.mutate({ communityId: "0", offerId: "1" })}>Borrow for {cOffer.data?.stakingRequirement} GHO</button>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Listing;