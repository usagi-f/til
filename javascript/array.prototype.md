# Array.prototype

## arr.find(callback[, thisArg])

[Array.prototype.find() - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

関数を渡すと、配列要素に対して順番に評価する。
評価結果が`true`になった場合、一番最初になった値だけを返します。

すべてfalseで終わった場合には、`undefined`を返す。

```
const array1 = [4, 6, 8, 12];
const array2 = [1, 2, 4, 6];

const func = (element, index, array) => {
    return element * 2 > 15; // 2倍にしたとき15を超える
};

console.log(array1.find(func)); // 8
console.log(array2.find(func)); // undefined
```
