import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { createConfig, mainnet, WagmiConfig } from "wagmi";
import { createPublicClient, http } from "viem";

const queryClient = new QueryClient();

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  queryClient,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={config}>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ClerkProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
