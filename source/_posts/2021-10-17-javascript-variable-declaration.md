---
title: JavaScript 變數宣告：var、let、const 的差異？
date: 2021-10-17 21:50:03
tags:
- [JavaScript]
categories:
- [JavaScript]
---

JavaScript 的宣告方式，早期以 var 方式宣告居多。其後由於作用域的關係，發展了 let 宣告方式。另外還有 const 常數宣告方式，今天就來介紹不同宣告方式差異。

<!-- more -->

> ## 為什麼要宣告變數？

JavaScript 預設如果沒有宣告變數，是不會出錯的，如下：

``` javascript
a = 1;
console.log(a); // output: 1
```

然而透過這樣沒有透過宣告而成的變數，其實叫作全域屬性。如果遇到以下情況：

``` javascript
function fn() {
    a = 1;
}
fn();
console.log(a); // output: 1
```

依然是取得到值的，因為無法確定這個變數來自於哪裡（萬一 code 一多就會很複雜），因此就需要宣告變數會比較合適。

> ## 早期宣告變數方式：var

如果使用 var 來宣告變數，用同樣上述範例，就會有不同差異：

``` javascript
function fn() {
    var a = 1;
}
fn();
console.log(a); // output: a is not defined
```

此時，只在特定區塊宣告的變數，對外面是沒有作用的。

### var 的問題：能夠被重複宣告

由於 var 能被重複宣告且不會出現錯誤，萬一未來資料一多有一定機會造成程式碼大亂。

``` javascript
var a = 1;
function fn() {
    var a = 2;
    console.log(a); // output: 2
}
fn();
console.log(a); // output: 1
```

### var 的問題：作用域

雖然離開了作用域，但仍舊能在作用域外取出 i 值。

``` javascript
for (var i = 0; i < 10; i++) {
    // console.log(i);
}
console.log(i); // output: 10
```

> ## 現在主流做法：let

let 改善了前面 var 問題，如下：

### 不能重複宣告 let 變數

會出現錯誤訊息 `Uncaught SyntaxError: Identifier 'a' has already been declared`。

``` javascript
let a = 1;
let a = 2; // output: Uncaught SyntaxError: Identifier 'a' has already been declared
```

### 區分作用域

會出現錯誤訊息 `Uncaught ReferenceError: i is not defined`。

``` javascript
for (var i = 0; i < 10; i++) {
    // console.log(i);
}
console.log(i); // output: Uncaught ReferenceError: i is not defined
```

> ## 常數宣告方式：const

以 let 來說，宣告後還是能夠重新賦予值：

``` javascript
let a = 1;
console.log(a); // output: 1
a = 2;
console.log(a); // output: 2
```

而 const 則是用於宣告常數，宣告不容易或不會變動的值，像是圓周率、太陽數量。因此宣告後重新賦予值會出錯：

``` javascript
const a = 1;
console.log(a); // output: 1
a = 2;
console.log(a); // output: Uncaught TypeError: Assignment to constant variable.
```

而出錯的部分是指變數重新賦予值時，會改變變數的記憶體指向，並在新的記憶體空間存放新值。

但若是更改物件內屬性值，因為沒有改變記憶體指向，是可以的。

``` javascript
const a = {
    name: 'JavaScript',
};
a.name = 'JS';
```

但如果是直接賦予新物件，因為牽涉到記憶體指向，會出現錯誤。

``` javascript
const a = {
    name: 'JavaScript',
};
a = {}; // output: Uncaught TypeError: Assignment to constant variable.
```

> ## 參考資料

* [JavaScript 那個 let, const, var 到底差在哪？](https://www.youtube.com/watch?v=FGdKdn_CnWo)
* 六角 JavaScript 直播班課程內容