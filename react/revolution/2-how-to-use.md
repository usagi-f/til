# Reactを導入するにあたって

まず前提として、比較的最近の各種フレームワークたちもReactの設計思想を踏襲しているものが多く、他のものを使っても同様のことが言える場合があります。（が、割愛します。）

## 導入に適したケース

- 「大規模になる可能性がある」
- 「最初は小さく始めたい」
- 「あとから設計の方向転換をしたい」

とにかく「コンポーネント」という区切りでスコープが絞られるため、個別に小さく設計を組み込むことができる。
これはサービスが大規模になればなるほど、効果的です。

これはUNIXの設計思想と近いです。

- 小さいプログラムを組み合わせて、大きなプログラムをつくる
- 1つのプログラムには、1つのことをやらせる
- 移植のしやすさ
- プロトタイプを素早くつくる

逆に「規模が確定的である」「以降の更新が無い」といったような、決め打ちの要素がつよいものに対しては、あまり導入のメリットは無いかもしれません。

### Reactの活かし方

>とにかく「コンポーネント」という区切りでスコープが絞られる

これを利用することで、開発フローまで影響を与えるインパクトがあると思います。

- 大急ぎでいい加減な実装をしても、コンポーネントの入出力さえ合っていればリファクタリングが容易
- コンポーネント単位で分業ができる
- 「Reactコンポーネント」という共通の実装法の認識を持てる
- Viewの構造に合わせたAPI設計がしやすい

## コンポーネントにする・しない

- 使い回す可能性があるか
- 独自の処理を持つか
- 肥大化してきているか

## スケールアウトしていくには

### コンポーネントの分割

１つのコンポーネントが持つ役割が増えた場合は、別のコンポーネントに切り分けてあげるのが、スケールアウトのコツです。

一般的に、サービスが大きくなってきた際の方法として以下のようなものがあります。


```
└── Component_root
    ├── Component_animals
    └── Component_fruits
```
↓
```
└── Component_root
    ├── Component_A
    │   ├── Component_inu
    │   └── Component_neko
    └── Component_B
        ├── Component_apple
        └── Component_orange
```

上記構造で言うところの「A/B」と「inu/neko、apple/orange」を別々の特性をもったコンポーネントとして作ります。

- 「A/B」を**Container Components**（箱コンポーネント）
- 「inu/neko、apple/orange」を**Presentational Components**（表現コンポーネント）

#### Container Components

stateを持ちます。
子コンポーネントに対して、propsを渡してあげるという役目だけを持ちます。

#### Presentational Components

（基本的には）stateを持ちません。
受け取ったpropsに応じてどういう表示をするかという役目だけを持ちます。

### イベントの追加

Reactは結局はすべて通常のJavaScriptです。

そのためイベントを追加したり、各種分岐を挟みたい場合などは、すべて普通にJavaScriptで記述をしていきます。

```js
const handleFoo = () => {
    // イベント
};

...

<button onClick={handleFoo} />
```
↓
```js
const eventBar = () => { // 普通に新しい関数をつくる
    // イベント
};

const eventBaz = () => {
    // イベント
};

const handleFoo = () => {
    // 普通にif文などを使って分岐をする
    if (true) {
        return eventBar;
    } else {
        return eventBaz;
    }
};

...

<button onClick={handleFoo} />
```

### 組み合わせて使う

これらのテクニックを組み合わせることで、表示差分を簡単に実装できます。

```
└── Component_A
    ├── Component_inu
    └── Component_neko
```

```js
const animals = () => {
    if (true) {
        return <ComponentInu />;
    } else {
        return <ComponentNeko />;
    }
};

...

return (
    <div>
        <h1>動物</h1>
        {animals()} // 差分のある部分だけを分岐にかける
    </div>
);
```

## 拡張方法

jQueryではプラグインが隆盛し、簡単にリッチなUIを組み込めるようになりました。
Reactでは以下のような方法で、拡張ができます。

### 公式ライブラリ

Reactのコアプログラムは最低限必要な機能だけを保持しています。

そのため、別ライブラリとして提供されているものを追加で読み込んで使用するのが一般的です。

```js
// ReactコンポーネントをDOMとして描画する
import ReactDOM from 'react-dom';
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);

// Reactコンポーネントをテスト用に薄くレンダリングする
import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);

// テスト用ユーティリティを使ってイベントを発火させる
import ReactTestUtils from 'react-dom/test-utils';
ReactTestUtils.Simulate.change(node);
```

### プラグインコンポーネント

jQueryプラグインのように、第三者が作成したプログラムを流用することもできます。

前述のとおり、Reactはすべてコンポーネントという単位で閉じたプログラムを提供できるシステムを持っています。
そのため入出力さえ繋ぎ込めば、他人が作ったコンポーネントをそのまま使うことは容易です。

```js
// 読み込んで
import FooComponentPlugin from 'foo-component-plugin';

...

// 描画するだけ
return (
    <FooComponentPlugin />
);
```

```js
import FooComponentPlugin from 'foo-component-plugin';

// プラグインなので、オプションも設定可能
const options = {
    foo: 0,
    bar: true,
    baz: 'あいうえお'
};

...

return (
    <FooComponentPlugin
        options={options} // propsとして、コンポーネントに渡す
    />
);
```

---

＜ [1-foundation](https://github.com/usagi-f/til/blob/master/react/revolution/1-foundation.md)｜[3-comparison-to-other-framework](https://github.com/usagi-f/til/blob/master/react/revolution/3-comparison-to-other-framework.md) ＞
