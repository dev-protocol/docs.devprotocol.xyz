---
title: STokenManager
---

## Summary

The STokenManager contract is a contract for managing SToken tokens.
This contract is an ERC-721 compliant contract.

## API

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
