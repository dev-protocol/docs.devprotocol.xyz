---
title: Clubs Configuration
sidebar_position: 2
---

# Clubs Configuration
 
Clubs configuration is way to maintain each clubs's state. It follow type description from [`@clubs-core`](https://www.npmjs.com/package/@devprotocol/clubs-core) library.

Follwing is the schema with types used for defining clubs's configuration.
```ts
ClubsConfiguration = Readonly<{
	readonly name: string
	readonly twitterHandle: string
	readonly description: string
	readonly url: string
	readonly propertyAddress: string
	readonly adminRolePoints: number
	readonly chainId: number
	readonly rpcUrl: string
	readonly options?: ClubsPluginOptions
	readonly plugins: readonly ClubsPlugin[]
}>
```
For using `ClubsConfiguration` type in your code. Simply import.
```ts
import type { ClubsConfiguration } from '@devprotocol/clubs-core'
```

For storing config in db in a serialized manner, `@clubs-core` also offer `encode` function and `decode` for vice-versa.

```ts
import { encode, decode } from '@devprotocol/clubs-core'

const config:ClubsConfiguration = {..}
const encoded = encode(config)
const decoded = decode(encoded)
```


