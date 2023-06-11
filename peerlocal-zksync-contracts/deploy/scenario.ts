import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const AA_FACTORY_ADDRESS = '0xcA17EF990b224140E87d95FE107fAa6a6aFe91e9';

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
  
  const wallet1 = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  const wallet2 = new Wallet("0x7fca5cff8d954c0093a6820a82baab936fb13b19c3b0bdcc809283a1a16f65da").connect(provider);
  const wallet3 = new Wallet("0x2dcece1d3d7cf63d96c951b51f26b18552cac7cc1e5c3cfa2bf596285ce6ae4f").connect(provider);
  const deployer = new Deployer(hre, wallet1);

  
  const peerArtifact = await hre.artifacts.readArtifact("PeerLocal");
  const deployArtifact = await deployer.loadArtifact("PeerLocal");
  
  // deploy contract
  const greeterContract = await deployer.deploy(deployArtifact, ['0xE5397854e5Efa5b487DcB5D39B1173608F74b728']);

  console.log(greeterContract.address);

  const peerWallet1 = new ethers.Contract(
    greeterContract.address,
    peerArtifact.abi,
    wallet1
  );
  
  const peerWallet2 = new ethers.Contract(
    greeterContract.address,
    peerArtifact.abi,
    wallet2
  );

  // create community
  let tx = await peerWallet1.createCommunity(
      'my community hash 4',
      '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
      1
  );
  await tx.wait();
  
  console.log("community created");
  
  // add allowance before
  const allowanceArtifact = await hre.artifacts.readArtifact("TestERC20");
  const allowanceFactory1 = new ethers.Contract(
    '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
    allowanceArtifact.abi,
    wallet1
  );
  await allowanceFactory1.increaseAllowance(greeterContract.address, 1000000000000000);
  
  console.log("allowance user 1 done!");
  
  // allowance (user 2)
  const allowanceFactory2 = new ethers.Contract(
    '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
    allowanceArtifact.abi,
    wallet2
  );
  await allowanceFactory2.increaseAllowance(greeterContract.address, 1000000000000000);
  
  console.log("allowance user 2 done!");

  
  // join community
  const signature = await wallet1.signMessage('I am the owner of this community');
  await peerWallet1.joinCommunity(0, signature);
  
  console.log("join community user 1 done!");

  
  // create offer
  tx = await peerWallet1.createOffer(
      0, 'some offer hash', 0, 0
  );
  await tx.wait();
  
  console.log("create offer user 1 done!");
  
  // join community (user 2)
  const signature2 = await wallet2.signMessage('I am the owner of this community');
  await peerWallet2.joinCommunity(0, signature2);
  
  console.log("join community user 2 done!");
  
  // accept offer
  tx = await peerWallet2.acceptOffer(0, 1)
  await tx.wait();
  
  console.log("offer accepted by user 2 done!");
  
  // deploy custom account
  
  const factoryArtifact = await hre.artifacts.readArtifact('AAFactory');

  const aaFactory = new ethers.Contract(
    AA_FACTORY_ADDRESS,
    factoryArtifact.abi,
    wallet1
  );
  
  // For the simplicity of the tutorial, we will use zero hash as salt
  const salt = ethers.constants.HashZero;
  
  const owner1 = Wallet.createRandom();
  const owner2 = Wallet.createRandom();

  // deploy account owned by owner1 & owner2
  tx = await aaFactory.deployAccount(
    salt,
    wallet1.address,
    wallet2.address
  );
  await tx.wait();

  // Getting the address of the deployed contract account
  const abiCoder = new ethers.utils.AbiCoder();
  const multisigAddress = utils.create2Address(
    AA_FACTORY_ADDRESS,
    await aaFactory.aaBytecodeHash(),
    salt,
    abiCoder.encode(['address', 'address'], [wallet1.address, wallet2.address])
  );
 
  console.log(`Multisig account deployed on address ${multisigAddress} owned by ${wallet1.address} and ${wallet2.address}`);
  
  // check borrower balance (user2)
  const daiArtifact = await hre.artifacts.readArtifact("TestERC20");
  
  const daiWallet2 = new ethers.Contract(
    '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
    daiArtifact.abi,
    wallet2
  );
  
  let wallet2Balance = await daiWallet2.balanceOf(wallet2.address);
  console.log(`Wallet2 balance after accepting the offer ${wallet2Balance}`);
  
  // topup multisig account balance
  console.log("Sending funds to multisig account");
  // Send funds to the multisig account we just deployed
  await (
    await wallet1.sendTransaction({
      to: multisigAddress,
      // You can increase the amount of ETH sent to the multisig
      value: ethers.utils.parseEther("0.01"),
    })
  ).wait();

  let multisigBalance = await provider.getBalance(multisigAddress);
  console.log(`Multisig account balance is ${multisigBalance.toString()}`);
  
  // Transaction to end offer
  let aaTx = await peerWallet1.populateTransaction.endOffer(
    0,
    1,
    true,
    multisigAddress
  );
  
  // end offer
  wallet2Balance = await daiWallet2.balanceOf(wallet2.address);
  console.log(`Wallet2 balance after ending the offer ${wallet2Balance}`);
  
  console.log("endOffer called !");

  // const gasLimit = await provider.estimateGas(aaTx);
  const gasPrice = await provider.getGasPrice();
  
  console.log(aaTx);

  aaTx = {
    ...aaTx,
    // deploy a new account using the multisig
    from: multisigAddress,
    gasLimit: ethers.utils.parseEther("0.00000000002"),
    gasPrice: gasPrice,
    chainId: (await provider.getNetwork()).chainId,
    nonce: await provider.getTransactionCount(multisigAddress),
    type: 113,
    customData: {
      gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
    } as types.Eip712Meta,
    value: ethers.BigNumber.from(0),
  };
  const signedTxHash = EIP712Signer.getSignedDigest(aaTx);

  const multiSignature = ethers.utils.concat([
    // Note, that `signMessage` wouldn't work here, since we don't want
    // the signed hash to be prefixed with `\x19Ethereum Signed Message:\n`
    ethers.utils.joinSignature(wallet1._signingKey().signDigest(signedTxHash)),
    ethers.utils.joinSignature(wallet2._signingKey().signDigest(signedTxHash)),
  ]);

  aaTx.customData = {
    ...aaTx.customData,
    customSignature: multiSignature,
  };

  console.log(
    `The multisig's nonce before the first tx is ${await provider.getTransactionCount(
      multisigAddress
    )}`
  );
  const sentTx = await provider.sendTransaction(utils.serialize(aaTx));
  await sentTx.wait();

  // Checking that the nonce for the account has increased
  console.log(
    `The multisig's nonce after the first tx is ${await provider.getTransactionCount(
      multisigAddress
    )}`
  );

  multisigBalance = await provider.getBalance(multisigAddress);

  console.log(`Multisig account balance is now ${multisigBalance.toString()}`);
}