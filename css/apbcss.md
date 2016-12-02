# APBCSS (Atomic Parts Base CSS)

[http://apbcss.com/](http://apbcss.com/)

AtomicDesignの考え方を中心に据えたCSS設計

一番小さな構成要素である原子パーツ（Atoms）はレイアウトに関する指定はせずに、非常に抽象的で汎用性のある部品として定義する

```scss
.icon {
  display: inline-block;
  &.social {
    width: 34px;
    height: 34px;
    background: url(SpriteImagePath) no-repeat;
    @include background-size(205px auto);
    &.github { background-position: -171px top; }
  }
}
```

Atoms同士を組み合わせてつくられる分子パーツ（Molecules）もレイアウトの指定はしませんが、内包されるAtomsにはレイアウトが発生します。

```scss
.btn {
    .icon {
        &.social {
            margin: 0px 6px -11px -34px; // Molecules内にあるAtomsの配置指定
        }
    }
}
```

このように順々に層を厚くしていき、内包する部分のレイアウト指定のみに絞っていく。

---

レイヤー構造は以下の通り

- Atomic：原子パーツ名となるクラス名
  - （txt/icon/btnなど）
- Module：UI を包括するモジュール名となるクラス名
  - （header/footer/xxxBoxなど）
- Skin：装飾などのクラス名
  - （red/blueなど）
  - class="btn red"のようにマルチクラスで使用
- Number：ナンバリング用のクラス名
  - (one/two,no[nth],first/lastなど)
- State：状態を表すクラス名
  - (active/disabled/checked/right/center/note)
  - 右寄せ・中央寄せや、文字サイズの小さい注意文言などもStateとして表現
- Other：その他のクラス名。パーツのセマンティックネームもここに含む。
  - (wrap/ServiceName/)
  - 固有のサービス名詞を使う場合や、特定の名前空間の定義もココ

---

class名の命名については特に指定は無し
