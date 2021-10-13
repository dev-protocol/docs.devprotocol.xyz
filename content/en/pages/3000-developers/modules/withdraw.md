---
title: Withdraw
date: 2021-10-13
permalink: /{{ locale }}/developers/modules/withdraw/index.html
eleventyNavigation:
  key: withdraw-module
  parent: developers_modules
  order: 3170
  title: Withdraw
---

## Summary

This contract manages the withdrawal of holder rewards for Property holders.

## Interface

### `function beforeBalanceChange(address _property, address _from, address _to) external`

- `_property`: property address
- `_from`: The transfer sender address
- `_to`: The transfer recipient address

<!-- Todo -->

### `function calculateRewardAmount(address _property, address _user)`

- `_property`: property address
- `_user`: The account which holds the property

Returns the total rewards which the account(\_user) can be currently available for withdrawal.
