import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/grmkris/peerlocal-optimism-goerli",
  documents: "./src/features/graph-client/graphql/**/*.graphql",
  generates: {
    "./src/features/graph-client/graphql/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
