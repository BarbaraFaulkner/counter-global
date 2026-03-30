import { createConfig, http } from "wagmi";
import { injected } from "@wagmi/core";
import { base } from "wagmi/chains";

const BUILDER_CODE = "bc_k94r47ma";
const DATA_SUFFIX = "0x62635f6b39347234376d610b0080218021802180218021802180218021";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http("https://mainnet.base.org"),
  },
  // ERC-8021 attribution for transactions sent outside Base App as recommended by Base docs.
  dataSuffix: DATA_SUFFIX,
});

export { BUILDER_CODE, DATA_SUFFIX };
