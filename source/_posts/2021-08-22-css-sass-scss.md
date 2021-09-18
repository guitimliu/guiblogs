---
title: 更便利於撰寫與管理 CSS 的工具 - Sass / SCSS，如何使用、編譯？
date: 2021-08-22 19:24:05
tags:
- [CSS]
- [Sass]
- [SCSS]
categories:
- [CSS]
---

CSS 在網頁上的需求愈來愈多，但是在愈寫愈多的情況下，預設的 CSS 語法可能無法滿足，管理上也比較不易，而今天要介紹的 Sass / SCSS 就能夠幫助我們更方便於 CSS 的撰寫與管理。

<!-- more -->

> ## 什麼是 Sass / SCSS？有什麼特點？

基本上 Sass / SCSS 有以下特點：

* 巢狀式樣式
* 利於切分各個樣式檔案
* 有變數功能
* 有類似於像是 function 的功能 mixin，有助於減少重複多個語法，也能更善於撰寫 RWD 網頁
* 其中 SCSS 也支援純 CSS 寫法

以上幾個特點能，夠使 CSS 增加可維護性。不過如果要使用 Sass / SCSS 語法還必須搭配編譯軟體，再透過軟體將 Sass / SCSS 由上而下編譯成網頁看得懂的 css 檔案，因為在引入上網頁並看不懂 Sass / SCSS 檔案。

> ## 如何編譯 Sass / SCSS 語法？

這邊有兩個編譯器可以跟大家介紹：

* Prepros
* VS code 擴充套件：Live Sass Compiler

不過這一篇呢我打算使用 Prepros 來編譯（我用過 Live Sass Compiler 了，所以趁機會來試試 Prepros ），當然大家如果對 Live Sass Compiler 有興趣也可以上網 Google 一下資料～

> * 軟體名稱：Prepros
> * 軟體下載：[Download Prepros 7](https://prepros.io/downloads)，目前提供 MacOS、Windows、Debian Linux 三種作業系統下載使用。

下載完執行後可以看到以下畫面：

![Prepros](http://img.guiblogs.com/css-sass-scss/prepros-home.jpg)

此時我們將要編譯的專案目錄直接拖曳到 Prepros 內：

![拖曳專案到 Prepros](https://img.guiblogs.com/css-sass-scss/import-project.jpg)

拖曳後就能看到 Prepros 內有預設的 index.html 以及 style.scss 兩支檔案，而後我們使用 VS code 開啟，可以看到預設是只有 scss 的樣式檔，沒有 CSS 檔案：

![project 僅有 style.scss 樣式設定檔](https://img.guiblogs.com/css-sass-scss/project.jpg)

此時當我們輸入值並按下儲存後，自動產生出了 style.css 檔案：

![Prepros 編譯過程](https://img.guiblogs.com/css-sass-scss/compile-demo.jpg)

我們將 style.css 打開並放置於右側，發現語法跟左邊是一模一樣的！原因是因為 Prepros 能夠偵測到專案裡面的 Sass / SCSS 是否有更動，如果有更動的話就會在相對應的 CSS 進行直接更動，但如果找不到相對應的則直接建立一個 css 檔案，例如這個範例。因此當我現在針對 style.scss 作任何更動，儲存之後右邊的 CSS 就會跟著變動。

> ## 巢狀寫法示範：原始 CSS 怎麼寫？

首先我們先來看要達成的效果圖：

![希望達成的效果圖](https://img.guiblogs.com/css-sass-scss/demo-example.jpg)

我希望 h2 的「title」字樣大小為 36px、副標題使用 `<span></span>` 標籤包住為 16px，鏈結顏色使用紅色，傳統 CSS 可以這麼寫：（基本上實務 CSS 語法不會這樣下，僅提供示範用）

``` CSS
.products {
    display: flex;
}
.products h2 {
    font-size: 36px;
}
.products h2 span {
    font-size: 16px;
}
.products a {
    color: red;
}
```

### 這邊會遇到什麼問題？

* 光是 .products 就重複下了四次
* 萬一之後要改類別名，豈不就要改四次？

因此，我們試著使用 Sass / SCSS 的巢狀特性來改善這個問題。

> ## 巢狀寫法示範：SCSS

``` CSS
.products {
    display: flex;
    h2 {
        font-size: 36px;
        span {
            font-size: 16px;
        }
    }
    a {
        color: red;
    }
}
```

我們可以發現以下幾點改變：

* 本來四個獨立的 CSS 選取器設定，合併成一個，並且下面有不同的分層
* .products 第一層本身除了要設定為 Flex 特性外，也能夠同時設定 .products 下一層的 h2、a 標籤樣式
* 至於第二層仍然可以在往下一層設定樣式，因此 h2 標籤除了有字體大小設定外，也針對下一層 span 設定字體大小

這樣就能夠非常方便的進行樣式管理，另外巢狀不只針對標籤，就算 .products 下一層有類別選擇器也是能夠使用巢狀方式來做設定的。不過要跟大家提醒，一般來講巢狀語法不超過四層是最為洽當的。

> ## 巢狀寫法示範：Sass

``` scss
.products 
    display: flex
    h2
        font-size: 36px
        span 
            font-size: 16px
    a 
        color: red
```

Sass 的寫法省略了 `{}` 括號以及 `;` 分號，至於要怎麼判斷分隔呢？像是我要針對 .products 設定 Flex，可以看到範例該行語法距離前段為一個 tab 鍵的距離，至於對於 h2 與 a 標籤的設定則為 2 個 tab 鍵、針對 span 的第三層要 3 個 tab 鍵，以此類堆。

因此 Sass 的寫法更強調階層的寫法，CSS 與 SCSS 如果在階層上沒這麼整齊，只要能透過括號跟分號都還是能分辨；但如果是 Sass 該對齊沒對齊的部分就會報錯囉！另外如果加上括號跟分號也是會報錯的，所以 Sass 的寫法是比較嚴謹的，這個部分要稍微留意一下。

> ## 如果報錯會發生甚麼事？怎麼解決？

此時我想把鏈結顏色改成藍色，但是不小心在 Sass 語法加上了分號，可以發現按下儲存後右邊並沒有編譯成功，這就代表我們寫錯了。但當然這是我們故意犯錯，但是在寫 code 的過程中難免會發生連我們自己都不知道問題出在哪個錯誤，我們該怎麼 debug 呢？

![Prepros 編譯錯誤](https://img.guiblogs.com/css-sass-scss/compile-error.jpg)

此時我們可以進入 Prepros 主程式並點擊 Logs，這裡記錄了歷史編譯紀錄，不管是成功還是失敗都會記錄；因此我們就能夠在這裡尋找編譯錯誤的原因，進而將錯誤修正。

![編譯錯誤後至 Prepros Logs 查看原因](https://img.guiblogs.com/css-sass-scss/prepros-logs.jpg)

> ## 後記

Sass / SCSS 的特點當然不只這樣，上面也提到了變數、切分樣式表、mixin，為了避免篇幅過長下次再來介紹，各位也可以練習看看哦～

> ## 參考資料

* [CSS preprocessor 與 Sass/SCSS 基本語法介紹](https://tw.alphacamp.co/blog/css-preprocessor-sass-scss)（Sass / SCSS 是個 CSS 預處理器，有關預處理器可看這篇介紹）