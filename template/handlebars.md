# handlebars

[http://handlebarsjs.com/](http://handlebarsjs.com/)

## partialsで子へ値が継承される

基本親から渡された値は、以降で読み込まれるpartialsにすべて伝搬される。

```
// template
{{> partials-foo
    flg=true
}}

// partials-foo
{{> partials-foobar}} // ここで明示的にflgを渡さなくても

// partials-foobar
{{#if flg}} // flgの値が孫partialsまで伝わっているので、trueが描画されてしまう
    true
{{/if}}
```

継承途中で明示的に値を上書きした場合は、それが優先される。

```
// template
{{> partials-foo
    flg=true
}}

// partials-foo
{{> partials-foobar
    flg=false // わざと途中でfalseを上書き
}}

// partials-foobar
{{#if flg}} // 上書きされfalseが伝わるため、trueは描画されない
    true
{{/if}}
```
