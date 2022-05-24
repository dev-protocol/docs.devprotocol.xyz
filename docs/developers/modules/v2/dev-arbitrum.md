---
title: DevArbitrum
sidebar_position: 1
---

## Summary

This contract is a Dev token deployed in Arbitrum.

Since the Dev token needs to be bridged to Arbitrum, we are adding the necessary interfaces.

## Interface

DevArbitrum inherits from Dev and InitializableUsingRegistry, and retains its interface.

`function bridgeBalanceOnL1() public view returns (uint256) `

`function l1Address() external view returns (address)`

`function bridgeMint(address _account, uint256 _amount) external`

`function bridgeBurn(address _account, uint256 _amount) external`
