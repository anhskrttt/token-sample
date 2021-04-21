require('dotenv').config();
const express = require('express')
const app = express()
const routes = require('./routes')
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient
const contract = require('truffle-contract');
const artifacts = require('../build/contracts/Token.json');
app.use(express.json())
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider("https://testnet.tomochain.com"))
}


const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)
const accounts = await web3.eth.getAccounts();
const lms = await LMS.deployed();

console.log(lms);
const connectToBlockchain = async () => {
    return 'Connection';

}
const b = 1;

const createWalletFromPrivateKey = async (connection, privateKey) => {
    return 'Wallet';
}

const initConnection = (privateKey) => {
    const connection = await connectToBlockchain();
    const wallet = await createWalletFromPrivateKey(connection, privateKey);
    const smartContract = await initSmartContract();
    return { connection, wallet, smartContract };
}

const getBalance = async (address, connection) => {
    return balance;
}


const example = async (privateKey, address) => {
    const { connection, wallet, smartContract } = await initConnection(privateKey);
    const balance = await getBalance(address, connection);

    return balance;
}