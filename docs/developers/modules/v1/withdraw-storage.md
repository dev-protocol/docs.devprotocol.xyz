---
title: WithdrawStorage
sidebar_position: 3
---

## Summary

save Withdraw contract storage

## Interface
WithdrawStorage inherits from UsingStorage, and retains its interface.

`function getRewardsAmount(address _property) public view returns (uint256)`

`function getCumulativePrice(address _property) public view returns (uint256)`

`function getPendingWithdrawal(address _property, address _user) public view returns (uint256)`

`function getStorageLastWithdrawnReward(address _property, address _user) public view returns (uint256)`

`function getStorageLastWithdrawnRewardCap(address _property, address _user) public view returns (uint256)`
