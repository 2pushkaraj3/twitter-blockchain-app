require("@nomicfoundation/hardhat-toolbox")
require('@nomiclabs/hardhat-waffle')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.2",
  networks: {
    mainnet:{
      url: 'https://eth-mainnet.g.alchemy.com/v2/qjcuKQD1EMaTbMGNjyDyHef694GLZt0l',
      accounts: [
        '2d4e1a1f1c5d54767534e351ba3d78596095305e3981cdb7f1a9f9cb14038f1a',
      ],
    },
    },
  
}
 