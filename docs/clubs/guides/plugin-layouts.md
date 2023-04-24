---
title: Theme
sidebar_position: 7
---

# Theme

Use themes to control the design of the entire page, such as the header, navigation and main content, and footer.

## getLayout

`getLayout` is an asynchronous function that defines Clubs theme and returns an object of `ClubsBaseStaticPath` to define the layout.

Clubs runtime passes 3 arguments to `getLayout`, plugin options, config, and utils. And the return value should be an object with the following values:

|          | Required | Type            | Description                    |
| -------- | -------- | --------------- | ------------------------------ |
| `layout` | Required | Astro component | The layout component.          |
| `props`  |          | Object          | Object passed to `Astro.props` |

## The returns value

The return value of `getLayout` should be an object with these properties.

### `layout`

Layout must always be an Astro component. Like the `component` in [`getPagePaths`](./plugin-pages.mdx#component) and [`getAdminPages`](./plugin-admin-pages.mdx#component), this Astro component can also be used as an entry point to call UI framework components such as React, Svelte, and Vue.

There are also several requirements necessary for the component to function as a theme, see also [Requirements for layout](#requirements-for-layout) and [Additional requirements for layout](#additional-requirements-for-layout) about them.

```tsx title="/src/index.ts"
import { default as MyLayout } from './components/MyLayout.astro'

const getLayout = async () => ({
	layout: MyLayout,
})

export default {
	getLayout,
	meta: {
		/*...*/
	},
}
```

```tsx title="/src/components/MyLayout.astro"
---
import '@devprotocol/clubs-core/styles'
---

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
	</head>

	<body>
		<main>
			<slot />
		</main>
	</body>
</html>
```

### `props`

If the `layout` has values that it expects to be injected from the outside, you can pass those values through defining `props`.

```tsx title="/src/index.ts"
import { default as MyLayout } from './components/MyLayout.astro'

const getLayout = async () => ({
	layout: MyLayout,
	// highlight-start
	props: {
		title: 'Hello, world',
	},
	// highlight-end
})

export default {
	getLayout,
	meta: {
		/*...*/
	},
}
```

```tsx title="/src/components/MyLayout.astro"
---
import '@devprotocol/clubs-core/styles'
// highlight-next-line
const { title } = Astro.props as { title: string }
---

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		// highlight-next-line
		<title>{title}</title>
	</head>

    <body>
    	<main>
    		<slot />
    	</main>
    </body>

</html>
```

## Requirements for layout

### Load built-in style sheets

clubs-core exports [the built-in stylesheet for Clubs](https://github.com/dev-protocol/clubs-core/blob/main/src/styles/global.scss). The built-in stylesheet contains Hashi, a CSS utility developed by Dev Protocol community, and Hashi is usually depended on by several plugins, so the layout component must be load it.

Alternatively, instead of the built-in stylesheet, a stylesheet with an equivalent class can be used. This strategy is useful if your theme has its own design tokens.

```tsx
---
// highlight-next-line
import '@devprotocol/clubs-core/styles'
---

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
	</head>

    <body>
    	<main>
    		<slot />
    	</main>
    </body>

</html>
```

### `<slot />` is required

The layout component must render components that other plugins export. Therefore, the component must be sure to place `<slot />`as a placeholder.

```tsx
---
import '@devprotocol/clubs-core/styles'
---

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
	</head>

    <body>
    	<main>
			// highlight-next-line
    		<slot />
    	</main>
    </body>

</html>
```

## Additional requirements for layout

### Additional slots

:::info
// TODO: Write this
:::

### Signals

:::info
// TODO: Write this
:::
