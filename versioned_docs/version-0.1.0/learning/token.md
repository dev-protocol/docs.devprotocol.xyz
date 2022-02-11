---
title: What's token?
sidebar_position: 1
---

Token is a program executed on Ethereum, and is one of the common forms of smart contract. It is a written program in accordance with standardized interface.

Since written programs are freely executed on Ethereum, there is no limit for its usage. However, by standardizing interface, composability can be realized for programs that are used for the same purpose. Token is a standardized program for "the program as currency", which is generally called as crypto currency or crypto assets.

Standardizing process in Ethereum is administered at git repository called EIP. Anyone can make a suggestion for it, so the specification approved by the majority of users users will be officially standardized.

There are many new-coming specifications proposed for accessibility. But the most popular specification is **ERC-20**, and its interface is like this:

```solidity
interface IERC20 {
  function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  function allowance(address owner, address spender)
    external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);

  function approve(address spender, uint256 value)
    external returns (bool);

  function transferFrom(address from, address to, uint256 value)
    external returns (bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );
}
```

All of the smart contracts that succeed this interface are tokens conforming to ERC-20. Developers can add their original functions to the interface.

[Open Zeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts) is the most popular smart contract library. You can develop tokens easily and safely with it.
