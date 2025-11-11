const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CodieFactory", function () {
  it("deploys factory and creates child contract", async function () {
    const [owner, other] = await ethers.getSigners();

    const Factory = await ethers.getContractFactory("CodieFactory");
    const factory = await Factory.deploy();
    await factory.deployed();

    // initially zero
    expect(await factory.count()).to.equal(0);

    // create a contract
    const tx = await factory.createContract("My Codie");
    await tx.wait();

    expect(await factory.count()).to.equal(1);

    const all = await factory.getAllContracts();
    const childAddress = all[0];

    // attach to child and verify info
    const Child = await ethers.getContractFactory("CodieContract");
    const child = await Child.attach(childAddress);

    const info = await child.getInfo();
    expect(info[0]).to.equal("My Codie");
    expect(info[1]).to.equal(owner.address);

    // owner can update name
    await child.updateName("Updated Name");
    const updated = await child.name();
    expect(updated).to.equal("Updated Name");

    // other cannot update
    await expect(child.connect(other).updateName("Bad")).to.be.revertedWith("Only owner can update");
  });
});
