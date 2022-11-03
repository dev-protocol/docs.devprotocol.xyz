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

```ts
import { clientsLockup } from '@devprotocol/dev-kit'
import { whenDefined } from '@devprotocol/util-ts'
import type { BaseProvider } from '@ethersproject/providers'

// This function mints an ERC-721 tokens by staking the specified staking amount to specified property, and returns the new tokenId.
export default (provider: BaseProvider) => {
	const clients = await clientsLockup(provider)
	const lockup = whenDefined(clients, ([l1, l2]) => l1 ?? l2)
	// without payload
	const sTokenIdWithout = await whenDefined(lockup, (contract) =>
		contract.depositToProperty(
			// Property address
			'0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6',
			// Staking Value in Multiple of 10^18
			'1000000000000000000'
		)
	)
	// with payload
	const sTokenIdWith = await whenDefined(lockup, (contract) =>
		contract.depositToProperty(
			// Property address
			'0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6',
			// Staking Value in Multiple of 10^18
			'1000000000000000000',
			// Payload
			'0x7468697320697320616e206578616d706c650000000000000000000000000000'
		)
	)
	return [sTokenIdWithout, sTokenIdWith]
}
```

```mdx-code-block
</TabItem>
<TabItem value="Polygon/Arbitrum and their testnets">
```

```solidity
import "@devprotocol/protocol-v2/contracts/interface/ILockup.sol";

contract MyContract {
    ILockup public lockup;

    constructor(address _lockup) public {
        lockup = ILockup(_lockup);
    }

    // This function mints an ERC-20 tokens with hard-coded options, and returns the new token address.
    function mintWithOutPayload() external returns(uint256) {
        // minting without payload
        uint256 sTokenIdWithout  = lockup.depositToProperty(
            // Property address
            0xAdC4f7E2CF26a30b9763D6aD6788176173EFEc05,
            // Staking Value in Multiple of 10^18
            1000000000000000000

        );
        return sTokenIdWithout;
    }
        // minting with payload
    function mintWithPayload() external returns(uint256) {
        bytes32 payload = 0x7468697320697320616e206578616d706c650000000000000000000000000000;
        uint256 sTokenIdWith = lockup.depositToProperty(
            // Property address
            0xAdC4f7E2CF26a30b9763D6aD6788176173EFEc05,
            // Staking Value in Multiple of 10^18
            1000000000000000000,
            // Payload
            payload
        );
        return sTokenIdWith;
    }
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
<TabItem value="Ethereum">
```

```solidity
import "@devprotocol/protocol/contracts/interface/ILockup.sol";

contract MyContract {
    ILockup public lockup;

    constructor(address _lockup) public {
        lockup = ILockup(_lockup);
    }

    // This function mints an ERC-20 tokens with hard-coded options, and returns the new token address.
    function mintWithOutPayload() external returns(uint256) {
        // minting without payload
        uint256 sTokenIdWithout  = lockup.depositToProperty(
            // Property address
            0xAdC4f7E2CF26a30b9763D6aD6788176173EFEc05,
            // Staking Value in Multiple of 10^18
            1000000000000000000

        );
        return sTokenIdWithout;
    }
        // minting with payload
    function mintWithPayload() external returns(uint256) {
        bytes32 payload = 0x7468697320697320616e206578616d706c650000000000000000000000000000;
        uint256 sTokenIdWith = lockup.depositToProperty(
            // Property address
            0xAdC4f7E2CF26a30b9763D6aD6788176173EFEc05,
            // Staking Value in Multiple of 10^18
            1000000000000000000,
            // Payload
            payload
        );
        return sTokenIdWith;
    }
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
</Tabs>
```
