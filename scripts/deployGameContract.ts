import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contracts with the account:", deployer.address);

  // Add your Uniswap router address here
  const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // For instance, the address for UniswapV2 router on mainnet
  const GameTokenFactory = await ethers.getContractFactory("GameToken");
  const gameToken = await GameTokenFactory.deploy(ROUTER_ADDRESS);

  await gameToken.deployed();
  const address = gameToken.address;
  console.log("GameToken address:", address);
  console.log("Transaction hash:", gameToken.deployTransaction.hash);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


