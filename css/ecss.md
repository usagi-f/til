# ECSS (Enduring CSS)

[http://ecss.io/](http://ecss.io/)

OOCSSによって生まれた複雑性を解決したい手法。
例え冗長な記述になったとしても、抽象化はあえて行わない。

あまり奇をてらったことはせずに、根付いている考え方に最低限のわかりやすいルールを添えてるだけの印象でした。

---

特定のテンプレート単位に完全にCSSを分けて作ってしまう(template)
それとは別に横断的につかえる汎用部品を別途つくります(structure)

ただしここでいう汎用部品とは、ボタンやアイコンなどの小さいものではなく、
ヘッダやフッタなどの、共通に表示させたいUIエリアレベルのものを指しているようです。

```
src/
  css/
    template/
      top/
      search/
      article/
      help/
      ...
    structure/
      header/
      footer/
      ...
```

以下のように接頭辞を用いて、堅牢性をもたせます。

- top -> `top-*`
- search -> `srh-*`
- header -> `hd-*`
- footer -> `ft-*`

ここまでのディレクトリや接頭辞は一例であり、構造思想が沿っていればこの限りではありません。

接頭辞以降の命名はほぼBEMと同じです

`xx-Component_Node-variant`

```html
<div class="srh-SelectFoo">
  <ul class="srh-Menulist">
    <li class="hd-Menulist_ListItem">...</li>
    <li class="hd-Menulist_ListItem hd-Menulist_ListItem-active">...</li>
  </ul>
</div>
```
