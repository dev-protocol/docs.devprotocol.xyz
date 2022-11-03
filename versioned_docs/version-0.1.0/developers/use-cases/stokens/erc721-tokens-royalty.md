---
title: ERC-721 royalty
position: 2
---

In Dev Protocol, ERC-721 tokens indicate a staking position for any of Property Tokens, have a specially extended interface, and are referred to as sTokens.

## Set Royalty for STokens
Royalty is a percentage value used to calculate the royalty-amount against the sale value of an NFT

[ERC20](./../property-tokens/erc20-tokens-minting.md) owners or simply the property Author can set the royalty by executing the `setSTokenRoyaltyForProperty` function of STokenManager contract.

`setSTokenRoyaltyForProperty` function takes 3 arguments:

1. Property Tokens address
2. Royaly amount

```mdx-code-block
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs>
<TabItem value="Dev Kit JS">
```

```ts
import { clientsSTokens } from '@devprotocol/dev-kit'
import { whenDefined } from '@devprotocol/util-ts'
import type { BaseProvider } from '@ethersproject/providers'

// This function Sets a resale royalty for the passed Property Tokens's STokens & returns latest royalty value of a particular property's STokens
export default async (provider: BaseProvider) => {
    const clients = await clientsSTokens(provider)
    const sToken = whenDefined(clients, ([l1, l2]) => l1 ?? l2)
    await whenDefined(sToken, (contract) =>
        contract.setSTokenRoyaltyForProperty(
            // Property address
            '0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6',
            // Royalty value (between 0 to 100)
            '10'
        )
    )

    const royalty = await whenDefined(sToken, (contract) =>
        contract.royaltyOf(
            // Property address
            '0xDbc05b1eCB4fdaEf943819C0B04e9ef6df4bAbd6'
        )
    )
    return royalty
}
```

```mdx-code-block
</TabItem>
<TabItem value="Polygon/Arbitrum and their testnets">
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@devprotocol/i-s-tokens/contracts/interfaces/ISTokensManagerV2.sol";

contract usingstokenInterface {
    ISTokensManagerV2 internal STokenQuery;
    /**
    * Network: Polygon Mainnet
    * Address: 0x89904De861CDEd2567695271A511B3556659FfA2
    */
    constructor() {
        STokenQuery = ISTokensManagerV2(0x89904De861CDEd2567695271A511B3556659FfA2);
    }

    /**
    * @dev Sets a resale royalty for the passed Property Tokens's STokens
    * @param _propertyaddress Property address of particular property to set royalty for
    * @param _royalty Royalty value (between 0 to 100)
    * @return uint24 latest royalty value of a particular property's STokens
    */
    function sTokenroyalty(
        address _propertyaddress,
        uint256 _royalty
    ) public view
    returns(uint24){
        STokenQuery.setSTokenRoyaltyForProperty(_propertyaddress, _royalty);
        uint24 newRoyalty = STokenQuery.royaltyOf(_propertyaddress);

    }
    // similarly you can call other functions from the interface
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
<TabItem value="Ethereum">
```

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@devprotocol/i-s-tokens/contracts/interfaces/ISTokensManager.sol";

contract usingstokenInterface {
    ISTokensManager internal STokenQuery;
    /**
    * Network: Ethereum Mainnet
    * Address: 0x50489Ff5f879A44C87bBA85287729D663b18CeD5
    */
    constructor() {
        STokenQuery = ISTokensManager(0x50489Ff5f879A44C87bBA85287729D663b18CeD5);
    }

    /**
    * @dev Sets a resale royalty for the passed Property Tokens's STokens
    * @param _propertyaddress Property address of particular property to set royalty for
    * @param _royalty Royalty value (between 0 to 100)
    * @return uint24 latest royalty value of a particular property's STokens
    */
    function sTokenroyalty(
        address _propertyaddress,
        uint256 _royalty
    ) public view
    returns(uint24){
        STokenQuery.setSTokenRoyaltyForProperty(_propertyaddress, _royalty);
        uint24 newRoyalty = STokenQuery.royaltyOf(_propertyaddress);

    }
    // similarly you can call other functions from the interface
}
```

See [Ecosystem Addresses](../../ecosystem-addresses.md) for lockup contract addresses.

```mdx-code-block
</TabItem>
</Tabs>
```
