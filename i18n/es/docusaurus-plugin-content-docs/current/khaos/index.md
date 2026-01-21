---
title: Khaos
---

## ¿Que es Khaos?

Khaos es un servicio de Oracle diseñado para llevar los datos de Internet a blockchains mientras se mantiene la información secreta, como los tokens secretos, en secreto. Inicialmente, solo admitiremos Dev Protocol, pero tenemos previsto abrirlo en el futuro.

## ¿Como funciona?

Khaos tiene dos interfaces, Autenticación y Oraclizar. La interfaz de autenticación autentifica que el usuario es titular de una credencial y devuelve una clave pública única. La interfaz de oraclize lleva los datos a través de Internet a la blockchain al tiempo que oculta la información secreta mediante claves públicas.

## Como funciona la interfaz de la autenticación de Khaos

Cuando Khaos recibe una solicitud de autenticación de un usuario, ejecuta un método de autenticación. La solicitud de autenticación contiene información secreta para la autenticación (normalmente un token secreto) y un mensaje (como un identificador de usuario) que espera ser autenticado por esa información secreta. Si el método de autenticación es aprobado, Khaos devuelve la clave pública emparejada con la información secreta. Al recuperar el mensaje con su clave pública, garantiza la autenticidad del mensaje al tiempo que oculta la información secreta. Un método de autenticación ejecutado por una solicitud de autenticación es libremente ampliable por el usuario.

![Cómo almacena Khaos la confidencialidad.](/img/khaos/how-khaos-stores-confidentials.png)

## Como funciona la interfaz de Khaos de oraclize

Khaos monitoriza algunos eventos contractuales por lotes. El objetivo del monitoreo puede ser cualquier dirección en la que se despliegue un usuario. El contrato desplegado por el usuario hace una solicitud de oraclize a Khaos emitiendo un evento de acuerdo con la interfaz; cuando Khaos recibe la solicitud de oraclize, obtiene algunos datos de Internet de los mensajes de eventos. Los datos se introducen en las cadenas de bloques llamando al método de llamada de retorno del contrato de acuerdo con las funciones definidas por el usuario. El método de obtención de datos ejecutado por la petición oraclize es libremente ampliable por el usuario. El método de autenticación ejecutado por una solicitud de autenticación es libremente ampliable por el usuario.

![Cómo oracliza Khaos](/img/khaos/how-khaos-oraclizes.png)
