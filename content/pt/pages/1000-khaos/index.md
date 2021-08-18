---
title: Khaos
date: 2021-05-07
permalink: /{{ locale }}/khaos/index.html
subtitle: Oráculo do Dev Protocol que autentica confidencialmente os dados fora da cadeia para os casos de uso em cadeia.
eleventyNavigation:
  key: Khaos
  order: 1000
  title: Khaos
---

## O que é Khaos?

Khaos é um serviço de oráculo projetado para trazer dados da Internet para as blockchains, enquanto mantém informações secretas, como tokens secretos, em sigilo. Inicialmente, ofereceremos suporte apenas para o Dev Protocol, mas planejamos abri-lo no futuro.

## Como isso funciona?

O Khaos possui duas interfaces, Authentication e Oraclize. A interface authentication autentica que o usuário é detentor de uma credencial e retorna uma chave pública exclusiva. A interface oraclize traz dados da Internet para a blockchain enquanto oculta informações sigilosas por meio das chaves públicas.

## Como funciona a interface authentication do Khaos

Quando o Khaos recebe uma solicitação de autenticação de um usuário, ele executa um método de autenticação. A solicitação de autenticação contém informações sigilosas para autenticação (geralmente um token secreto) e uma mensagem (como uma ID de usuário) que espera ser autenticado por essas informações secretas. Se o método de autenticação tiver sucesso, o Khaos retorna a chave pública emparelhada com as informações secretas. Ao recuperar a mensagem com sua chave pública, ele garante a autenticidade da mensagem enquanto oculta as informações sigilosas. Um método de autenticação executado por uma solicitação de autenticação pode ser estendido livremente pelo usuário.

![Como o Khaos Armazena Dados Confidenciais](https://camo.githubusercontent.com/e1cc4c61b8b1d868529b653b2d5aa23cabfc8533/68747470733a2f2f73766773686172652e636f6d2f692f4b37542e737667)

[Criado por SequenceDiagram.org](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIAkHsDu0DSALAhvAztAysPAE6S4DC8AdgGYgAmkloG42AUGwCICCADr9ABiRKsEZ0AtAD5APBuAYffRZceSEQBuqgFwAlSAEcArqWC4MB4GkagAxhlBU2leGOjwNRaPMU58q95u5zNEpoAFtIC3g6XAAjAE9oA2xVCUgADzFKBjpoNi9MHxV1FKkASSZVSgidfSNsYDZysSIq4Gl8pV9iohrsXipkx2cYN1VPBQLlPy0CYhhrKloGJhAWPInOovdpHn4hEQqsmuADFtxeDBASHN4DGPAQa2gAa0g4oA)

## Como funciona a interface oraclize do Khaos

O Khaos monitora alguns eventos de contrato em lotes. O destino do monitoramento pode ser qualquer endereço implementado por um usuário. O contrato implementado pelo usuário faz uma solicitação oraclize ao Khaos, emitindo um evento de acordo com a interface; quando o Khaos recebe a solicitação oraclize, ele busca alguns dados da Internet nas mensagens do evento. Os dados são buscados em blockchains chamando o método de callback do contrato de acordo com as funções definidas pelo usuário. O método de busca de dados executado pela solicitação oraclize pode ser estendido livremente pelo usuário. Um método authentication executado por uma solicitação de autenticação pode ser estendido livremente pelo usuário.

![Como o Khaos Oraclizz](https://camo.githubusercontent.com/d7dc00d943237d70187196746ae0c4ff79749dc5/68747470733a2f2f73766773686172652e636f6d2f692f4b386e2e737667)

[Criado por SequenceDiagram.org](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIAkHsDu0DSALAhvAztA8gE4YDG4IAXpNgFDUAiAggA5PQBiB8AdsJFwCYBaAHwBhbsCLFg2AFwAlSAEcArlRnR+GYBmgAzSMGJpqAI3gAPaPABukAtHE8pM2QFEAtmFnQABgEU1AgBPX2hIOx5qcHh4VgBZbjB4Bwi+GWpAHg3AGH30LFwAZXs7AhEnSRJXNkNjaGALanKXbBEcvJxoIoIShUMVAi5ceuo+fizczA6ukpEASR57LkNe1XVqed4Bw1aJ-M7i+17sJm5sSHH2woPSsQlm2VEMcHBTEgBrRrvKluFGFnZOAsBL1gP1BvoamhIPxNNoMNQgA)
