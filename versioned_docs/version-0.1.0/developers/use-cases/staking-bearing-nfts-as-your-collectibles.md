---
title: Staking-Bearing NFTs as your collectibles
---

sTokens are NFTs automatically minted when the user stakes DEV into one of the Property Tokens and function as a key to recognizing the staking position. Therefore, as long as you have sTokens, the staking position associated with it is yours. If you transfer sTokens to someone else, your staking position will also be transferred entirely.

`tokenURI.image` of sTokens returns the preset SVG image by default, but the Property Tokens author can change that value with a few options. If you are the author of Property Tokens, you can create NFT collectibles based on staking by rewriting the `tokenURI.image` in sTokens to a unique image.

## Dynamic sTokens

The most recommended way to make sTokens collectibles is to generate `tokenURI.image` for sTokens with Dynamic sTokens dynamically.

To enable Dynamic sTokens, create a Descriptor contract inherited from `ITokenURIDescriptor` and pass that contract address to `STokensManager.setTokenURIDescriptor`.

### Create a Descriptor

> [dynamic-s-tokens-simple-tiers](https://github.com/dev-protocol/dynamic-s-tokens-simple-tiers) can be used as an example of a Descriptor.

[ITokenURIDescriptor](https://github.com/dev-protocol/s-tokens/blob/main/contracts/interface/ITokenURIDescriptor.sol) is exposed as an npm package, so you can add it to your project's dependencies as follows:

```bash
npm i -D @devprotocol/i-s-tokens
```

The Descriptor must needs to implement the following interface:

```solidity
function image(
	uint256 _tokenId,
	address _owner,
	ISTokenManagerStruct.StakingPositionV1 memory _positions,
	ISTokenManagerStruct.RewardsV1 memory _rewards
) external view returns (string memory);
```

The `image` function takes the following arguments and returns an image used as `tokenURI.image`. The function is expected to return a base64 encoded [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), IPFS or HTTP URI.

| Arguments    | Type                                                                                                                     | Example                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_tokenId`   | uint256                                                                                                                  | 1                                                                                                                                                                                                                                                    |
| `_owner`     | address                                                                                                                  | 0x6ae3E04e48D17dc03d57F20F15e841B50B1827Fa                                                                                                                                                                                                           |
| `_positions` | [StakingPositionV1](https://github.com/dev-protocol/s-tokens/blob/main/contracts/interface/ISTokenManagerStruct.sol#L14) | {<br/> address property; `// 0xF4f8a63bc2A7608757407aA9923eea8DeA9279c0` <br/> uint256 amount; `// 100000000000000000000`<br/> uint256 price; `// 435847878060443323`<br/> uint256 cumulativeReward; `// 0`<br/> uint256 pendingReward; `// 0`<br/>} |
| `_rewards`   | [RewardsV1](https://github.com/dev-protocol/s-tokens/blob/main/contracts/interface/ISTokenManagerStruct.sol#L29)         | {<br/> uint256 entireReward; `// 40634326095432410200` <br/> uint256 cumulativeReward; `// 0`<br/> uint256 withdrawableReward; `// 40634326095432410200`<br/>}                                                                                       |

And those values have the following meanings:

| Arguments                     | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_tokenId`                    | ID of sTokens. Remember that your Property Tokens sTokens ID is not necessarily a serial number, as the ID is unique across all Property Tokens.                                                                                                                                                                                                                                                                     |
| `_owner`                      | The address of the owner of sTokens.                                                                                                                                                                                                                                                                                                                                                                                 |
| `_positions.property`         | The address of Property Tokens as a staking destination.                                                                                                                                                                                                                                                                                                                                                             |
| `_positions.amount`           | The amount of staked DEV tokens. The number is an integer multiplied by `10^18`, similar to a typical ERC-20 amounts.                                                                                                                                                                                                                                                                                                |
| `_positions.price`            | This value is a snapshot of `price`, the value that the Lockup contract uses to calculate the staking reward, and is a value that is constantly increasing. The difference between the third return value of `Lockup.calculateCumulativeRewardPrices` and this value increases over time from the last update date of the staking position. However, remember that the difference does not indicate the time series. |
| `_positions.cumulativeReward` | The cumulative sum of DEV rewards claimed to the staking position. The number is an integer multiplied by `10^18`, similar to a typical ERC-20 amounts.                                                                                                                                                                                                                                                              |
| `_positions.pendingReward`    | The unclaimed DEV reward. This value is updated when the staking position is updated. The number is an integer multiplied by `10^18`, similar to a typical ERC-20 amounts.                                                                                                                                                                                                                                           |
| `_rewards.entireReward`       | The cumulative sum of all rewards of the staking position, and this value is the sum of claimed reward, claimable reward, and pending reward. The number is an integer multiplied by `10^18`, similar to a typical ERC-20 amounts.                                                                                                                                                                                   |
| `_rewards.cumulativeReward`   | Same value as `_positions.cumulativeReward`.                                                                                                                                                                                                                                                                                                                                                                         |
| `_rewards.withdrawableReward` | The current claimable DEV reward of the staking position. And this value is the sum of the claimable reward and pending reward. The number is an integer multiplied by `10^18`, similar to a typical ERC-20 amounts.                                                                                                                                                                                                 |

### Return value example

#### Base64-encoded SVG

```
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgMjkwIDUwMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI5MCIgaGVpZ2h0PSI1MDAiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5MiAyMDNIMTY4LjVWMjI2LjVWMjUwSDE0NUgxMjEuNVYyMjYuNVYyMDNIOThINzQuNVYyMjYuNVYyNTBWMjczLjVINTFWMjk3SDc0LjVIOThWMjczLjVIMTIxLjVIMTQ1SDE2OC41SDE5MlYyNTBWMjI2LjVIMjE1LjVIMjM5VjIwM0gyMTUuNUgxOTJaIiBmaWxsPSJ3aGl0ZSIvPjx0ZXh0IGZpbGw9IndoaXRlIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMSIgbGV0dGVyLXNwYWNpbmc9IjBlbSI+PHRzcGFuIHg9IjI3LjQwNzIiIHk9IjMzMy40MTgiPjB4ZEZCNDYyQmZENzExMjhiOTZEQjc0MmEyNjIxYUViODAxYzRGRDYxMTwvdHNwYW4+PC90ZXh0PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMjkwIiB5Mj0iNTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRDBGRCIvPjxzdG9wIG9mZnNldD0iMC4xNTEwNDIiIHN0b3AtY29sb3I9IiM0ODg5RjUiLz48c3RvcCBvZmZzZXQ9IjAuNTUyMDgzIiBzdG9wLWNvbG9yPSIjRDUwMEU2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkYzODE1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+
```

#### IPFS

```
ipfs://bafybeifgjcdzj36l3ui26xurcmfqkobqknbxfhzontimzgeusgntm7ja2i
```

#### HTTP

```
https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png
```

## Apply the developed Descriptor to your Property Tokens

After deploying the Descriptor, associate the Descriptor with the Property Tokens by calling `STokensManager.setTokenURIDescriptor`. This function call is to be successful only if the caller's address is the same as the `author` of the passed Property Tokens.

| Network          | Explorer page for STokensManager                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Ethereum         | https://etherscan.io/address/0x50489Ff5f879A44C87bBA85287729D663b18CeD5#writeProxyContract           |
| Arbitrum One     | https://arbiscan.io/address/0x40d999931f7055F670511860e24624939e71a96a#writeProxyContract            |
| Arbitrum Rinkeby | https://testnet.arbiscan.io/address/0xe45d65c6d6aA3e2a4c8aAcc0C8153778663fe794#writeProxyContract    |
| Polygon          | https://polygonscan.com/address/0x89904De861CDEd2567695271A511B3556659FfA2#writeProxyContract        |
| Polygon Mumbai   | https://mumbai.polygonscan.com/address/0xe0af15141ABd0B31Fb15e250971936Fe8837230a#writeProxyContract |

## Dev Kit JS

Using Dev Kit JS, you can call `sTokens.tokenURI` from your JavaScript app.

```js
import { clientsSTokens } from '@devprotocol/dev-kit/agent'

const sTokens = clientsSTokens(provider) // `provider` means BaseProvider of Ethers.js
const tokenURI = sTokens.tokenURI(1)
console.log(tokenURI)
// {
// 	  name: string
// 	  description: string
// 	  image: string
// }
```

You can also simulate the return value of the Descriptor by calling `STokensManager.tokenURISim` as follows and pre-calculate the ` image` of unminted sTokens. This is useful for implementing a collectibles sales page as an NFT list UI.

```js
import { clientsSTokens } from '@devprotocol/dev-kit/agent'
import { utils } from 'ethers'

const sTokens = clientsSTokens(provider) // `provider` means BaseProvider of Ethers.js
const options = {
	positions: {
		property: '0xF4f8a63bc2A7608757407aA9923eea8DeA9279c0'
		amount: utils.parseUnits('100', 18).toString(),
	}
}
const tokenURI = sTokens.tokenURISim(options)
console.log(tokenURI)
// {
//    name: string
//    description: string
//    image: string
// }
```

`tokenURISim` takes the same arguments as `Descriptor.image`. See the [source code](https://github.com/dev-protocol/dev-kit-js/blob/main/lib/ethereum/s-tokens/tokenURISim.ts#L8) for the full of typing.

### Staking

By calling Dev Kit JS, you can mint sTokens through DEV staking as follows.

```js
import { positionsCreate } from '@devprotocol/dev-kit/agent'
import { whenDefined } from '@devprotocol/util-ts'
import { utils } from 'ethers'

const start = await positionsCreate({
	provider,
	from: '<USER_ADDRESS>',
	destination: '0xF4f8a63bc2A7608757407aA9923eea8DeA9279c0',
	amount: utils.parseUnits('100', 18).toString(),
})
// When approval is needed, start.approvalNeeded is true, and start.approveIfNeeded does send the approval transaction
// When approval is not needed, start.approvalNeeded is false, and start.approveIfNeeded does not send anything
const approveIfNeeded = await whenDefined(start, (x) => x.approveIfNeeded())
// When approval is needed, approveIfNeeded.waitNeeded is true, and start.waitOrSkipApproval does wait until confirmed the transaction
// When approval is not needed, approveIfNeeded.waitNeeded is false, and start.waitOrSkipApproval does not do anything and resolve immediately
const waitOrSkipApproval = await whenDefined(approveIfNeeded, (x) =>
	x.waitOrSkipApproval()
)
const stake = await whenDefined(waitOrSkipApproval, (x) => x.run())
const staked = await whenDefined(stake, (x) => x.wait())
```
