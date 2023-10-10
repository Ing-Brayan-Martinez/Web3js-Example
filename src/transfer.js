const Web3 = require("web3")

// set a provider such as using infura

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));


const transaction = {
    'from': '0x6524621e27770f9611308f7c9d38e4b0931093bb',
    'to': '0x1BE4d6ae682b225f9884e40bd38cABfb9A9916d7',
    'value': 9,
    'gas': 21000,
    'maxFeePerGas': 25000,
    'nonce': 0,
    // optional data field to send message or execute smart contract
};


web3.eth.sendTransaction(transaction, (error, hash) => {
    if (!error) {
        console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
        console.log("❗Something went wrong while submitting your transaction:", error)
    }
});

console.log(`Web3.js version: ${web3.version}`);