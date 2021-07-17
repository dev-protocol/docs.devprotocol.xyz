---
title: Guia de Integração
date: 2021-06-21
permalink: /{{ locale }}/stakes-social/onboard-guide/index.html
eleventyNavigation:
  key: DEV Token Guide
  parent: stakes-social
  order: 2300
  title: Guia de Integração
---

## O que é Stakes.social?

Stakes.social é uma plataforma onde você pode registrar seu OSS para o Dev Protocol e fazer o stake de projetos de OSS registrados. Ao contrário de outros serviços de doação, o Dev Protocol é projetado para o benefício de patrocinadores (stakers) e desenvolvedores, por meio do staking. Graças a esse sistema, os desenvolvedores acham fácil pedir ajuda às pessoas, resultando em suporte contínuo.

## Um guia para integração

Neste guia, você terá uma ideia do processo de registro do seu OSS no Dev Protocol. Também mostramos alguns pontos onde você deverá ter cuidado ou que poderá ficar confuso.

## Antes de começar

Para que você registre (ou tokenize) seu OSS no Dev Protocol, é preciso passar por um procedimento de registro no Stakes.social. Você precisará de uma wallet para se registrar, e portanto deverá ter uma de antemão.

## O que é uma wallet?

Uma wallet (ou carteira) é usada para gerenciar seus ativos de criptomoeda (criptoativos). Você precisa ter uma wallet para poder armazenar o token DEV emitido pelo Ethereum e pelo Dev Protocol. Como o Dev Protocol não lhe oferece uma função wallet, você mesmo terá que contratar uma.

Se estiver procurando uma wallet, recomendamos que use a MetaMask.
MetaMask corresponde à versão Chrome Extension, e se você quiser usar o Stakes.social com o seu PC, MetaMask será uma de suas opções.
[https://metamask.io/](https://metamask.io/)

## Conexão entre a sua wallet e o Stakes.social

Clique no botão "Sign in" localizado no canto direito do cabeçalho para conectar sua wallet (MetaMask, neste caso) ao Stakes.social.

![GUIDE01](/content/{{ locale }}/images/stakes.social/onboard-guide/guide01.jpeg)

## Taxa de gás


O site a seguir possui detalhes sobre a taxa de gás: [https://devprotocol.xyz/faq](https://devprotocol.xyz/faq)
Você precisa pagar uma taxa de gás para se registrar no Stakes.social. Ela flutua dependendo da condição de congestionamento, mas você precisará de aproximadamente 0,0436ETH.

## Subsídios para taxa de gás

Se o seu OSS atender às condições, estamos promovendo subsídios para a taxa de gás necessária para o registro.
Por favor, você os detalhes no site a seguir.
[https://onboarding-sponsors.devprotocol.xyz/](https://onboarding-sponsors.devprotocol.xyz/)

![GUIDE02](/content/{{ locale }}/images/stakes.social/onboard-guide/guide02.png)

## Como registrar seu OSS

Nesta seção, vamos explicar rapidamente as etapas de registro do seu OSS.
Para registrar seu OSS no Stakes.social, comece pelo menu principal, como a seguir.

![GUIDE03](/content/{{ locale }}/images/stakes.social/onboard-guide/guide03.jpeg)

Na ETAPA03, você dará informações necessárias para cada item da solicitação. A tabela a seguir mostra as seções a serem preenchidas.

| Itens           | Explicação                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------- |
| Your name       | Digite seu nome.                                                                            |
| Your email      | Digite seu e-mail.                                                                           |
| Project name    | Digite o nome do seu projeto.                                                                    |
| Description     | Digite a descrição do seu projeto.                                                      |
| Your role       | Digite a sua função no projeto.<br>p.ex. dono / mantenedor / desenvolvedor … etc                 |
| Github repo     | Digite o URL do repositório do seu projeto.<br>Comece com “https” ao inserir o URL. |
| Discord name    | Digite sua informação de conta no Discord.                                                     |
| Additional info | Se tiver comentários adicionais, compartilhe-os conosco.                             |

Depois de completar as informações necessárias em cada item, clique no botão “Submit” e a sua wallet estará ativada. Depois, você deverá informar sua assinatura.
Pouco depois de pressionar o botão “Signature”, sua inscrição estará concluída. Quando ela estiver pronta, você poderá ver a imagem a seguir na sua tela.

![GUIDE04](/content/{{ locale }}/images/stakes.social/onboard-guide/guide04.png)

## Triagem

Pedimos que você aguarde por cerca de uma semana para o processo de triagem. O resultado será enviado por e-mail, então mude a configuração de filtragem de sua caixa de correio para receber um e-mail de “@devprotocol.xyz”.

## Registro do OSS após a triagem

Se você tiver passado pela triagem, acesse o URL escrito no e-mail de aprovação.

> Você precisará de uma taxa de gás para realizar seu registro. Ela flutua, dependendo da condição de congestionamento, mas deverá estar em torno de 0,043ETH. Antes de passarmos para o passo seguinte, você deverá preparar o ETH em sua wallet.

Nesta página, você dará as informações necessárias para a tokenização do seu OSS. As informações que você deverá preencher encontram-se a seguir.

> Nesta etapa para a tokenização, vamos emitir o seu token. Este é chamado de Property Token. Sua remuneração será alocada de acordo com a razão de propriedade do Property Token.
> Por exemplo, se você é um co-desenvolvedor do seu projeto de OSS, poderá distribuir sua remuneração desmembrando esse token.

| Itens                  | Explicação                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creator wallet address | Este é o endereço da sua wallet. Este item será preenchido automaticamente se você estiver conectado ao Stakes.social. Se aparecer “Fetching wallet…”, conecte-se à sua wallet.      |
| Project name           | Digite o nome do projeto conforme aparece no e-mail de aprovação.                                                                                                                     |
| Token name             | Este é o nome do seu token. Digite o nome usando números e letras em inglês, por exemplo, o token do Ethereum é Ether.                                                |
| Token symbol           | Este é o identificador do seu token, por exemplo, o símbolo do Ethereum é ETH. Você pode escolher de 3 a 5 números e letras em inglês.                                                |
| Personal Access Token  | Personal Access Token (PAT) é um token de acesso usado para obter as informações no Github. Crie seu Personal Access Token (PAT) que não tenha qualquer um dos escopos. |

Depois de concluir a entrada e clicar no botão “Tokenize”, seu registro estará pronto e você verá uma página de confirmação. Porém, antes de concluir, você precisará de uma taxa de gás para se registrar. A quantidade de ETH necessária aparece na sua tela, então verifique sua wallet e cuide para que haja lá um valor suficiente de ETH.

![GUIDE05](/content/{{ locale }}/images/stakes.social/onboard-guide/guide05.png)

Na tela de confirmação, serão apresentadas as informações a seguir.

| Itens                     | Explicação                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Name              | Nome do projeto que você informou.                                                                                                                                                                   |
| Token Name                | Nome do token que você informou.                                                                                                                                                                     |
| Token Symbol              | Nome do símbolo que você informou.                                                                                                                                                                   |
| Supply                    | Quantidade de tokens (Property Token) que você emitirá.                                                                                                                                              |
| Dev Protocol Treasury Fee | Receberemos 5% de seus tokens emitidos como taxa de tesouro para o Dev Protocol. Para obter mais detalhes, consulte o site a seguir: [What is treasury](https://initto.devprotocol.xyz/posts/what-is-treasury/) |


Depois de ter confirmado e clicado no botão “Tokenize”, o processo de tokenização estará ativado.

O processo leva cerca de uma hora. Você poderá continuar conectado ou desconectar-se do Stakes.social. Se desconectar, você ainda poderá verificar seu status no site a seguir.
[https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b](https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b)

Quando o processo de tokenização terminar, o registro do seu OSS no Dev Protocol estará concluído.
Depois de um tempo, seu OSS estará listado na List Page do Stakes.social e o Twitter oficial do Dev Protocol o anunciará.

![GUIDE06](/content/{{ locale }}/images/stakes.social/onboard-guide/guide06.png)

## Obtendo mais suporte

Para que você receba mais suporte para o seu OSS, é importante informar às pessoas sobre a sua página no Stakes.social. Recomendamos que você envie mensagens no Twitter, coloque um link em uma página de doação ou faça uma postagem em um blog.

No time e na comunidade do Dev Protocol, conversamos sobre o modo como fazer anúncio de integração no Stakes.social. Se você tiver ideias ou sugestões, compartilhe conosco no Dev Protocol Forum.
[https://community.devprotocol.xyz/](https://community.devprotocol.xyz/)
