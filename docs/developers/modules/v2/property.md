---
title: Property
sidebar_position: 3
---

## Summary

Tokenized contract of creator's activity.

## Interface
This contract inherits from UsingRegistry and [ERC20](https://docs.openzeppelin.com/contracts/4.x/erc20). So it retains the interfaces of these contructs.

`function author() external view returns (address)`

`function changeName(string memory _name) external`

`function changeSymbol(string memory _symbol) external`

`function withdraw(address _sender, uint256 _value) external`

`function getBalances() external view returns (PropertyBalance[] memory)`
