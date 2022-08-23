---
title: STokenManager
sidebar_position: 4
---

## Summary

The STokenManager contract is a contract for managing SToken tokens.
This contract is an ERC-721 compliant contract.

### Install

```shell
> npm i -D @devprotocol/i-s-tokens
```

## Interface

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@devprotocol/i-s-tokens/contracts/interfaces/ISTokensManager.sol";

contract usingstokenInterface {
    ISTokensManagerV2 internal STokenQuery;
    /**
    * Network: Ethereum Mainnet
    * Address: 0x50489Ff5f879A44C87bBA85287729D663b18CeD5
    */
    constructor() {
        STokenQuery = ISTokensManagerV2(0x50489Ff5f879A44C87bBA85287729D663b18CeD5);
    }

    /**
    * @dev Queries SToken Data.
    * @param _propertyaddress Property address of particular property to be queried
    * @param _owner address of SToken holder
    * @return uint256[] SToken position data of a particular property
    * @return uint256[] SToken positions held by particular address
    * @return uint256 current token id
    */
    function getSTokenData(
        address _propertyaddress, 
        address _owner
    ) public view 
    returns(uint256[] memory, uint256[] memory, uint256){
        uint256[] memory PropertyPositions = STokenQuery.positionsOfProperty(_propertyaddress);
        uint256[] memory OwnerPositions = STokenQuery.positionsOfOwner(_owner);
        uint256 CurrentTokenID = STokenQuery.currentIndex();
        return (PropertyPositions, OwnerPositions, CurrentTokenID);
    }
    // similarly you can call other functions from the interface
}
```
<span>
	Open in{' '}
	<a href="https://remix.ethereum.org/#url=https://github.com/dev-protocol/docs.devprotocol.xyz/embedd/STokenInterfaceV1.sol">
		Remix
	</a>
</span>

:::tip

Check **Ecosystem Addresses** [here](/developers/ecosystem-addresses)

:::

#### tokenURI( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return: String

- detail
  　 Return the URI corresponding to `_tokenId`.

#### setTokenURIImage( uint256 \_tokenId, string \_data )

- argument:

  - `{number} _tokenId`
  - `{string} _data`

- return: none

- detail
  　 Change the URI corresponding to `_tokenId`.

#### freezeTokenURI( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return: none

- detail
  Fix the uri associated with `_tokenId`. Only the author of the property associated with `_tokenId` can be executed.

#### meltTokenURI( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return: none

- detail
  Unfix the uri associated with `_tokenId`. Only the author of the property associated with `_tokenId` can be executed.

#### positions( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return:

  - `{address} _property`
  - `{number} _amount`
  - `{number} _price`
  - `{number} _cumulativeReward`
  - `{number} _pendingReward`

- detail
  Get the position information associated with `_tokenId`.
  \_positions:The address of the Property as the staking destination
  \_amount:The amount of the new staking position
  \_price:The latest unit price of the cumulative staking reward
  \_cumulativeReward:The cumulative withdrawn reward amount
  \_pendingReward: The pending withdrawal reward amount amount

#### descriptors( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return:

  - `{boolean} _isFreezed`
  - `{address} _freezingUser`
  - `{string} _descriptor`

- detail
  Get customized URI information associated with `_tokenId`.
  \_isFreezed:Whether the descriptor can be changed or not
  \_freezingUser:Authors who have done the Freeze process
  \_descriptor:Customized URI information

#### rewards( uint256 \_tokenId )

- argument:

  - `{number} _tokenId`

- return:

  - `{number} _entireReward`
  - `{number} _cumulativeReward`
  - `{number} _withdrawableReward`

- detail
  Get the reward information associated with `_tokenId`.
  \_entireReward:The reward amount of adding the cumulative withdrawn amount
  to the withdrawable amount
  \_cumulativeReward:The cumulative withdrawn reward amount
  \_withdrawableReward:The withdrawable reward amount

#### positionsOfProperty( address \_property )

- argument:

  - `{address} _property`

- return: number[]

- detail
  Get the tokenId associated with `_property`.

#### positionsOfOwner( address \_owner )

- argument:

  - `{address} _owner`

- return: number[]

- detail
  Get the tokenId owned by `_owner`.
