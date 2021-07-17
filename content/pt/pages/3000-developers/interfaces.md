---
title: Interfaces
date: 2021-05-07
permalink: /{{ locale }}/developers/interfaces/index.html
eleventyNavigation:
  key: Interfaces
  parent: developers
  order: 3010
  title: Interfaces
---

## O que é Interfaces?

Oferece interfaces para os principais contratos do Dev Protocol no Solidity.

|        | Fonte                                               |
| ------ | --------------------------------------------------- |
| npm    | https://www.npmjs.com/package/@devprotocol/protocol |
| GitHub | https://github.com/dev-protocol/protocol            |

## Uso

Você pode instalá-lo com npm ou yarn e importá-lo para dentro do seu projeto.

Instale pelo npm.

```bash
npm i @devprotocol/protocol
```

Or, use yarn.

```bash
yarn add @devprotocol/protocol
```

## Exemplo

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
