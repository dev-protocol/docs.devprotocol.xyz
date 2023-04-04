# Clubs Configuration

Clubs configuration is way to maintain each clubs's state. It follow type description from [`@clubs-core`](https://www.npmjs.com/package/@devprotocol/clubs-core) library.

To add [`@clubs-core`](https://www.npmjs.com/package/@devprotocol/clubs-core) in you project

```shell
npm i @devprotocol/clubs-core
```

Follwing is the schema used for defining clubs's configuration.

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

|                   | Required | Type                                                                  | Description                                                                                              |
| ----------------- | -------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `name`            | Required | string                                                                | It is the clubs's name and is different from the domain name.It can be changed/edited unlike domain name |
| `twitterHandle`   |          | string                                                                | Twitter handle of the clubs.                                                                             |
| `description`     |          | string                                                                | Description of the clubs.                                                                                |
| `url`             | Required | string                                                                | URL of the clubs. The URL is in format `<domain>.clubs.place`                                            |
| `propertyAddress` | Required | string                                                                | ERC20 address of tokenized project a.k.a property tokens                                                 |
| `adminRolePoints` | Required | number                                                                | Number of property tokens required to get admis rights of a clubs                                        |
| `chainId`         | Required | number                                                                | ChainId of the network on which the clubs is deployed                                                    |
| `rpcUrl`          | Required | string                                                                | RPC URL of the network on which the clubs is deployed                                                    |
| `options`         |          | [ClubsPluginOptions](/clubs/reference/plugin-options)                 | Options for the plugins                                                                                  |
| `plugins`         | Required | readonly [ClubsPlugin](/clubs/reference/configuration#clubsplugin)[ ] | List of plugins that are enabled for the clubs.                                                          |

To access `options` value, loop over the `options` array and find the option with the required key.

```ts
import type { ClubsConfiguration } from '@devprotocol/clubs-core'
let config: ClubsConfiguration = {...}
// highlight-next-line
const optionValue = config.options?.find(option => option.key === '<keyName>')?.value
```

For storing config in db in a serialized manner, [`@clubs-core`](https://www.npmjs.com/package/@devprotocol/clubs-core) also offer `encode` function and `decode` for vice-versa.

```ts
import { encode, decode } from '@devprotocol/clubs-core'


const config:ClubsConfiguration = {...}
const encoded = encode(config)
const decoded = decode(encoded)
```

## `ClubsPlugin`

The `ClubsPlugin` type is a TypeScript type that represents a plugin for a club configuration. It is defined as a readonly object with the following properties.

```ts
ClubsPlugin = Readonly<{
	readonly id: string
	readonly enable?: boolean
	readonly options: ClubsPluginOptions
}>
```

| key     | type                                                                     | description                 |
| ------- | ------------------------------------------------------------------------ | --------------------------- |
| id      | string                                                                   | identifies the plugin       |
| enable  | boolean                                                                  | enables/disables the plugin |
| options | [ClubsPluginOptions](/clubs/reference/plugin-options#clubspluginoptions) | options for the plugin      |
