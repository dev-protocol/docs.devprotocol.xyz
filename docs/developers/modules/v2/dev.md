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

Since Dev contract conform to ERC20, interface according to [erC20](https://docs.openzeppelin.com/contracts/4.x/erc20) is retained.
V2 inherits from [AcceesControlEnumerableUpgradeable](https://docs.openzeppelin.com/contracts/4.x/api/access#AccessControlEnumerable) and retains its interface.

`function mint(address _account, uint256 _amount) public`

- `_account`: The address of the minting
- `_amount`: The number of the minting amount

mint Dev tokens from the address specified by `_account` for the amount specified by `_amount`.

`function burn(address _account, uint256 _amount) public`

- `_account`: The address of the burning
- `_amount`: The number of the burning amount

burn Dev tokens from the address specified by `_account` for the amount specified by `_amount`.
burn Dev tokens from the address specified by `_account` for the amount specified by `_amount`.
