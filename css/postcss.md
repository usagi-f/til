# PostCSS

[http://postcss.org/](http://postcss.org/)

[https://github.com/postcss/postcss](https://github.com/postcss/postcss)

## 仕組み

Node.jsでつくられた、CSSツールをつくり、実行可能なフレームワーク。
PostCSS自体はただのパーサーでしかない。

CSSソースコードを受け取り、独自のAST（Abstruact Syntax Tree, 抽象構文木）にパースします。（※ASTはただのJavaScriptオブジェクトである）

それを再度CSSの文字列に変換をする。

このASTの段階で、様々なPostCSSプラグインを実行することができます。

```json
{
  "use": [
    "autoprefixer"
  ],
  "input": "input.css",
  "output": "output.css"
}
```

PostCSSの設定ファイルは、このように入力CSS/出力CSSと、ASTになっているタイミングで実行するプラグインの指定が存在します。

## プラグイン

PostCSSのプラグインとは、ASTを受け取り、特定の処理をしたASTを返すものである。

複数のプラグインを組み合わせて使うことができ、読み込み順に実行がされる。

`Autoprefixer` や `stylelint` などが有名。

## AST

パースしてできたASTは以下5種類のASTノードを持っており、簡単に探索して操作するためのAPIが提供されています。

- Root
- Rule
- AtRule
- Declaration
- Comment

### ノードの探索

```js
var css = fs.readFileSync('./input.css');
var root = postcss.parse(css);

root.walkRules(function (rule) {
    // すべてのルールセットを探索
});

root.walkRules('.foo', function (rule) {
    // .fooのルールセットを探索
});

root.walkAtRules('media', function (atrule) {
    // @mediaの@ルールを探索
});

root.walkDecls('font-size', function (decl) {
    // font-sizeプロパティのプロパティ宣言を探索
});

root.walkComments(function (comment) {
    // 全てのコメントを探索
});

```

### ノードの追加・移動・削除

```js
// 子ノードの直前に新しいノードを追加
rule.insertBefore(decl, {
    prop: 'color',
    value: 'black'
});

// 子ノードの直後に新しいノードを追加
rule.insertAfter(decl, {
    prop: 'color',
    value: 'black'
});

// ノードの移動（自身を削除し、指定ノードの子要素に追加）
atrule.moveTo(atrule.root());

// ノードの削除
if (decl.prop.match(/^-webkit-/)) {
    decl.remove();
}
```
