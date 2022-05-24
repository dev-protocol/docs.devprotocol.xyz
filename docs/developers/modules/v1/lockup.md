---
title: Lockup
sidebar_position: 3
---

## Summary

Manage staking and its rewards

## Interface

Lockup inherits from UsingConfig and LockupStorage, and retains its interface.

`function depositToProperty(address _property, uint256 _amount) external returns (uint256)`

`function depositToPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`

`function lockup(address _from, address _property, uint256 _value) external`

`function withdrawByPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`

`function withdraw(address _property, uint256 _amount) external`

`function cap() external view returns (uint256)`

`function updateCap(uint256 _cap) external`

`function calculateCumulativeRewardPrices() public view returns (uint256 _reward, uint256 _holders, uint256 _interest, uint256 _holdersCap)`

`function calculateCumulativeHoldersRewardAmount(address _property) external view returns (uint256)`

`function calculateRewardAmount(address _property) external view returns (uint256, uint256)`

`function update() public`

`function calculateWithdrawableInterestAmount(address _property, address _user) external view returns (uint256)`

`function calculateWithdrawableInterestAmountByPosition(uint256 _tokenId) external view returns (uint256)`

`function getAllValue() external view returns (uint256)`

`function getValue(address _property, address _sender) external view returns (uint256)`

`function getPropertyValue(address _property) external view returns (uint256)`

`function migrateToSTokens(address _property) external returns (uint256 tokenId_)`

`function devMinter() public returns (address)`

`function sTokensManager() public returns (address)`
