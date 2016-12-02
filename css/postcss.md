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
