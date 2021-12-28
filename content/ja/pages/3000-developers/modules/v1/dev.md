---
title: Dev コントラクト
date: 2021-08-04
permalink: /{{ locale }}/developers/modules/v1/dev/index.html
eleventyNavigation:
  key: v1-dev-module
  parent: developers_modules_v1
  order: 3110
  title: Dev コントラクト
---

## 概要

DEV コントラクトは DEV トークンを管理するコントラクトです。
このコントラクトは ERC-20 に準拠したコントラクトになります

## API

#### deposit( address \_to, uint256 \_amount )

- 引数:

  - `{address} _to`
  - `{number} _amount`

- 戻り値: Boolean

- 使用方法
  　`_to`で指定したアドレスのプロパティに、`_amount`で指定した DEV トークンをステーキングする。

#### depositFrom( address \_from, address \_to, uint256 \_amount )

- 引数:

  - `{address} _from`
  - `{address} _to`
  - `{number} _amount`

- 戻り値: Boolean

- 使用方法
  `_from`で指定されたアドレスから `_to`で指定されたアドレスのプロパティに、 `_amount`で指定された DEV トークンをステーキングする。
  　メソッドを実行する前にステーキングする分の DEV トークンを approved しておく必要があります。

#### totalSupply()

- 引数: 無し

- 戻り値: number

- 使用方法
  DEV トークンの最新の供給量を返します

#### balanceOf( address account )

- 引数:

  - `{address} account`

- 戻り値: number

- 使用方法
  `account`で指定したアドレスの所持 DEV トークン数を返します

#### transfer( address recipient, uint256 amount )

- 引数:

  - `{address} recipient`
  - `{number} amount`

- 戻り値: Boolean

- 使用方法
  `recipient`宛に`amount`分の DEV トークンを送金します

#### transferFrom( address sender, address recipient, uint256 amount )

- 引数:

  - `{address} sender`
  - `{address} recipient`
  - `{number} amount`

- 戻り値: Boolean

- 使用方法
  `sender`が`recipient`宛に`amount`分の DEV トークンを送ります。
  メソッドを実行する前に送金する分の DEV トークンを approved しておく必要があります。

#### allowance( address owner, address spender )

- 引数:

  - `{address} owner`
  - `{address} spender`

- 戻り値: number

- 使用方法
  `approve`関数で`allowed`に割り当てた DEV トークンの値を返します

#### approve( address spender, uint256 amount )

- 引数:

  - `{address} spender`
  - `{number} amount`

- 戻り値: number

- 使用方法
  `spender`宛に残高から`amount`分の DEV トークンを転送することを許可します

#### name()

- 引数: 無し

- 戻り値: string

- 使用方法
  DEV トークン名（Dev）を返します

#### symbol()

- 引数: 無し

- 戻り値: string

- 使用方法
  DEV トークンのシンボル（DEV）を返します

#### decimals()

- 引数: 無し

- 戻り値: number

- 使用方法
  DEV トークンの小数点以下の桁数を返します
