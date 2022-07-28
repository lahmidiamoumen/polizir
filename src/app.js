import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
import { nextTick } from 'process'
const path = require('path');
const contract = require("truffle-contract");
const HallJson = require(path.join(__dirname, '../build/contracts/Haal.json'));
const ethereum = require('ethereumjs-utils');

const bodyParser = require("body-parser");
var serveStatic = require('serve-static');

// const Web3 = require('web3');
// const Stealth = require('stealth_eth');
// const coinkey = require('coinkey');
// const Provider = require('@truffle/hdwallet-provider');


// const address = '0xFBD8FCb406e34dECcef2ef9B322417aFd92F9503';
// const privateKey = '0xbccb9d3cf7528ded2f96f073b67b68801f9fe34cf26f9fa09a15a77a633682b3';


const initWeb3 = async () => { 
  //const provider = new Provider(privateKey, 'http://127.0.0.1:8545'); 

  
  //const provider = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545'));
//  const provider = new Web3('HTTP://127.0.0.1:7545');
   const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");

  //provider.eth.accounts.wallet.add(privateKey);

    const Hall = contract(HallJson);
    Hall.setProvider(provider);

  const web3 = new Web3(provider);

  

  let compressedPubScanKeys = 'vJmuxDcnTuFASXkgr5V8osjsh1e63V3zbD11ipDkpPkeXwh6TnSE3AV2to7JiWNMJEYmcdeAxtDEdG9FxLscuPGHDVYwdfFxtZU1pg'
  
  let recoveryFromCompressed = Stealth.fromString(compressedPubScanKeys);
  
  // single-use nonce key pair, works with CoinKey, bitcoinjs-lib, bitcore, etc
  let keypair = coinkey.createRandom();
  
  // generate payment address
  let ethStealthAddress = ethereum.addHexPrefix(recoveryFromCompressed.genEthPaymentAddress(keypair.privateKey));
  let pubKeyToRecover = keypair.publicKey.toString('hex');
  let opMarker = recoveryFromCompressed.genPaymentPubKeyHash(keypair.privateKey).toString('hex');
  try{

    const networkId = await web3.eth.net.getId();
    console.log(`network Id: ${networkId}`);

    // const myContract = new web3.eth.Contract(
    //   HallJson.abi,
    //   HallJson.networks[networkId].address
    // );
  
    // const tx = myContract.methods.ephemeralVoters(ethStealthAddress);
    // const gas = await tx.estimateGas({from: address});
    // const gasPrice = await web3.eth.getGasPrice();
    // const data = tx.encodeABI();
    // const nonce = await web3.eth.getTransactionCount(address);
    // const signedTx  = {
    //   from: address,
    //   to: myContract.options.address,
    //   data: data,
    //   gas,
    //   gasPrice,
    //   nonce, 
    //   chain: 'ganache', 
    //   hardfork: 'dz'
    // };
  
    // const receipt = await web3.eth.sendTransaction(signedTx)
    //                     .on('receipt', function(receipt){
    //                       console.log(receipt)  
    //                     });
    // console.log(`Transaction hash: ${receipt.transactionHash}`);

  

  //  console.log(`New data value: ${await myContract.methods.getEphemeralWallets(0).call()}`);
    let instance = await Hall.deployed();
    await instance.ephemeralVoters(ethStealthAddress).then(function(val) {
      // result object contains import information about the transaction
      console.log("Value was set to", val);
    });

    await instance.addEphemeralVoter(ethStealthAddress, web3.utils.toHex(pubKeyToRecover), web3.utils.toHex(opMarker),  { from:  address})
    .then(async () => {
        // Must funding ephemeral wallet to enable voting. Could be made by smart-contract too.
        let tx = await web3.eth.sendTransaction({
            from: address,
            to: ethStealthAddress,
            value: web3.utils.toHex(web3.utils.toWei('1', 'ether'))
        });
        console.log(tx.transactionHash)
    });
    await instance.getEphemeralWallets.call(0).then(function(val) {
      // result object contains import information about the transaction
      console.log("Value was set to", val);
    });
    let ewCount = await instance.votersCount();
      console.log(`voters Count: ${ewCount}`);

    // console.log(canVote)
  }catch(err) {
    console.log(err)
  }
  
}


const app = express(apiRoot, api)
// const server = http.createServer(app)
app.use(serveStatic(__dirname + "/dist"));

if (mongo.uri) {
  mongoose.connect(mongo.uri).then(() => {
    console.log("database conected");
  })
  .catch((err) => {
    console.log(`couldn't connect to the database: ${err}`);
  })
}
mongoose.Promise = Promise

//initWeb3();

//app.use(bodyParser.json())

setImmediate(() => {
  // server.listen(port, ip, () => {
  //   console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  // })
  app.listen(port, () => {
    console.log({
      message: `server running on http://localhost:${port}`,
    });
  });
  
})

export default app
