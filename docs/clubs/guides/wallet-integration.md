---
title: Wallet integration
sidebar_position: 8
---

# Wallet integration

clubs-core provides `connection` API for all plugins to integrate with wallets without any duplicated code.

## Using shared wallet connection

Use a wallet connection established by other plugins, mostly the theme plugin, by subscribing to Observables provided by `connection`.

```ts
import { connection } from '@devprotocol/clubs-core/connection'

connection().account.subscribe(console.log)
connection().chain.subscribe(console.log)
connection().provider.subscribe(console.log)
connection().signer.subscribe(console.log)
connection().eip1193Provider.subscribe(console.log)
```

### Account

`connection().account` is streaming the EOA address of the connected wallet. The new value will be emitted each time the user switches accounts.

```ts
connection().account.subscribe(console.log)
// '0x5yw4...' or undefined when disconnected
```

### Chain

`connection().chain` is streaming the chain ID that used by the connected wallet. The new value will be emitted each time the user switches blockchains.

```ts
connection().chain.subscribe(console.log)
// 137, 80001... or undefined when disconnected
```

### Provider

`connection().provider` is streaming the Provider object of ethers. The new value will be emitted when set by other plugins.

```ts
connection().provider.subscribe(console.log)
```

### Signer

`connection().signer` is streaming the Signer object of ethers. The new value will be emitted when set by other plugins.

```ts
connection().signer.subscribe(console.log)
```

### EIP1193

`connection().eip1193Provider` is streaming the EIP1193 Provider object, mostly the `window.ethereum`. The new value will be emitted when set by other plugins.

```ts
connection().eip1193Provider.subscribe(console.log)
```

## Loading of `connection`

`connection` is an API for browsers, so make sure the caller is always running on the browser. The most simple way is mounting the component with `client:only` directive of Astro.

### With `client:only` directive

```html title="/src/Account.svelte"
<script>
	import { connection } from '@devprotocol/clubs-core/connection'

	let account: string
	connection().account.subscribe((_account) => {
		account = _account
	})
</script>

<p>{account}</p>
```

```html title="/src/Account.astro"
---
import Account from './Account.svelte'
---

<Account client:only="svelte" />
```

### With dynamic import

Another way is to use [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) and load the API on the browser. This case allows the use of directives that make the component pre-renderable, such as `client:load`.

```html
<script>
	import { onMount } from 'svelte'

	let account: string

	onMount(async () => {
		const { connection } = await import('@devprotocol/clubs-core/connection')
		connection().account.subscribe((_account) => {
			account = _account
		})
	})
</script>

<p>{account}</p>
```

```html title="/src/Account.astro"
---
import Account from './Account.svelte'
---

<Account client:load />
```

## Set connection

One of the key roles of theme plugins is to update `connection` values and emit wallet connections to other plugins.

**The most recommended method is to use `setEip1193Provider`.** Simply calling `setEip1193Provider` will update the values of all other Observables and start subscribing to wallet events.

```html
<script lang="ts" setup>
	import { onMounted } from 'vue'
	import { BrowserProvider } from 'ethers'
	import type { connection as Connection } from '@devprotocol/clubs-core/connection'

	let connection: Connection
	onMounted(async () => {
		const { connection: _connection } = await import(
			'@devprotocol/clubs-core/connection'
		)
		connection = _connection
	})

	const onClick = async () => {
		try {
			const eth = (window as any).ethereum
			await eth.send('eth_requestAccounts')
			connection().setEip1193Provider(eth, BrowserProvider)
		} catch (error) {
			console.error(error)
		}
	}
</script>

<button @click="onClick">Connect</button>
```

## Using separated connection space

:::info
// TODO: Write this
:::
