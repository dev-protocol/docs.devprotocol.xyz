---
title: Lockup
date: 2021-10-13
permalink: /{{ locale }}/developers/modules/lockup/index.html
eleventyNavigation:
  key: lockup-module
  parent: developers_modules
  order: 3130
  title: Lockup
---

## Summary

## Interface

```solidity
function depositToProperty(address _property, uint256 _amount) returns (uint256)
```

- `_property`: property address
- `_amount`: The amount of the DEV token to be staked

Returns the ID of the created new staking position

## Key Events

```solidity
event PropertyTransfer(address _property, address _from, address _to);
```

Emitted upon a successful methods depositToProperty() and depositToPosition()
