# インターネットの仕組み

## パケット交換方式の仕組み

インターネット上を流れるデータはすべて**パケット**という単位に分割されて届けられます。

電話などの「回線交換方式」だと、通信中は回線を占有します。つまり同時に行える通信は１つだけということになります。
しかしパケット単位でやり取りができる「パケット交換方式」は回線を占有する時間が短くなるため、あたかも複数データが１つの回線を同時に使っているように見せることができます。

この方法をとることで、回線の利用効率を上げることができました。
これは用意しなければならない物理的な通信設備を抑えることができるということになり、圧倒的に低コストで環境整備ができるようになりました。

## パケットを転送するルータ

パケットをインターネット上で転送する機器のことを**ルータ**と呼びます。

パケットには転送先情報が付加されており、ルータはインターネットの全体像を意識することなく個々のパケットについている情報に従い転送することだけに専念します。

ルータがその情報を正しく理解して転送できるのは、道路標識のような役割をもつ**ルーティングテーブル**を持っているためです。
ルータは、パケットがどこから送信されたのか、どのような経路で転送先へ向かうのかは具体的に把握していません。

ルーティングテーブルに沿って転送することは「フォワーディング（forwarding）」と呼ばれています。
既に存在しているルーティングテーブルを参照して転送しているだけに過ぎず、ルータ自身がルーティングテーブルを都度生成するわけではありません。