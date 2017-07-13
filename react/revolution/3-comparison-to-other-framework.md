# Reactと他のフレームワーク

前章の前置きのとおり、昨今のフレームワークはReactの思想を反映してバージョンアップされている傾向があります。
特にコンポーネント思考の部分は一貫して共通していっています。

なので根底の設計思想などは、概ね流用できるはず！と考えています。

## Angular/Vueとの違い

イメージとしてはこんな感じで、まずは捉えてもらうといいかもしれません。

- Angular：オート
- Vue：セミオート
- React：マニュアル

AngularやVueは、既存のHTMLの上に拡張されたものです。

```html
<input type="text" ng-model="item">
<p>{{item}}</p>
```
```html
<li v-for="item in items">
    {{ item.name }}
</li>
```

Reactは、あくまでもJavaScriptです。

```js
render: function() {
  return (
    <div>
        {item}
    </div>
  );
}
```

### 厚さ・薄さ

Angularはフルスタックフレームワークです。
これ１つあれば外部ライブラリを新たに用意しなくても構築できてしまうメリットがあります。
ただし、つくるものが「アプリケーション」と呼ぶほどのものではない場合、オーバースペックと感じるかもしれません。

対してReact本体には、本当に必要なものしか積まれていなく（DOMの描画ですら、`React-DOM` という形で切り出されている！）、
何が最適なのか、本当に必要なライブラリなのか、見極める必要があります。

一方この点はVueもReactに近いです。Vueも必要なものだけを自分で選定していく必要があります。
VueとReactに、似たようなライブラリが多いのはこのためです。

### 書いていくにあたって

Reactは学習を進めていくとすべてJavaScriptに収束していきますが、AngularやVueはそもそもフレームワークなので、独自のシンタックスやメソッドに行き着きます。

その分、Reactは記述がやや冗長になりがちです。が、いくらでもカスタマイズの余地があります。

ただし、それはJavaScriptである前提の話です。
すべてがJavaScriptの世界で完結してしまうReactは、CSSの扱いに四苦八苦しているのが現状です。

---

ちなみにVueは公式サイトで他フレームワーク/ライブラリとの比較を[載せています。](https://jp.vuejs.org/v2/guide/comparison.html#React)
それを簡単にまとめたものが[こちら](https://github.com/usagi-f/til/blob/master/vue/comparison-to-react.md)

## 併用できるもの・できないもの

Reactはあくまでも**Viewを構築するためのライブラリ**です。
なので、Viewに関与しないものは併用は可能です。

また、Reactの宣言的な更新フローに直接的に関与しなければ、jQueryの併用も可能なはず、です。

オススメはしない。

### 各プロジェクトの方針の違い

それぞれがコアになる企業やコミュニティによって継続的な開発がされています。そこにはどのようなフレームワーク・ライブラリにしていきたいかという思想が反映されています。

例えばAngularはSPA(シングル・ページ・アプリケーション)や、PWA（プログレッシヴ・ウェブ・アプリケーション）といったハイパフォーマンスなWebアプリケーションを実現する方向になっていますし、Reactは根本的なロジックをWeb（正確にはDOM）以外にもネイティブアプリやVRアプリへ展開していく構想があります。

---

＜ [2-how-to-use](https://github.com/usagi-f/til/blob/master/react/revolution/2-how-to-use.md)｜[4-for-redux](https://github.com/usagi-f/til/blob/master/react/revolution/4-for-redux.md) ＞
