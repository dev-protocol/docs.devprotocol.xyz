---
title: What is Khaos?
---

Khaos is an oracle service designed to bridge Internet data to blockchains while securely managing sensitive information, such as API keys or secret tokens.

## How does it work?

Khaos provides two primary interfaces: Authentication and Oraclize. The Authentication interface verifies a user's credentials and returns a unique public key. The Oraclize interface bridges data from the Internet to the blockchain, utilizing public keys to mask sensitive information.

## How the Authentication Interface Works

Upon receiving an authentication request, Khaos executes a specified authentication method. The request includes credentials (typically a secret token) and a message (such as a User ID) to be authenticated against those credentials. If authentication succeeds, Khaos returns a public key associated with the provided credentials. This public key can be used to verify the message's authenticity without revealing the underlying secret credentials. Users can define and extend custom authentication methods as needed.

![How Khaos Stores Confidentials](/img/khaos/how-khaos-stores-confidentials.png)

[Created by SequenceDiagram.org](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIAkHsDu0DSALAhvAztAysPAE6S4DC8AdgGYgAmkloG42AUGwCICCADr9ABiRKsEZ0AtAD5APBuAYffRZceSEQBuqgFwAlSAEcArqWC4MB4GkagAxhlBU2leGOjwNRaPMU58q95u5zNEpoAFtIC3g6XAAjAE9oA2xVCUgADzFKBjpoNi9MHxV1FKkASSZVSgidfSNsYDZysSIq4Gl8pV9iohrsXipkx2cYN1VPBQLlPy0CYhhrKloGJhAWPInOovdpHn4hEQqsmuADFtxeDBASHN4DGPAQa2gAa0g4oA)

## How the Oraclize Interface Works

Khaos monitors specific contract events in batches. It can monitor any user-deployed contract address. A user-deployed contract initiates an oraclize request by emitting a specific event. Upon detecting this event, Khaos fetches data from the Internet based on the event's parameters. The fetched data is then delivered to the blockchain by invoking a callback method on the contract, as defined by the user. Users can customize the data fetching logic executed during an oraclize request.

![How Khaos Oraclizes](/img/khaos/how-khaos-oraclizes.png)

[Created by SequenceDiagram.org](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIAkHsDu0DSALAhvAztA8gE4YDG4IAXpNgFDUAiAggA5PQBiB8AdsJFwCYBaAHwBhbsCLFg2AFwAlSAEcArlRnR+GYBmgAzSMGJpqAI3gAPaPABukAtHE8pM2QFEAtmFnQABgEU1AgBPX2hIOx5qcHh4VgBZbjB4Bwi+GWpAHg3AGH30LFwAZXs7AhEnSRJXNkNjaGALanKXbBEcvJxoIoIShUMVAi5ceuo+fizczA6ukpEASR57LkNe1XVqed4Bw1aJ-M7i+17sJm5sSHH2woPSsQlm2VEMcHBTEgBrRrvKluFGFnZOAsBL1gP1BvoamhIPxNNoMNQgA)
