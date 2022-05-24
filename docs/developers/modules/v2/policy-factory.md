---
title: PolicyFactory
sidebar_position: 3
---

## Summary

It is a contract that ties market and property together.

## Interface

This contract inherits from InitializableUsingRegistry and [OwnableUpgradeable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable). So it retains the interfaces of these contructs.

`function isPotentialPolicy(address) public returns (bool)`

`function closeVoteAt(address) public returns (uint256)`

`function create(address _newPolicyAddress) external`

`function forceAttach(address _policy) external`

`function isDuringVotingPeriod(address _policy) public view returns (bool)`
