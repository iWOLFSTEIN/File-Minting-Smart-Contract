require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 const {API_URL_KEY, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.14",
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {},
    rinkeby: {
        url: API_URL_KEY,
        accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
