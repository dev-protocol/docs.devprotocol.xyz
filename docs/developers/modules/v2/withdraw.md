---
title: Withdraw
sidebar_position: 3
---

## Summary

This is a contract that manages creator reward.

## Interface

Withdraw inherits from Dev and InitializableUsingRegistry, and retains its interface.

`function cumulativeWithdrawnReward(address) public view returns (uint256)`

`function withdraw(address _property) external`

`function beforeBalanceChange(address _from, address _to) external`

`function calculateRewardAmount(address _property, address _user) external view returns (uint256 _amount, uint256 _price, uint256 _cap, uint256 _allReward)`
