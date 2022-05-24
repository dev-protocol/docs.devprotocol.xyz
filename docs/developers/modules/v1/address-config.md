---
title: AddressConfig
sidebar_position: 3
---

## Summary

This contract manages the address of each contract.

## Interface

AddressConfig inherits from Ownable, and retains its interface.

`function token() public view return (address)`

`function allocator() public view return (address)`

`function allocatorStorage() public view return (address)`

`function withdraw() public view return (address)`

`function withdrawStorage() public view return (address)`

`function marketFactory() public view return (address)`

`function marketGroup() public view return (address)`

`function propertyFactory() public view return (address)`

`function propertyGroup() public view return (address)`

`function metricsGroup() public view return (address)`

`function metricsFactory() public view return (address)`

`function policy() public view return (address)`

`function policyFactory() public view return (address)`

`function policySet() public view return (address)`

`function policyGroup() public view return (address)`

`function lockup() public view return (address)`

`function lockupStorage() public view return (address)`

`function voteTimes() public view return (address)`

`function voteTimesStorage() public view return (address)`

`function voteCounter() public view return (address)`

`function voteCounterStorage() public view return (address)`

`function setAllocator(address _addr) external`

`function setAllocatorStorage(address _addr) external`

`function setWithdraw(address _addr) external`

`function setWithdrawStorage(address _addr) external`

`function setMarketFactory(address _addr) external`

`function setMarketGroup(address _addr) external`

`function setPropertyFactory(address _addr) external`

`function setPropertyGroup(address _addr) external`

`function setMetricsFactory(address _addr) external`

`function setMetricsGroup(address _addr) external`

`function setPolicyFactory(address _addr) external`

`function setPolicyGroup(address _addr) external`

`function setPolicySet(address _addr) external`

`function setPolicy(address _addr) external`

`function setToken(address _addr) external`

`function setLockup(address _addr) external`

`function setLockupStorage(address _addr) external`

`function setVoteTimes(address _addr) external`

`function setVoteTimesStorage(address _addr) external`

`function setVoteCounter(address _addr) external`

`function setVoteCounterStorage(address _addr) external`
