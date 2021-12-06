---
title: Dev Kit
date: 2021-05-07
permalink: /{{ locale }}/developers/tools/dev-kit/index.html
eleventyNavigation:
  key: dev-kit
  parent: developers_tools
  order: 3520
  title: Dev Kit
---

## Dev Kit とは？

Dev Kit は Dev Protocol を JavaScript または TypeScript から使用するためのインターフェースを提供します。

|        | Source                                             |
| ------ | -------------------------------------------------- |
| npm    | https://www.npmjs.com/package/@devprotocol/dev-kit |
| GitHub | https://github.com/dev-protocol/dev-kit-js         |

## 使い方

npm を使ったインストール方法は以下です

```bash
npm i @devprotocol/dev-kit
```

yarn の場合は以下です

```bash
yarn add @devprotocol/dev-kit
```

Dev Kit は[ethers.js](https://docs.ethers.io/)に依存しています。
ethers.js は自動的にインストールされないため、パッケージを追加して使えるようにする必要がります。
ethers.js をインストールする方法は以下です。

```bash
npm i ethers
```

yarn を使う場合は以下のコマンドを実行します。

```bash
yarn add ethers
```

## 具体例

### プロパティのステーク数とリワードの情報を取得する例

`index.js`

```js
import { ethers } from 'ethers'
import { contractFactory, addresses } from '@devprotocol/dev-kit'

// メインネットを使う
const registryContractAddress = addresses.eth.main.registry
const provider = new ethers.providers.JsonRpcProvider(
	process.env.WEB3_PROVIDER_URL
)
const contract = contractFactory(provider)
const lockupContractAddress = await contract
	.registry(registryContractAddress)
	.lockup()

// ターゲットとなるプロパティのアドレス
const propertyAddress = '0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309'

// ステーキング数を取得して表示する
const propertyStakingAmount = await contract
	.lockup(lockupContractAddress)
	.getPropertyValue(propertyAddress)
const stakingAmount = ethers.BigNumber.from(propertyStakingAmount).div(
	new ethers.BigNumber.from(10).pow(18)
)
console.log(
	`${propertyAddress}'s staking amount is ${stakingAmount.toBigInt()} DEV`
)

// 報酬量を取得して表示する
const propertyRewards = await contract
	.lockup(lockupContractAddress)
	.calculateRewardAmount(propertyAddress)
const reward = ethers.BigNumber.from(propertyRewards[0]).div(
	new ethers.BigNumber.from(10).pow(36)
)
console.log(`${propertyAddress}'s rewards is ${reward.toBigInt()} DEV`)
```

`package.json`

```json
{
	"name": "devkit-example",
	"version": "0.0.1",
	"type": "module",
	"license": "MIT",
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"@devprotocol/dev-kit": "^5.8.1",
		"ethers": "^5.5.2"
	}
}
```

スクリプトを実行します (何も指定しない場合は `http://localhost:8545` のようなローカルの Ethereum ノードを使用します):

```shell-session
$ yarn start
yarn run v1.22.17
$ node index.js
0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309's staking amount is 27219 DEV
0xac1AC9d00314aE7B4a7d6DbEE4860bECedF92309's rewards is 15848 DEV
✨  Done in 0.60s.
```

Infura を使用してスクリプトを実行する例は以下です:

```shell-session
$ WEB3_PROVIDER_URL=https://mainnet.infura.io/v3/xxxx yarn start
```

### その他

他にも[Dev Kit の GitHub リポジトリに例となるコードがあります](https://github.com/dev-protocol/dev-kit-js/tree/main/examples)ので、参考にしてください。
