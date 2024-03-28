const { ethers } = require("hardhat")
const fs = require("fs")

async function deployment() {
  let contract;

  try {
    contract = await ethers.deployContract("FreelancerHunt");

    await contract.waitForDeployment();

    console.log("contracts deployed successfully");
    return contract;
  } catch (error) {
    console.error("Error deploying contracts:", error);
    throw error;
  }
}

async function saveContractAddress(contract: any) {
  try {
    const address = JSON.stringify(
      {
        freelancerHuntContract: contract.target,
      },
      null,
      4
    );

    fs.writeFile(
      "./contracts/contractAddress.json",
      address,
      "utf8",
      (error:any) => {
        if (error) {
          console.error("Error saving contract address:", error);
        } else {
          console.log("Deployed contract address:", address);
        }
      }
    );
  } catch (error) {
    console.error("Error saving contract address:", error);
    throw error;
  }
}

async function main() {
  let contract;

  try {
    contract = await deployment();
    await saveContractAddress(contract);

    console.log("Contract deployment completed successfully.");
  } catch (error) {
    console.error("Unhandled error:", error);
  }
}

main().catch((error) => {
  console.error("Unhandled error:", error);
  process.exitCode = 1;
});
