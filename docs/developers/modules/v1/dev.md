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

Since Dev contract conform to ERC20, interface according to [erC20](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#IERC20) is retained.
and, Dev contract inherits from [ERC20Mintable](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20Mintable), [ERC20Burnable](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20Burnable), and UsingConfig, and therefore retains their interfaces.

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

`fee(address _from, uint256 _amount) external returns (bool)`

- `_from`: The address of the burning
- `_amount`: The number of the burning amount

burn Dev tokens from the address specified by `_from` for the amount specified by `_amount`.
