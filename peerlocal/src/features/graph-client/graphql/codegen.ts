import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.thegraph.com/subgraphs/name/grmkris/peerlocal-goerli",
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/generated/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
