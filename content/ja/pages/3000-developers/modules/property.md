---
title: Property コントラクト
date: 2021-08-04
permalink: /{{ locale }}/developers/modules/property/index.html
eleventyNavigation:
  key: property-module
  parent: developers_modules
  order: 3120
  title: Property コントラクト
---

## Summary

Property Contract manages Property tokens. Property tokens are issued by Dev Protocol, conforming to ERC-20. Property tokens can be freely issued by anyone without any limitations.

Property tokens hold various authentication result of the users. Authentication is done by Market.

In order to activate the staking of Property tokens, issuers of them need to authenticate their tokens at any one of Markets.

In Dev Protocol, Property tokens have a function to get reward by staking DEV tokens, although there is no limitations on its use as they conform to ERC-20.

Property tokens are often optimized in the context, and are also called Creator tokens, Project tokens and Social tokens.

## Authentication of Property tokens

You can associate several activities with Property tokens by authenticating them at Market. Accounts to execute authentication are limited to the accounts with `author` address of Property tokens.

![Alice's Property tokens](/content/{{ locale }}/images/developers/modules/property/property-tokens.png)

Since Property tokens can be created freely, they can be combined with authentication freely as well. For example, you can authenticate 5 activities with one Property token, or you can also authenticate 5 activities with 5 Property tokens.

Although the mechanism of authentication differs Market by Market, its interface is `Market.authentification` in common.

## Deauthentication

Authors of Property tokens can nullify the results that were once authenticated. Its interface is `Market.deauthenticate`.

## Reward allocation function for Property tokens

Holders of Property tokens obtain their creator reward of DEV tokens in proportion to their ownership ratio.

For example, there is a Property token that has collected staking from users and has creator reward of 4,000 DEV.

![Reward splitting](/content/{{ locale }}/images/developers/modules/property/reward-splitting.png)

## Transfer Property tokens

For `transfer` function of Property tokens and `transferFrom` function, you need to pay your reward off before transferring Property tokens.

Payers of Property tokens don’t receive reward after the transfer, although receivers get reward after the transmission.

![Transfer Property](/content/{{ locale }}/images/developers/modules/property/transfer-property.png)

In this example, Alice is a 100% holder in Day 1, and transfers 30% to Bob in Day 2. The reward that Alice can get is 100% reward of Day 1 and 70% reward of Day 2. The reward that Bob can get is 0% reward of Day 1 and 30% reward of Day 2.

Since the share of reward changes before and after the transfer of Property tokens, Alice and Bob need to pay off the reward that hasn't been withdrawn before transferring Property tokens.

For `transfer` function of Property tokens and `transferFrom` function, payoff is done automatically. Gas fees for the transfer of Property tokens would be more expensive, because they require more process compared to general ERC-20 tokens.

## API

#### approve( address spender, uint256 amount )

- 引数:

	- `{address} spender`
	- `{number} amount`

- 戻り値: number

- 使用方法
  `spender`宛に残高から`amount`分の プロパティトークンを転送することを許可します

#### name()

- 引数: 無し

- 戻り値: string

- 使用方法
  プロパティトークン名を返します

#### symbol()

- 引数: 無し

- 戻り値: string

- 使用方法
  プロパティトークンのシンボルを返します

#### decimals()

- 引数: 無し

- 戻り値: number

- 使用方法
  プロパティトークンの小数点以下の桁数を返します

#### totalSupply()

- 引数: 無し

- 戻り値: number

- 使用方法
  プロパティトークンの最新の供給量を返します

#### balanceOf( address account )

- 引数:
	- `{address} account`

- 戻り値: number

- 使用方法
  `account`で指定したアドレスの所持 プロパティトークン数を返します

#### transfer( address recipient, uint256 amount )

- 引数:
	- `{address} recipient`
	- `{number} amount`

- 戻り値: Boolean

- 使用方法
  `recipient`宛に`amount`分の プロパティトークンを送金します


#### allowance( address owner, address spender )

- 引数:
	- `{address} owner`
	- `{address} spender`

- 戻り値: number

- 使用方法
  `approve`関数で`allowed`に割り当てた プロパティトークンの値を返します

#### approve( address spender, uint256 amount )

- 引数:
	- `{address} spender`
	- `{number} amount`

- 戻り値: number

- 使用方法
  `spender`宛に残高から`amount`分の プロパティトークンを転送することを許可します

#### transferFrom( address sender, address recipient, uint256 amount )

- 引数:
    - `{address} sender`
    - `{address} recipient`
    - `{number} amount`

- 戻り値: Boolean

- 使用方法
  `sender`が`recipient`宛に`amount`分の プロパティトークンを送ります。
  メソッドを実行する前に送金する分の プロパティトークンを approved しておく必要があります。

#### increaseAllowance( address spender, uint256 addedValue )

- 引数:
    - `{address} spender`
    - `{number} addedValue`

- 戻り値: boolean

- 使用方法
  前回`allowance`した値に`addedValue`を追加して`approve`します

#### decreaseAllowance( address spender, uint256 subtractedValue )

- 引数:
	- `{address} spender`
	- `{number} subtractedValue`

- 戻り値: boolean

- 使用方法
  前回`allowance`した値に`subtractedValue`を差し引いて`approve`します

#### author()

- 引数:なし

- 戻り値: address

- 使用方法
  プロパティトークンのAuthorのアドレスを返します

#### changeAuthor( address nextAuthor )

- 引数:
    - `{address} nextAuthor`

- 戻り値: なし

- 使用方法
  プロパティトークンのAuthorを`nextAuther`に変更します

#### changeName( string name )

- 引数:
    - `{string} name`

- 戻り値: なし

- 使用方法
  プロパティトークンの名前を`name`に変更します

#### changeSymbol( string symbol )

- 引数:
	- `{string} symbol`

- 戻り値: なし

- 使用方法
  プロパティトークンのシンボルを`symbol`に変更します

#### withdraw( address sender, number value )

- 引数:
    - `{address} sender`
    - `{number} value`

- 戻り値: なし

- 使用方法
  ステーキングの`value`分を、プロパティトークンのオーナーに送金します



