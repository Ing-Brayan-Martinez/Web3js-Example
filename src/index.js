
const Web3 = require("web3")

// set a provider such as using infura
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

// Get the balance of an Ethereum address
web3.eth.getBalance("0x6524621e27770f9611308f7c9d38e4b0931093bb").then(console.log);

// Get the latest block number
web3.eth.getBlockNumber().then(console.log);

console.log(`Web3.js version: ${web3.version}`);

