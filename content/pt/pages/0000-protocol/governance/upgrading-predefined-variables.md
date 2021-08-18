---
title: Upgrading de variáveis predefinidas
date: 2021-05-07
permalink: /{{ locale }}/protocol/governance/upgrading-predefined-variables/index.html
eleventyNavigation:
  key: Upgrading de variáveis predefinidas
  parent: Governance
  order: 34
  title: Upgrading de variáveis predefinidas
---

Algumas variáveis podem receber upgrade com facilidade por meio do Policy Contract

> Para acrescentar/remover variáveis que o Policy Contract deve gerenciar, é preciso fazer upgrades dos módulos centrais.
> Atualmente, os upgrades dos módulos centrais são executados pela chave ADMIN após votação pelos DIPs, mas o ADMIN está trabalhando para descentralizar os upgrades dos módulos centrais.

## Como propor upgrades de variáveis predefinidas usando o Policy Contract

Ele herda a interface do Policy Contract e acrescenta uma implementação concreta a cada método. A interface está [publicada no npm](https://www.npmjs.com/package/@devprotocol/protocol).

```bash
# Install npm package
> npm i @devprotocol/protocol
```

Importe a interface do Policy Contract no Solidity.

```solidity
import {IPolicy} from "@devprotocol/protocol/contracts/interface/IPolicy.sol";
```

Todas as interfaces estão descritas a seguir.

## Todas as funções que o Policy Contract deverá implementar

Você precisa implementar todas as funções, mas deve minimizar as mudanças **herdando o Policy Contract existente** se não houver nada para mudar.

### rewards

Recebe o número total de staking e o número total de ativos autenticados como argumentos e retorna o número de inflações (o número de mints) por bloco.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L5-L8)

### holdersShare

Recebe o número total de inflações e o número total de staking como argumentos e retorna o número total de remunerações de criador. As remunerações por staking são calculadas subtraindo-se esse valor do total de remunerações.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L10-L13)

### authenticationFee

Recebe como argumentos o número total de ativos autenticados e o número total de staking para um Property Contract e retorna a taxa de autenticação. Os autores do Property Contract deverão queimar essa taxa de autenticação para cada autenticação de ativo.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L15-L18)

### marketApproval

Recebe como argumentos o número total de votos sim e o número total de votos não e retorna se o novo Market Contract foi aprovado ou não.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L20-L23)

### policyApproval

Recebe o número total de votos sim e o número total de votos não como argumentos e retorna se o novo Policy Contract foi aprovado ou não.
O Policy Contract é um singleton, de modo que se vários Policy Contracts estiverem em votação simultânea, apenas o primeiro Policy Contract será adotado, sendo que as outras opções serão removidas.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L25-L28)

### marketVotingBlocks

Retorna o período de votação para um novo Market Contract, em blocos. Os Market Contracts que não ultrapassarem esse período são considerados rejeitados.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L30)

### policyVotingBlocks

Retorna o período de votação para um novo Policy Contract, em blocos. Os Policy Contracts que não ultrapassarem esse período são considerados rejeitados.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L32)

### shareOfTreasury

Recebe o estoque total de um novo Property Contract como argumento e retorna o número de Property Contract para um Treasury Contract.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/a89d43860200002fa630be8e5b14b0f8c00968e9/contracts/interface/IPolicy.sol#L34)

### treasury

Retorna o endereço de um Treasury Contract.

[dev-protocol/protocol](https://github.com/dev-protocol/protocol/blob/main/contracts/interface/IPolicy.sol#L36)

## Proposta com on-chain

Implemente o novo Policy Contract no mainnet ou no testnet e execute a função `create` do Policy Factory Contract.

O endereço atual do Policy Factory Contract pode ser obtido com a função `policyFactory` do Address Config Contract. O endereço do Address Config Contract é [0x1D415aa39D647834786EB9B5a333A50e9935b796](https://etherscan.io/address/0x1d415aa39d647834786eb9b5a333a50e9935b796#readContract).

## Votação

Votos da comunidade pela função `votePolicy` do Vote Counter Contract. Se a função `policyApproval` de um Policy Contract existente retornar `true`, o novo Policy Contract será ativado imediatamente.

    A função votePolicy recebe os três argumentos a seguir:

1. Endereço de um novo Policy Contract
2. Endereço de um Property Contract em que você realizou staking
3. Sim/não em booleano

### Por que usar o endereço do Property Contract no segundo argumento?

Os direitos de votação de um votante são iguais ao número total de staking para esse votante. O número de staking para um Property Contract por voto é usado como o direito de votação, e o direito de votação usado não pode ser exercido novamente. Você pode votar para um Policy Contract mais de uma vez ou votar para vários Policy Contracts.

Esta é uma especificação que implementa o conceito de votação quadrática.

Quando existem múltiplas opções simultaneamente, uma votação simples pela maioria não escolhe as melhores opções de todos os stakeholders.

Por exemplo, dado que a diferença no número de votos para cada opção é pequena, a opção que a maioria das pessoas escolhe para o segundo lugar pode ser melhor do que a do primeiro lugar, que é ligeiramente superior às demais. A votação quadrática reflete pesos individuais em seus votos para ajudá-lo a escolher a melhor opção.
