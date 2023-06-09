import { ethers } from "ethers";
import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await hre.ethers.provider.getBalance(address);
    const formatted = ethers.utils.formatUnits(balance, "ether");
    console.log(
      `Account ${account.address} has balance ${formatted} ETH (${balance} wei)`,
    );
  }
});

task("send", "Send ETH to an account")
  .addParam("receiver", "The account that will receive the ETH")
  .setAction(async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    const sender = accounts[1];

    const tx = await sender.sendTransaction({
      to: taskArgs.receiver,
      value: ethers.utils.parseEther("1.0"),
    });

    console.log(`Transaction hash: ${tx.hash}`);
    await tx.wait();
    console.log("Transaction confirmed");
  });
