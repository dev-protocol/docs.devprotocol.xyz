---
title: Allocator
date: 2021-10-13
permalink: /{{ locale }}/developers/modules/allocator/index.html
eleventyNavigation:
  key: allocator-module
  parent: developers_modules
  order: 3110
  title: Allocator
---

## Summary

The Allocator Contract plays several roles in determining market rewards.
For this roles the contract has 2 following functions .

## Interface

```solidity
function calculateMaxRewardsPerBlock() external view returns (uint256)`
```

Returns the amount of a total reward per block given to all users.

```solidity
function beforeBalanceChange(address _property, address _from, address _to) external
```

- `_property`: property address
- `_from`: The transfer sender address
- `_to`: The transfer recipient address

Calls beforeBalanceChange() of Withdraw contract and update the status before and after the ownership ratio changes.