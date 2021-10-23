---
title: Dev コントラクト
date: 2021-08-04
permalink: /{{ locale }}/developers/modules/dev/index.html
eleventyNavigation:
  key: dev-module
  parent: developers_modules
  order: 3110
  title: Dev コントラクト
---

## 概要
DEVコントラクトはDEVトークンを管理するコントラクトです。
このコントラクトはERC-20に準拠したコントラクトになります

## API
#### deposit( address _to, uint256 _amount )

- 引数:
  - `{address} _to`
  - `{number} _amount`

- 戻り値: Boolean

- 使用方法
　`_to`で指定したアドレスのプロパティに、`_amount`で指定したDEVトークンをステーキングする。

#### depositFrom( address _from, address _to, uint256 _amount )

- 引数:
    - `{address} _from`
    - `{address} _to`
    - `{number} _amount`

- 戻り値: Boolean

- 使用方法
  `_from`で指定されたアドレスから `_to`で指定されたアドレスのプロパティに、 `_amount`で指定されたDEVトークンをステーキングする。
　メソッドを実行する前にステーキングする分のDEVトークンをapprovedしておく必要があります。

#### totalSupply()

- 引数: 無し

- 戻り値: number

- 使用方法
DEVトークンの最新の供給量を返します

#### balanceOf( address account )

- 引数:
	- `{address} account`

- 戻り値: number

- 使用方法
`account`で指定したアドレスの所持DEVトークン数を返します

#### transfer( address recipient, uint256 amount )

- 引数:
	- `{address} recipient`
	- `{number} amount`

- 戻り値: Boolean

- 使用方法
`recipient`宛に`amount`分のDEVトークンを送金します

#### transferFrom( address sender, address recipient, uint256 amount )

- 引数:
    - `{address} sender`
    - `{address} recipient`
    - `{number} amount`

- 戻り値: Boolean

- 使用方法
  `sender`が`recipient`宛に`amount`分のDEVトークンを送ります。
  メソッドを実行する前に送金する分のDEVトークンをapprovedしておく必要があります。

#### allowance( address owner, address spender )

- 引数:
    - `{address} owner`
    - `{address} spender`

- 戻り値: number

- 使用方法
  `approve`関数で`allowed`に割り当てたDEVトークンの値を返します

#### approve( address spender, uint256 amount )

- 引数:
    - `{address} spender`
    - `{number} amount`

- 戻り値: number

- 使用方法
  `spender`宛に残高から`amount`分のDEVトークンを転送することを許可します

#### name()

- 引数: 無し

- 戻り値: string

- 使用方法
  DEVトークン名（Dev）を返します

#### symbol()

- 引数: 無し

- 戻り値: string

- 使用方法
  DEVトークンのシンボル（DEV）を返します

#### decimals()

- 引数: 無し

- 戻り値: number

- 使用方法
  DEVトークンの小数点以下の桁数を返します
