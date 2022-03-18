---
title: MetricsGroup
sidebar_position: 3
---

## Summary

grouping of metrics.

## Interface
MetricsFactory inherits from UsingConfig and UsingStorage, and retains its interface.

`function addGroup(address _addr) external`

`function removeGroup(address _addr) external`

`function isGroup(address _addr) external view returns (bool)`

`function totalIssuedMetrics() external view returns (uint256)`

`function totalAuthenticatedProperties() external view returns (uint256)`

`function hasAssets(address _property) external view returns (bool)`

`function getMetricsCountPerProperty(address _property) public view returns (uint256)`
