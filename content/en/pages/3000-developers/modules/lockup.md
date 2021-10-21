---
title: Lockup
date: 2021-10-13
permalink: /{{ locale }}/developers/modules/lockup/index.html
eleventyNavigation:
  key: lockup-module
  parent: developers_modules
  order: 3130
  title: Lockup
---

## Summary

The Staking is in Dev Protocol new supporting system that secures the sustainability of creator activity.

The Lockup contract contains code to handle staking to support projects and earn rewards.

The Sponsors can deposit their DEV tokens into a Property(Staking Pool) and get back an s Token NFT as a ‘Proof of Patronage’. This NFT contains all the metadata related to the DEV token Staking. (more about [sTokens](https://medium.com/devprtcl/stokens-nfts-mirroring-dev-staking-b41f93d0f8a6))

The Sponsors who deposit in properties can withdraw their staking at any time and get rewards. (How are staking rewards calculated? [Token](/en/introduction/devtoken/))

For these roles, the contract has the following functions.

## Interface

## Deposit To Property

The sender can stake his DEV token to the property.

```solidity
function depositToProperty(address _property, uint256 _amount) returns (uint256)
```

- `_property`: The property address in which the sender wishes to stake their DEV token
- `_amount`: The amount of the DEV token to be staked

Returns the ID of the created new staking position(s tokens).

## Deposit To Position

The sender who has the staking position can deposit more DEV tokens and update s-tokens status.

```solidity
function depositToPosition(uint256 _tokenId, uint256 _amount) onlyPositionOwner(_tokenId) returns (bool)
```

- `_tokenId`: The ID of the staking position(s tokens)
- `_amount`: The amount of the DEV token to be staked

Returns boolean true on success, otherwise reverts.

## Withdraw By Position

The sender can withdraw his staking Tokens and harvest rewards with the ID of staking position(s tokens).

```solidity
function withdrawByPosition(uint256 _tokenId, uint256 _amount) onlyPositionOwner(_tokenId) returns (bool)
```

- `_tokenId`: The ID of the staking position(s tokens)
- `_amount`: The amount of the DEV token to be unstaked

Returns boolean true on success, otherwise reverts.

## Withdraw

The sender can withdraw his staking Tokens and harvest rewards.

```solidity
function withdraw(address _property, uint256 _amount)
```

- `_property`: The property address from which the sender wishes to withdraw their DEV token
- `_amount`: The amount of the DEV token to be unstaked

Releases staking and transfers the staked and withdraw rewards amount to the sender.

## Cap

```solidity
function cap() view returns (uint256)
```

Returns cap.

## Calculate Cumulative Reward Prices

```solidity
function calculateCumulativeRewardPrices() view returns (
    uint256 _reward,
    uint256 _holders,
    uint256 _interest,
    uint256 _holdersCap
)
```

Returns

## Calculate Reward Amount

```solidity
function calculateRewardAmount(address _property) view returns (uint256, uint256)
```

- `_property`: The property address in which the sender has staked their DEV token

Returns the amount of the sender cumulative rewards and cap per the property.

## Update

Updates cumulative sum of the maximum mint amount calculated by Allocator contract, the latest maximum mint amount per block, and the last recorded block number.

```solidity
function update()
```

## Calculate Withdrawable Interest Amount

```solidity
function calculateWithdrawableInterestAmount(address _property, address _user) view returns (uint256)
```

- `_property`: The property address
- `_user`: The account of the staking holder

Returns the amount of the staking holder withdrawable reward.

## Calculate Withdrawable Interest Amount By Position

```solidity
function calculateWithdrawableInterestAmountByPosition(uint256 _tokenId) view returns (uint256)
```

- `_tokenId`: The ID of the staking position(s tokens)

Returns the amount of the staking holder withdrawable reward.

## Get All Value

```solidity
function getAllValue() view returns (uint256)
```

Returns the amount of the total staked in the protocol.

## Get Value

```solidity
function getValue(address _property, address _sender) view returns (uint256)
```

- `_property`: The property address
- `_sender`: The account of the staking holder

Returns the amount of the staked token by this staking holder in the Property.

## Get Property Value

```solidity
function getPropertyValue(address _property) view returns (uint256)
```

- `_property`: The property address

Returns the amount of the staked Token to the Property.

## Migrate To S Tokens

The sender who has already staked can migrate his staking position to s Tokens.

```solidity
function migrateToSTokens(address _property) returns (uint256 tokenId_)
```

- `_property`: The property address in which the sender has staked their DEV token

Returns the ID of the migrated staking position(s tokens).

## Key Events

```solidity
event PropertyTransfer(address _property, address _from, address _to);
```

Emitted upon a successful methods depositToProperty() and depositToPosition().
