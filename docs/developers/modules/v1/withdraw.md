---
title: Withdraw
sidebar_position: 3
---

## Summary

Manage creator rewards.

## Interface
Withdraw inherits from UsingConfig and WithdrawStorage, and retains its interface.

`function withdraw(address _property) external`

`function beforeBalanceChange(address _property, address _from, address _to) external`

`function calculateWithdrawableAmount(address _property, address _user) external view returns (uint256)`

`function calculateRewardAmount(address _property, address _user) external view returns (uint256 _amount, uint256 _price, uint256 _cap, uint256 _allReward)`
