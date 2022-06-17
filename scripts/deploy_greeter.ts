import hre from 'hardhat'
const fs = require('fs-extra')

async function main() {
  // remove caches and recompile
  fs.removeSync('cache')
  fs.removeSync('artifacts')
  await hre.run('compile')

  // deployer info
  let [deployer] = await hre.ethers.getSigners()
  let deployerAddress = await deployer.getAddress()
  let account = await hre.ethers.utils.getAddress(deployerAddress)
  let balance = await deployer.getBalance()

  let greeter
  let network = process.env.NETWORK ? process.env.NETWORK : 'rinkeby'

  console.log(`>>> Network is set to ${network}`)
  console.log(`Deployer account: ${account}`)
  console.log(`Balance: ${hre.ethers.utils.formatEther(balance)} ETH`)

  // get and deploy contract
  const Greeter = await hre.ethers.getContractFactory('Greeter')
  console.log("Deploying Greeter contract ...")
  const deployed = await Greeter.deploy('Hello, Hardhat!')
  greeter = await deployed.deployed()

  // verify in contract in explorer (etherscan, etc.)
  await sleep(1000)
  console.log("Verifying Greeter contract ...")
  await hre.run("verify:verify", {
      address: greeter.address,
      constructorArguments: ["Hello, Hardhat!"],
  })

  console.log("=========================================");
  console.log('Greeter deployed to:', greeter.address)
}

/// helper functions
function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
