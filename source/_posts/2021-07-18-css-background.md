---
title: 什麼是 background？跟 img 的差別？image、repeat、color 以及 position 等屬性又該如何設定？
date: 2021-07-18 22:40:57
tags:
- [CSS]
- [background]
categories:
- [CSS]
---

CSS 除了透過 img 顯示圖片外，還有 background 可以用於顯示背景圖片，當然它並不只有背景圖片的技巧，如果要設定背景顏色也是可以的，今天就來介紹一下 background 相關應用。

<!-- more -->

> ## 何時用 img 或是 background？他們又有什麼差別？

img 這個標籤主要就是用來表示影像，就像 video 用來表示影片那樣（雖然我知道這樣舉例很爛，等我想一下怎麼說會更好再更新 XD）；而 background 則是設定區塊像是 div 除了文字外，也能夠設定其區塊背景圖片以及顏色。

一般來講，如果你的圖片會跟後端結合，由資料庫回傳要顯示圖片的 URL，一般來講就會使用 img 標籤來顯示圖片，因為能夠透過後端語言或是 JavaScript 控制 HTML，將資料庫資料一筆一筆傳入網頁，但不太能直接控制 CSS 檔案；相反的如果像是背景圖、或是一些比較少換的影像，可能擺在那邊兩三年都不會換，即可直接在 CSS 使用 background。

但有沒有可能我也要動態更換 background 圖片？當然有可能，這篇文章也會提到其解決方法。

> ## 載入背景圖片 background-image

``` css
.box {
    width: 100px;
    height: 100px;
    background-image: url(背景圖片網址);
}
```

`background-image` 可用於設定背景圖片網址，可是絕對路徑或是相對路徑。另外也可以針對 box 設定寬度與寬度，限縮 .box 範圍後，也就會影響背景圖片在整體網頁占比。

### 如果想動態更換 background-image 怎麼辦？

由於後端語言不太能直接控制 CSS 檔案（我不知道是不是真的不能，但以我目前所學到的是不能 XD）所以就會透過後端語言或是 JavaScript 控制 HTML 的 Element 來撰寫：

``` HTML
<div class="box" style="background-image: url(這裡撰寫放置 URL 的變數)"></div>
```

雖然因為權重關係我們盡量不會去使用 Element 設定 CSS，但是如果要透過 HTML 動態設定 CSS，一般來講就會透過 Element 來去設定 CSS，像是進度條的進度百分比也可以透過這樣的方式設定。

> ## 控制圖片重複顯示：background-repeat

若容器過大、而背景圖片尺寸卻小於容器，自動來說圖片會自動填滿容器其它區域，因此利用 `background-repeat` 屬性，可以控制圖片是否要重複。設定共有：

* repeat 重複顯示圖片並且填滿容器空的所有部分
* repeat-x 重複顯示圖片，但只填滿圖片的 x 軸
* repeat-y 重複顯示圖片，但只填滿圖片的 y 軸
* no-repeat 就是不重覆、不填滿啦！只顯示單張圖片

> ## 背景顏色：background-color

`background-color` 這個就是寫入背景顏色的，當設定時，就會讓該容器內填滿所設定的顏色。

另外，背景顏色與背景圖片是能夠同時設定的，因此若有設定不重複的背景圖片，在沒被填滿之處，就會顯示其區塊設定之背景顏色。

> ## 背景圖片位置：background-position

`background-position` 這個屬性可為不重複的背景圖片設定其位置。

其設定如下種有下列幾種：

### 使用位置關鍵字

``` css
.box {
    background-position: right bottom;
}
```

第一個參數代表的是水平、第二個參數代表上下；可指定圖片要對齊於哪裡。

### 使用數值

``` css
.box {
    background-position: 100px 90px;
    background-position: 10% 20%;
}
```

也可以使用數 px、百分比等單位，來達到指定圖片位置效果。

> ## background 讓圖片設定在同一個屬性

使用 `background` 屬性可以讓圖片設定值通通設定於此，如下範例：

``` css
/* 原先學習之分開寫法 */
.box {
    width: 100px;
    height: 100px;
    background-image: url(圖片網址);
    background-repeat: no-repeat;
    background-color: orange;
    background-position: 10% 20%;
}

/* 使用 background 屬性*/
.box {
    width: 100px;
    height: 100px;
    background: url(圖片網址) no-repeat orange 10% 20%;
}
```

從以上使用 background 屬性範例，即可知能夠將所有設定縮寫至此屬性；至於裡面的設定參數，也能夠自由移動。

但必須注意的是，如果其中一項不小心設定錯誤，就會造成整個屬性所有設定都會失效喔！所以若要使用縮寫就必須很小心，不然比較保險的寫法就是分開撰寫。

> ## 後記

其實 background 背景圖片有非常多可以應用的部分，先來挖個坑：下次還會再撰寫更多的應用，比如圖片取代文字。畢竟最近在學習網頁切版，要多做筆記、強化記憶！