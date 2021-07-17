---
title: Autenticação e Oraclização
date: 2021-05-07
permalink: /{{ locale }}/khaos/authentication-and-oraclization/index.html
subtitle: Aprenda a oraclizar com o Khaos e ocultar um dado secreto.
eleventyNavigation:
  key: Autenticação e Oraclização
  parent: Khaos
  order: 1100
  title: Autenticação e Oraclização
---

## 1. Crie uma assinatura pública

Uma assinatura pública é uma string de assinatura que não impõe um risco à segurança quando é publicada. Uma assinatura pública é uma "string que você deseja provar (p.ex., ID de usuário)" e um "namespace do método authentication (definido por um usuário)" assinado com o seu endereço de conta do Ethereum. Ou seja, qualquer um pode decodificar com o endereço de conta do Ethereum.

Para gerar uma nova assinatura pública, passe a assinatura gerada pelo usuário na wallet do Ethereum e a mensagem usada para assiná-la, uma mensagem secreta (p.ex., um token de acesso) e o namespace do método authentication para a API RESTful do Khaos.

Você pode solicitar isso com facilidade usando o [Khaos Kit publicado no npm](https://www.npmjs.com/package/@devprotocol/khaos-kit). Veja como criar uma assinatura pública usada no GitHub Market Contract do Dev Protocol.

```ts
import { sign } from '@devprotocol/khaos-kit'

sign(
	'github-market',
	'mainnet'
)({
	message: 'dev-protocol/protocol',
	signature: 'SIGNATURE',
	secret: 'SECRET',
}).then((res) => {
	console.log(res.publicSignature) // => Generated public signature
	console.log(res.address) // => Signed address
})
```

## 2. Emita o evento on-chain

Emita eventos de smart contract (contrato inteligente). O Khaos monitora eventos regularmente, e começa a oraclizar assim que detecta um novo evento. Uma função do Khaos definida pelo usuário declara o endereço do smart contract a ser monitorado. Se os dados do evento possuírem uma assinatura pública com a chave `publicSignature`, o Khaos passará a informação secreta armazenada para o método oraclize. Uma função do Khaos definida pelo usuário declara o método oraclize.

> Você pode desenvolver funções do Khaos definidas pelo usuário rapidamente com o Khaos Starter Kit.
> https://github.com/dev-protocol/khaos-starter-kit

Você pode alterar o nome e os dados do evento como você desejar, usando as funções do Khaos definidas pelo usuário. Um exemplo aparece em seguida.

```solidity
event Query(string foo, string publicSignature, address user);

function query(string calldata _foo, string calldata _publicSignature) external {
	emit Query(_foo, _publicSignature, msg.sender);
}
```

Quando o Khaos conclui o oraclize, ele executa uma função de callback. O endereço do smart contract ao qual o callback é chamado é considerado igual ao endereço que emitiu o evento.

Você pode alterar o nome e os argumentos da função de callback como desejar, usando as funções do Khaos definidas pelo usuário. Um exemplo aparece em seguida.

> Recomendamos que você verifique se quem chamou a função de callback é o Khaos, por exemplo, verificando o endereço de quem chamou ou um argumento contendo uma chave exclusiva, que só o Khaos conhece.

```solidity
function callback(bool _result) external {
	require(msg.sender == khaos, "sender isn’t khaos");
	// Some processing that depends on oracle...
}
```

## 3. Espere pelo callback

Você só precisa esperar por um callback do Khaos! 🎉
