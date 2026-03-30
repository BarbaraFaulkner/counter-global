import { createConfig, http } from "wagmi";
import { injected } from "@wagmi/core";
import { base } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(
      "https://mainnet.base.org"
      // TODO(builder-code): append the builder code suffix here once provided.
      // Example:
      // `https://mainnet.base.org/<BUILDER_CODE_SUFFIX>`
    ),
  },
});
