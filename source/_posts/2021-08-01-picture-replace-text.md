---
title: Logo 不只能用 img，來試試 background 圖片取代文字技巧！
date: 2021-08-01 23:03:53
tags: CSS
categories:
- [CSS]
---

一般來說新手時期在設置 Logo 時都會使用 HTML 的 img 標籤將圖片展示出來，不過其實除了 img 之外，還能夠使用 background 背景圖片，並使用圖片取代文字的技巧來設置 Logo。

> ## 什麼是圖片取代文字？

圖片取代文字技巧，是一個區塊中，設置該區塊的背景圖片，在隱藏其文字只顯示背景的一種方式。其實文字都還在，只是我們透過一些方式讓文字不會顯示在網頁中。

<!-- more -->

使用此種方式其實是有助於 SEO 的，雖然文字在我們肉眼已經隱藏了，但是搜尋引擎仍然能夠利用爬蟲爬到 HTML 語法（只有 CSS 將它隱藏），所以人能夠只看到 Logo、但搜尋引擎能夠透過文字辨別該區塊是做什麼用的。

> ## 圖片取代文字技巧 CSS 語法

### HTML

``` html
<div class="logo">Web Logo</div>
```

### CSS

``` css
.logo {
	background-image: url(./images/logo.png);
    text-indent: 101%;
    overflow: hidden;
    white-space: nowrap;
}
```

### 範例說明

* `text-indent` 屬性為首行縮排，而設定為 101% 後，文字就會被移到區塊之外
*  `overflow`  屬性部分，可參考「[CSS overflow 屬性用法讓你掌握控制捲軸效果](https://www.webtech.tw/info.php?tid=28)」此篇文章
  * 將此屬性設定為 hidden，就可以讓超出範圍的部分被隱藏
* `white-space:nowrap;` 能夠將文字強制不換行，因為如果文字換行的話，`text-indent` 的特性是只有首行縮排，第二行就會回到區塊內了 

> ## 後記

當然我相信這個技巧其實也不只適用在 Logo，所以大家可以依照情境，來去使用這項技巧。

這項技巧雖然好用，但就是經常忘記 XDD 所以特別寫成筆記，讓我未來可以直接進行複習，不過我覺得這一篇目前沒有寫到很好，最近比較忙，後續比較有空後再來好好優化一下此篇文章！