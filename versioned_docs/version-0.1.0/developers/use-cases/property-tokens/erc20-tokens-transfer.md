---
title: Transfer
position: 2
---

To transfer Property Tokens to others, call `transfer` function.

## Transfer Property Tokens

`transfer` function takes 3 arguments:

1. Recipient address
2. Token amount

The token amount must be a positive integer multiplied by 10^18.

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="Dev Kit JS">
```

```ts
import { clientsProperty } from '@devprotocol/dev-kit'
import { whenDefined } from '@devprotocol/util-ts'
import type { BaseProvider } from '@ethersproject/providers'

// This function transfers the property tokens with hard-coded options, and returns true if success.
export default (provider: BaseProvider, tokenAddress: string) => {
	const clients = await clientsProperty(provider, tokenAddress)
	const property = whenDefined(clients, ([l1, l2]) => l1 ?? l2)
	const result = await whenDefined(property, (contract) =>
		contract.transfer(
			// Address of receiver
			'0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6',
			// Value Multiple of 10^18
			'1000000000000000000'
		)
	)
	return result
}
```

```mdx-code-block
</TabItem>
<TabItem value="Polygon/Arbitrum and their testnets">
```

:::caution
Smart-Contract implementation assumes that, this contract has the property tokens itself for invoking the transfer. If you want to transfer the property tokens from other address, you need to call `transferFrom` function followed by the `approve` function.
:::

```solidity
import "@devprotocol/protocol-v2/contracts/interface/IProperty.sol";

contract MyContract {
    IProperty public property;

    constructor(address _property) public {
        property = IProperty(_property);
    }

    // This function transfers the property tokens with hard-coded options, and returns true if success.
    function transferProperty() external returns(bool) {
        bool result = property.transfer(
            // Address of receiver
            "0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6",
            // Value Multiple of 10^18
            "1000000000000000000"
        );
        return result;
    }
}
```

```mdx-code-block
</TabItem>
<TabItem value="Ethereum">
```

:::caution
Smart-Contract implementation assumes that, this contract has the property tokens itself for invoking the transfer. If you want to transfer the property tokens from other address, you need to call `transferFrom` function followed by the `approve` function.
:::

```solidity
import "@devprotocol/protocol/contracts/interface/IProperty.sol"

contract MyContract {
	IProperty public property;

	constructor(address _property) public {
		property = IProperty(_property);
	}

    // This function transfers the property tokens with hard-coded options, and returns true if success.
	function transferProperty() external returns(bool) {
		bool result = property.transfer(
            // Address of receiver
			"0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6",
            // Value Multiple of 10^18
            "1000000000000000000"
		);
		return result;
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
```

## Side-effects of transfering Property Tokens

The Property Token represents the user’s property group ownership. This token conforms to ERC20 and can be transferred to any wallet address.

Each Property Contract(Token) holder will receive market rewards based on the balance of the Property Contract(Token) they own. This is similar to sharing profit with shareholders as per their ownership in the company.

:::info
Currently, rewards are only created via the staking mechanism when it assures an asset.
:::

A Property Contract in its initial state is not assuring assets (e.g., GitHub repositories).

For a Property to be associated with an asset, a Market Contract must be associated with the Property Contract. The association is established by the authenticatedCallback function for the Market Contract.
