---
title: DevBridge
sidebar_position: 3
---

## Summary

This contract holds the mint and burn permissions for Dev tokens.
Withdraw and Lockup contracts and Market contracts mint and burn Dev through this contract.

## Interface

This contract inherits from InitializableUsingRegistry and [OwnableUpgradeable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable). So it retains the interfaces of these contructs.

`function mint(address _account, uint256 _amount) external returns (bool)`

`function burn(address _account, uint256 _amount) external returns (bool)`

`function renounceMinter() external`

`function renounceBurner() external`
