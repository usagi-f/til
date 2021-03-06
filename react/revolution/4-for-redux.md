# Redux

## Reduxの役割と、なぜ必要なのか

第一章で説明したとおり、ReactをコントロールするにはStateとPropsがほぼ全てです。
しかし、アプリケーションが大きくなるにつれてこれらの値も複雑性を増し、コントロールが大変になっていってしまう問題を孕んでいます。
それを解決するために登場したのがReduxです。

細かいRedux自体の仕組みや実装については割愛します。

### 値の集中管理

#### React単体の場合

Reactのコンポーネントはツリー構造で作られるのが基本です。
そのため、別のツリーにあるコンポーネントと値のやりとりを行う場合は、一度親コンポーネントを経由する必要があります。

```
└── Component_root // Aから値を受け取る(3)
    ├── Component_A // inuから値を受け取る(2)
    │   └── Component_inu // appleに値を渡したい！(1)
    └── Component_B // rootから値を受け取る(4)
        └── Component_apple // Bからようやく値が貰えた…(5)
```

#### Reduxを使用した場合

Reduxは値をrootで一括して保持します。（※Storeと言います。）

そして、どのコンポーネントからでもアクセスを可能にします。

```
└── Component_root
    ├── Component_A
    │   └── Component_inu // appleに値を渡したいのでReduxへ渡す(1)
    └── Component_B
        └── Component_apple // Reduxから値を受け取る(2)
```

これで他コンポーネントへ余計な処理を書く必要がなくなりましたね。

### データの一方通行化

Reduxについて調べると、よく `Flux` という言葉と併用されていることがあります。

Fluxとはデータをどういう流れで実装させるかを決めるアーキテクチャです。
ReduxはFluxの理念に沿って実装されています。

Redux(及びFlux)は、データを一方通行にします。
なにをするにおいても必ず同じ方法でデータを処理するため、流れが追いやすく処理がごちゃごちゃになりづらいのです。

### Reduxのデメリット

コンポーネントの実装はわかりやすくなりましたが、当然それを実現するためのコードが必要になります。

- コンポーネントからReduxへ値を渡すためのイベント
- 受け取った値をRedux内で保持するための処理

そのためプロジェクト全体としては、どうしても規模が大きくなります。
アプリケーションが肥大化するまでは、安易に入れないほうがいいかもしれません。

## 導入のしかた

さて、そうなると途中からReduxを入れる方法が知りたくなります。

### 小さい始め方

Reactの特徴として何度も出てきていますが、コンポーネント単位でスコープが決まっているというメリットがありました。
そのため、コンポーネントで区切って順々にRedux実装に切り替えていくことが可能です。

#### Stateツリーの検討

まずは、対象のコンポーネント配下で使用されているStateを洗い出して、最適なStateツリー（＝Store構造）を考えます。

Reduxとして値を持つべきものの指針として、**他コンポーネントへ影響を与えるかどうか**で決めるといい感じになります。
単一のコンポーネントに対してしか使っていないものについては、そのままコンポーネント側で独自に持ってしまっても構いません。

また、ページ単位などで分けてしまうと後々後悔するのでオブジェクト指向などを学んでおくといいかもしれません。

#### 必要な処理の定義

> コンポーネントからReduxへ値を渡すためのイベント

Actionと呼ばれています。必要に応じて、値を一緒に渡します。

> 受け取った値をRedux内で保持するための処理

Reducerと呼ばれています。Actionに対して反応し、Storeを更新します。

#### 広げていく

特定のコンポーネントのRedux化が完了したら、徐々に他のコンポーネントも同じ要領でReduxへ組み込んでいきます。

あまりStoreが大きくならないように、使いまわせるものは使い、値同士の計算で出せるものはStoreに入れないようにしましょう。

例えばお気に入りリストにどのIDの商品が入っているかは計算できないのでStoreで持つ必要があります。ただ、そこに何件入っているのかは算出することができますよね？そういうことです。お気に入りリストを有効にするかどうかも、専用のフラグを用意するのではなく、入っている商品の件数が0かどうかという所を見れば良いのです。

## Middleware

Reactに拡張要素があるように、Reduxにも拡張する口が設けられています。

Flux実装の特徴としてあった「データの一方通行化」を活用し、データが必ず流れるところに処理を**挟んでやり**、値に対して様々な処理を施すことが可能です。
これをMiddlewareと呼んでいます。

例えば以下のようなものがあります。

- 非同期処理の実現
- 共通のエラーハンドリング
- 更新のたびにStoreをストレージに保存

他にも各種処理を見やすく書くためにMiddlewareでいい感じにごにょごにょしてくれるものなど、便利なものが多いです。

---

＜ [3-comparison-to-other-framework](https://github.com/usagi-f/til/blob/master/react/revolution/3-comparison-to-other-framework.md)｜[5-for-testing](https://github.com/usagi-f/til/blob/master/react/revolution/5-for-testing.md) ＞
