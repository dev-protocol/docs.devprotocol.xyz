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

The Withdraw contract contains code to withdraw creator tokens and calculate these tokens.

The staking is the new supporting system in Dev that secures the sustainability of creator activity.

The creator rewards will be increased by the sponsors staking. These creator rewards will be determined and withdrawn with the following functions.

## Interface

## Withdraw

The Property holder can withdraw the creator rewards.

```solidity
function withdraw(address _property)
```

Mints the holder reward per DevMinter Contract.

## CalculateRewardAmount

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
