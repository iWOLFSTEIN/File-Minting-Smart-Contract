const { expect } = require("chai");
const utils = ethers.utils
const inBytes1 = utils.formatBytes32String("test results 1");
const inBytes2 = utils.formatBytes32String("test results 2");

describe("File Minter", function () {
  it("Deployment should mint the file hash to the wallet address", async function () {
    const [owner] = await ethers.getSigners();

    const FileMinter = await ethers.getContractFactory("FileMinter");

    const hardhatFileMinter = await FileMinter.deploy();

    await hardhatFileMinter.mintFile(owner.address, inBytes1, 'file1');
    await hardhatFileMinter.mintFile(owner.address, inBytes2, 'file2');

  const arrayOfHashes = await hardhatFileMinter.myMintFiles(owner.address);
  for(var i = 0; i< arrayOfHashes.length; i++){
    console.log(arrayOfHashes[i]);
  }
    // expect(await hardhatFileMinter.records[inBytes1].isExist).to.equal(true);
  });
});