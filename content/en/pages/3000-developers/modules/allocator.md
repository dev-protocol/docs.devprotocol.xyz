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
For this role, the contract has the following function.

## Interface

## CalculateMaxRewardsPerBlock

```solidity
function calculateMaxRewardsPerBlock() view returns (uint256)
```

Returns the amount of a total reward per block given to all users.

### Solidity

```solidity
import "@devprotocol/protocol/contracts/interface/IAllocator.sol";

IAllocator allocator = IAllocator("0x2c2807a0eb5fd0dfac8a93a2c9d788154a17b369");
uint256 rewardsPerBlock = allocator.calculateMaxRewardsPerBlock();
```
