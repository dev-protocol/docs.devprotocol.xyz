---
title: Upgrading core modules
---

:::note

This page mentions many unimplemented features.

:::

:::info

If you want to add or remove variables managed by Policy Contract or change existing specifications, you need to upgrade the core modules on Dev Protocol.

:::

## Smart contracts that upgraders should implement

In order to upgrade the core modules, the developer needs to develop the following smart contracts.

### Patch contracts

Prepare smart contracts with patches applied to existing core modules or smart contracts that implement newly added modules.

### Writer contract

Prepare a smart contract to apply the patch.

A writer contract needs to be created as self-destructible contracts, as they are one-time contracts used for patching purposes.

The following interfaces are required for a writer contract.

#### write

This function is called after the authority is temporarily transferred from the Upgrader Contract(unimplemented), and it is necessary to apply the patch with one call.

```
function write() external;
```

#### close

Self-destruct. It would help if you verified that a caller is an Upgrader Contract(unimplemented).

```
function close() external;
```

## Upgrader Contract

A contract is responsible for managing the authority to upgrade the Dev Protocol core modules and enforcing core module upgrades passed by on-chain governance.

Upgrader Contract allows upgrade itself with a patch contract.
