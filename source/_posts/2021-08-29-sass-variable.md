---
title: Sass / SCSS 筆記：如何利用變數管理重複設定值？
date: 2021-08-29 14:21:06
tags:
- [CSS]
- [Sass]
- [SCSS]
categories:
- [CSS]
---

使用 Sass / SCSS 管理 CSS 內容，除了能夠撰寫巢狀式語法架構外，還有像是變數、Mixin 等功能，可以幫助我們管理重複的 CSS 設定值或是語法，不但能夠優化 CSS 空間，也能夠增加日後開發的方便性。這篇文章就先來探討 Sass / SCSS 的「**變數**」。

<!-- more -->

> ## 什麼是變數？

在 Sass / SCSS 以及其它程式語言的世界裡，都是很好用而且非常重要的存在，變數就好比說，**它是一個容器（例如碗），你可以命名這個容器的用途（比如小明的碗），可以在裡面裝一些東西。（例如白米飯）**，而在 Sass / SCSS 與其它程式語言，就會利用變數來放置程式計算邏輯、或是一些會被利用的數值或是字串。

> ## 在 Sass / SCSS 變數該如何宣告？

``` SCSS
# Sass 範例
$變數名稱: 設定值
# SCSS 範例
$設定名稱: 設定值;
```

基本上可以看到 Sass 與 SCSS 指定變數的差別在於 Sass 不用且不能加分號，而 SCSS 寫法則與 CSS 一樣，需要用分號區隔前後屬性。這部分說明，可以回去複習上一篇「[更便利於撰寫與管理 CSS 的工具 - Sass / SCSS，如何使用、編譯？](https://guiblogs.com/)」。

除了以上差異之外，基本上兩者宣告方式大同小異，首先要設定變數名稱，並**在變數名稱前加上 `$` 字號**，其實這個概念很像是設定類別選擇器樣式那樣，會在類別名稱前加上 `.` 作為區隔。

設定完變數名稱後，後面會加上冒號與空格，再填入設定值，如此以來就完成了變數的宣告與指定值。

> ## 來段「顏色」與「字體大小」的範例吧

以前我們可能是這樣設計 CSS 的：

**CSS**

``` CSS
.header {
    background-color: pink;
}
.subTitle {
    font-size: 20px;
}
.btn-pink {
    background-color: pink;
    font-size: 20px;
    
}
.footer {
    background-color: pink;
}
```

**HTML**

``` html
<div class="header">
  Lorem ipsum dolor sit amet.
</div>
<div class="wrap">
  <h2 class="subTitle">title</h2>
  <a href="#" class="btn-pink">按鈕</a>
</div>
<div class="footer">
  Lorem ipsum dolor sit amet.
</div>
```

我希望網站主視覺是粉紅色、按鈕與副標題文字大小要有 20px。但萬一老闆或是客戶突然想要改變顏色跟文字大小，雖然說現在編輯器都有尋找與取代功能，但是當有成千上萬個設定值要修改時，還是會覺得很麻煩吧？

這時使用變數的好處來了。此時，你就能利用 Sass / SCSS 變數將語法改寫成這樣：

**Sass / SCSS**

``` SCSS
# Sass 範例

$primary: pink
$font-lg: 20px

.header 
    background-color: $primary
.subTitle 
    font-size: $font-lg
.btn-secondary
    background-color: $primary
    font-size: $font-lg
.footer
    background-color: $primary

# SCSS 範例

$primary: pink;
$font-lg: 20px;

.header {
    background-color: $primary;
}
.subTitle {
    font-size: $font-lg;
}
.btn-secondary {
    background-color: $primary;
    font-size: $font-lg;
    
}
.footer {
    background-color: $primary;
}
```

**HTML**

``` html
<!-- HTML -->
<div class="header">
  Lorem ipsum dolor sit amet.
</div>
<div class="wrap">
  <h2 class="subTitle">title</h2>
  <!-- 將 btn-pink 改為 btn-secondary -->
  <a href="#" class="btn-secondary">按鈕</a>
</div>
<div class="footer">
  Lorem ipsum dolor sit amet.
</div>
```

如此一來，我只要更改變數的設定值，我就能夠瞬間更改所有套用此變數的屬性，是不是方便了許多？

我有寫一個範例放置在 codePen 上，大家可以點擊「[Sass / SCSS 變數範例](https://codepen.io/guitimliu/pen/dyRPdxV)」來動手操作看看。當然，還有許多不同的使用情境可以運用到變數，大家也可以思考還有哪部分能夠利用變數最佳化 CSS 語法。

> ## 宣告變數請盡可能寫在前面

**Sass / SCSS 的編譯方式是由上而下編譯的**，因為這個特性，我們必須把變數放置在使用變數之前。以下列這個錯誤例子來舉例：

``` SCSS
# SCSS 範例
.btn-secondary {
    color: $orange;
    background-color: $orange;
}
$orange: orange;
```

這邊就不舉例 Sass 範例了，大家去嘗試這個範例的話可以發現是跑不動的，原因是 Sass / SCSS 由上而下編譯時，.btn-secondary 雖然想要取得 $orange 的設定值，但因為**此時還沒有編譯到 $orange 這個變數**，因此這時是無法取得 $orange 的設定值的。

因此在使用變數時，**請盡可能將變數宣告移至最前面**，如此一來比較能夠確保所宣告的變數在使用時，已經都被 Sass / SCSS 編譯器進行編譯。

> ## 後記

其實這是我第二次寫這篇文章了，本來是星期四或五要發佈，結果一個 GG，電腦當機！！然後 Typora（線下 Markdown）不但沒記錄到存檔，內容還直接給我通通不見......我直接整個無言 QQ（而且我還隨時都在按 Ctrl + S 儲存啊！！）

無奈之餘還是要將文章給發出來啊，所以大家如果看到這篇，還請多多支持啦，這是我用淚水刻出來的文章（QQ

雖然難過，不過我自己是覺得這篇寫得比上一次還好（自己說 XD），頓時也沒這麼難過了（？）下一篇就會提到 Mixin 的部分了，敬請期待囉，也希望電腦給力點啊！