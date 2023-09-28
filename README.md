# Project Guide

This repository contains code that mints and transfers ERC20 tokens using the SwisstronikJS library for contract interaction.

### Contract Swisstronik Explorer URL

Some tokens have been minted to address: `0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1`

The transaction is available at: https://explorer-evm.testnet.swisstronik.com/tx/0x9e500a5db1efe7cf4f98c204385d38515ba88037261718528a8a89cf6676ab7c

# Get Started

Kindly follow the instructions below to navigate this repository

## Compile

To compile the contract run the command:
`npx hardhat compile`

## Deploy

To deploy the contract run the command:

```
npm run deploy

or

npx hardhat run scripts/deploy.js --network swisstronik
```

## Configuration

Update your contract address and desired amount of tokens in the `scripts/config.js` file

## Minting and Transfer

To mint and Transfer tokens run the command:

```
npm run mint

or

npx hardhat run scripts/mintAndTransferTokens.js --network swisstronik
```
