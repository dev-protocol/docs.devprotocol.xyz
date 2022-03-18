---
title: LockupStorage
sidebar_position: 3
---

## Summary

save Lockup contract storage

## Interface
LockupStorage inherits from UsingStorage, and retains its interface.

`function getStorageAllValue() public view returns (uint256)`

`function getStorageValue(address _property, address _sender) public view returns (uint256)`

`function getStoragePropertyValue(address _property) public view returns (uint256)`

`function getStorageInterestPrice(address _property) public view returns (uint256)`

`function getStorageLastInterestPrice(address _property, address _user) public view returns (uint256)`

`function getStorageLastSameRewardsAmountAndBlock() public view returns (uint256 _amount, uint256 _block)`

`function getStorageCumulativeGlobalRewards() public view returns (uint256)`

`function getStoragePendingInterestWithdrawal(address _property, address _user) public view returns (uint256)`

`function getStorageDIP4GenesisBlock() public view returns (uint256)`

`function getStorageLastStakedInterestPrice(address _property, address _user) public view returns (uint256)`

`function getStorageLastStakesChangedCumulativeReward() public view returns (uint256)`

`function getStorageLastCumulativeHoldersRewardPrice() public view returns (uint256)`

`function getStorageLastCumulativeInterestPrice() public view returns (uint256)`

`function getStorageLastCumulativeHoldersRewardAmountPerProperty(address _property) public view returns (uint256)`

`function getStorageLastCumulativeHoldersRewardPricePerProperty(address _property) public view returns (uint256)`

`function getStorageCap() public view returns (uint256)`

`function getStorageCumulativeHoldersRewardCap() public view returns (uint256)`

`function getStorageLastCumulativeHoldersPriceCap() public viewreturns (uint256)`

`function getStorageInitialCumulativeHoldersRewardCap(address _property) public view returns (uint256)`

`function getStorageFallbackInitialCumulativeHoldersRewardCap() public view returns (uint256)`
