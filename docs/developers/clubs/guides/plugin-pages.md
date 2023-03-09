---
title: Pages
sidebar_position: 3
---

# Pages

## getPagePaths

`getPagePaths` is a function that generates pages and returns an array of `ClubsStaticPaths` to define pages and their contents, etc.

Clubs runtime passes 3 arguments to `getPagePaths`, plugin options, config, and utils. And the return value should be an array of objects with the following values:

|             | Required | Type                                   | Description                                                                                                                  |
| ----------- | -------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `paths`     | Required | array includes `string` or `undefined` | Path to determine the URL of the generated page.                                                                             |
| `component` | Required | Astro component                        | Content of the generated page.                                                                                               |
| `props`     |          | `string`                               | Object passed to `Astro.props`                                                                                               |
| `layout`    |          | Astro component                        | Layout component used by the page. When exporting `layout`, it overrides the layout components exported by the theme plugin. |

### `paths`

If paths joined with `/` matches the pathname in the HTML request, the component will be rendered as the page content.

For example, if you want to add `/vote/open`, `paths` should be the following value:

```json
["vote", "open"]
```

If you would like to render the component as the primary page of your Clubs, you can define it as an empty array, or an array containing only undefined, like this:

```json
[]
// OR
[undefined]
```

### `component`

Components must always be Astro components. If you want to use a UI framework such as React or Svelte, for example, you can export an Astro component that renders a React component.

```tsx title="/src/components/MyReactComponent.tsx"
import React from 'react'

export const MyReactComponent = () => <p>Hello, world!</p>
```

```tsx title="/src/components/MyAstroComponent.astro"
---
import {MyReactComponent} from './MyReactComponent'
---

<MyReactComponent />
```

```tsx title="/src/index.ts"
import { default as MyAstroComponent } from './components/MyAstroComponent.astro'

const getPagePaths = async () => [
	{
		component: MyAstroComponent,
		paths: [],
	},
]

export default {
	getPagePaths,
	meta: {
		/*...*/
	},
}
```

### `props`

```tsx title="/src/components/MyReactComponent.tsx"
import React from 'react'

export const MyReactComponent = ({ str }: { str: string }) => (
	<p>Hello, {str}!</p>
)
```

```tsx title="/src/components/MyAstroComponent.astro"
---
import {MyReactComponent} from './MyReactComponent'

const { str } = Astro.props as {str: string}
---

<MyReactComponent str={str} />
```

```tsx title="/src/index.ts"
import { default as MyAstroComponent } from './components/MyAstroComponent.astro'

const getPagePaths = async () => [
	{
		component: MyAstroComponent,
		props: {
			str: 'me',
		},
		paths: [],
	},
]

export default {
	getPagePaths,
	meta: {
		/*...*/
	},
}
```

### `layout`
