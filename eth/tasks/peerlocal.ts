import { task } from "hardhat/config";
import pinataSdk from "@pinata/sdk";
import { PeerLocal__factory, TestERC20__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { COMMUNITY, TOOLS } from "./tools";

task("send-eth", "Sends eth to address", async (args, hre) => {
  // send eth to 0x09e626AC7422597415F75946eE39a97d0c281b07 from signer[0]
  const accounts: SignerWithAddress[] = await hre.ethers.getSigners();
  const signer = accounts[1];
  const response = await signer.sendTransaction({
    to: accounts[0].address,
    value: hre.ethers.utils.parseEther("0.1"),
  });
  return;
  for (const account of accounts) {
    const response = await signer.sendTransaction({
      to: account.address,
      value: hre.ethers.utils.parseEther("0.1"),
    });
    await response.wait();
    console.log("Tx hash: " + response.hash);
  }
});

task("create-community", "Uploads json file to pinata", async (args, hre) => {
  const { deployments, network } = hre;
  const object = COMMUNITY;

  const signer: SignerWithAddress = (await hre.ethers.getSigners())[0];
  const pinata = new pinataSdk(
    "9807e4444c8b18fac587",
    "fcc42dccdf872e2cad73c610fd456fcba50069ef682877fb6c9d383d927e11ff"
  );
  const ipfs = await pinata.pinJSONToIPFS(object);

  // get PeerLocal contract from deployments
  const peerLocal = await deployments.get("PeerLocal");
  const peerNetwork = await deployments.getNetworkName(); //To check if its goerli
  const peerLocalAddress = peerLocal.address;

  const numberWithDecimals = 1;

  const peerLocalContract = PeerLocal__factory.connect(
    peerLocalAddress,
    signer
  );
  const tx = await peerLocalContract.createCommunity(
    ipfs.IpfsHash,
    //peerERC20Address,
    "0xD9662ae38fB577a3F6843b6b8EB5af3410889f3A", //DAI contract address
    numberWithDecimals
  );
  console.log("Tx hash: " + tx.hash);
  console.log("Pinata project uploaded: " + ipfs.IpfsHash);
});

task("join-community", "Uploads json file to pinata", async (args, hre) => {
  const { deployments, network } = hre;
  const signer: SignerWithAddress = (await hre.ethers.getSigners())[0];

  console.log("Signer: " + signer.address);

  const signature = await signer.signMessage(
    "I am the owner of this community"
  );

  const peerLocal = await deployments.get("PeerLocal");
  const peerLocalAddress = peerLocal.address;

  const peerLocalContract = PeerLocal__factory.connect(
    peerLocalAddress,
    signer
  );
  const dai = TestERC20__factory.connect(
    "0xd9662ae38fb577a3f6843b6b8eb5af3410889f3a",
    signer
  );

  const balance = await dai.balanceOf(signer.address);
  console.log("Balance: " + balance.toString());

  const tx1 = await dai.approve(peerLocalAddress, ethers.constants.MaxUint256);
  await tx1.wait();
  console.log("Tx hash approve: " + tx1.hash);

  const tx2 = await peerLocalContract.joinCommunity(5, signature);
  await tx2.wait();

  console.log("Tx hash join: " + tx2.hash);
});

task(
  "join-community-loop",
  "Uploads json file to pinata",
  async (args, hre) => {
    const { deployments, network } = hre;

    const signers = await hre.ethers.getSigners();
    const signature = await signers[0].signMessage(
      "I am the owner of this community"
    );
    // loop over all signers
    for (const signer of signers) {
      // get PeerLocal contract from deployments

      const peerLocal = await deployments.get("PeerLocal");
      const peerLocalAddress = peerLocal.address;

      const peerERC20 = await deployments.get("TestERC20");
      const peerERC20Address = peerERC20.address;

      const peerLocalContract = PeerLocal__factory.connect(
        peerLocalAddress,
        signer
      );
      const peerERC20Contract = TestERC20__factory.connect(
        peerERC20Address,
        signer
      );

      const tx1 = await peerERC20Contract.approve(
        peerLocalAddress,
        hre.ethers.constants.MaxUint256
      );
      await tx1.wait();

      const tx = await peerLocalContract.joinCommunity(0, signature);

      console.log("Tx hash: " + tx.hash);
    }
  }
);

task("accept-offer", "Uploads json file to pinata", async (args, hre) => {
  const { deployments, network } = hre;

  const signer: SignerWithAddress = (await hre.ethers.getSigners())[3];

  // get PeerLocal contract from deployments
  const peerLocal = await deployments.get("PeerLocal");
  const peerLocalAddress = peerLocal.address;
  const peerLocalContract = PeerLocal__factory.connect(
    peerLocalAddress,
    signer
  );
  //    function acceptOffer(uint256 _communityId, uint256 _offerId) public {
  const offerTx = await peerLocalContract.acceptOffer(0, 1);
  console.log("offerTx", offerTx.hash);
});

task("end-offer", "Uploads json file to pinata", async (args, hre) => {
  /////////
  const { deployments, network } = hre;
  const signer: SignerWithAddress = (await hre.ethers.getSigners())[3];
  console.log("signer", signer.address);

  const signature = await signer.signMessage(
    "I am the owner of this community"
  );

  const peerLocal = await deployments.get("PeerLocal");
  const peerLocalAddress = peerLocal.address;

  const peerERC20 = await deployments.get("TestERC20");
  const peerERC20Address = peerERC20.address;

  const peerLocalContract = PeerLocal__factory.connect(
    peerLocalAddress,
    signer
  );
  const peerERC20Contract = TestERC20__factory.connect(
    peerERC20Address,
    signer
  );

  const tx1 = await peerERC20Contract.approve(
    peerLocalAddress,
    ethers.constants.MaxUint256
  );
  await tx1.wait();
  console.log("blablbala0");
  const tx2 = await peerLocalContract.endOffer(0, 1, true);
  await tx2.wait();
  console.log("endOfferTx", tx2);
});

task(
  "mint-erc20test",
  "Mint erc20test to account[0] and account[1]",
  async (args, hre) => {
    const { deployments, network, ethers } = hre;
    const peerERC20 = await deployments.get("TestERC20");
    const peerERC20Address = peerERC20.address;
    const signers = await hre.ethers.getSigners();
    const rootSigner = signers[0];
    for (const signer of signers) {
      const peerERC20Contract = TestERC20__factory.connect(
        peerERC20Address,
        rootSigner
      );
      const tx = await peerERC20Contract.mint(signer.address, 1000000000000000);
      console.log("tx", tx.hash);
    }
  }
);

task(
  "increase-allowance-erc20test",
  "Increase allowance of erc20test to account[1]",
  async (args, hre) => {
    const { deployments, network } = hre;
    const peerERC20 = await deployments.get("TestERC20");
    const peerERC20Address = peerERC20.address;
    const signer: SignerWithAddress = (await hre.ethers.getSigners())[0];
    const peerERC20Contract = TestERC20__factory.connect(
      peerERC20Address,
      signer
    );
    const tx = await peerERC20Contract.increaseAllowance(
      signer.address,
      1000000000000000
    );
    console.log("tx", tx);
  }
);

task("extract-signer", "Extract signer from signature", async (args, hre) => {
  const messageHash = ethers.utils.hashMessage(
    "I am the owner of this community"
  );
  const ethSignedMessageHash = ethers.utils.arrayify(messageHash);
  const address = ethers.utils.recoverAddress(
    ethSignedMessageHash,
    "0x6f585527643ebb3e7a2f838132fa76b18d3588023748d27f62a14d0b0f8d69f1051fe24d75c06ae4fbf9a468a9ff8aa3b1724783350e0f39ddb293d4021420c31c"
  );
  console.log("address", address);
});

task("create-offer-batch", "Uploads json file to pinata", async (args, hre) => {
  const { deployments, network } = hre;

  const pinata = new pinataSdk(
    "9807e4444c8b18fac587",
    "fcc42dccdf872e2cad73c610fd456fcba50069ef682877fb6c9d383d927e11ff"
  );
  let counter = 0;
  for (const object of TOOLS) {
    const ipfs = await pinata.pinJSONToIPFS(object);
    const signer: SignerWithAddress = (await hre.ethers.getSigners())[
      counter + 1
    ];

    // get PeerLocal contract from deployments
    const peerLocal = await deployments.get("PeerLocal");
    const peerLocalAddress = "0xF687aEe26F1083891710e82cCE07aBc014b93e5d";
    const peerLocalContract = PeerLocal__factory.connect(
      peerLocalAddress,
      signer
    );

    const offerTx = await peerLocalContract.createOffer(
      14,
      ipfs.IpfsHash,
      0,
      counter % 2 === 0 ? 0 : 1
    );
    counter++;
    console.log("offerTx", offerTx);
  }
});
