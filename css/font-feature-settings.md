# font-feature-settings

[https://ics.media/entry/14087](https://ics.media/entry/14087)
[https://developer.mozilla.org/ja/docs/Web/CSS/font-feature-settings](https://developer.mozilla.org/ja/docs/Web/CSS/font-feature-settings)

`letter-spacing`とは違って、OpenTypeFontに含まれる情報（プロポーショナルメトリクス）を元にして字詰めをすることができる。

## syntax

```css
.selector {
    font-feature-settings: "palt" 1;
}

.selector {
    // 複数指定も可能
    font-feature-settings: "palt" 1, "trad" 1;
}
```

### value

`palt`でプロポーショナルメトリクスを有効化。

`pkna`でプロポーショナルかなを有効化。

`trad`で旧字指定ができる。

`dlig`を指定していると、フォントが対応していれば合字表示が可能な部分を変換してくれる。（合字：㌧、㍃、㌠ のような複数字を１字で表現しているもの）

ほかにも指定種別はたくさんあるみたい。

### optional

`0` or `1` (`off` or `on`)をセットにして指定する。
省略した場合は自動的に`1`と判定される。

`1` or `on` の指定がある場合は、有効化される。

## notes

- IE9以下・WinXP以下あたりでは非サポートなので、注意。
