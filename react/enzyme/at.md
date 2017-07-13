# at()

通常enzymeを使ってDOMを探索する際に`find()`を使用する。

```js
wrapper.find(Button).foo()
```

だが、探索対象となる要素が複数ある場合はnodesオブジェクトに配列で格納される

classNameなどを付与していない場合、テスト対象にしたい要素がどちらなのかを判別する手段がない

```js
// Component (JSX)
<div>First Object</div>
<div>Second Object</div>

// Enzyme
wrapper.find('div')
```
```
// logs
nodes:
   [ { '$$typeof': Symbol(react.element),
       type: 'div',
       key: null,
       ref: null,
       props: [Object],
       _owner: null,
       _store: {} },
     { '$$typeof': Symbol(react.element),
       type: 'div',
       key: null,
       ref: null,
       props: [Object],
       _owner: null,
       _store: {} } ],
length: 2,
```

これを指定するためにあるのが`at()`である。

```js
// Component (JSX)
<div>First Object</div>
<div>Second Object</div>

// Enzyme
wrapper.find('div').at(0)
wrapper.find('div').at(1)

// 配列のindexをつかって指定ができる
```
