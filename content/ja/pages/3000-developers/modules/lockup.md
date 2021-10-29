---
title: Lockup コントラクト
date: 2021-10-29
permalink: /{{ locale }}/developers/modules/lockup/index.html
eleventyNavigation:
key: lockup-module
parent: developers_modules
order: 3140
title: Market コントラクト
---

## 概要

## API

#### depositToProperty( address \_property, uint256 \_amount )

- 引数:

  - `{address} _property`
  - `{number} _amount`

- 戻り値: number

- 使用方法

#### depositToPosition( unit256 \_tokenId, uint256 \_amount )

- 引数:

  - `{number} _tokenId`
  - `{number} _amount`

- 戻り値: boolean

- 使用方法

#### getLockedupProperties()

- 引数:なし

- 戻り値: object

- 使用方法

#### update()

- 引数:なし

- 戻り値: なし

- 使用方法

#### withdrawByPosition( unit256 \_tokenId, uint256 \_amount )

- 引数:

  - `{number} _tokenId`
  - `{number} _amount`

- 戻り値: boolean

- 使用方法

#### calculateCumulativeRewardPrices()

- 引数:なし

- 戻り値: array

- 使用方法

#### calculateRewardAmount( address \_property )

- 引数:

  - `{address} _property`

- 戻り値: array

- 使用方法

#### totalLockedForProperty( address \_property )

- 引数:

  - `{address} _property`

- 戻り値: number

- 使用方法

#### totalLocked()

- 引数:なし

- 戻り値: number

- 使用方法

#### calculateWithdrawableInterestAmountByPosition( number \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: number

- 使用方法

#### cap()

- 引数:なし

- 戻り値: number

- 使用方法

#### updateCap( unit256 \_cap )

- 引数:

  - `{number} _cap`

- 戻り値: number

- 使用方法
