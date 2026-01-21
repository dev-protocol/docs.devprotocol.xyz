---
title: Authentication and Oraclization
---

## Crear una signatura publica

Una firma pública es una cadena de firma que no supone un riesgo de seguridad cuando se publica. Una firma pública es una "cadena que quieres probar (por ejemplo, ID de usuario)" y un "espacio de nombres de método de autenticación (definido por un usuario)" firmado con la dirección de tu cuenta de Ethereum. Es decir, cualquiera puede descifrar con la dirección de la cuenta de Ethereum.

Para generar una firma nueva, pasa la firma generada por el usuario a la cartera de Ethereum y el mensaje usado para firmarlo, un mensaje secreto (e.j. un token de acceso), y el metodo de autenticación al API RESTful de Khaos.

Puedes fácilmente solicitarlo usando el [Kit de Khaos publicado en NPM](https://www.npmjs.com/package/@devprotocol/khaos-kit). A continuación se explica cómo crear una firma pública utilizada en el Contrato de Mercado GitHub del Protocolo Dev.

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
	console.log(res.publicSignature) // => Firma publica generada
	console.log(res.address) // => Dirección firmada
})
```

## Emitir evento en cadena

Emitir eventos de contratos inteligentes. Khaos monitoriza los eventos regularmente y comienza a oraclizar tan pronto como detecta un nuevo evento. Una función de Khaos definida por el usuario declara la dirección del contrato inteligente a ser monitoreada. Si los datos del evento tienen una firma pública con la clave `publicSignature`, Khaos pasará la información secreta almacenada al método oraclize. Una función Khaos definida por el usuario declara el método oraclize.

> Puedes rápidamente desarrollar funciones de Khaos definidas por el usuario con el [Kit de principiantes de Khaos](https://github.com/dev-protocol/khaos-starter-kit).

El nombre del evento y los datos del evento se pueden cambiar a como lo deseé con funciones definidas por el usuario de Khaos. Un ejemplo es mostrado a continuación.

```solidity
event Query(string foo, string publicSignature, address user);

function query(string calldata _foo, string calldata _publicSignature) external {
	emit Query(_foo, _publicSignature, msg.sender);
}
```

Cuando Khaos completa la oraclización, Khaos ejecuta una función. La dirección del contrato inteligente al cual la devolución de llamada es llamada es considerada lo mismo que la dirección que el evento emitio.

Puedes cambiar el nombre de la función y argumentos como lo deseé con funciones De Khaos definidas por el usuario. Un ejemplo se muestra a continuación.

:::tip

Le recomendamos que verifique que quien llama a la función de devolución de llamada es Khaos, por ejemplo, verificando la dirección de quien llama o una clave única que sólo Khaos conozca como argumento.

:::

```solidity
function callback(bool _result) external {
	require(msg.sender == khaos, "el remitente no es Khaos");
	// Procesamiento que depende de Oracle...
}
```

## Esperar a la devolución de llamada

¡Todo lo que tienes que hacer es esperar la devolución de llamada de Khaos! 🎉
