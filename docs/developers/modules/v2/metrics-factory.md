---
title: MetricsFactory
sidebar_position: 3
---

## Summary

create metrics contract.

## Interface
The MetricsFactory contract inherits from InitializableUsingRegistry. Therefore, it possesses the interfaces that InitializableUsingRegistry possesses.

`function metricsCount() public returns (uint256)`

`function authenticatedPropertiesCount() public returns (uint256)`

`function isMetrics(address) public returns (bool)`

`function create(address _property) external returns (address)`

`function destroy(address _metrics) external`

`function metricsCountPerProperty(address _property) external view returns (uint256)`

`function metricsOfProperty(address _property) external view returns (address[] memory)`

`function hasAssets(address _property) external view returns (bool)`