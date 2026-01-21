---
title: Dev
sidebar_position: 0
---

## Summary

Dev Contract manages DEV tokens. Dev Protocol manages the supply amount of DEV token. It conforms to ERC-20 and is Dev Protocol's key token.

DEV tokens are minted by Lockup Contract or Withdraw Contract, and is burned by Market Contract.

In Dev Protocol, DEV tokens have a function to gain staking rewards by staking Property tokens. Since it conforms to ERC-20, there is no limitation for its usage. When users stake DEV tokens, they can get the following side effects:

- Allocation of creator rewards for Property token holders.
- Acquisition of right to vote for the governance.

## Interface

`function deposit(address _to, uint256 _amount) external returns (bool)`

- `_to`: The address of the staking destination
- `_amount`: The number of the staking amount

Stakes DEV tokens to the address specified by `_to`, with the amount specified by `_amount`.

`function depositFrom(address _from, address _to, uint256 _amount) external returns (bool)`

- `_from`: The address of the spender
- `_to`: The address of the staking destination
- `_amount`: The number of the staking amount

Stakes DEV tokens from the address specified by `_from` to the address specified by `_to`, with the amount specified by `_amount`.

Before calling the method, the spender must grant sufficient allowances. If the allowance is insufficient, the allowance needs to be added by calling the approve method.

`function totalSupply() external view returns (uint256)`

Returns the latest total supply of DEV tokens.

`function balanceOf(address account) external view returns (uint256)`

Returns the balance of the address specified by `account`.

`function transfer(address recipient, uint256 amount) external returns (bool)`

Transfers DEV tokens to the address specified by `recipient`, with the amount specified by `amount`.

`function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)`

`function allowance(address owner, address spender) external view returns (uint256)`

`function approve(address spender, uint256 amount) external returns (bool)`

`function name() public view returns (string memory)`

Returns the token name `Dev`

`function symbol() public view returns (string memory)`

Returns the token symbol `DEV`

`function decimals() public view returns (uint8)`

Returns the token decimals `18`
