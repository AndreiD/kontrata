# Kontrata

EVM-based smart contracts development template using Solidity and Hardhat (and Remix IDE)

## Solidity Contract Style Guide Convention

A good contract, aside from being secure and optimized, is readable.

Please refer here for styling guide rules: https://github.com/ethereum/solidity/blob/v0.5.1/docs/style-guide.rst

## Local Development

```bash
# clean and compile contract and hardhat
$ npm run compile

# check test accounts
$ npm run accounts

# test contract with option to report gas
# IMPORTANT: don't forget to start Ganache or other local ethereum chain!
$ npm run test
$ npm run test:gas

# run linter with option to fix
$ npm run lint
$ npm run lint:fix
```

## Remix IDE
```bash
# To run in Remix, run in root location and open https://remix.ethereum.org/
$ remixd -s ./ --remix-ide https://remix.ethereum.org 

```
## Third-Party Libraries

```bash
# Below are some popular libraries to help smart contracts development

# install latest openzeppelin (https://www.npmjs.com/package/@openzeppelin/contracts)
$ npm i @openzeppelin/contracts

# install latest azuki erc721a (https://www.npmjs.com/package/erc721a)
$ npm i erc721a

# include OpenSea operator filter registry (for on-chain creator's fee implementation)
Download at https://github.com/ProjectOpenSea/operator-filter-registry
```

## Deployment

```bash
# deploy to contract to network
$ npm run deploy_<contract>:<network>
$ npm run deploy_greeter:ganache ...(example)
$ npm run deploy_greeter:goerli ...(example)
$ npm run deploy_greeter:rinkeby ...(example)
```

For successful deployment, console prints looks like this:

```bash
>>> Network is set to goerli
Deployer account: <deployer-wallet-address>
Balance: 12.222449615766618507 ETH
Deploying Greeter contract ...
Verifying Greeter contract ...
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/Greeter.sol:Greeter at 0x093eb7ccAfa165D8D35c6666984de510Be58cBd2
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Greeter on Etherscan.
https://goerli.etherscan.io/address/0x093eb7ccAfa165D8D35c6666984de510Be58cBd2#code
=========================================
Greeter deployed to: 0x093eb7ccAfa165D8D35c6666984de510Be58cBd2
```

## Verification

When verifying with block explorers, uncomment the ff code snippet from `scripts/deploy_*.ts`

```bash
// verify in contract in explorer (etherscan, etc.)
await sleep(1000)
console.log("Verifying Greeter contract ...")
await hre.run("verify:verify", {
    address: greeter.address,
    constructorArguments: ["Kontrata Smart Contracts Template from Nuxify"], // provide if necessary
})
```

For detailed explanation on how hardhat works, check out [Hardhat docs](https://hardhat.org/getting-started).

Made with ❤️ at [Nuxify](https://nuxify.tech)

Proudly used by [Metapad](https://metapad.dev)
