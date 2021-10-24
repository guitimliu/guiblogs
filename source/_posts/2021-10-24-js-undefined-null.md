---
title: JavaScript 的 undefined 與 null 有什麼差異？
date: 2021-10-24 14:48:26
tags:
- [JavaScript]
categories:
- [JavaScript]
---

JavaScript 除了有 Number、String  與 Boolean 等型別外，常見的還有 undefined 與 null 這兩種型別。今天就來介紹這兩者是什麼及其差異。

<!-- more -->

> ## undefined 與 null 值如其型別

兩者值如其型別。如下：

``` javascript
let a;
let b = null;
console.log(a, b); // output: undefined null
```

> ## 何時出現 undefined？

* 變數已被宣告，但沒有給予值（未被定義）
* 使用 var 宣告時出現的 hoisting 狀況

### 變數已被宣告，但沒有給予值（未被定義）

``` javascript
let a;
console.log(a); // output: undefined
```

### 使用 var 宣告時出現的 hoisting 狀況

JavaScript 編譯時會先將所有變數掃過一輪，先畫出記憶體空間後再賦予值到變數。因此使用 var 宣告變數，會出現在宣告變數前就嘗試取值，但因為還沒賦予值，而出現 undefined 訊息。

另外，因為有先畫出空間，代表 JavaScript 知道有這個變數，只是還沒到宣告那一行，因此不會出現沒有定義變數訊息 `a is not defined` 。

``` javascript
console.log(a); // output: undefined
var a = 1;
console.log(a); // output: 1
```

但如果利用 let 宣告變數，錯誤訊息會換成 `Uncaught ReferenceError: Cannot access 'a' before initialization`。

> ## 何時出現 null？

* 宣告變數時，賦予值為空值。
* 原本變數有值想清空，賦予值為空值。

``` javascript
let a = null; // 宣告變數時賦予值為空值
let b = 1;
b = null; // 將原本變數值清空
```

> ## 參考資料

* 六角學院 JS 直播班錄影
* [JavaScript 那個 let, const, var 到底差在哪？](https://www.youtube.com/watch?v=FGdKdn_CnWo)