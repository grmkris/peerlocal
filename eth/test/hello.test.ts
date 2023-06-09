import { task } from "hardhat/config";
import { describe } from "mocha";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    console.log("hello");
  });
});
