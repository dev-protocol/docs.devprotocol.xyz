---
title: Onboard Guide / JA
date: 2021-06-21
permalink: /{{ locale }}/stakes-social/onboard-guide/ja/index.html
eleventyNavigation:
  key: DEV Token Guide
  parent: stakes-social
  order: 2400
  title: Onboard Guide / JA
---

## Stakes.social とは

Stakes.social とは、OSS を Dev Protocol に登録したり、登録されている OSS に対してステーキング行ったりすることができるプラットフォームです。Dev Protocol はステーキングを用いることで、他の寄付サービスとは違い、支援者、開発者双方にメリットがあるように設計されております。この仕組みにより、支援が集まりやすく、またそれが継続的な支援につながっております

## オンボードガイドの概要

このガイドでは、あなたの OSS を Dev Protocol に登録するまでの流れについて説明いたします。登録する上での注意点や理解が難しい点について説明しております

## はじめに

あなたの OSS を Dev Protocol に登録する（トークナイズする）には、Stakes.social から登録手続き行う必要があります。登録手続きでは、あなたのウォレットが必要になります。登録を行う前にウォレットを準備しておきましょう

## ウォレットとは

ウォレットとは仮想通貨を保管するものです。Ethereum や Dev Protocol が発行する DEV トークンを保管しておくためにはウォレットが必要になります。Dev Protocol ではウォレット機能は提供していないので、自分で探す必要があります。

ウォレットをまだ持っていない人は MetaMask がおすすめです。
MetaMask は Chrome Extension 版もあるので、PC から Stakes.social を使いたい方はこちらを使うのをおすすめします
[https://metamask.io/](https://metamask.io/)

## ウォレットと Stakes.social の接続

ウォレット（MetaMask）と Stakes.social を接続するには、ヘッダの右端にある「Sign in」をクリックすると接続することができます

![GUIDE01](/content/{{ locale }}/images/stakes.social/onboard-guide/guide01.jpeg)

## ガス代について

ガス代についてはこちらをご覧ください : [https://devprotocol.xyz/faq](https://devprotocol.xyz/faq)
Stakes.social に登録するためにはガス代が必要になります。ガス代は混雑状況により常に変動しておりますが、およそ 0.0436ETH くらいが必要になります。

## ガス代の助成金制度について

条件を満たす OSS には、登録に必要なガス代を支援する制度を用意しております。詳細は以下からアクセスしてみてください

[https://onboarding-sponsors.devprotocol.xyz/](https://onboarding-sponsors.devprotocol.xyz/)

![GUIDE02](/content/{{ locale }}/images/stakes.social/onboard-guide/guide02.png)

## OSS の登録方法について

それでは Stakes.social で OSS を登録手順について説明していきます。
Stakes.social から OSS を登録するには、メニューから次のように進めていきます。

![GUIDE03](/content/{{ locale }}/images/stakes.social/onboard-guide/guide03.jpeg)

STEP03 では、OSS の申請に必要な項目を入力します。それぞれの項目は以下の通りとなっております。

| 項目            | 説明                                                                                  |
| --------------- | ------------------------------------------------------------------------------------- |
| Your name       | あなたの名前を入力してください                                                        |
| Your email      | あなたの email を入力してください                                                     |
| Project name    | プロジェクトの名前を入力してください                                                  |
| Description     | プロジェクトの概要を入力してください                                                  |
| Your role       | プロジェクトでのあなたの役割を入力してください。例）owner/maintainer/developer など   |
| Github repo     | プロジェクトのレポジトリの URL を入力してください。URL は、https から入力してください |
| Discord name    | あなたの Discord アカウント情報を入力してください                                     |
| Additional info | その他に伝えたいことなどありましたら記載してください                                  |

必要項目に入力後、「Submit」ボタンを押すと、ウォレットが起動し署名を求められます。
「署名」ボタンを押すと少し時間をおいて申請が完了となります。完了すると以下の画面が表示されます

![GUIDE04](/content/{{ locale }}/images/stakes.social/onboard-guide/guide04.png)

## 審査について

審査には、通常 1 週間ほどお時間をいただいております。審査の結果はメールでお伝えしますので、「@devprotocol.xyz」からのメールが受信できるようにメールボックスのフィルタリング設定をお願いいたします。

## 審査後の OSS の登録について

無事に審査が通った後は、メールに記載している URL にアクセスします。

> 登録するためにはガス代が必要になります。ガス代は混雑状況により常に変動しておりますが、およそ 0.0436ETH くらいが必要になります。次のステップに移る前に ETH を自分のウォレットに用意しておくと良いです。

このページでは、あなたの OSS をトークナイズするのに必要な情報を入力してもらいます。入力してもらう情報は以下の通りです。

> トークナイズのステップでは、あなたのトークンを発行します。このトークンはプロパティトークンと呼ばれていて、あなたへの報酬はこのプロパティトークンの所持割合で分配されます。
> 例えば、あなたの OSS に共同開発者いる場合に、このトークンを分けることで報酬を分配することができます。

| 項目                   | 説明                                                                                                                                                                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creator wallet address | あなたのウォレットのアドレスです。Stakes.social と接続していると自動的に入力されます。「Fetching wallet...」となっている場合は、ウォレットと接続してください         |
| Project name           | 承認メールに記載されているものを入力してください                                                                                                                     |
| Token name             | これはトークンの名前です。半角英数字入力してください。たとえば、イーサリアムのトークンは Ether です                                                                  |
| Token symbol           | これはトークンの識別子です。たとえば、イーサリアムのトークンは ETH です。 選択には 3〜5 文字の英数字を使用できます。                                                 |
| Personal Access Token  | Personal Access Token（PAT）とは、Github の情報を取得する際に使用するアクセストークンです。<br>どのスコープも持たない Personal Access Token（PAT）を作成してください |

入力が完了し「Tokenize」ボタンを押すと確認ページを経て登録は完了しますが、登録にはガス代が必要になります。必要となるガス代のおおよその ETH が表示されているので、自分のウォレットにその分の ETH が入っているか確認してください

![GUIDE05](/content/{{ locale }}/images/stakes.social/onboard-guide/guide05.png)

確認画面では以下の情報表示されます。

| 項目                      | 説明                                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project Name              | 入力した Project Name                                                                                                                                                                      |
| Token Name                | 入力した Token Name                                                                                                                                                                        |
| Token Symbol              | 入力した Token Symbol                                                                                                                                                                      |
| Supply                    | あなたが発行するトークン（プロパティトークン）の枚数                                                                                                                                       |
| Dev Protocol Treasury Fee | あなたが発行するトークンの 5%を Dev Protocol に Treasury Fee としていただきます。詳しくはこちらをご確認ください<br>[What is treasury](https://initto.devprotocol.xyz/ja/what-is-treasury/) |

確認を行い「Tokenize」ボタンを押すと、トークナイズ処理が実行されます。

この処理には約 1 時間ほどかかります。そのままお待ちいただいても良いですが、接続を切っても大丈夫です。接続を切った場合でも以下より状況の確認が行えます。
[https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b](https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b)

トークナイズ処理が終了すると、あなたの OSS が Dev Protocol に登録完了となります。
しばらくすると、Stakes.social の List ページ掲載され Dev Protocol の公式 Twitter からアナウンスされます。

![GUIDE06](/content/{{ locale }}/images/stakes.social/onboard-guide/guide06.png)

## より多くの支援を受けるために

あなたの OSS により多くの支援を受けるためには、あなたの Stakes.social のページを告知することが重要です。Tweet したり OSS の寄付ページにリンクを置いたりブログを書いたりすることをお勧めします。
また Dev Protocol チームとコミュニティでは、もっと Stakes.social 内で告知が行えるようにアイディアを出し合っております。もし良いアイディアを持っている場合は、Dev Protocol Forum にアクセスしてあなたのアイディアをシェアしてください
[https://community.devprotocol.xyz/](https://community.devprotocol.xyz/)
