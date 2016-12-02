# MOCSS

[http://qiita.com/nabepon/items/672b40647acc38dc97bb](http://qiita.com/nabepon/items/672b40647acc38dc97bb)

以下の5つのレイヤーに分割

- Common
  - (reset/theme/clearfixなどのutil系など)
- Model
  - 抽象化されたmixinの集まり
  - 再利用の可能性があるものは、ここに集約
- Package
  - 特定の画面グループ毎に名前空間をつくる役割
- Component
  - mixinのincludeを行い、Modelの実体化を行う
  - Packageの名前空間内に展開していく
- Page
  - 例外的なページ固有の調整用

#### Model

```scss
@mixin fooModel() {
  .title {
    font-size: 18px;
  }
}
```

#### Package/Component

```scss
.package { // 名前空間

  .fooComponent {
    @include fooModel;
    margin-top: 8px; // レイアウト調整
    padding: 0 8px;
  }
}
```

Modelにひたすら要素の定義を行い、Packageという単位でコンポート実体化を行っていく感じ。
Packageの分け方と、高品質なModel化にわりと知識と習熟が必要になりそう。
