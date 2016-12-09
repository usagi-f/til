# REST

Representational State Transferの略称。「表現状態転送」の意味。
最も有名なネットワークシステムのアーキテクチャである「クライアント/サーバ」から派生したもの。
RESTはアーキテクチャから、抽象度を１つあげた「アーキテクチャスタイル」に分類される。

RESTは6つのアーキテクチャスタイルを組み合わせて構築した**複合アーキテクチャスタイル**。

|アーキテクチャスタイル|概要|メリット|
|---|---|---|
|クライアント/サーバ|クライアントとサーバに分けてHTTP通信を行う|クライアントのマルチプラットフォーム化<br>サーバの可用性上昇|
|ステートレスサーバ|アプリケーション状態をサーバで持たない|サーバ実装の簡略化<br>スケールアウトに向いている|
|キャッシュ|リソースを使い回す|通信量の削減|
|統一インターフェイス|リソースへの操作方法を限定的にする<br>(HTTP1.1では8つのHTTPメソッドに絞っている)|アーキテクチャ全体がシンプルになる|
|階層化システム|インターフェイスに変更を加えることなくシステムを追加できるように、構造を分離する|拡張性の維持|
|コードオンデマンド|サーバからダウンロードしたコードを、クライアントで実行する|クライアントをあとから拡張することができる|

いくつかの制約は除外しても構わない。
上記に厳密に沿った仕様でつくられたAPIのことを**RESTful API**と呼ぶ。