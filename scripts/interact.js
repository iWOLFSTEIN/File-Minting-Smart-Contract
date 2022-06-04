//npx hardhat run scripts/interact.js --network rinkeby

const { ethers } = require("hardhat");

const API_KEY = process.env.API_KEY; //get from alchemy
const CONTRACT_ADDRESS = process.env.CONTRACT; //deployed contract address
const PRIVATE_KEY = process.env.PRIVATE_KEY; //metamask

const contract = require('../artifacts/contracts/FileMinter.sol/FileMinter.json');

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const fileMinterContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    
  // use your own unique hash code
    const fileHashCode = "0x185f8db32271fe25f561a6fc938b2e264306ac304eda508007d1764826381963";
    console.log('file hash is');
    console.log(fileHashCode);

    await fileMinterContract.mintFile(signer.address, fileHashCode);

    const arrayOfHashes = await fileMinterContract.myMintFiles(signer.address);
    var total = 0;
    for(var i = 0; i< arrayOfHashes.length; i++){
      console.log('file hash after minting is');
    console.log(arrayOfHashes[i]);
    total++;
  }
  console.log('total minted files are: '+ total.toString());

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});