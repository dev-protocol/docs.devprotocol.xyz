---
title: Authentication and Oraclization
---

## Create a Public Signature

A public signature is a signature string that does not pose a security risk when it is published. A public signature is a "string you want to proof (e.g., user ID)" and an "authentication method namespace (defined by a user)" signed with your Ethereum account address. That is, anyone can decrypt with the Ethereum account address.

To generate a new public signature, pass the user-generated signature in the Ethereum wallet and the message used to sign it, a secret message (e.g., an access token), and the authentication method namespace to Khaos' RESTful API.

You can easily request it using [Khaos Kit published on npm](https://www.npmjs.com/package/@devprotocol/khaos-kit). Here's how to create a public signature used in the Dev Protocol's GitHub Market Contract.

```ts
import { sign } from '@devprotocol/khaos-kit'

sign(
	'github-market',
	'mainnet'
)({
	message: 'dev-protocol/protocol',
	signature: 'SIGNATURE',
	secret: 'SECRET',
}).then((res) => {
	console.log(res.publicSignature) // => Generated public signature
	console.log(res.address) // => Signed address
})
```

## Emit on-chain event

Emit smart contract events. Khaos monitors events regularly and starts oraclize as soon as it detects a new event. A user-defined Khaos function declares the smart contract address to be monitored. If the event data has a public signature with the key `publicSignature` , Khaos will pass the stored secret information to the oraclize method. A user-defined Khaos function declares the oraclize method.

> You can quickly develop user-defined Khaos functions with the [Khaos Starter Kit](https://github.com/dev-protocol/khaos-starter-kit).    

Event name and event data can be changed as you wish with user-defined Khaos functions. An example is shown below.

```solidity
event Query(string foo, string publicSignature, address user);

function query(string calldata _foo, string calldata _publicSignature) external {
	emit Query(_foo, _publicSignature, msg.sender);
}
```

When Khaos completes the oraclize, Khaos executes a callback function. The smart contract address to which the callback is called is considered the same as the address that emitted the event.

You can change the callback function name and arguments as you like with user-defined Khaos functions. An example is shown below.

:::tip

We recommend that you verify that the caller of the callback function is Khaos, for example by verifying the caller's address or a unique key that only Khaos knows as an argument.

:::

```solidity
function callback(bool _result) external {
	require(msg.sender == khaos, "sender isn't khaos");
	// Some processing that depends on oracle...
}
```

##  Wait for callback

All you have only to do is wait for a callback from Khaos! 🎉
