---
title: 透過 Mixin，統整需要重複使用的 Sass 語法！
date: 2022-03-27 22:32:07
tags:
- [CSS]
- [Sass]
- [SCSS]
categories:
- [CSS]
index_img: http://img.guiblogs.com/index_img/sass-mixin.jpg

---

在一般程式中如果有需重複使用的程式，我們會使用 function 來進行統整後，需要執行時再呼叫這個 function；在 Sass 裡我們能夠透過 Mixin 來達到與 function 統整重複程式碼的效果。

<!-- more -->

## 基本寫法

### Minix 撰寫方式

``` SCSS
/* 不帶參數 */
@mixin Mixin名稱 {
    /* SCSS 語法 */
}

/* 帶參數 */
@mixin Mixin帶參數($參數名稱一, $參數名稱二) {
    屬性一: $參數名稱一;
    屬性二: $參數名稱二;
}
```

* 以 `mixin` 為開頭後，接著自訂 Mixin 名稱
* 如果需要帶參數，在 Mixin 名稱後加上括號包覆，如超過一個參數使用逗號分隔
* 在 `{}` 撰寫語法

### 呼叫 Mixin

``` SCSS
/* 不帶參數 */
@include Mixin名稱;

/* 帶參數 */
.類別選擇器 {
    @include Mixin帶參數(帶入參數一, 帶入參數二)
}
```

* 以 `@include` 為開頭後，接著自訂 Mixin 名稱
* 如果需要帶資料進入，在 Mixin 名稱後加上括號包覆，超過一個參數使用逗號分隔

## 範例

### 不帶參數

假設今天我們想為放置標題的 `h1` 標籤以圖片取代文字呈現，SCSS 可以這麼撰寫：

``` SCSS
/* 圖片取代文字 */
@mixin hide-text {
    text-indent: 110%;
    white-space: nowrap;
    overflow: hidden;
}

.header h1 {
    background: url('../logo.png');
    @include hide-text;
}
```

我們將圖片取代文字語法撰寫在 hide-test 的 Mixin 內，並且當 `h1` 標籤需要使用這樣的機制時，就可以直接引入 hide-text。

另外一個好處是，後續如果有其它地方，需要使用圖片取代文字的機制就不用特別另外在撰寫一次。因此圖片取代文字的機制就不會是 `h1` 標籤專有，而是有需要就可以直接引入。

### 帶參數

假設我們需要在不同區域加上不同大小的圓形，可以這麼寫：

``` SCSS
@mixin circle ($size, $bgcolor) {
    border-radius: 50%;
    height: $size;
    width: $size;
    background: $bgcolor;
}

.box1 {
    @include circle(30px, #fff);
}
.box2 {
    @include circle(60px, orange);
}
```

如此一來我們便能在不同的 div 區塊上，透過參數各自設定為不同大小與顏色的圓形。

## Mixin + RWD 應用

透過 Mixin 能透非常方便管理 RWD 內容，如下：

``` SCSS
@minix pad {
    @media (min-width: 768px) {
        @content
    }
}
@minix desktop {
    @media (max-width: 992px) {
        @content
    }
}
```

我們能夠先撰寫不同大小裝置使用媒體查詢於各自 Mixin，其中在媒體查詢裡面使用到了 `@content`，這個機制可以讓外部呼叫 Mixin 時，可以直接將語法撰寫至指定的 Mixin，保留一個給外部寫入的空間。

假設有個網頁頁首，手機版、平板與 PC 裝置背景顏色分別呈現為橘色、藍色與紅色，能夠這樣設置：

``` SCSS
.header {
    background-color: orange;
    @include pad {
        background-color: blue;
    }
    @include desktop {
        background-color: red;
    }
}
```

透過這樣撰寫，就會自動將語法帶入到 @content 內，進行不同樣式上渲染。

## Mixin + import 組合技

搭配 [使用 @import 讓你 Sass 切分檔案、維護管理更方便！](https://guiblogs.com/sass-import/) 使用，可以將 Mixin 整理成一個檔案或多個檔案進行整合後，使用 @import 整合至主樣式檔：

``` SCSS
@import "variable"; /* 變數檔 */
@import "normalize"; /* CSS Reset */
@import "mixin"; /* Mixin 檔 */
@import "main"; /* 自己的 SCSS */
```

先引入 Mixin 檔後再載入自訂 SCSS 檔，使由上而下編譯時能夠先識別 Mixin（如同變數），就能夠於後續使用 Mixin。