const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("SwitzClub", []);
  console.log("Deploying contract to Swisstronik....");
  await contract.waitForDeployment();

  console.log(`SwitzClub contract deployed to: \nAddress: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
