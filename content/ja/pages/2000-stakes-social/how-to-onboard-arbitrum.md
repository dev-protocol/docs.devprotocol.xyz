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

Dev Protocolは、昨今のイーサリアムネットワークのガス代の高騰を回避するために、Layer2のArbitrum上にDev Protocolをリリースいたしました。Layer2を利用することにより全てのトランザクションにかかるガス代を低くすることができ、これまでよりもステーキングやオンボードが行いやすくなりました。
メインネットのDev Protocolも引き続きご利用いただけますがArbitrumのDev Protocolにもオンボードしたい場合には、再度オンボード登録が必要となります。

## Layer2とは
Layer2とは、DeFiやNFTなどのコントラクト実行を行うバーチャルマシン「EVM」を、メインネットとは別のブロックチェーン（Layer2）に実装することができる技術です。この技術の有力候補に「Arbitrum」があり、その中で既に展開されている「Arbitrum One」にDev Protocolはサービスをリリースしました。

## Layer2を選択した理由
イーサリアムメインネットは、最近の需要増からトランザクションにかかる手数料が高い水準を維持しています。Arbitrumはイーサリアムと同じシステムを利用しつつこの手数料を低く抑えることができます。

## オンボード方法
はじめにMetaMaskの接続するネットワークを「Arbitrum One」にする必要があります。接続ネットワークの変更方法は、既に「Arbitrum One」をMetaMaskに追加している場合はネットワークから選択するだけですが、まだ追加していない場合は下記を参考にネットワークを追加してください。

![MetaMask](/content/{{ locale }}/images/stakes.social/guide-arbitrum02.png)


**MetamaskのネットワークにArbitrum Oneを追加する**
MetaMaskでArbitrumに接続するには、ネットワークに「Arbitrum One」を追加する必要があります。ネットワークから「カスタムRPC」を選択してネットワーク情報を入力しても良いですが、Chainlistを使うことで簡単に追加することができます。
[https://chainlist.org/](https://chainlist.org/)

Chainlistの検索から「Arbitrum One」を検索して「Add To Metamask」をクリックしてください

ネットワーク情報を入力して登録したい場合は下記をご参考ください
https://developer.offchainlabs.com/docs/mainnet#connect-your-wallet

**メインネットからArbitrum OneにETHを移す**
Arbitrum上のDev Protocolにオンボードするためには、ガス代分のETHを「Arbitrum One」に移す必要があります。そのためにArbitrum Bridgeを利用します
https://bridge.arbitrum.io/

使用方法は下記のチュートリアルを参考にしてください
https://arbitrum.io/bridge-tutorial/


**オンボードする**
Stakes.socialにアクセス後、Metamaskから「Arbitrum One」のネットワークに切り替えてから、オンボードを行います。
既にメインネットにオンボードされているプロジェクトについては再度申請していただく必要ありませんので以下のリンクからトークナイズを行なってください。
注）接続ネットワークを「Arbitrum One」に切り替えてから行なってください
https://stakes.social/create/0x84b9e407e2Ee76A641b45d007bBFd9e60a13FF7d
「Project name」には、プロジェクトのGithubURLのパスを入力してください

![Github path](/content/{{ locale }}/images/stakes.social/guide-arbitrum03.png)

オンボードやり方については、こちらのガイドをご参照ください
https://docs.devprotocol.xyz/ja/stakes-social/onboard-guide/ja/

**メインネットからArbitrum OneにDEVを移す**
Arbitrum OneにメインネットのDEVを移す場合は、Dev Protocol Bridgeを利用します。
https://bridge.devprotocol.xyz/wrap

以下の手順でDEVをArbitrum Oneに移すことができます

1. 上記のURLからDev Protocol Bridgeにアクセスします。
2. ウォレットと接続します
3. はじめに移したいDEVをWrapしてWDEVに変換します
4. L2 Beidgeのタブに移ります
5. 移したいWDEVを入力してConvertボタンを押します

Arbitrumからメインネットにトランザクションを行うには10日間ほど時間を要します。故にArbitrumからDEVをメインネットに持ってくる場合にも10日間必要になりますのでご注意ください
