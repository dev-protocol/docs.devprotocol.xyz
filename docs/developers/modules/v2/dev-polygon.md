---
title: DevPolygon
sidebar_position: 2
---

## Summary

This contract is a Dev token deployed in Polygon.

Since the Dev token needs to be bridged to Polygon, we are adding the necessary interfaces.

## Interface
DevPolygon inherits from Dev and InitializableUsingRegistry, and retains its interface.

`function deposit(address user, bytes calldata depositData) external`

`function withdraw(uint256 amount) external`
