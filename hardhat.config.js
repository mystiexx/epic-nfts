require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require ("@nomiclabs/hardhat-etherscan")


module.exports = {
  solidity: "0.8.4",

  etherscan:{
    apiKey: process.env.ETHERSCAN_KEY,
  },

  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
