---
title: Display registered properties and perform staking
sidebar_position: 2
---

## Hands-on #2

This hands-on displays the projects registered in the Dev Protocol (called properties in the code). Dev Protocol data can be called by GraphQL. First, let's look at the data using GraphQL. GraphQL can be accessed from the link below.

#### Mainnet environment

- https://explorer.graphql.devprotocol.xyz/

Let's search for properties that are onboard.

> You cannot search for properties that are currently onboard in the Ropsten environment.

### How to use

First, I will introduce the finished product to be created this time. Please access the following URL:

- https://xfxyq.csb.app/

This application gets the property list from GraphQL at the time of access and displays only the first one. The property has a button to stake "1 DEV", and pressing this button will stake.

### Explanation of operation

Please access the following URL and open CodeSandbox.:

- https://codesandbox.io/s/display-property-and-staking-build-xfxyq?file=/src/index.ts

Select src / index.ts from Explore on the left to display the source code.
If you scroll to the bottom, you will find ①.

> This time, we will code the ① & ②.

①: Here, when the page is displayed, get the list of properties from GraphQL and return it. Scroll to find the `getPropertyFromRopsten` function. Code the `getPropertyFromRopsten` function as follows:

```tsx
async function getPropertyFromRopsten() {
	// Get property information from GraphQL
	const response = await fetch(
		'https://devprtcl-event-ropsten.azurewebsites.net/v1/graphql',
		{
			method: 'POST',
			headers: {
				'X-Requested-With': 'xhr',
				'Content-Type': 'application/json',
				'x-hasura-admin-secret': 'SjV2f9iWscDxFj4KU',
			},
			body: JSON.stringify({
				query: `
          query MyQuery {
            property_meta(limit: 3) {
              name
              property
            }
          }
        `,
			}),
		}
	)
	const json = await response.json()
	const convert = Array.from(json.data.property_meta).map((value) => {
		return { property_meta: value }
	})
	return convert
}
```

Queries to GraphQL are queried using `fetch`. In `query` of` body` of `fetch`, you can paste the query issued by GraphQL as it is.

- Originally, `property_authentication` is specified in the query, but since it does not work in the Ropsten environment,` property_meta` is specified.

Let's run it after coding and check that the property name changes

The `getPropertyFromRopsten` function gets the properties of the Ropsten environment. Let's also code the `getPropertyFromMain` function to get the property from the mainnet environment.

Modify the `getPropertyFromMain` function as follows:

```tsx
async function getPropertyFromMain() {
	const response = await fetch('https://api.devprotocol.xyz/v1/graphql', {
		method: 'POST',
		headers: {
			'X-Requested-With': 'xhr',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
        query property_stake_social_onboard {
          property_authentication(
            order_by: {property_creation: {block_number: desc}}
            limit: 3
          ) {
            property_meta {
              name
              property
            }
          }
        }
        `,
		}),
	})
	const json = await response.json()
	const allCreatorInfo = json.data.property_authentication
	return allCreatorInfo
}
```

After coding, let's change the part that calls `getPropertyFromRopsten` to call` getPropertyFromMain`.

```tsx
// ① Get a list of properties that are onboard
// const properties = await getPropertyFromRopsten();
const properties = await getPropertyFromMain()
```

When you're done coding, run it and see if the property name changes.
After checking, revert to using getPropertyFromRopsten

②: Next, code the processing when the Staking button is pressed. Scroll to find the `clickStakingButton` function. Code the `clickStakingButton` function as follows:

```tsx
async function clickStakingButton() {
	const propertyAddress = this.dataset.propertyAddress

	// Create Client
	const provider = new Web3(window.ethereum)
	const client = contractFactory(provider.currentProvider)

	// Get the address of the Dev Protocol on the ropsten network
	const registryContract = client.registry(addresses.eth.ropsten.registry)
	const addressDev = await registryContract.token()

	// Convert to 1DEV = 1000000000000000000
	const amountBigNumber = BigNumber.from('1')
	const amount = amountBigNumber.mul('1000000000000000000').toString()

	// deposit (`property address`,` staking amount`)
	const result = await client.dev(addressDev).deposit(propertyAddress, amount)

	return result ? alert('Successful staking') : alert('Staking failed')
}
```

The first half is the one that created the `client` of Dev-kit-js that was coded in the previous hands-on.

```tsx
const propertyAddress = this.dataset.propertyAddress

// Create Client
const provider = new Web3(window.ethereum)
const client = contractFactory(provider.currentProvider)
```

The `deposit` function for staking is included in the DEV token contract, so we are getting the address of the DEV token contract.

```tsx
// Get the address of the Dev Protocol on the ropsten network
const registryContract = client.registry(addresses.eth.ropsten.registry)
const addressDev = await registryContract.token()
```

This time I will stake 1DEV, but I will change it to 18 digits to match the unit of 1DEV.
I am using a library because JS cannot handle numbers with a large number of digits.

```tsx
// Convert to 1DEV = 1000000000000000000
const amountBigNumber = BigNumber.from('1')
const amount = amountBigNumber.mul('1000000000000000000').toString()
```

Staking is performed by setting the address of the DEV token contract in the `dev` function of` client` and calling the `deposit` function. When staking is complete, the return value will be `true`

```tsx
// deposit (`property address`,` staking amount`)
const result = await client.dev(addressDev).deposit(propertyAddress, amount)
```

In addition to `deposit`, the` dev` function has the following functions

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

This is the end of coding. Let's check the operation.
First, log in, press the Staking button, and when the message "Staking was successful" is displayed, you are done.

Let's check with Etherscan. Etherscan is a website where you can check Ethereum transactions, and the transactions you stake this time are also recorded. Let's search by the address of the DEV token contract and look at the log.
https://ropsten.etherscan.io/address/0x5312f4968901Ec9d4fc43d2b0e437041614B14A2
