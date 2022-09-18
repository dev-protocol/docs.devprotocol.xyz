---
title: ERC-20 tokens minting
position: 1
---

ERC-20 tokens minted by the interface of Dev Protocol have an extended interface that supports staking, revenue sharing, etc., and are referred to in the whitepaper as Property Tokens.

## Mint ERC-20 tokens

Immediately mint your ERC-20 tokens by executing `create` function of PropertyFactory contract.

`create` function takes 3 arguments:

1. Token name
2. Token symbol
3. Author address

Token name/symbol are mapped to the token name/symbol of the newly minted ERC-20 tokens. The author address must be the same address as the transaction sender for later ownership authentication and ERC-721 token customization.

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="Dev Kit JS">
```

```ts
import { clientsPropertyFactory } from '@devprotocol/dev-kit'
import { whenDefined } from '@devprotocol/util-ts'
import type { BaseProvider } from '@ethersproject/providers'

// This function mints an ERC-20 tokens with hard-coded options, and returns the new token address.
export default (provider: BaseProvider) => {
	const clients = await clientsPropertyFactory(provider)
	const propertyFactory = whenDefined(clients, ([l1, l2]) => l1 ?? l2)
	const tokenAddress = await whenDefined(propertyFactory, (contract) =>
		contract.create(
			// Token name
			'My Token',
			// Token symbol
			'MYT',
			// Author address
			'0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6'
		)
	)
	return tokenAddress
}
```

`clientsPropertyFactory` detects chains from a given provider and returns an array of contract instances. The first element of the array is the mainnet (v1 interface) contract and the second element of the array is the L2 (v2 interface) contract.

```mdx-code-block
</TabItem>
<TabItem value="Polygon/Arbitrum and their testnets">
```

```solidity
import "@devprotocol/protocol-v2/contracts/interface/IPropertyFactory.sol"

contract MyContract {
	IPropertyFactory public propertyFactory;

	constructor(address _propertyFactory) public {
		propertyFactory = IPropertyFactory(_propertyFactory);
	}

	// This function mints an ERC-20 tokens with hard-coded options, and returns the new token address.
	function mint() external returns(address) {
		address tokens = propertyFactory.create(
			// Token name
			"My Token",
			// Token symbol
			"MYT",
			// Author address
			"0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6"
		);
		return tokens;
	}
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for PropertyFactory contract addresses.

```mdx-code-block
</TabItem>
<TabItem value="Ethereum">
```

```solidity
import "@devprotocol/protocol/contracts/interface/IPropertyFactory.sol"
import "@devprotocol/protocol/contracts/interface/IAddressConfig.sol"

contract MyContract {
	IAddressConfig public addressConfig;

	constructor(address _addressConfig) public {
		addressConfig = IAddressConfig(_addressConfig);
	}

	// This function mints an ERC-20 tokens with hard-coded options, and returns the new token address.
	function mint() external returns(address) {
		IPropertyFactory propertyFactory = addressConfig.propertyFactory();
		address tokens = propertyFactory.create(
			// Token name
			"My Token",
			// Token symbol
			"MYT",
			// Author address
			"0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6"
		);
		return tokens;
	}
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for AddressConfig contract addresses.

```mdx-code-block
</TabItem>
</Tabs>
```

## Mint and authentication

To mint a tokens and authenticate at the same time, use the `createAndAuthenticate` function.

:::note
TODO: To be described
:::
