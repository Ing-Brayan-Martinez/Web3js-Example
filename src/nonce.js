const Web3 = require("web3")

// set a provider such as using infura

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const myAddress = '0x6524621e27770f9611308f7c9d38e4b0931093bb';

web3.eth.getTransactionCount(myAddress, 'latest').then(console.log);

console.log(`Web3.js version: ${web3.version}`);