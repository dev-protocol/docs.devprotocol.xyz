---
title: Arbitrum版Dev Protocolへのオンボードの仕方
date: 2021-06-21
permalink: /{{ locale }}/stakes-social/onboard-guide-arbitrum/index.html
eleventyNavigation:
  key: Onboard Guide Arbitrum
  parent: stakes-social
  order: 2410
  title: オンボードガイド Arbitrum
---

![onboard Arbitrum](/content/{{ locale }}/images/stakes.social/guide-arbitrum01.png)

Dev Protocol は、昨今のイーサリアムネットワークのガス代の高騰を回避するために、Layer2 の Arbitrum 上に Dev Protocol をリリースいたしました。Layer2 を利用することにより全てのトランザクションにかかるガス代を低くすることができ、これまでよりもステーキングやオンボードが行いやすくなりました。
メインネットの Dev Protocol も引き続きご利用いただけますが Arbitrum の Dev Protocol にもオンボードしたい場合には、再度オンボード登録が必要となります。

## Layer2 とは

Layer2 とは、DeFi や NFT などのコントラクト実行を行うバーチャルマシン「EVM」を、メインネットとは別のブロックチェーン（Layer2）に実装することができる技術です。この技術の有力候補に「Arbitrum」があり、その中で既に展開されている「Arbitrum One」に Dev Protocol はサービスをリリースしました。

## Layer2 を選択した理由

イーサリアムメインネットは、最近の需要増からトランザクションにかかる手数料が高い水準を維持しています。Arbitrum はイーサリアムと同じシステムを利用しつつこの手数料を低く抑えることができます。

## オンボード方法

はじめに MetaMask の接続するネットワークを「Arbitrum One」にする必要があります。接続ネットワークの変更方法は、既に「Arbitrum One」を MetaMask に追加している場合はネットワークから選択するだけですが、まだ追加していない場合は下記を参考にネットワークを追加してください。

![MetaMask](/content/{{ locale }}/images/stakes.social/guide-arbitrum02.png)

**Metamask のネットワークに Arbitrum One を追加する**
MetaMask で Arbitrum に接続するには、ネットワークに「Arbitrum One」を追加する必要があります。ネットワークから「カスタム RPC」を選択してネットワーク情報を入力しても良いですが、Chainlist を使うことで簡単に追加することができます。
[https://chainlist.org/](https://chainlist.org/)

Chainlist の検索から「Arbitrum One」を検索して「Add To Metamask」をクリックしてください

ネットワーク情報を入力して登録したい場合は下記をご参考ください
https://developer.offchainlabs.com/docs/mainnet#connect-your-wallet

**Ethereum mainnet から Arbitrum One に ETH を移す**
Arbitrum 上の Dev Protocol にオンボードするためには、ガス代分の ETH を「Arbitrum One」に移す必要があります。そのために Arbitrum Bridge を利用します
https://bridge.arbitrum.io/

使用方法は下記のチュートリアルを参考にしてください
https://arbitrum.io/bridge-tutorial/

**オンボードする**
Stakes.social にアクセス後、Metamask から「Arbitrum One」のネットワークに切り替えてから、オンボードを行います。
既にメインネットにオンボードされているプロジェクトについては再度申請していただく必要ありませんので以下のリンクからトークナイズを行なってください。
注）接続ネットワークを「Arbitrum One」に切り替えてから行なってください
https://stakes.social/arbitrum-one/create/0x84b9e407e2Ee76A641b45d007bBFd9e60a13FF7d
「Project name」には、プロジェクトの GithubURL のパスを入力してください

![Github path](/content/{{ locale }}/images/stakes.social/guide-arbitrum03.png)

オンボードやり方については、こちらのガイドをご参照ください
https://docs.devprotocol.xyz/ja/stakes-social/onboard-guide/ja/

**Ethereum mainnet から Arbitrum One に DEV を移す**
Arbitrum One にメインネットの DEV を移す場合は、Dev Protocol Bridge を利用します。
https://bridge.devprotocol.xyz/wrap

以下の手順で DEV を Arbitrum One に移すことができます

1. 上記の URL から Dev Protocol Bridge にアクセスします。
2. ウォレットと接続します
3. はじめに移したい DEV を Wrap して WDEV に変換します
4. L2 Beidge のタブに移ります
5. 移したい WDEV を入力して Convert ボタンを押します

**Arbitrum One から Ethereum mainnet に DEV を移す**
Arbitrum One からメインネットに DEV トークンを移動させるには[Arbitrum Bridge](https://bridge.arbitrum.io/)をご利用ください。

Arbitrum からメインネットにトランザクションを行うには 10 日間ほど時間を要します。故に Arbitrum から DEV をEthereum mainnetに持ってくる場合にも 10 日間必要になりますのでご注意ください
