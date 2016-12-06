# Reactのテスト

ReactにおいてはUIが関数によって生成されているため、関数のテストを行うことでUIの表示をある程度保証することができます。

`関数のテスト` ＝ `引数に対して、期待した返り値があるかどうか`

よくあるサンプルテストコードの例

```js
// テスト対象コード
const calc = (a, b) => {
    return a + b;
}

// テスト実行コード
describe('テスト', () => {
    it('a + b', () => {
        assert.equal(calc(2, 3), 5); // calc関数に(2, 3)を与えたら、5が返る
    });
});
```

## テストコードの紹介

テストを便利に書くライブラリもいろいろ存在します。
今回は以下のものを使用したサンプルでお送りいたします。

|ライブラリ名|役割|
|---|---|
|Mocha|テストコードを実行させる|
|power-assert|何と何を比較するかのコードを書ける|
|sinon|テストデータの生成|
|enzyme|Reactコンポーネントを簡単にテストにかけることができる|

### とりあえずこれだけ書ければテストを始めれる！

```js
import assert from 'power-assert';
import React from 'react';
import {shallow} from 'enzyme';
import Component from './component';

it('テスト', () => {

    // コンポーネントに渡すProps(引数)
    const props = {
        id: 0001,
        name: 'Yamada Taro'
    };

    // enzymeでReactコンポーネントをnode上でレンダリング
    const component = shallow(<Component {...props} />);

    // power-assertで何かしらのテストコードを書く
    assert.equal();
});
```

#### UIの存在テスト

描画されるコンポーネント内に、目的のUIがちゃんと存在しているかのチェックをします。

```js
assert.equal(component.find(<ArticleComponent />).length, 1);
```

```js
assert.equal(component.find('.name-box').length, 3);
```

別のReactコンポーネントや、目的のclass名がついたDOMなどのlengthを見にいきます。
存在している個数が入ってくるので、3つ描画されるはずなら`3`と比較します。

#### イベントの発火テスト

`onclick`などに指定しているイベントが正しく発火しているかをチェックします。

```js
import sinon from 'sinon'; // sinonを使います

...

it('onClickのテスト', () => {
    const spy = sinon.spy();
    const props = {
        handleClick: spy // 生成したspyオブジェクトをpropsで渡します
    };

    const component = shallow(<Component {...props} />);
    component.find('.submit-button').simulate('click'); // クリックをシミュレート
    assert.ok(spy.calledOnce); // spyオブジェクトがコールされたかどうかをチェック
});
```

sinonの`spy()`という機能を活用します。
実行される関数が入るところに代わりに仕込むことで、イベントが発火したかどうかを知ることができます。

#### propsテスト

渡したpropsが、キチンと目的の箇所に表示されているかなどをチェックします。

```js
it('Propsのテスト', () => {
    const props = {
        label: 'label',
        style: {marginTop: 20}
    };

    const component = shallow(<Component {...props} />);
    assert.deepEqual(component.find('.foo-label').props().label, props.label);
    assert.deepEqual(component.find('.bar-box').props().style, props.style);
});
```

`.props()`で、DOMに紐付いた情報を見ることができます。
そこから拾ってきた情報と、渡している情報が合致しているかを比較します。

## テストしやすい実装にむけて

実際にテストコードを書いてみると、関数の役割がシンプルなことがとても重要に感じてきます。

- propsは少なくする
- コンポーネントは細かく分ける
- 依存性を無くす

「テストコードが簡単に書けない」＝「そのコンポーネントは複雑」＝「リファクタリング対象」
