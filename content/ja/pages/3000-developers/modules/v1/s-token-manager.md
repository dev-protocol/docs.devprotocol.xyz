---
title: STokenManager コントラクト
date: 2021-12-09
permalink: /{{ locale }}/developers/modules/v1/s-token-manager/index.html
eleventyNavigation:
  key: v1-s-token-manager-module
  parent: developers_modules_v1
  order: 3150
  title: STokenManager コントラクト
---

## 概要

STokenManager コントラクトは SToken を管理するコントラクトです。
このコントラクトは ERC-721 に準拠したコントラクトになります

## API

#### tokenURI( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: String

- 使用方法
  　`_tokenId`に対応した URI を返却する。

#### setTokenURIImage( uint256 \_tokenId, string \_data )

- 引数:

  - `{number} _tokenId`
  - `{string} _data`

- 戻り値: なし

- 使用方法
  　`_tokenId`に対応した URI を変更する。

#### freezeTokenURI( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: なし

- 使用方法
  `_tokenId`に紐づく uri を固定化する。`_tokenId`に紐づく property の author しか実行できない。

#### isFreezed( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: boolean

- 使用方法
  `_tokenId`に紐づく uri が固定化されているか確認する。

#### positions( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値:

  - `{address} _property`
  - `{number} _amount`
  - `{number} _price`
  - `{number} _cumulativeReward`
  - `{number} _pendingReward`

- 使用方法
  `_tokenId`に紐づくポジション情報を取得する
  \_positions:ステーキングした property アドレス
  \_amount:ステーキングした Dev トークンの数
  \_price:ステーキング報酬の最新単価
  \_cumulativeReward:引き出した報酬の累積額
  \_pendingReward: 保留中の報酬金額

#### rewards( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値:

  - `{number} _entireReward`
  - `{number} _cumulativeReward`
  - `{number} _withdrawableReward`

- 使用方法
  `_tokenId`に紐づく、報酬情報を取得する
  \_entireReward:引き出し可能額に累積引き出し額を加算した報酬額
  \_cumulativeReward:引き出した報酬の累積額
  \_withdrawableReward:引き出し可能な報酬額

#### positionsOfProperty( address \_property )

- 引数:

  - `{address} _property`

- 戻り値: number[]

- 使用方法
  `_property`に紐づく、tokenId を取得する

#### positionsOfOwner( address \_owner )

- 引数:

  - `{address} _owner`

- 戻り値: number[]

- 使用方法
  `_owner`が所持する、tokenId を取得する
