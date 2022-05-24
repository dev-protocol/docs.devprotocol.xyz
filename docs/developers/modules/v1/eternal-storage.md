---
title: EternalStorage
sidebar_position: 3
---

## Summary

Use this function when you want to store data in a contract.

## Interface

`function changeOwner(address _newOwner) external`

`function getUint(bytes32 _key) external view returns (uint256)`

`function getString(bytes32 _key) external view returns (string memory)`

`function getAddress(bytes32 _key) external view returns (address)`

`function getBytes(bytes32 _key) external view returns (bytes32)`

`function getBool(bytes32 _key) external view returns (bool)`

`function getInt(bytes32 _key) external view returns (int256)`

`function setUint(bytes32 _key, uint256 _value) external`

`function setString(bytes32 _key, string calldata _value) external`

`function setAddress(bytes32 _key, address _value) external`

`function setBytes(bytes32 _key, bytes32 _value) external`

`function setBool(bytes32 _key, bool _value) external`

`function setInt(bytes32 _key, int256 _value) external`

`function deleteUint(bytes32 _key) external`

`function deleteString(bytes32 _key) external`

`function deleteAddress(bytes32 _key) external`

`function deleteBytes(bytes32 _key) external`

`function deleteBool(bytes32 _key) external`

`function deleteInt(bytes32 _key) external`
