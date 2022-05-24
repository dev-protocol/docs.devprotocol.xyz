---
title: Policy
sidebar_position: 3
---

## Summary

It is a contract that ties market and property together.

## Interface

This contract inherits from UsingRegistry and [Ownable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable). So it retains the interfaces of these contructs.

`function marketVotingSeconds() public returns (uint256)`

`function policyVotingSeconds() public returns (uint256)`

`function mintPerSecondAndAsset() public returns (uint256)`

`function presumptiveAssets() public returns (uint256)`

`function rewards(uint256 _lockups, uint256 _assets) external view returns (uint256)`

`function holdersShare(uint256 _reward, uint256 _lockups) external view returns (uint256)`

`function authenticationFee(uint256 _assets, uint256 _propertyAssets) external view returns (uint256)`

`function shareOfTreasury(uint256 _supply) external returns (uint256)`
