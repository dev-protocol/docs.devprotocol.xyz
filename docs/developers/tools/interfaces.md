---
title: Interfaces
sidebar_position: 0
---

## What is Interfaces?

Provides interfaces for the main Dev Protocol contracts in Solidity.

|        | Source                                              |
| ------ | --------------------------------------------------- |
| npm    | https://www.npmjs.com/package/@devprotocol/protocol |
| GitHub | https://github.com/dev-protocol/protocol            |

## Usage

You can install it with npm or yarn and import it within your project.

Install from npm.

```bash
npm i @devprotocol/protocol
```

Or, use yarn.

```bash
yarn add @devprotocol/protocol
```

## Example

```solidity
import {IAddressConfig} from "@devprotocol/protocol/contracts/interface/IAddressConfig.sol";
import {IPropertyGroup} from "@devprotocol/protocol/contracts/interface/IPropertyGroup.sol";

contract Demo {
	function validatePropertyAddress(address _property) external view returns(bool) {
		IAddressConfig addressConfig = IAddressConfig(0x1D415aa39D647834786EB9B5a333A50e9935b796);
		IPropertyGroup propertyGroup = IPropertyGroup(addressConfig.propertyGroup());
		retrurn propertyGroup.isGroup(_property);
	}
}
```
