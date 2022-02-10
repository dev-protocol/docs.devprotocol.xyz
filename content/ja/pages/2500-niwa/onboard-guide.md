---
title: オンボードガイド
date: 2022-02-10
permalink: /{{ locale }}/niwa/onboard-guide/index.html
eleventyNavigation:
  key: Onboard Guide Niwa
  parent: niwa
  order: 2400
  title: オンボードガイド
---

## オンボードガイドの概要

このガイドでは、あなたの作品や活動を Niwa を使ってトークン化し、 Dev Protocol に登録するまでの流れについて説明いたします。

## はじめに

あなたの作品や活動を Dev Protocol に登録する（トークナイズする）には、Niwa から登録手続き行う必要があります。登録手続きでは、あなたのウォレットが必要になります。登録を行う前にウォレットを準備しておきましょう

## ウォレットとは

ウォレットとは仮想通貨を保管するものです。Ethereum や Dev Protocol が発行する DEV トークンを保管しておくためにはウォレットが必要になります。Dev Protocol ではウォレット機能は提供していないので、自分で探す必要があります。

ウォレットをまだ持っていない人は [MetaMask](https://metamask.io/) がおすすめです。
MetaMask は Chrome Extension 版もあるので、PC から Niwa を使いたい方はこちらを使うのをおすすめします。
その上でウォレットにネットワークの設定を追加する必要があります。
[Polygon ネットワークを追加する方法](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/)
[Arbitrum One ネットワークを追加する方法](https://wiki.rugdoc.io/docs/how-to-connect-metamask-to-the-arbitrum-one-network/)

## ウォレットと Niwa の接続

ウォレット（MetaMask）と Niwa を接続するには、ヘッダの右端にある「Connect Wallet」をクリックすると接続することができます
ウォレットを利用したいネットワークに接続してご利用ください。

![logo](/content/{{ locale }}/images/niwa/wallet.png)

## ガス代について

ガス代についてはこちらをご覧ください : [https://devprotocol.xyz/faq](https://devprotocol.xyz/faq)
Niwa に登録するためにはガス代が必要になります。必要なガス代は、オンボードを選択したネットワークの混雑状況によって変動します。
各ネットワークの基軸通貨がガスとして利用されます。Arbitrum では Ethereum が、Polygon では matic がそれにあたります。

## トークン登録方法について

![logo](/content/{{ locale }}/images/niwa/markets.png)

トークンを登録したいサービスを選択します。

### GitHub

![logo](/content/{{ locale }}/images/niwa/github-authenticate.png)

・ウォレットに接続している場合、ネットワークやウォレットのアドレスは最初から設定されています。
・トークン化したい GitHub のリポジトリ名称を設定します。{アカウント名}/{リポジトリ名}というフォーマットでお願いします。
・トークン名を設定します。任意のもので構いません。
・トークンシンボルを設定します。任意のもので構いません。
・Personal Access Token を設定します。権限を設定する必要はありません。詳しくは[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)を参照してください。

すべて設定した後、Preview ボタンを押下し、設定値が正しければ「Sign and submit」ボタンを押下してください。
ウォレットからの署名が複数回求められます。

### Youtube

![logo](/content/{{ locale }}/images/niwa/youtube-authenticate.png)

・ウォレットに接続している場合、ネットワークやウォレットのアドレスは最初から設定されています。
・トークン名を設定します。任意のもので構いません。
・トークンシンボルを設定します。任意のもので構いません。

すべて設定した後、Authorize Youtube Account ボタンを押下し、OAuth 認証を進めてください。

## より多くの支援を受けるために

あなたの OSS により多くの支援を受けるためには、あなたの Niwa のページを告知することが重要です。Tweet したり OSS の寄付ページにリンクを置いたりブログを書いたりすることをお勧めします。
また Dev Protocol チームとコミュニティでは、もっと Niwa 内で告知が行えるようにアイディアを出し合っております。もし良いアイディアを持っている場合は、Dev Protocol Forum にアクセスしてあなたのアイディアをシェアしてください
[https://community.devprotocol.xyz/](https://community.devprotocol.xyz/)
