---
title: Plugins
sidebar_position: 1
---

# Plugin development

Developing and publishing a Clubs Plugin is a great way to reduce the duplication you have been doing with your Clubs and share it with the wider Clubs community. Clubs Plugins, like other JavaScript packages, can be published to and installed from npm.

## Quick start

[Clubs Plugin Starter Kit](https://github.com/dev-protocol/clubs-plugin-starter-kit) is a GitHub's template repository that you can use to get started quickly with plugin development.

1. Create a new repository with using https://github.com/dev-protocol/clubs-plugin-starter-kit

:::tip
You can find instructions on how to use a template repository in [the GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).
:::

2. You can edit the files under the `src/` directory to build the functionality of your plugin.

## Interfaces

- [`meta`](./plugin-manifest)
- [`getPagePaths`](./plugin-pages)
- [`getAdminPaths`](./plugin-admin-pages)
- [`getSlots`](./plugin-slots)
- [`getLayout`](./plugin-layouts)
