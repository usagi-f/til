# Reactとの比較

[https://jp.vuejs.org/v2/guide/comparison.html#React](https://jp.vuejs.org/v2/guide/comparison.html#React)

以下のような部分において、VueとReactはとてもよく似ている

根本的なところは同じであり、学ぶべき事柄も似ている

- 仮想DOM
- ビューコンポーネントの提供
- Coreな部分に注力し、他の関心事は別ライブラリに切り出されている

## Speed

極端なケースではVueの方が遅くなる場合もあるが、大抵の場合はVueがコンポーネントによるDOM描画スピードにおいて勝るベンチマークがでている

|     | Vue | React |
| --- |----:| -----:|
|最速値|23ms|63ms|
|中央値|42ms|81ms|
|平均値|51ms|94ms|
|95 パーセンタイル|73ms|164ms|
|最遅値|343ms|453ms|

## HTML&CSS

ReactはJSXを用いて、すべてをjavaScriptで完結させるというシンプルな構造になっている。
ビューをつくるために、完全なJavaScriptによるプログラムを可能としている。
また、JSXのサポートツールは非常に充実している。

対してVueはそうではなく、既存のWeb技術の上に構築されている。
VueでもJSXを使うことは可能だが（Babelのプラグインも公開されている）、Vueのテンプレート記述を提供している。

```html
<template>
  <div class="list-container">
    <ul v-if="items.length">
      <li v-for="item in items">
        {{ item.name }}
      </li>
    </ul>
    <p v-else>項目は見つかりませんでした。</p>
  </div>
</template>
```

これ以上のJSのスーパーセットは必要なく、デザイナーでも理解がしやすい構文になる。

## Scoped CSS

ReactでCSSのスコープ限定を行うには、CSS in JSのようなソリューションを必要とします。

Vueはコンポーネント内でCSSの機能を使用することができ、コンパイル時に一意な属性をつけることができる。

```html
<style scoped>
  @media (min-width: 250px) {
    .list-container:hover {
      background: orange;
    }
  }
</style>
```

## Scale Up

Reactには状態管理に関してはFlux/Reduxという強力な解法が存在します。

Vueにも同様のアーキテクチャをVueライクに進めた`Vuex`が存在していますが、Reactのエコシステムのコミュニティの大きさには及びません。

## Scale Down

ReactははじめるためにJSX/ES2015+(&Babel)のようなビルドシステムを学ぶ必要性が強いです。それに比べてVueはコードを書き始めるための敷居は低いです。

最近では `create-react-app` のようなものも出てきており、今後どうなるかは不明。

## Native Rendering

Reactの大きな指針として、一度学んでしまえば応用が効くという点があります。
それの大きな例として`ReactNative`が存在しています。
これはエンジニアが、プラットフォームを跨いでフレームワークの知識を活かすことができるということです。

Vueも`Weex`というクロスプラットフォームなUIフレームワークが公式と協業していますが、ReactNativeほど熟してはいません。
