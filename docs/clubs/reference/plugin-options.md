---
title: Plugin Options
sidebar_position: 1
---

# Plugin Options

The `ClubsPluginOptions` type is a TypeScript type that represents an array of plugin options for a club configuration. It is defined as a readonly array of ClubsPluginOption objects.

Following are the typings for `ClubsPluginOptions` type.

```ts
ClubsGeneralUnit =
	| string
	| number
	| boolean
	| Date
	| bigint
	| Uint8Array
	| readonly ClubsGeneralUnit[]
	| {
			readonly [key: string]: ClubsGeneralUnit
	  }

ClubsPluginOptionValue = ClubsGeneralUnit

ClubsPluginOption = Readonly<{
	readonly key: string
	readonly value?: ClubsPluginOptionValue
}>

ClubsPluginOptions = readonly ClubsPluginOption[]
```

Each `ClubsPluginOption` object contains

| key | type   | description           |
| --- | ------ | --------------------- |
| key | string | identifies the option |

The `ClubsPluginOptionValue` type is an alias for a union type of various primitive and complex data types that can be used as option values, such as `string`, `number`, `boolean`, `Date`, `bigint`, `Uint8Array`, and readonly arrays of `ClubsGeneralUnit` elements.
