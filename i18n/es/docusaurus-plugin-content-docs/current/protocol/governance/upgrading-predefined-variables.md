---
title: Upgrading predefined variables
---

Some variables can be easily upgraded with Policy Contract

> Adding/removing variables that Policy Contract should manage need core modules upgrades.
> Currently, core modules upgrades are carried out by the ADMIN key after voting by DIPs, but ADMIN is working on decentralizing core modules upgrades.

## Propose upgrades of predefined variables using Policy Contract

It inherits the Policy Contract interface and adds a concrete implementation to every method. The interface is [published on npm](https://www.npmjs.com/package/@devprotocol/protocol).

```bash
# Install npm package
> npm i @devprotocol/protocol
```

Import the Policy Contract interface in Solidity.

```
import {IPolicy} from "@devprotocol/protocol/contracts/interface/IPolicy.sol";
```

All interfaces are described the following.

## All functions that Policy Contract should implement

You need to implement all the functions, but you should minimize the changes by **inheriting the existing Policy Contract** if you have nothing to change.

### rewards

Takes the total number of staking and the total number of authenticated assets as arguments and returns the number of inflations (the number of mints) per block.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L5-L8)

### holdersShare

Takes the total number of inflations and the total number of staking as arguments and returns the total number of creator rewards. The staking rewards are calculated by subtracting this value from the total rewards.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L10-L13)

### authenticationFee

Takes the total number of authenticated assets and the total number of staking for a Property Contract as arguments and returns the authentication fee. Property Contract authors must burn this authentication fee for each asset authentication.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L15-L18)

### marketApproval

Takes the total number of yes votes and the total number of no votes as arguments and returns the new Market Contract is pass or not.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L20-L23)

### policyApproval

Takes the total number of yes votes and the total number of no votes as arguments and returns the new Policy Contract is pass or not.
Policy Contract is a singleton, so if multiple Policy Contracts are voting simultaneously, only the earliest approved Policy Contract will be adopted, and the other options will be removed.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L25-L28)

### marketVotingBlocks

Returns the voting period for a new Market Contract in blocks. Market Contracts that do not pass beyond this period are considered rejected.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L30)

### policyVotingBlocks

Returns the voting period for a new Policy Contract in blocks. Policy Contracts that do not pass beyond this period are considered rejected.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L32)

### shareOfTreasury

Takes the total supply of a new Property Contract as arguments and returns the number of Property Contracts to a Treasury Contract.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L34)

### treasury

Returns a Treasury Contract address.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L36)

## Propose with on-chain

Deploy the new Policy Contract to the mainnet or testnet and run the Policy Factory Contract's `create` function.

The current Policy Factory Contract address can be obtained with the `policyFactory` function of Address Config Contract. The address of the Address Config Contract is [0x1D415aa39D647834786EB9B5a333A50e9935b796](https://etherscan.io/address/0x1d415aa39d647834786eb9b5a333a50e9935b796#readContract).

## Voting

Community votes by `votePolicy` function of Vote Counter Contract. If `policyApproval` function of an existing Policy Contract returns `true`, the new Policy Contract will be activated immediately.

    votePolicy function takes the following three arguments:

1. Address of a new Policy Contract
2. Address of a Property Contract you are staked
3. yes/no in boolean

### Why use Property Contract's address in the second argument?

The voting rights of a voter are equal to the total number of staking for a voter. The number of staking to one Property Contract per vote is used as the voting right, and the used voting right cannot be exercised again. You can vote for one Policy Contract more than once or vote for multiple Policy Contracts.

This is a specification that implements the concept of quadratic voting.

When there are multiple options simultaneously, a simple majority vote does not choose all stakeholders' best options.

For example, given that the difference in the number of votes for each option is small, the option most people choose for second place may be better than the one for first place, which is slightly higher than the others. Quadratic voting reflects individual weights in your votes to help you choose the best option.
