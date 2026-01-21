---
title: Property
sidebar_position: 1
---

## Summary

Property Contract manages Property tokens. Property tokens are issued by Dev Protocol, conforming to ERC-20. Property tokens can be freely issued by anyone without any limitations.

Property tokens hold various authentication result of the users. Authentication is done by Market.

In order to activate the staking of Property tokens, issuers of them need to authenticate their tokens at any one of Markets.

In Dev Protocol, Property tokens have a function to get reward by staking DEV tokens, although there is no limitations on its use as they conform to ERC-20.

Property tokens are often optimized in the context, and are also called Creator tokens, Project tokens and Social tokens.

## Authentication of Property tokens

You can associate several activities with Property tokens by authenticating them at Market. Accounts to execute authentication are limited to the accounts with `author` address of Property tokens.

![Alice's Property tokens](/img/developers/modules/property/property-tokens.png)

Since Property tokens can be created freely, they can be combined with authentication freely as well. For example, you can authenticate 5 activities with one Property token, or you can also authenticate 5 activities with 5 Property tokens.

Although the mechanism of authentication differs Market by Market, its interface is `Market.authentification` in common.

## Deauthentication

Authors of Property tokens can nullify the results that were once authenticated. Its interface is `Market.deauthenticate`.

## Reward allocation function for Property tokens

Holders of Property tokens obtain their creator reward of DEV tokens in proportion to their ownership ratio.

For example, there is a Property token that has collected staking from users and has creator reward of 4,000 DEV.

![Reward splitting](/img/developers/modules/property/reward-splitting.png)

## Transfer Property tokens

For `transfer` function of Property tokens and `transferFrom` function, you need to pay your reward off before transferring Property tokens.

Payers of Property tokens don’t receive reward after the transfer, although receivers get reward after the transmission.

![Transfer Property](/img/developers/modules/property/transfer-property.png)

In this example, Alice is a 100% holder in Day 1, and transfers 30% to Bob in Day 2. The reward that Alice can get is 100% reward of Day 1 and 70% reward of Day 2. The reward that Bob can get is 0% reward of Day 1 and 30% reward of Day 2.

Since the share of reward changes before and after the transfer of Property tokens, Alice and Bob need to pay off the reward that hasn't been withdrawn before transferring Property tokens.

For `transfer` function of Property tokens and `transferFrom` function, payoff is done automatically. Gas fees for the transfer of Property tokens would be more expensive, because they require more process compared to general ERC-20 tokens.
