---
title: Upgrade de módulos centrais
date: 2021-05-07
permalink: /{{ locale }}/protocol/governance/upgrading-core-modules/index.html
eleventyNavigation:
  key: Upgrade de módulos centrais
  parent: Governance
  order: 33
  title: Upgrade de módulos centrais
---

> Esta página menciona muitos recursos não implementados.

Se você quiser acrescentar ou remover variáveis controladas pelo Policy Contract ou alterar especificações existentes, terá que fazer o upgrade dos módulos no núcleo do Dev Protocol.

---

## Smart contracts que devem ser implementados pelos upgraders

Para fazer o upgrade dos módulos centrais, o desenvolvedor precisa desenvolver os smart contracts (contratos inteligentes) a seguir.

### 1. Patch Contracts

Prepare smart contracts com patches aplicados aos módulos centrais existentes ou smart contracts que implementem módulos recém-adicionados.

### 2. Writer Contract

Prepare um smart contract para aplicar o patch.

Um Writer Contract precisa ser criado como contratos autodestrutíveis, pois são contratos de único uso para fins de patching.

As interfaces a seguir são exigidas para um Writer Contract.

#### write

Esta função é chamada depois que a autoridade é transferida temporariamente do Upgrader Contract (não implementado), e é preciso aplicar o patch com uma chamada.

```solidity
function write() external;
```

#### close

Autodestruir. Seria útil se você verificasse se quem chamou é um Upgrader Contract (não implementado).

```solidity
function close() external;
```

## Upgrader Contract

Um contrato é responsável por gerenciar a autoridade para fazer o upgrade dos módulos centrais do Dev Protocol e impor upgrades do módulo central passados pela governança em cadeia.

O Upgrader Contract autoriza o próprio upgrade com um Patch Contract.
