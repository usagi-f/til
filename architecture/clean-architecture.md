# Clean Architecture

## 依存性ルール

Clean Architectureは必ず内側に対してのみ依存関係を持つ。内側の円は、外側について何も知ることはできない。外側で宣言されているものの名前を内側で言及することはできない。

### Entities

もっとも一般的で、高レベルなビジネスルールがカプセル化されている。
アプリケーションに対する動作の変更がEntitiesに影響を与えるべきではない。

### UseCases

アプリケーション固有のビジネスルールを含む。

### Interface Adapters

アダプターの集合体。EntitiesやUseCasesに対してもっとも便利な形式・データに変換する。

### FrameWorks & Drivers

データベースやウェブフレームワークで、あまり多くのコードは書かない。
詳細は何もかもここへ詰め込まれる

## 円

上記の依存性ルールに登場する4つの円はコンセプトを伝えるための方便にすぎない。そのため4つでなければならないルールは存在しない。

ただし内側に向かうにつれて抽象度が上がり、外側にいくほど具体的になっていく。

|内側|---|外側|
|---|:---:|---|
|低レベルで抽象的|← 一方的な依存関係|高レベルで具体的|

## 結論

上記ルールは難しいことをするわけではない。

* ソフトウェアをレイヤーに分けること
* 依存性ルールに従うこと

システムの一部の要素（フレームワークなど）が古くなっても最小の取り組みで置き換えができる。