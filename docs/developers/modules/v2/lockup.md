---
title: Lockup
sidebar_position: 3
---

## Summary

This contract manages user staking information.

## Interface
The Lockup contract inherits from InitializableUsingRegistry. Therefore, it possesses the interfaces that InitializableUsingRegistry possesses.

`function depositToProperty(address _property, uint256 _amount) external returns (uint256)`

`function depositToPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`

`function withdrawByPosition(uint256 _tokenId, uint256 _amount) external returns (bool)`
