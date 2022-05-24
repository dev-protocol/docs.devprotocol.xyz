---
title: MarketFactory
sidebar_position: 3
---

## Summary

This contract creates or activates Market.

## Interface

This contract inherits from InitializableUsingRegistry and [OwnableUpgradeable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable). So it retains the interfaces of these contructs.

`function isPotentialMarket(address) public returns (bool)`

`function create(address _addr) external override returns (address)`

`function enable(address _addr) external`

`function disable(address _addr) external`

`function getEnabledMarkets() external view returns (address[] memory)`

`function isMarket(address _market) external view returns (bool)`
