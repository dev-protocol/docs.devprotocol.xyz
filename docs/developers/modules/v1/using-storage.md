---
title: UsingStorage
sidebar_position: 3
---

## Summary

This contract is inherited and used by contracts that use EternalStorage.

## Interface

UsingStorage inherits from Ownable, and retains its interface.

`function getStorageAddress() external view returns (address)`

`function createStorage() external`

`function setStorage(address _storageAddress) external`

`function changeOwner(address newOwner) external`
