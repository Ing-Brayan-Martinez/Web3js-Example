const Web3 = require("web3")

// set a provider such as using infura

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

const myPrivateKey = '7056ec2735db32798714f72da004eea6e2d38fb70fa091827bbc16d841d49e50';

const transaction = {
    'to': '0x31B98D14007bDEe637298086988A0bBd31184523',
    'value': 100,
    'gas': 30000,
    'maxFeePerGas': 1000000108,
    'nonce': 0,
    // optional data field to send message or execute smart contract
};

web3.eth.accounts.signTransaction(transaction, myPrivateKey).then(console.log);

console.log(`Web3.js version: ${web3.version}`);