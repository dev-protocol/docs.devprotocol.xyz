---
title: AddressRegistry
sidebar_position: 3
---

## Summary

This contract manages the address of each contract.

## Interface

AddressRegistry inherits from Dev and OwnableUpgradeable, and retains its interface.

`function setRegistry(string memory _key, address _addr) external`

`function registries(string memory _key) external view returns (address)`
