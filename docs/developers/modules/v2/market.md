---
title: Market
sidebar_position: 3
---

## Summary

This contract implements the basic functions of the market.

## Interface
The Market contract inherits from UsingRegistry. Therefore, it possesses the interfaces that UsingRegistry possesses.

`function enabled() public`

`function behavior() public`

`function votingEndTimestamp() public`

`function toEnable() external`

`function toDisable() external`

`function authenticate(address _prop, string[] memory _args) public onlyPropertyAuthor(_prop) returns (bool)`

`function authenticateFromPropertyFactory(address _prop, address _author, string[] memory _args) external override returns (bool)`

`function authenticatedCallback(address _property, bytes32 _idHash) external returns (address)`

`function deauthenticate(address _metrics) external`

`function name() external view returns (string memory)`

`function schema() external view override returns (string memory)`

`function issuedMetrics() external view returns (uint256)`

`function getAuthenticatedProperties() external returns (address[] memory)`
