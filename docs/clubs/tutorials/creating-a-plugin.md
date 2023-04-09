---
title: Creating a plugin
sidebar_position: 1
---

In Clubs, [Astro](https://astro.build/) library is used, so even if you create a plugin, you need to create it using the Astro library.

## Preparation

To start creating a plugin, use the Clubs Plugin Starter Kit.

Access the following GitHub repository and clone it.

https://github.com/dev-protocol/clubs-plugin-starter-kit

After cloning, run the following command to install dependencies.

```bash
yarn install
```

To launch a preview of the plugin, run the following command. Use this command to check the operation of the plugin during development.

```bash
yarn preview
```

## `src` directory

Write your plugin code in folders under `src` directory.

## `index.ts`

`index.ts` is the main file of the plugin. Write metadata and page settings for plugins here.

### Edit meta

First, update the metadata for your plugin. Update `ClubsPluginMeta` with information about your plugin. The metadata includes:

| Key            | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| id             | Plugin ID. Set it with a value starting with clubs-plugin.                |
| displayName    | Plugin name displayed in marketplace                                      |
| category       | Category to which the plugin belongs                                      |
| icon           | Plugin icon displayed in marketplace. Import image files and specify them |
| description    | Plugin description                                                        |
| preview Images | Preview images of plugins. Import image files and specify them            |
| readme         | Plugin Readme                                                             |

:::tip
Read [Meta](../guides/plugin-meta.mdx) to know more details.
:::

### Create getPagePaths

`getPagePaths` can control which pages are displayed for your created plugin. Set `paths`, `component`, and `props`.

If you want to display AnyAstroComponent on `/buy`, you can use the following code:

```tsx
export const getPagePaths = async (options: ClubsPluginOption[], config: ClubsConfigration) => [
  {
    paths: ['buy']
    component: AnyAstroComponent,
    props: {something: {optional: {data: 1}}
  }
]
```

:::tip
Read [Pages](../guides/plugin-pages.mdx) to know more details.
:::

### getAdminPaths

`getAdminPaths` can control the pages of your plugin's admin page. You can set `paths`, `component`, and `props`.

If you want to display AnyAstroComponent on `/admin/buy`, you can use the following code:

```tsx
export const getAdminPaths = async (options: ClubsPluginOption[], config: ClubsConfigration) => [
  {
    paths: ['buy'],
    component: AnyAstroComponent,
    props: {something: {optional: {data: 1}}
  }
]
```

:::tip
Read [Admin pages](../guides/plugin-admin-pages.mdx) to know more details.
:::

### getSlots

If you want to display content in a specific area on the Clubs page, declare `getSlots`. In the code below, AnyAstroComponent is displayed at each of the following areas on the admin page: `sidebar:before-title`, `aside:after-built-in-buttons`, `content:home:before-content`.

```tsx
export const getSlots = async (
	options: ClubsPluginOption[],
	config: ClubsConfiguration,
	utils
) => [
	{
		slot: 'admin:sidebar:before-title',
		component: AnyAstroComponent,
		props: { options }, // OPTIONAL
	},
	{
		slot: 'admin:aside:after-built-in-buttons',
		component: AnyAstroComponent,
		props: { options }, // OPTIONAL
	},
	{
		slot: 'page:content:home:before-content',
		component: AnyAstroComponent,
		props: { options }, // OPTIONAL
	},
]
```

:::tip
Read [Slots](../guides/plugin-slots.mdx) to know more details.
:::

### Component

Use Astro components to load components into `index.ts`. From within Astro components, you can call React/Vue/Svelte components.

```html
---
import Admin from './Admin.vue'
---

<Admin client:load />
```

### Saving values

To save values in a plugin, use `setOption()` exported from `@devprotocol/clubs-core`.

```tsx
setOptions(data: ClubsPluginOptions, pluginIndex: number)
```

With `setOption`, you can save the data object of the first argument. The second argument `pluginIndex` is an index assigned to each plugin and can be received with `Astro.props` in any Astro component developed for admin pages.

```tsx
---
import Admin from './Admin.vue'
import type {ClubsPropsAdminPages} from '@devprotocol/clubs-core'

const {clubs} = Astro.props as ClubsPropsAdminPages
---

<Admin client:load pluginIndex={clubs.currentPluginIndex} />
```

Also note that `setOption` can only be used in Admin pages and cannot be used in front pages. In addition, values are not saved in preview environments on Clubs Plugin Starter Kit. If you want to handle values saved with `setOption` in preview environments, you can write them in `/preview/config.ts`.

```ts
plugins: [
	{
		id: 'clubs-plugin-foo',
		options: [
			{
				key: 'foo',
				value: [
					{ id: 1, foo: 'foo' },
					{ id: 2, foo: 'bar' },
					{ id: 3, foo: 'baz' },
				],
			},
		],
	},
]
```

Specify the plugin ID for `id` and write the option values to be saved for `options`.

:::tip
Read [Admin pages](../guides/plugin-admin-pages#how-to-update-the-plugin-options) to know more details.
:::

### Using values

The saved value is stored in `Astro.props`, so get them from there.

```ts title="src/index.ts"
import {default as Admin} from './components/Admin/Admin.astro'

export const getAdminPaths = async (options: ClubsPluginOption[], config: ClubsConfigration) => {
	const foo = options.find(opt=>opt.key==='foo')
	return [
		{
			paths: ['buy']
			component: Admin,
			props: {foo}
		}
	]
}
```

```tsx title="src/components/Admin/Admin.astro"
---
import Admin from './Admin.vue'
import type {ClubsPropsAdminPages} from '@devprotocol/clubs-core'

const {foo, clubs} = Astro.props as ClubsPropsAdminPages
---

<Admin client:load foo={foo} pluginIndex={clubs.currentPluginIndex} />
```

### Styling

Clubs incorporates [Tailwind](https://tailwindcss.com/) so you can use almost all Tailwind APIs. However, since plugins cannot access `tailwind.config.js`, you need to write all CSS with tailwind classes or define them using `<style>`.

```html
<template>
	<section class="py-10">
		<h1 class="mb-10 text-4xl text-gray-700 font-bold text-center">Foo</h1>
	</section>
</template>
```

### Publishing to npm

To publish a plugin to Clubs, you need to publish it to npm. Before publishing your plugin to npm, please check the following:

- Change `package.json` so that it reflects the information of the plugin you created, as it is set at the time of cloning.
- Run `npm init` and add the necessary items for publication to `package.json`.
- Change the `name`. The `name` should include "clubs-plugin".
- Change other items to match your plugin's information.

Once you have completed these steps, let’s publish it to npm.

:::tip
Read [Publish your plugin](../guides/publish.md) to know more details.
:::
