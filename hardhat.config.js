require("@nomicfoundation/hardhat-toolbox");
require("./tasks/block-number");
require("dotenv").config();
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};
