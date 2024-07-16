import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "kakarot",
  networks: {
    hardhat: {},
    kakarot: {
      url: "https://sepolia-rpc.kakarot.org",
      accounts: [""],
    },
  },
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  ignition: {
    blockPollingInterval: 3_000,
    timeBeforeBumpingFees: 3 * 60 * 1_000,
    maxFeeBumps: 0,
    requiredConfirmations: 1,
  },
};

export default config;
