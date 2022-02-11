---
title: List staking properties and withdraw staking
sidebar_position: 3
---

### Hands-on #3

This hands-on get staking property information from GraphQL. First, let's get a list of staking properties using GraphQL. GraphQL can be accessed from the link below.

Mainnet environment
https://explorer.graphql.devprotocol.xyz/

Specify `account_address` in where of` account_lockup` and set the following address to the value of `_ilike` and execute. I think you can get some data
`0x262A038D0bc05B4112c7D58BBfd407810bcfE2aB`
This data will be the data for the staking property. We will use this data to perform hands-on.

> Currently, you cannot search for `account_lockup` in the Ropsten environment.

First, I will introduce the finished product to be created this time. Please access the following URL
https://g90uk.csb.app/

This application gets the property list staking by the person accessing from GraphQL at the time of access and displays only the first one. The property has a button to pull out "1 DEV", and pressing this button will pull out the staking.

> Since `account_lockup` cannot be searched in the Ropsten environment at present, the address of the property that was stakes in the previous hands-on is specified.

[Explanation of operation]
Please access the following URL and open CodeSandbox.
https://codesandbox.io/s/your-staking-and-withdraw-build-g90uk?file=/src/index.ts

Select src / index.ts from Explore on the left to display the source code.
This time, we will code ① to ②.

①: Here, when the page is displayed, the property list that the person accessing from GraphQL is staking will be acquired. Scroll to find the `getStakingPropertyFromRopsten` function. Code the `getStakingPropertyFromRopsten` function as follows:

```tsx
async function getStakingPropertyFromRopsten(address) {
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
		return {
			value: '20000000000000000000',
			property_meta: value,
			property_address: '0xb42612a90d05785c005b292f635871ca28aa10e0',
		}
	})
	return convert
}
```

Queries to GraphQL are queried using fetch. In `fetch` of `body` of `query`, you can paste the query issued by GraphQL as it is.

> Currently, the code is modified because the list of staking properties cannot be obtained in the Ropsten environment.

Let's run it after coding and check that the property name changes

The `getStakingPropertyFromRopsten` function gets the properties of the Ropsten environment. Let's also code the `getStakingPropertyFromMain` function to get the property from the mainnet environment.
Modify the `getStakingPropertyFromMain` function as follows:

```tsx
async function getStakingPropertyFromMain(address) {
	const response = await fetch('https://api.devprotocol.xyz/v1/graphql', {
		method: 'POST',
		headers: {
			'X-Requested-With': 'xhr',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
        query Staking_properties {
          account_lockup(
            where: {account_address: {_ilike: "${address}"}}
          ) {
            value
            property_meta {
              name
            }
            property_address
          }
        }
        `,
		}),
	})
	const json = await response.json()
	const allStakingInfo = json.data.account_lockup
	return allStakingInfo
}
```

For `where` in query, set the` address` passed as an argument.

After coding, let's change the part that calls `* getStakingPropertyFromRopsten *` to call` getStakingPropertyFromMain`.

```tsx
// ① Get a list of properties that are onboard
// const properties = await getStakingPropertyFromRopsten(await getAccount());
const properties = await getStakingPropertyFromMain(await getAccount())
```

Let's run it when we're done coding. If you are staking on Stakes.social, the property name will change.
After checking, set it back to use `getStakingPropertyFromRopsten`

(2): Next, we will code the processing when the Withdraw button is pressed. Scroll to find the `clickWithdrawButton` function. Code the `clickWithdrawButton` function as follows:

```tsx
async function clickWithdrawButton() {
	const propertyAddress = this.dataset.propertyAddress

	// Create Client
	const provider = new Web3(window.ethereum)
	const client = contractFactory(provider.currentProvider)

	// Get the address of the Dev Protocol on the ropsten network
	const registryContract = client.registry(addresses.eth.ropsten.registry)

	// Since withdraw is included in the lockup contract, we get the address of the lockup contract
	const addressLockup = await registryContract.lockup()

	// Convert to 1DEV = 1000000000000000000
	const amountBigNumber = BigNumber.from('1')
	const amount = amountBigNumber.mul('1000000000000000000').toString()

	// withdraw (`property address`,` withdrawal amount`)
	const result = await client
		.lockup(addressLockup)
		.withdraw(propertyAddress, amount)

	result ? alert('Successful withdrawal') : alert('Failed to withdraw')
}
```

The first half is the one that created the `client` of Dev-kit-js that was coded in the previous hands-on.

```tsx
// Create Client
const provider = new Web3(window.ethereum)
const client = contractFactory(provider.currentProvider)

// Get the address of the Dev Protocol on the ropsten network
const registryContract = client.registry(addresses.eth.ropsten.registry)

// Since withdraw is included in the lockup contract, we get the address of the lockup contract
const addressLockup = await registryContract.lockup()
```

This time I will pull out 1 DEV, but I will change it to 18 digits to match the unit of DEV.
I am using a library because JS cannot handle numbers with a large number of digits.

```tsx
// Convert to 1DEV = 1000000000000000000
const amountBigNumber = BigNumber.from('1')
const amount = amountBigNumber.mul('1000000000000000000').toString()
```

Once you have the address of the `lockup` contract, pass it to` lockup` and call the `withdraw` function to pull the staking.

```tsx
// withdraw (`property address`,` withdrawal amount`)
const result = await client.lockup(addressLockup).withdraw(propertyAddress, '1')

result ? alert('Successful withdrawal') : alert('Failed to withdraw')
```

This is the end of coding. Let's check the operation.
First, log in, press the Withdraw button, and when the message "Successfully withdrawn" is displayed, you are done.

Let's check with Etherscan. Etherscan is a website where you can check Ethereum transactions, and the transactions you stake this time are also recorded. Let's search by the address of the lockup contract and look at the log.
https://ropsten.etherscan.io/address/0xb8b7a92A716318F2CCed7eA856BE029969552582
