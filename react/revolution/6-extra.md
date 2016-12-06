# おまけ

## トラブル事例

### Reactライフサイクルメソッド

Reactコンポーネントには、標準で搭載されているいくつかのメソッドがあります。

[http://qiita.com/koba04/items/66e9c5be8f2e31f28461](http://qiita.com/koba04/items/66e9c5be8f2e31f28461)

これらはとても便利ですが、これに頼り切ってしまうとコンポーネントの複雑化に繋がりました。
いつ・どのタイミングでメソッドが実行されて、どこへ影響を与えているのかが難しくなります。

また、無限ループに入ってしまいオーバーフローの原因になったり、パフォーマンス低下を招く恐れもあります。

**解決方法**

redux・Middlewareの導入で、Reactライフサイクルを使わずに実装をした。

### UIライブラリ

[http://www.material-ui.com/](http://www.material-ui.com/)

[http://react.semantic-ui.com/](http://react.semantic-ui.com/)

[https://ant.design/](https://ant.design/)

Reactコンポーネントと前提としたUIライブラリがいくつも登場しています。

これらはimportするだけで即座に利用が可能になるため非常に便利ですが、コンポーネント仕様（特にProps）に合わせて実装を進めていく必要があるので、使い勝手が悪いものにあたる場合もあります。

**解決方法**

UIライブラリのコンポーネントの「ラッパーコンポーネント」を作成することで、使いやすくするためのクッションを間に挟んだ。

## リファクタリング方針

- テストコードが描きやすい関数をつくる
- 無駄なStateを減らす

### パターンはコンポーネントに閉じ込める

```js
// before
if (value === 0) {
    ...
} else if (value === 1) {
    ...
} else if (value === 2) {
    ...
}

// after
<Component value={value} />
```

### コンポーネントに状態を持たせない

Stateless Functional Componentと呼ばれるもので、Stateを保持する必要がなければ単純な関数でシンプルに書くことができます。

```js
class CommentBox extends React.Component {
  render() {
    return (
      <div>
        {this.props.hello}! I am a {this.props.name}.
      </div>
    );
  }
}
```

```js
const CommentBox = (props) => {
  return (
    <div>
      {props.hello}! I am a {props.name}.
    </div>
  )
}
```

### 大量のPropsを渡さない

Propsが多いということは、そのコンポーネントを描画させる条件が複雑ということです。

```js
const props ={
    foo: true,
    bar: true,
    baz: 100,
    piyo: 'piyo',
    hoge,
    fuga
}

<Component {...props} />
```
