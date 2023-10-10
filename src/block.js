const Web3 = require("web3")

// set a provider such as using infura

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.getBlockNumber().then(console.log);

console.log(`Web3.js version: ${web3.version}`);
