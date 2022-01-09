---
title: 原來 CSS 也有原生變數可以使用
date: 2022-01-09 21:08:20
tags:
- [CSS]
categories:
- [CSS]
index_img: https://img.guiblogs.com/index_img/css-variables.jpg
---

之前使用 SCSS 慣了，每次如果想要在樣式表使用變數就會直覺想到使用預處理器，結果前陣子才發現原生的 CSS 也有變數功能可以使用，那就來記錄一下吧。

<!-- more -->

## 設定方式

首先 CSS 原生變數的語法是這樣設定的：

``` css
:root {
    --變數名稱: 變數值;
    --bg-primary: orange;
}
```

變數的設定都會放在 `:root` 選取器內。

## 變數使用方式

假設我希望 `<header></header>` 區塊內的背景顏色可以使用 `--bg-primary` 的橘色，CSS 可以這樣撰寫（不過通常不會直接使用標籤選擇器設定樣式就是了，這裡僅為範例）：

``` css
header {
    background-color: var(--bg-primary);
}
```

反正就是在屬性值撰寫 `var(--變數名稱)` 這樣格式。

## 參考資料

* [[ 前端新手技能樹 ] #7 從 CSS 變數與函式看預處理與程式 - YouTube By Alex 宅幹嘛](https://www.youtube.com/watch?v=rIMsQ8fk1L0)
* [原生 CSS 變數運用技巧（CSS Variables） - 客座投稿 | W3HexSchool](https://w3c.hexschool.com/blog/21985acb)