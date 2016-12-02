# ITCSS (Inverted Triangle CSS)

[https://speakerdeck.com/dafed/managing-css-projects-with-itcss](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)

詳細度を重視しており、以下のような詳細度の高さを基準にしたレイヤーで構成される。

- Settings
  - (変数/設定)
- Tools
  - (mixin/function)
- Generic
  - (normalize/reset/ユニバーサルセレクタなど)
- Base
  - (html/bodyなど)
- Objects
  - OOCSSで言うオブジェクト
- Components
  - 要素が実際に使われることを想定した状態になる（装飾や状態）
- Trumps
  - ヘルパークラス。!important使用可能

上記が基本だが自由に増減することを許容しており、スケールすることが可能。
Baseより下の階層では、要素型セレクタの使用を禁止している。

ObjectsとComponentsの切り分け方にやや難しさがありそう。

詳細度を明確にするため、CSSファイルはパーシャル化したのちに、
上から順番にimportするようにすること。
