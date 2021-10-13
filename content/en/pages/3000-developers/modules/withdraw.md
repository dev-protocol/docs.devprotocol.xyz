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

```solidity
function withdraw(address _property)
```

Mints the holder reward per DevMinter Contract.

```solidity
function beforeBalanceChange(address _property, address _from, address _to)
```

- `_property`: property address
- `_from`: The transfer sender address
- `_to`: The transfer recipient address

Called only by Allocator Contract and updates

```solidity
function calculateRewardAmount(address _property, address _user) returns (
	uint256 _amount,
	uint256 _price,
	uint256 _cap,
	uint256 _allReward
)
```

- `_property`: property address
- `_user`: The account which holds the property

Returns the total rewards which the account(\_user) can be currently available for withdrawal.

## Key Events

```solidity
event PropertyTransfer(address _property, address _from, address _to);
```

Emitted upon a successful beforeBalanceChange()

