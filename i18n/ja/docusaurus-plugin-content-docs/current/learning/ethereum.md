---
title: What's Ethereum?
sidebar_position: 0
---

Ethereum is a P2P network with computing infrastructure. It is one of the blockchain implementation.

## P2P

P2P network is a network structure that is opposite to client-server model network.

Client-server network is connected by one-on-one connection of a server and plural users. Today, IP address of a server is attracted from host names by DNS, and we often see domains like `example.com`.

![Client Server Network](/img/developers/basics/whats-ethereum/client-server.png)

A server is located at the center of the diagram. Each client, in other words, each user is connected to it one-on-one. Since the server is managed by administrators, this network is called centralized network.

P2P is a network that doesn't have any centralized computers equivalent to a server. In the client-server network, processing is done by a server, although in P2P network, each user shares processing.

![P2P Network](/img/developers/basics/whats-ethereum/p2p.png)

We don’t need any administrators in this network due to the absence of centralized server, so it’s called decentralized network.

## Blockchain

Blockchain is one of the types of P2P network. One of the biggest differences from other P2P network is that blockchain is excelling in tamper resistant and time series.

![Blockchains under P2P](/img/developers/basics/whats-ethereum/p2p-blockchains.png)

Blockchain is a network that has the following characteristics:

- No one can manipulate the information exchanged among users.
  - There is no central administrators due to P2P.
- We can deal with time-series data although it’s decentralized.
  - Continuity of data can be expressed without using central time stamps.
- No one can change the data.
  - Past data remains as a fact.
- Data is continuously being added.

These 3 points are realized because blockchain saves data as "Markle tree".

![Chaining hash](/img/developers/basics/whats-ethereum/chaining-hash.png)

Request from users, in other words, processed results in accordance with transaction is hashed to one value at a certain interval and incorporated as part of the next transaction queue. Since transaction queues include hash value of the transaction queue just before, the continuity of hash value is guaranteed without failure. In addition, time series can be accurately expressed thanks to the chain structure.

![Merkle tree](/img/developers/basics/whats-ethereum/merkle-tree.png)

(Several transactions are expressed by a single hash value and compose blocks.)

Merkle tree is a structure used at git, and developers familiarize with it. Thanks to its continuity of hash value, Merkle tree can certify that logs are not tampered.

In addition to the data perpetuation by Merkle tree, Blockchain, a P2P network, has an algorithm to blocking generate unauthorized Markle tree to illegal operations (consensus algorithm).

That means, it is always proved that data in blockchain is not tampered. The reason why crypto assets such as BTC, Bitcoin, and ETH, Ethereum, have a sort of quality as “assets” in the real world is that they are proved to be data tampered by nobody.

If ETH is administered by a server of client-server network, the third party cannot certify whether the sever is correctly administered.

## Ethereum

Ethereum is one of the implementation of blockchain, and is a unique blockchain in terms of the implementation of program at decentralized environment.

Bitcoin, one of the most famous blockchain implementation, works as a register of BTC, although Ethereum records the execution result of program on blockchain.

![Ethereum as a Autonomous Runtime](/img/developers/basics/whats-ethereum/autonomous-runtime.png)

Program execution results are the manipulation that causes the rewrite of variables of a class. Developers can deploy self-made program on Ethereum, execute it at P2P network on Ethereum, and record the execution result by Merkle tree. Ethereum is also thought to be an autonomous runtime.

Programs executed on Ethereum is coded by a statically-typed programming language called Solidity. Solidity is an object-oriented programming language, and has a specification similar to ECMAScript. However, Solidity has various technical limitation in blockchain, therefore, its programming style tends to be stoic as well as minimalistic.

Programs executed on Ethereum are called _smart contracts_.
