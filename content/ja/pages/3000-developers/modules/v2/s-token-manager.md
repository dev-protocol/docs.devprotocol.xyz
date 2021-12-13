---
title: STokenManager コントラクト
date: 2021-12-09
permalink: /{{ locale }}/developers/modules/v2/s-token-manager/index.html
eleventyNavigation:
  key: v2-s-token-manager-module
  parent: developers_modules_v2
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
  　`_tokenId`に対応したURIを返却する。

#### setTokenURIImage( uint256 \_tokenId, string \_data )

- 引数:

  - `{number} _tokenId`
  - `{string} _data`

- 戻り値: なし

- 使用方法
  　`_tokenId`に対応したURIを変更する。


#### freezeTokenURI( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: なし

- 使用方法
  `_tokenId`に紐づくuriを固定化する。`_tokenId`に紐づくpropertyのauthorしか実行できない。

#### meltTokenURI( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: なし

- 使用方法
  `_tokenId`に紐づくuriの固定を解除する。`_tokenId`に紐づくpropertyのauthorしか実行できない。

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
  _positions:ステーキングしたpropertyアドレス
  _amount:ステーキングしたDevトークンの数
  _price:ステーキング報酬の最新単価
  _cumulativeReward:引き出した報酬の累積額
  _pendingReward: 保留中の報酬金額

#### descriptors( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: 
  - `{boolean} _isFreezed`
  - `{address} _freezingUser`
  - `{string} _descriptor`

- 使用方法
  `_tokenId`に紐づく、カスタマイズされたURI情報を取得する
  _isFreezed:固定化されている場合、true。固定化されている場合、変更ができない
  _freezingUser:固定化を実行したウォレットアドレス
  _descriptor:カスタマイズされたURI情報


#### rewards( uint256 \_tokenId )

- 引数:

  - `{number} _tokenId`

- 戻り値: 
  - `{number} _entireReward`
  - `{number} _cumulativeReward`
  - `{number} _withdrawableReward`

- 使用方法
  `_tokenId`に紐づく、報酬情報を取得する
  _entireReward:引き出し可能額に累積引き出し額を加算した報酬額
  _cumulativeReward:引き出した報酬の累積額
  _withdrawableReward:引き出し可能な報酬額

#### positionsOfProperty( address \_property )

- 引数:

  - `{address} _property`

- 戻り値: number[]

- 使用方法
  `_property`に紐づく、tokenIdを取得する

#### positionsOfOwner( address \_owner )

- 引数:

  - `{address} _owner`

- 戻り値: number[]

- 使用方法
  `_owner`が所持する、tokenIdを取得する
