---
title: JavaScript：by referenc（傳參考、傳址）與 by value（傳值）差異
date: 2021-10-31 23:23:58
tags:
- [JavaScript]
categories:
- [JavaScript]
---

今天來探討 JavaScript 中，by referenc（傳參考）與 by value（傳值）差異。

<!-- more -->

> ## by value（傳值）

* 宣告 a 變數後，再宣告變數 b 並將 a 值賦予值給變數 b
* 然而要將 a 值賦予值到變數 b 時，會額外開新的記憶體空間
* 因此變數 a 與變數 b 是不同的記憶體空間，彼此沒有關聯
* 所以後續儘管進行 `b++;` 運算也不會影響到變數 a

``` javascript
let a = 1;
let b = a;
b++;
console.log(a, b); // output: 1 2
```

> ## by reference（傳參考、傳址）

* 宣告 a 變數後，再宣告變數 b 並將 a 值賦予值給變數 b
* 但因為兩者皆是物件，物件本身有個記憶體空間，因此 a 變數與 b 變數會指向到同一個物件記憶體空間
* 賦予新值給 b.name，此時 a.name 的結果也會被修改
* 原因是因為 a 與 b 變數都指向同一個記憶體空間物件
* 因此不論修改哪個變數裡面的屬性，都是針對同一個記憶體空間修改
* 陣列內的 value 也會跟物件一樣有傳參考特性

``` javascript
const a = {
    name: 'apple',
}
const b = a;
b.name="banana";
console.log(a.name, b.name); // output: banana banana
```

> ## 參考資料

* [JavaScript 常見考題破解：物件傳值？傳參考？](https://www.youtube.com/watch?v=y1odVMpi6dU&t=2297s)