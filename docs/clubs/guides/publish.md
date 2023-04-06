---
title: Publish your plugin
sidebar_position: 1000
---

# Publish your plugin

Once your plugin is ready, publish it to npm!

:::info
[Clubs Plugin Starter Kit](https://github.com/dev-protocol/clubs-plugin-starter-kit) comes with boilerplate scripts and configurations needed for npm publishing, so we strongly recommend using it to develop your Clubs Plugin.
:::

## Check before publishing

### Required interfaces must be exported via default export in the main field

[All interfaces making up the plugin](../guides/plugin.md#interfaces) must be exported using `default` export from a file defined in the `main` field of your npm package (and even the `exports` field for better compatibility).

```json title="package.json"
{
	"type": "module",
	"main": "dist/index.js",
	"exports": {
		".": {
			"default": "./dist/index.js"
		}
	}
}
```

[Clubs Plugin Starter Kit](https://github.com/dev-protocol/clubs-plugin-starter-kit) automatically converts **src/index.ts** to **dist/index.js** in the publish flow when you create src/index.ts as follows.

```ts title="src/index.ts - The source of dist/index.js"
import type { ClubsFunctionPlugin } from '@devprotocol/clubs-core'

// const getPagePaths = ...
// const getAdminPaths = ...
// const meta = ...

export default {
	getPagePaths,
	getAdminPaths,
	meta,
} as ClubsFunctionPlugin
```

### Naming convention - must include clubs-plugin

The package name of Clubs Plugin must include `clubs-plugin`. clubs-core automatically adds packages matching the naming convention to `vite.ssr.noExternal` so that they can be successfully built on Astro runtime.

| Example                       | OK/NG |
| ----------------------------- | ----- |
| **clubs-plugin**-vote         | ⭕    |
| @you/my-**clubs-plugin**      | ⭕    |
| @you/**clubs-plugins**-bundle | ⭕    |
| clubs-vote-plugin             | ❌    |

### Use image imports for images

Astro supports [image imports](https://docs.astro.build/en/guides/images/). All images should be imported via image imports and do not use implicit path resolution.

```ts title="src/index.ts"
import Icon from './assets/Icon.png'

export default {
	meta: {
		icon: Icon,
		/* ... other fields ... */
	},
}
```

For example, code that expects implicit path resolution **cannot be used**, such as

```ts title="src/index.ts"
// Local image stored at public/assets/Icon.png
export default {
	meta: {
		icon: '/assets/Icon.png',
		/* ... other fields ... */
	},
}
```

### Export Astro files as Astro files

As Clubs runs on the Astro runtime, all Astro files used by the Clubs Plugin must be exported as Astro files.

In `src/index.ts` if you use Astro component `src/components/Index.astro` in `getPagePaths` like the following,

```ts title="src/index.ts"
import { default as Page } from './components/Index.astro'

const getPagePaths = async () => [
	{
		component: Page,
		paths: [],
	},
]
```

even in built `dist/index.js` must keep the reference to `src/components/Index.astro`.

```ts title="dist/index.js"
import Page from '../src/components/Index.astro'

const getPagePaths = async () => [
	{
		component: Page,
		paths: [],
	},
]
```

:::info
[Clubs Plugin Starter Kit](https://github.com/dev-protocol/clubs-plugin-starter-kit) automatically rewrites import paths that need to be kept and builds them with Rollup. The relevant code can be found [rollup.config.js](https://github.com/dev-protocol/clubs-plugin-starter-kit/blob/main/rollup.config.js) and should be rewritten accordingly if the import path is broken in your project.
:::

## Publishing

Follow the npm guide to publish your Clubs Plugin as a npm package. npm publish is new to you, please create your npm account.

- https://docs.npmjs.com/cli/v9/commands/npm-publish

But, the only commands you need to run are these!

```bash
npm login
npm publish
```

If you have already logged in npm in your CLI, you can skip `npm login`.

## New version publishing

If there are updates to your Clubs Plugin, these updates are distributed by updating its npm package.

Once you have declared a new version using [`npm version` command](https://docs.npmjs.com/cli/v9/commands/npm-version), run `npm publish` command again.

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
# For example:
# npm version patch < If the updates are bugfixing
# npm version minor < If the updates are feature improvements
# npm version major < If the updates are breaking changes

git push && git push --tags # Don't forget to push them to git
npm publish
```
