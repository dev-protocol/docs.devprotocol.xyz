---
title: Khaos
---

## What's Khaos?

Khaos is an oracle service designed to bring Internet data into blockchains while keeping secret information, such as secret tokens, under wraps. Initially, we will only support Dev Protocol, but we plan to open it up in the future.

## How does it work?

Khaos has two interfaces, Authentication, and Oraclize. The authentication interface authenticates that the user is a credential holder and returns a unique public key. The oraclize interface brings data across the Internet to the blockchain while hiding secret information through public keys.

## How Khaos's authentication interface works

When Khaos receives an authentication request from a user, it executes an authentication method. The authentication request contains secret information for authentication (usually a secret token) and a message(like a user ID) that expects to be authenticated by that secret information. If the authentication method is passed, Khaos returns the public key paired with the secret information. By retrieving the message with its public key, it guarantees the message's authenticity while hiding the secret information. An authentication method executed by an authentication request is freely extendable by the user.

![How Khaos Stores Confidentials](/img/khaos/how-khaos-stores-confidentials.png)


## How Khaos's oraclize interface works

Khaos monitors some contract events in batches. The target of the monitoring can be any address that a user deploys to. The user-deployed contract makes an oraclize request to Khaos by emitting an event according to the interface; when Khaos receives the oraclize request, it fetches some data from the Internet the event messages. The data is fetched into blockchains by calling the contract's callback method according to the user-defined functions. The data fetching method executed by the oraclize request is freely extendable by the user. An authentication method executed by an authentication request is freely extendable by the user.

![How Khaos Oraclizes](/img/khaos/how-khaos-oraclizes.png)
