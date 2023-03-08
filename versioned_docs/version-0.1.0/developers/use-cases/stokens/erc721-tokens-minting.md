---
title: ERC-721 tokens minting
position: 1
---

In Dev Protocol, ERC-721 tokens indicate a staking position for any of Property Tokens, have a specially extended interface, and are referred to as sTokens.

## Mint ERC-721 tokens

Immediately mint the users ERC-721 tokens by executing `depositToProperty` function of Lockup contract.

`depositToProperty` function takes 3 arguments:

1. Property Tokens address
2. Staking amount
3. Bytes32 payload (Optional)

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="Dev Kit JS">
```

:::info
To deposit DEV on any Property, the contract will request pre-approval of DEV. But Dev Kit JS has a comprehensive API to handle the process. `positionsCreate` from Agent API wraps the functionality of `depositToProperty` as well as returns the approval status.
:::

```ts
import { positionsCreate } from '@devprotocol/dev-kit/agent'
import { whenDefined } from '@devprotocol/util-ts'
import type { BaseProvider } from '@ethersproject/providers'

// This function mints an ERC-721 tokens by staking the specified staking amount to specified property, and returns the new tokenId.
export default (provider: BaseProvider) => {
	const from = (provider as Web3Provider).getSigner().getAddress()
	const start = await positionsCreate({
		provider,
		from,
		// Property address
		destination: '0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6',
		// Staking Value in Multiple of 10^18
		amount: '1000000000000000000',
		// Payload
		payload: '0x7468697320697320616e206578616d706c650000000000000000000000000000'
	})
	// When approval is needed, start.approvalNeeded is true, and start.approveIfNeeded does send the approval transaction. When approval is not needed, start.approvalNeeded is false, and start.approveIfNeeded does not send anything
	const approveIfNeeded = await whenDefined(start, (x) => x.approveIfNeeded())
	// When approval is needed, approveIfNeeded.waitNeeded is true, and start.waitOrSkipApproval does wait until confirmed the transaction. When approval is not needed, approveIfNeeded.waitNeeded is false, and start.waitOrSkipApproval does not do anything and resolve immediately
	const waitOrSkipApproval = await whenDefined(approveIfNeeded, (x) => x.waitOrSkipApproval())

	const stake = await whenDefined(waitOrSkipApproval, (x) => x.run())
	const staked = await whenDefined(stake, (x) => x.wait())
	// Staking transaction confirmed on-chain!
	...
```

```mdx-code-block
</TabItem>
<TabItem value="Polygon/Arbitrum and their testnets">
```

:::caution
Smart-Contract implementation assumes that Lockup contract has the spending approval for the DEV token
:::

```solidity
// to be updated...
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
<TabItem value="Ethereum">
```

:::caution
Smart-Contract implementation assumes that Lockup contract has the spending approval for the DEV token
:::

```solidity
// to be updated...
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
</Tabs>
```
