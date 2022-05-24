---
title: Connect to Metamask to authenticate and display the user's wallet address and possessed DEV
sidebar_position: 1
---

First, I will introduce the finished product to be created this time. Please access it [here](https://27v7x.csb.app/)

This application is an application that connects to Metamask, authenticates, and displays the user's wallet address and possessed DEV.

### Explanation of operation

Please access the following [CodeSandbox](https://codesandbox.io/s/login-with-wallet-build-27v7x)

Select `src/index.ts` from Explore on the left to display the source code.

If you scroll to the bottom, you will find ①.
From now on, I will code from ① to ⑨.

①: Here, the link between the click event of the button and the `clickLoginButton` method, and the code of the processing when the button is pressed are written.
(2): The `clickLoginButton` method accesses Metamask, performs authentication processing, and displays the user's wallet address and possessed DEV. It is a method that does up to.
③: From ③ to ⑦, judge the status of Metamask to determine if you are logged in. The following is defined as the state of Metamask

| Login judgment | MetaMask state                           | Explanation                                                                                       |
| -------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------ |
| Not logged in  | Metamask not installed                   | The browser does not have Metamask installed                                                      |
| Not logged in  | Not connected to Metamask                | Website is not allowed to connect with Metamask                                                   |
| Not logged in  | Not logged in with Metamask              | Not logged in on Metamask                                                                         |
| Not logged in  | Metamask connection network is different | The network to which Metamask connects is different from the network your website expects         |
| Login          | Not applicable to the above conditions   | You can get the wallet address from Metamask and connect to the network that the website expects. |

In ③, it is judged that "Metamask is not installed". Scroll to find the `isMetamask` function. Code the `isMetamask` function as follows:

```tsx
function isMetamask(): boolean {
	return !!window.ethereum && !!window.ethereum.isMetaMask
}
```

When metamask is installed in your browser, `ethereum` will be added to the` window` object. Using this as a judgment material, it returns whether "Metamask is not installed".

④: Next, determine "Not connected to Metamask". Scroll down to find the `connectMetaMask` function. Code the `connectMetaMask` function as follows:

```tsx
async function connectMetaMask(): Promise<boolean> {
	try {
		await window.ethereum.request({ method: 'eth_requestAccounts' })
	} catch (e) {
		if (e.code === 4001) {
			return false
		}
	}
	return true
}
```

To determine "not connected to Metamask", query the address of Ethereum from Metamask. At that time, if the connection between the website and Metamask cannot be established, such as when the user refuses to connect with Metamask, a 4001 code error will be returned, so this is used for judgment.
refer to: https://docs.metamask.io/guide/rpc-api.html#permissions

⑤: Next, determine "not logged in with Metamask". Scroll down to find the `isMetaMaskLogin` function. Code the `isMetaMaskLogin` function as follows:

```tsx
async function isMetaMaskLogin(): Promise<boolean> {
	return !!(await getAccount())
}
```

The `isMetaMaskLogin` function calls the` getAccount` function. The `getAccount` function gets the wallet address from Metamask and returns it.
Code the `getAccount` function as follows:

```tsx
async function getAccount() {
	const accounts = (await window.ethereum.request({
		method: 'eth_accounts',
	})) as string[]

	return accounts[0]
}
```

⑥: Next, determine "the state where the connection network of Metamask is different". Scroll down to find the `isMainNet` function. Code the `isRopsten` function as follows:

```tsx
function isRopsten() {
	return parseInt(window.ethereum.chainId) === 3
}
```

`window.ethereum.childId` returns the following` CHAIN_ID` depending on the network you are connecting to

| Network | CHAIN_ID | Explanation                             |
| :------ | -------: | :-------------------------------------- |
| Mainnet |        1 | Ethereum production environment network |
| Ropsten |        3 | Ethereum Test Network (PoW)             |
| Rinkeby |        4 | Ethereum Test Network (PoA)             |

refer to: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md

⑦: If the checks from ③ to ⑥ do not catch the item, it is considered as "logged in". After this, we will code the post-login process.

⑧: Next, get the user's wallet address and display it. Scroll to find ⑧ and code as follows.

```tsx
const walletAddress = await getAccount()
const addressElement = document.getElementById('address')
addressElement.innerText = walletAddress
```

The `getAccount` function created in ⑤ is used to get the wallet address.

⑨: Next, acquire the user's possessed DEV and display it. Scroll to find the `getBalanceOfDEV` function. Code the `getBalanceOfDEV` function as follows:

```tsx
import { addresses, contractFactory } from '@devprotocol/dev-kit'
import { BigNumber } from '@ethersproject/bignumber'
import Web3 from 'web3'

async function getBalanceOfDEV(walletAddress: string) {
	const provider = new Web3(window.ethereum)
	const client = contractFactory(provider.currentProvider)

	const registryContract = client.registry(addresses.eth.ropsten.registry)

	const addressDEV = await registryContract.token()

	const amountBigNumber = BigNumber.from(
		await client.dev(addressDEV).balanceOf(walletAddress)
	)

	const amount = amountBigNumber.div('1000000000000000000').toString()
	return amount
}
```

> - Add `await` when calling` getBalanceOfDEV`

`contractFactory` is a function declared in` @ devprotocol / dev-kit`, and you can create a `client` by passing the` currentProvider` of `Web3` as an argument. You can use this `client` to operate the Dev Protocol. This time, we are using `client` to get the number of possessed DEVs.

```tsx
const registryContract = client.registry(addresses.eth.ropsten.registry)
```

Dev Protocol contracts are distributed by type, and the address of each contract is managed by `registryContract`. In the above part, we are getting the `registryContract` of the` ropsten` environment. DevProtocol has `main` and` ropsten` environments. In the above part, we are getting the registryContract of the ropsten environment. DevProtocol has main and ropsten environments.

```tsx
const addressDEV = await registryContract.token()
```

In this hands-on, we want to display the number of DEVs we have, so we are returning the address of the `token` contract that handles DEV tokens.

```tsx
const amountBigNumber = BigNumber.from(
	await client.dev(addressDEV).balanceOf(walletAddress)
)
```

The `dev` function is a method for contracts related to DEV tokens. By setting the contract address of the DEV token in the `dev` function and specifying the wallet address of the target person in the `balanceOf` method, the number of DEVs possessed by the target person is returned.

In addition to the `dev` function,` client` has the following functions.

```tsx
export type DevkitContract = {
	readonly allocator: ReturnType<typeof createAllocatorContract>
	readonly market: ReturnType<typeof createMarketContract>
	readonly property: ReturnType<typeof createPropertyContract>
	readonly propertyFactory: ReturnType<typeof createPropertyFactoryContract>
	readonly lockup: ReturnType<typeof createLockupContract>
	readonly withdraw: ReturnType<typeof createWithdrawContract>
	readonly dev: ReturnType<typeof createDevContract>
	readonly registry: ReturnType<typeof createRegistryContract>
	readonly policy: ReturnType<typeof createPolicyContract>
	readonly policyGroup: ReturnType<typeof createPolicyGroupContract>
	readonly metrics: ReturnType<typeof createMetricsContract>
	readonly policyFactory: ReturnType<typeof createPolicyFactoryContract>
}
```

Codebase: https://github.com/dev-protocol/dev-kit-js/blob/372c762539855b794af2e3df5774061d640f61d0/lib/contract.ts

In addition to the `balanceOf` function, the` dev` function has the following functions.

```tsx
export type DevContract = {
	readonly totalSupply: () => Promise<string>
	readonly balanceOf: (address: string) => Promise<string>
	readonly transfer: (to: string, value: string) => Promise<boolean>
	readonly allowance: (from: string, to: string) => Promise<string>
	readonly approve: (to: string, value: string) => Promise<boolean>
	readonly transferFrom: (
		from: string,
		to: string,
		value: string
	) => Promise<boolean>
	readonly name: () => Promise<string>
	readonly symbol: () => Promise<string>
	readonly decimals: () => Promise<string>
	readonly deposit: (to: string, value: string) => Promise<boolean>
	readonly contract: () => Contract
}
```

Codebase: https://github.com/dev-protocol/dev-kit-js/blob/372c762539855b794af2e3df5774061d640f61d0/lib/dev/index.ts

```tsx
const amount = amountBigNumber.div('1000000000000000000').toString()
```

Since the decimal point of the ERC20 token is 18 digits, it is divided to match the decimal point.

This is the end of coding. Let's check the operation.
When you can log in and your wallet address and the number of DEVs you have are displayed on the screen, you are done.
