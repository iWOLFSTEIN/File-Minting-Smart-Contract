const { ethers } = require("hardhat");
async function main() {

   const HelloWorld = await ethers.getContractFactory('FileMinter');

   const hw = await HelloWorld.deploy();

   console.log('Contract Deployed to:', hw.address);
}

main().then(() => process.exit(0))
.catch(error => {
 console.error(error);
 process.exit(1);
});