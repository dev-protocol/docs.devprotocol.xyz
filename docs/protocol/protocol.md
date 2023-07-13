---
title: Dev Protocol
---

## APIs that are provided by Dev Protocol

Dev Protocol provides the following primitive APIs.

- ERC-20 tokens minting
- ERC-721 tokens minting
- Ownership authenticating
- Revenue sharing
- Staking

All of these are supported by the core module contract, which allows developers to call any API with permissionless.

Dev Kit JS ([@devprotocol/dev-kit](https://www.npmjs.com/package/@devprotocol/dev-kit)) is a TypeScript/JavaScript SDK that helps developers call Dev Protocol APIs from a web app or Node.js app.

For calling core module contracts on-chain, install [@devprotocol/protocol](https://www.npmjs.com/package/@devprotocol/protocol) or [@devprotocol/protocol-v2](https://www.npmjs.com/package/@devprotocol/protocol-v2) in npm and use it in your HardHat or Truffle projects.

## Interactions

ERC-20 tokens are called Property Tokens and ERC-721 tokens are called sTokens. Property Tokens have one or more authentication data that prove what creative project they are tokenizing. We can explain many features mainly in terms of Property Tokens.

### Minting your tokens

In Dev Protocol, users can be minted Property Tokens freely.

![One person can mint multiple tokens.](/img/developers/mint.png)

### Authentication

Property Tokens have one or more authentication data. Authentication data is associated with a specific asset by means of an authentication method called Market. Currently, assets that can be authenticated include GitHub repositories, Discord servers, and YouTube channels. The development of these asset groups is governed by Dev Protocol governance.

Given the many-to-many relationship between Property Tokens and authentication data, it is easy to understand if you think of it as a kind of the tag of blog. For example, the Property Tokens "Alice Tokens" can be associated with multiple GitHub repositories, multiple Discord servers, and multiple YouTube channels owned by Alice. Alice can also choose to create a single Property Tokens for each of her creative projects.

![One Property Tokens can be associated with multiple authentication data.](/img/developers/authentication.png)

### Share tokens and revenues

Property Tokens follow the standard ERC-20 specifications, and their token shares can be shared by multiple people, and anyone can freely transfer their share.

Every Property Tokens holder receives a pro rata share of the staking reward earned by Property Tokens, based on their share. This allows Property Tokens to provide an incentive to project collaborators in instead of a salary.

![Based on share, rewards are distributed pro rata by DEV.](/img/developers/distribution-and-rewards.png)

### Staking

Property Tokens can collect staking of DEV tokens. Staking users get a pro rata share of DEV token's inflated funds based on the number of staking. Staking rewards are split between the staking users and Property Tokens holder group. Staking is usually done by DEV tokens, but staking can also be done via ETH by using the Dev Protocol utility contract.

And staking is also a means of getting NFTs, which will be described in detail in the next section.

![Staking DEV and earning yield.](/img/developers/staking.png)

### Minting NFTs

When you stake DEV in Property Tokens, you automatically get an NFT. The NFT is called sTokens in Dev Protocol. Technically, sTokens store the status of the staking position, but its cover image can be freely changed for each Property Tokens, so you can enjoy the artistry too. sTokens cover images can be changed statically or dynamically, and dynamic sTokens (=dynamic NFTs) can customize their output according to different conditions.

All sTokens indicate some staking position, they can be used as keys for any token-gating. For example, you can permit a community channel exclusively to users who have 100 or more DEVs staked in your Property Tokens, or sell exclusive items.

If you own Property Tokens, offering attractive sTokens to staking users works as a kind of NFT Sale. If you are a staking user, staking and getting sTokens is like participating in a kind of NFT Sale.

![Staking users get NFT(sTokens).](/img/developers/minting-nft.png)
