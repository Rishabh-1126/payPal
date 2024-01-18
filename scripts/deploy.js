// deploy.js
async function main() {
  // Hardhat setup
  const { ethers } = require("hardhat");

  // Get the account that will deploy the contract
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy your contract
  const Contract = await ethers.getContractFactory("Paypal"); // Replace 'YourContract' with the actual contract name
  const contract = await Contract.deploy();
  const address = await contract.getAddress();

  console.log("YourContract deployed to:", address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
