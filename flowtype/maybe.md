# Maybe Types

[https://flow.org/en/docs/types/maybe/](https://flow.org/en/docs/types/maybe/)

```
// 通常の文字列型指定
foo: String

// nullが渡される可能性もある場合はMaybe Typesの指定が使える
foo: ?String

// そもそもfoo自体が渡されない可能性もある場合、key側にもMaybe Typesが使える
foo?: ?String
```
