# xargs

特定の要素を引数として取得できる。

`find` と組み合わせて使うと便利。

```
// findコマンドでjsファイルを絞り込んで、テストにかける
find .src/ -name \"*.js\" | xargs yarn test
```
