export const counterContract = {
  address: "0xae88c57fdf52884a43380bb88a618cad5d973dac" as const,
  abi: [
    {
      type: "function",
      name: "counter",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "", type: "uint256" }],
    },
    {
      type: "function",
      name: "increment",
      stateMutability: "nonpayable",
      inputs: [],
      outputs: [],
    },
  ] as const,
};


