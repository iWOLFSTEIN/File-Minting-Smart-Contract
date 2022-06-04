const { expect } = require("chai");
// const utils = ethers.utils
// const inBytes1 = utils.formatBytes32String("test results 1");
// const inBytes2 = utils.formatBytes32String("test results 2");
const sjcl = require('sjcl');

const myString = 'Hello'
const myBitArray = sjcl.hash.sha256.hash(myString)
const myHash = '0x'+sjcl.codec.hex.fromBits(myBitArray)

describe("File Minter", function () {
  it("Deployment should mint the file hash to the wallet address", async function () {
    const [owner] = await ethers.getSigners();

    const FileMinter = await ethers.getContractFactory("FileMinter");

    const hardhatFileMinter = await FileMinter.deploy();
    
    console.log('file hash is');
    console.log(myHash);
    await hardhatFileMinter.mintFile(owner.address, myHash);
 

    const arrayOfHashes = await hardhatFileMinter.myMintFiles(owner.address);
    for(var i = 0; i< arrayOfHashes.length; i++){
      console.log('file hash after minting is');
    console.log(arrayOfHashes[i]);
  }
  });
});