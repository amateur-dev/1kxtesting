import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    buildbear: {
      url: "https://rpc.buildbear.io/dipeshsukhani",
    }
  }
};

export default config;
