import { success, notFound } from '../../services/response/'
import { Contract, getWeb3 } from '../getContract'

import { User } from '.'
const ocsp = require('ocsp');
const agent = new ocsp.Agent();
//const fs = require('fs');

export const pushStealth = ({ bodymen: { body }, user }, res, next) => {
    console.log(body.token)
    console.log(user._id)
    const Stealth = require('stealth_eth');
    const coinkey = require('coinkey');
    const ethereum = require('ethereumjs-utils');
    let compressedPubScanKeys = body.token
    let recoveryFromCompressed = Stealth.fromString(compressedPubScanKeys);
     // single-use nonce key pair, works with CoinKey, bitcoinjs-lib, bitcore, etc
    let keypair = coinkey.createRandom();  
    // generate payment address
    let ethStealthAddress = ethereum.addHexPrefix(recoveryFromCompressed.genEthPaymentAddress(keypair.privateKey));
    let pubKeyToRecover = keypair.publicKey.toString('hex');
    let opMarker = recoveryFromCompressed.genPaymentPubKeyHash(keypair.privateKey).toString('hex');
    let adds = '0x1Aa5DBf93Dd824f41259c20649A5c28668D4Ab8d';

    console.log(`EthStealth Address ${ethStealthAddress}`)
    
    Contract
    .then(instance => 
      instance.getBalance(ethStealthAddress , { from:  adds}).then((canVote)=> {console.log(`getBalance: ${canVote}`)}))

    Contract
    .then(instance => 
      instance
      .addEphemeralVoter(ethStealthAddress, getWeb3().utils.toHex(pubKeyToRecover), getWeb3().utils.toHex(opMarker),  { from: adds })
      .then(async () => {
          // Must funding ephemeral wallet to enable voting. Could be made by smart-contract too.
          let tx = await getWeb3().eth.sendTransaction({
              from: adds,
              to: ethStealthAddress,
              // value: getWeb3().utils.toHex(getWeb3().utils.toWei('1', 'ether'))
              value: getWeb3().utils.toHex(getWeb3().utils.toWei('0.01', 'ether'))
          });
          console.log(`${tx.transactionHash}`)        
          return tx.transactionHash
      }))
    .then(success(res))
    .catch(next) 
}

export const follow = async ({ bodymen: { body }, params, user }, res, next) => {
    User.findById(body.userId)
    .then(notFound(res))
    .then((userB) => {
      if (!userB) return null 
      user.following.push(body.userId)
      userB.followers.push(user._id)
      user.save()
      userB.save()
      return userB.followers;
    })
    .then(success(res))
    .catch(next)
}

export const saveStealth = async ({ bodymen: { body }, params, user }, res, next) => {
  try {
    console.log(body.stealth)
    user.stealth  = body.stealth;
    user.save()
    success(res);
  }catch (e) {
    next;
  }
}


export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  User.estimatedDocumentCount(query)
    .then(count => User.find(query, select, cursor)
      .then(users => ({
        rows: users.map((user) => user.view()),
        count
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.view() : null)
    .then(success(res))
    .catch(next)

export const showMe = ({ user }, res) =>
  res.json(user.view(true))

export const create = ({ bodymen: { body } }, res, next) => {

  const {certificate, certificateCa, invitation, email,name, password, nickname } = body
  
  const pki = require('node-forge').pki;

  let caStore;
  console.log(certificateCa)

  try {
      caStore = pki.createCaStore([ certificateCa ]);
  } catch (e) {
      console.log('Failed to load CA certificate (' + e + ')');
      res.status(209).json({message: 'Failed to load CA certificate '});;
      return;
  }

  try {
      const ca = pki.certificateFromPem(certificate)
      //return res.status(209).json({message: pki.verifyCertificateChain(caStore, [ ca ])});
  } catch (e) {
      //handleResponse(new Error('Failed to verify certificate (' + e.message || e + ')'));
      res.status(209).json({message: 'Failed with '+ e.message || e });;
      return;

  }
  
  // res.status(201).json({message: 'success'});

  User.create(body)
     .then((user) => user.view(true))
     .then(success(res, 200))
     .catch((err) => {
       /* istanbul ignore else */
       if (err.name === 'MongoError' && err.code === 11000) {
         res.status(209).json({
           valid: false,
           param: 'email',
           message: 'Email already registered'
         })
       } else {
         next(err)
       }
     })
}
  

export const update = ({ bodymen: { body }, params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((result) => {
      if (!result) return null
      const isAdmin = user.role === 'admin'
      const isSelfUpdate = user.id === result.id
      if (!isSelfUpdate && !isAdmin) {
        res.status(401).json({
          valid: false,
          message: 'You can\'t change other user\'s data'
        })
        return null
      }
      return result
    })
    .then((user) => user ? Object.assign(user, body).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const updatePassword = ({ bodymen: { body }, params, user }, res, next) =>
  User.findById(params.id === 'me' ? user.id : params.id)
    .then(notFound(res))
    .then((result) => {
      if (!result) return null
      const isSelfUpdate = user.id === result.id
      if (!isSelfUpdate) {
        res.status(401).json({
          valid: false,
          param: 'password',
          message: 'You can\'t change other user\'s password'
        })
        return null
      }
      return result
    })
    .then((user) => user ? user.set({ password: body.password }).save() : null)
    .then((user) => user ? user.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  User.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.remove() : null)
    .then(success(res, 204))
    .catch(next)
