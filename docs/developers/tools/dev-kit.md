---
title: Dev Kit
sidebar_position: 1
---

## What is Dev Kit?

Provides a toolset for calling Dev Protocol interfaces in JavaScript/TypeScript.

|        | Source                                             |
| ------ | -------------------------------------------------- |
| npm    | https://www.npmjs.com/package/@devprotocol/dev-kit |
| GitHub | https://github.com/dev-protocol/dev-kit-js         |

## Usage

Install from npm.

```bash
npm i @devprotocol/dev-kit
```

Or, use yarn.

```bash
yarn add @devprotocol/dev-kit
```

Dev Kit depends on [ethers.js](https://docs.ethers.io/).
ethers.js is not installed automatically because it is specified in peer dependencies. Install ethers.js in your project.

```bash
npm i ethers
```

Or, use yarn.

```bash
yarn add ethers
```

## Examples

### Example of Retrieving and displaying information about sTokens

`index.js`

```js
import { ethers } from 'ethers'
import { contractFactory, addresses } from '@devprotocol/dev-kit'

// use main net
const registryContractAddress = addresses.eth.main.registry
const provider = new ethers.providers.JsonRpcProvider(
	process.env.WEB3_PROVIDER_URL
)
const contract = contractFactory(provider)
const lockupContractAddress = await contract
	.registry(registryContractAddress)
	.lockup()

// the address of the target property
const propertyAddress = '0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309'

// get property's staking amount
const propertyStakingAmount = await contract
	.lockup(lockupContractAddress)
	.getPropertyValue(propertyAddress)
const stakingAmount = ethers.BigNumber.from(propertyStakingAmount).div(
	new ethers.BigNumber.from(10).pow(18)
)
console.log(
	`${propertyAddress}'s staking amount is ${stakingAmount.toBigInt()} DEV`
)

// get property's rewards
const propertyRewards = await contract
	.lockup(lockupContractAddress)
	.calculateRewardAmount(propertyAddress)
const reward = ethers.BigNumber.from(propertyRewards[0]).div(
	new ethers.BigNumber.from(10).pow(36)
)
console.log(`${propertyAddress}'s rewards is ${reward.toBigInt()} DEV`)
```

`package.json`

```json
{
	"name": "devkit-example",
	"version": "0.0.1",
	"type": "module",
	"license": "MIT",
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"@devprotocol/dev-kit": "^5.8.1",
		"ethers": "^5.5.2"
	}
}
```

run example script (with local ethereum node. like this `http://localhost:8545`):

```shell-session
$ yarn start
yarn run v1.22.17
$ node index.js
0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309's staking amount is 27219 DEV
0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309's rewards is 15848 DEV
✨  Done in 0.60s.
```

run example script (with infura)

```shell-session
$ WEB3_PROVIDER_URL=https://mainnet.infura.io/v3/xxxx yarn start
```

### Other examples

There are other [example codes in the Dev Kit GitHub repository](https://github.com/dev-protocol/dev-kit-js/tree/main/examples) for your reference.
