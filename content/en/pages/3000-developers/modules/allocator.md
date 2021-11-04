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
For this roles the contract has a following function.

## Interface

## CalculateMaxRewardsPerBlock

```solidity
function calculateMaxRewardsPerBlock() view returns (uint256)
```

Returns the amount of a total reward per block given to all users.
