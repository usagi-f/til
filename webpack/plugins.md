# Plugins

## extract-text-webpack-plugin

[https://github.com/webpack/extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)

バンドルしたファイルの中から、特定のテキストファイルを抜き出してoutputしたい場合に使えるプラグイン

主な用途としては、webpackを使ってCSSファイルをコンパイルしたい場合がある。
一度webpackでJSにCSSファイルをバンドルしたあとに、このプラグインを使って再度CSSファイルとして吐き出すことができる。

```
// 基本的な指定
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader") // loader指定の際にextract()でラップする
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css") // 出力ファイルを指定
    ]
}
```

`extract()`を使用するときに注意なのが、第一引数・第二引数にそれぞれ意味があるためさらにloaderを追加したい場合は以下のようにする必要がある。（[参考](https://github.com/MoOx/postcss-cssnext/issues/326)）

```
// NG
loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")

// OK
loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")

// OK
loader: ExtractTextPlugin.extract("style-loader", [ "css-loader", "postcss-loader" ])
```
