require('dotenv').config()
"use strict";
// var HDWaklletProvider = require("truffle-hdwallet-provider");
var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = process.env.MNEMONIC;
var mnemonic = process.env.MNEMONIC_TOMO;

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(mnemonic, "http://127.0.0.1:7545"),
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // Match any network id
    },

    tomotestnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://testnet.tomochain.com",
          0,
          1,
          true,
          "m/44'/889'/0'/0/"
        ),
      network_id: "89",
      gas: 5000000,
      gasPrice: 10000000000000
    },

    tomomainnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://rpc.tomochain.com",
          0,
          1,
          true,
          "m/44'/889'/0'/0/"
        ),
      network_id: "88",
      gas: 5000000,
      gasPrice: 10000000000000
    }
  },

  compilers: {
    solc: {
      settings: {
        evmVersion: "byzantium"
      }
    }
  }
};