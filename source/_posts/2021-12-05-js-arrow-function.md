---
title: 如何利用 JavaScript 箭頭函式來更加精簡程式碼？
date: 2021-12-05 22:55:11
tags:
- [JavaScript]
- [箭頭函式]
- [Arrow functions]
categories:
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/js-arrow-function.jpg
---

JavaScript 在 ES6 之後增加了箭頭函式（Arrow functions），使用箭頭函式能夠使寫法更加精簡。

<!-- more -->

## 傳統函式寫法

宣告一個變數 newData 為函式，傳入值後再透過 return 傳出。如果利用傳統函式，寫法如下：

``` JavaScript
let newData = function(item) {
  return item;
}

console.log(newData('data'));
```

如果要使語法更加精簡，可經由以下步驟一步步慢慢精簡。

## 步驟一：去除 `function`、增加`=>`

首先將 `function` 這個單字去除，然後再參數後 `{}` 前加上 `=>` 箭頭函式，就達成初步的精簡；這兩個部分必須同時達成。

``` JavaScript
let newData = (item) => {
  return item;
}

console.log(newData('data'));
```

## 步驟二：去除 `{}` 與 `return`

再來就是要同時去除 `{}` 與 `return`，這兩部分是一組的，所以必須同時存在或移除。如此一來就能夠將語法精簡至一行。

``` JavaScript
let newData = (item) => item;

console.log(newData('data'));
```

## 步驟三：只有一個參數時，可去除 `()`

再來如果你的參數只有一個，就可以將包覆參數的 `()` 移除。

``` JavaScript
let newData = item => item;

console.log(newData('data'));
```

但是如果函式沒有任呵參數的話，就必須留下括號。範例如下：

``` JavaScript
let newData = () => 'data';

console.log(newData());
```

如果有兩個參數以上，也要加入括號。這樣才能夠使用逗號 `,` 區分參數。

## 清楚了嗎？最後再來用 `map()` 示範一次吧！

``` JavaScript
// 傳統寫法
let newData = data.map(function(item){
  return item;
})

console.log(newData);

// 步驟一：去除 function、增加 =>
let newData = data.map((item) => {
  return item;
})

console.log(newData);

// 步驟二：去除 {} 與 return
let newData = data.map((item) => item );

console.log(newData);

// 步驟三：只有一個參數時，可去除 ()
let newData = data.map(item => item );

console.log(newData);
```

## 總結

最後還是要提一下，將語法精簡固然很好，不過如果要跟其他人一同協作，還是需要考量一下其他人的 coding style；不過講好就好，我個人是滿喜歡精簡寫法的，畢竟能夠節省空間，除了很有成就感（？）看了也舒適。

另外 C# 似乎也有箭頭函式，所以不是 JavaScript 獨有的。不過這篇就以 JavaScript 示範為主，就給大家參考一下。

## 參考資料

* [ES6 箭頭函式 (Arrow functions) « Nic Lin&#39;s Blog](https://blog.niclin.tw/2019/09/30/arrow-function-in-javascript/)
* [鐵人賽：箭頭函式 (Arrow functions) | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/javascript/2017/12/21/javascript-es6-arrow-function/)