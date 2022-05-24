---
title: PropertyFactory
sidebar_position: 3
---

## Summary

Create Property.

## Interface

PropertyFactory inherits from Dev and InitializableUsingRegistry, and retains its interface.

`function isProperty(address) public view returns (bool)`

`function create(string memory _name, string memory _symbol, address _author) external returns (address)`

`function createAndAuthenticate(string memory _name, string memory _symbol, address _market, string[] memory _args) external returns (bool)`

`function getPropertiesOfAuthor(address _author) external view returns (address[] memory)`

`function setPropertyAddress(address _property) external`
