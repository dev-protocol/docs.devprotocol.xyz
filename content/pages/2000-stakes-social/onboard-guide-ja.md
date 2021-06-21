---
title: Onboard Guide / JA
date: 2021-06-21
permalink: /stakes-social/onboard-guide/ja/index.html
eleventyNavigation:
  key: DEV Token Guide
  parent: stakes-social
  order: 2400
  title: Onboard Guide / JA
---

## Stakes.socialとは

Stakes.socialとは、OSSをDev Protocolに登録したり、登録されているOSSに対してステーキング行ったりすることができるプラットフォームです。Dev Protocolはステーキングを用いることで、他の寄付サービスとは違い、支援者、開発者双方にメリットがあるように設計されております。この仕組みにより、支援が集まりやすく、またそれが継続的な支援につながっております

## オンボードガイドの概要

このガイドでは、あなたのOSSをDev Protocolに登録するまでの流れについて説明いたします。登録する上での注意点や理解が難しい点について説明しております

## はじめに

あなたのOSSをDev Protocolに登録する（トークナイズする）には、Stakes.socialから登録手続き行う必要があります。登録手続きでは、あなたのウォレットが必要になります。登録を行う前にウォレットを準備しておきましょう

## ウォレットとは

ウォレットとは仮想通貨を保管するものです。EthereumやDev Protocolが発行するDEVトークンを保管しておくためにはウォレットが必要になります。Dev Protocolではウォレット機能は提供していないので、自分で探す必要があります。

ウォレットをまだ持っていない人はMetaMaskがおすすめです。
MetaMaskはChrome Extension版もあるので、PCからStakes.socialを使いたい方はこちらを使うのをおすすめします
[https://metamask.io/](https://metamask.io/)

## ウォレットとStakes.socialの接続

ウォレット（MetaMask）とStakes.socialを接続するには、ヘッダの右端にある「Sign in」をクリックすると接続することができます

![GUIDE01](/content/images/stakes.social/onboard-guide/guide01.jpeg)

## ガス代について

ガス代についてはこちらをご覧ください : [https://devprotocol.xyz/faq](https://devprotocol.xyz/faq)
Stakes.socialに登録するためにはガス代が必要になります。ガス代は混雑状況により常に変動しておりますが、およそ0.0436ETHくらいが必要になります。

## ガス代の助成金制度について

条件を満たすOSSには、登録に必要なガス代を支援する制度を用意しております。詳細は以下からアクセスしてみてください

[https://onboarding-sponsors.devprotocol.xyz/](https://onboarding-sponsors.devprotocol.xyz/)

![GUIDE02](/content/images/stakes.social/onboard-guide/guide02.png)

## OSSの登録方法について

それではStakes.socialでOSSを登録手順について説明していきます。
Stakes.socialからOSSを登録するには、メニューから次のように進めていきます。

![GUIDE03](/content/images/stakes.social/onboard-guide/guide03.jpeg)

STEP03では、OSSの申請に必要な項目を入力します。それぞれの項目は以下の通りとなっております。

| 項目              | 説明                                                     |
| --------------- | ------------------------------------------------------ |
| Your name       | あなたの名前を入力してください                                        |
| Your email      | あなたのemailを入力してください                                     |
| Project name    | プロジェクトの名前を入力してください                                     |
| Description     | プロジェクトの概要を入力してください                                     |
| Your role       | プロジェクトでのあなたの役割を入力してください。例）owner/maintainer/developerなど |
| Github repo     | プロジェクトのレポジトリのURLを入力してください。URLは、httpsから入力してください         |
| Discord name    | あなたのDiscordアカウント情報を入力してください                            |
| Additional info | その他に伝えたいことなどありましたら記載してください                             |

必要項目に入力後、「Submit」ボタンを押すと、ウォレットが起動し署名を求められます。
「署名」ボタンを押すと少し時間をおいて申請が完了となります。完了すると以下の画面が表示されます

![GUIDE04](/content/images/stakes.social/onboard-guide/guide04.png)

## 審査について

審査には、通常1週間ほどお時間をいただいております。審査の結果はメールでお伝えしますので、「@devprotocol.xyz」からのメールが受信できるようにメールボックスのフィルタリング設定をお願いいたします。

## 審査後のOSSの登録について
無事に審査が通った後は、メールに記載しているURLにアクセスします。

> 登録するためにはガス代が必要になります。ガス代は混雑状況により常に変動しておりますが、およそ0.0436ETHくらいが必要になります。次のステップに移る前にETHを自分のウォレットに用意しておくと良いです。

このページでは、あなたのOSSをトークナイズするのに必要な情報を入力してもらいます。入力してもらう情報は以下の通りです。

> トークナイズのステップでは、あなたのトークンを発行します。このトークンはプロパティトークンと呼ばれていて、あなたへの報酬はこのプロパティトークンの所持割合で分配されます。
> 例えば、あなたのOSSに共同開発者いる場合に、このトークンを分けることで報酬を分配することができます。

| 項目                     | 説明                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Creator wallet address | あなたのウォレットのアドレスです。Stakes.socialと接続していると自動的に入力されます。「Fetching wallet...」となっている場合は、ウォレットと接続してください                  |
| Project name           | 承認メールに記載されているものを入力してください                                                                                       |
| Token name             | これはトークンの名前です。半角英数字入力してください。たとえば、イーサリアムのトークンはEtherです                                                            |
| Token symbol           | これはトークンの識別子です。たとえば、イーサリアムのトークンはETHです。 選択には3〜5文字の英数字を使用できます。                                                    |
| Personal Access Token  | Personal Access Token（PAT）とは、Githubの情報を取得する際に使用するアクセストークンです。<br>どのスコープも持たないPersonal Access Token（PAT）を作成してください |

入力が完了し「Tokenize」ボタンを押すと確認ページを経て登録は完了しますが、登録にはガス代が必要になります。必要となるガス代のおおよそのETHが表示されているので、自分のウォレットにその分のETHが入っているか確認してください

![GUIDE05](/content/images/stakes.social/onboard-guide/guide05.png)

確認画面では以下の情報表示されます。

| 項目                        | 説明                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project Name              | 入力したProject Name                                                                                                                                                                     |
| Token Name                | 入力したToken Name                                                                                                                                                                       |
| Token Symbol              | 入力したToken Symbol                                                                                                                                                                     |
| Supply                    | あなたが発行するトークン（プロパティトークン）の枚数                                                                                                                                                           |
| Dev Protocol Treasury Fee | あなたが発行するトークンの5%をDev ProtocolにTreasury Feeとしていただきます。詳しくはこちらをご確認ください<br>[What is treasury](https://initto.devprotocol.xyz/ja/posts/what-is-treasury/) |

確認を行い「Tokenize」ボタンを押すと、トークナイズ処理が実行されます。

この処理には約1時間ほどかかります。そのままお待ちいただいても良いですが、接続を切っても大丈夫です。接続を切った場合でも以下より状況の確認が行えます。
[https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b](https://etherscan.io/address/0x9dfd67bf97dc48acdfbf75ad814e158816f98b0b)

トークナイズ処理が終了すると、あなたのOSSがDev Protocolに登録完了となります。
しばらくすると、Stakes.socialのListページ掲載されDev Protocolの公式Twitterからアナウンスされます。

![GUIDE06](/content/images/stakes.social/onboard-guide/guide06.png)

## より多くの支援を受けるために

あなたのOSSにより多くの支援を受けるためには、あなたのStakes.socialのページを告知することが重要です。TweetしたりOSSの寄付ページにリンクを置いたりブログを書いたりすることをお勧めします。
またDev Protocolチームとコミュニティでは、もっとStakes.social内で告知が行えるようにアイディアを出し合っております。もし良いアイディアを持っている場合は、Dev Protocol Forumにアクセスしてあなたのアイディアをシェアしてください
[https://community.devprotocol.xyz/](https://community.devprotocol.xyz/)
