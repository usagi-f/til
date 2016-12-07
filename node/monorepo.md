# monorepo

monorepoとは、複数のnpm packageを単一のGit Repositoryで管理する手法のことです。

有名どころでは、[babel/babel](https://github.com/babel/babel/tree/master/packages)や[facebook/react](https://github.com/facebook/react/tree/master/packages)が採用しています。

> - lint, build, test, release のプロセスを共通化できる
> - package をまたがった修正が容易になる
> - issue 管理を一元化できる
> - 開発環境の構築が簡単になる
> - テストも package をまたいで実行でき、複数 package が絡む不具合の検知が容易になる

## Lerna

[lerna/lerna](https://github.com/lerna/lerna)を使うと、package間の依存関係の解消や、npmへの一括publishが可能になるらしい。

### lerna bootstrap

```
$ lerna bootstrap
```

所謂initコマンドみたいなもの。

`/packages` ができるので、その下に自分で複数のパッケージを設置していく。

### lerna updated

```
$ lerna updated
```

packages配下のnpmに更新があるか確認をする。

### lerna publish

```
$ lerna publish
```

更新されているpackageを、一括でnpmへpublishする。

## 参考記事

[http://qiita.com/kimamula/items/0b4dff363933bfe74506](http://qiita.com/kimamula/items/0b4dff363933bfe74506)

[http://shokai.org/blog/archives/10574](http://shokai.org/blog/archives/10574)

[http://yukidarake.hateblo.jp/entry/2016/01/06/200800](http://yukidarake.hateblo.jp/entry/2016/01/06/200800)
