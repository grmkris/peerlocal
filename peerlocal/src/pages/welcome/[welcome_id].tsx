import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import { ConnectWallet } from "../../features/ConnectWallet";
import { Layout } from "../../features/Layout";

const Welcome: NextPage = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <>
            <Head>
                <title>Welcome Personal Page</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Welcome to our <span className="text-accent">community</span>, DAO; please stake
                        the required amount to help our community with
                        regeneration of our neighborhood.
                    </h1>
                    <h2>
                        <span className="text-accent">100 </span> GHO
                    </h2>
                    <h3>
                        H3 Ja
                    </h3>
                </div>
            </Layout>
        </>
    );
};

export default Welcome;