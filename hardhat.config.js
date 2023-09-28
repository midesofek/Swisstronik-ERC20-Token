require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: process.env.SWISSTRONIK_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
