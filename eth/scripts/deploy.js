// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const ReputationToken = await ethers.getContractFactory('ReputationToken');

  // Deploy the contract
  console.log('Deploying ReputationToken...');
  const reputationToken = await ReputationToken.deploy();
  await reputationToken.deployed();
  console.log(`ReputationToken deployed to: ${reputationToken.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });