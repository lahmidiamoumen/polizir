const path = require('path');
const contract = require("truffle-contract");
const HallJson = require(path.join(__dirname, '../../build/contracts/Haal.json'));
const Web3 = require('web3');

const Provider = require('@truffle/hdwallet-provider');

const mnemonic = "upon punch supply alone much twist dumb sustain truth wire demand basic";


const getProvider = () => {
    return (new Provider(mnemonic, "https://eth-goerli.g.alchemy.com/v2/s5PuumokiYeVqNyDVkFRyWagXtWGMXvU"));
    //return (new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/d9c83be4262d4a209bdb2c1249aaab40:8545"));
    //return (new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  };

const getWeb3 = () => {
    const web3 = new Web3(getProvider());
    return web3;
}
  
const Contract = new Promise( async function(resolve, reject){
    const Hall = contract(HallJson);
    Hall.setProvider(getProvider());
    const instance = await Hall.deployed();
    if (instance) resolve(instance);
    else reject();
});

module.exports = { Contract, getWeb3 };


// const initWeb3 = async (compressedPubScanKeys) => { 
    
//   let recoveryFromCompressed = Stealth.fromString(compressedPubScanKeys);
  
//   // single-use nonce key pair, works with CoinKey, bitcoinjs-lib, bitcore, etc
//   let keypair = coinkey.createRandom();
  
//   // generate payment address
//   let ethStealthAddress = ethereum.addHexPrefix(recoveryFromCompressed.genEthPaymentAddress(keypair.privateKey));
//   let pubKeyToRecover = keypair.publicKey.toString('hex');
//   let opMarker = recoveryFromCompressed.genPaymentPubKeyHash(keypair.privateKey).toString('hex');
//   try{

//     //const networkId = await web3.eth.net.getId();
//     await instance.ephemeralVoters(ethStealthAddress).then(function(val) {
//       console.log("Value was set to", val);
//     });

//     await instance.addEphemeralVoter(ethStealthAddress, getWeb3.utils.toHex(pubKeyToRecover), getWeb3().utils.toHex(opMarker),  { from:  await getWeb3().eth.getCoinbase()})
//     .then(async () => {
//         // Must funding ephemeral wallet to enable voting. Could be made by smart-contract too.
//         let tx = await getWeb3().eth.sendTransaction({
//             from: await getWeb3().eth.getCoinbase(),
//             to: ethStealthAddress,
//             value: getWeb3().utils.toHex(getWeb3().utils.toWei('1', 'ether'))
//         });
//         console.log(tx.transactionHash)
//     });
//     // await instance.getEphemeralWallets.call(0).then(function(val) {
//     //   // result object contains import information about the transaction
//     //   console.log("Value was set to", val);
//     // });
//     // let ewCount = await instance.votersCount();
//     // console.log(`voters Count: ${ewCount}`);

// }catch(err) {
//     console.log(err)
//   }
  
// }

