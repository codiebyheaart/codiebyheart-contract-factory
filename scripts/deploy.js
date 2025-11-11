const hre = require("hardhat");

async function main() {
  const Factory = await hre.ethers.getContractFactory("CodieFactory");
  const factory = await Factory.deploy();
  await factory.deployed();
  console.log("CodieFactory deployed to:", factory.address);

  // Example: create a sample CodieContract
  const tx = await factory.createContract("CodieByHeart Sample");
  await tx.wait();
  console.log("Created a CodieContract via factory (transaction mined).");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
