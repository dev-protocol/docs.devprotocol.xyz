---
title: Lockup
sidebar_position: 3
---

## Summary

This contract manages user staking information.

## Interface
The Lockup contract inherits from InitializableUsingRegistry. Therefore, it possesses the interfaces that InitializableUsingRegistry possesses.

`function cap() public returns (uint256)`

`function totalLocked() public returns (uint256)`

`function cumulativeHoldersRewardCap() public returns (uint256)`

`function lastCumulativeHoldersPriceCap() public returns (uint256)`

`function lastLockedChangedCumulativeReward() public returns (uint256)`

`function lastCumulativeHoldersRewardPrice() public returns (uint256)`

`function lastCumulativeRewardPrice() public returns (uint256)`

`function cumulativeGlobalReward() public returns (uint256)`

`function lastSameGlobalRewardAmount() public returns (uint256)`

`function lastSameGlobalRewardTimestamp() public returns (uint256)`

`function lastCumulativeHoldersRewardPricePerProperty(address) public returns (uint256)`

`function initialCumulativeHoldersRewardCap(address) public returns (uint256)`

`function totalLockedForProperty(address) public returns (uint256)`

`function lastCumulativeHoldersRewardAmountPerProperty(address) public returns (uint256)`

`function depositToProperty(address _property, uint256 _amount) external returns (uint256)`

`function depositToPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`

`function withdrawByPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`

`function getLockedupProperties() external view returns (LockedupProperty[] memory)`

`function updateCap(uint256 _cap) external`

`function calculateCumulativeRewardPrices() public view returns (uint256 _reward, uint256 _holders, uint256 _interest, uint256 _holdersCap)`

`function calculateRewardAmount(address _property) external view returns (uint256, uint256)`

`function update() public`

`function calculateWithdrawableInterestAmountByPosition(uint256 _tokenId) external view returns (uint256)`
