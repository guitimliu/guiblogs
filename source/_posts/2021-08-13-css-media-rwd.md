---
title: 運用 CSS 媒體查詢語法開發 RWD 響應式網頁
date: 2021-08-13 22:17:44
tags:
- [CSS]
- [RWD]
categories:
- [CSS]
---

隨著時代的進步，上網的載具愈來愈方便，從早期的電腦，到後來的平板、手機，甚至於是超大型螢幕，已經不止傳統的 1024 * 768 解析度螢幕。而這麼多變的螢幕大小，正考驗著網頁開發者的功夫啊！因為這樣也衍生出了所謂的 RWD 響應式網頁設計，讓網頁在不同的裝置或視窗大小呈現不同的顯示方式。

<!-- more -->

>  ## RWD 的特點

1. 能夠自適應於不同裝置或是視窗的大小。
2. 不會出現 x 軸滾輪。（一般來講只有平常最常見的垂直滾輪，不能有水平滑動的滾輪，不然就不是 RWD）

可以參考「[什麼是RWD響應式網頁設計？圖解說明讓你3分鐘搞懂手機版網站](https://www.cadiis.com.tw/blog/rwd-web-design-infographic)」這篇有更詳盡的解說。

> ## 設計 RWD 頁面起手式

首先，必須在 `<head></head>` 加上以下這段語法，如果是用 VScode 的 Emmet 功能基本上預設就會有：

``` HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

這段語法代表的是網頁寬度要等於裝置的寬度，畫面初始縮放比例為 100%。使用此段語法就能確保網頁在不同寬度的裝置都能夠正常呈現網頁排版與內容。

> ## 媒體查詢語法

媒體查詢可以知道用戶的裝置資訊，可用來查詢視區寬高以及裝置寬高。根據 W3Schools 有以下媒體類型：

* all 所有裝置
* print 印表機列印輸出
* screen 一般電腦螢幕
* speech 朗讀式裝置

如果是針對一般螢幕通常是會使用 screen，使用方式如下：

``` CSS
@media screen and (max-width: 991px) {
    /* CSS 語法 */
}
```

以上例子就是針對 screen 這個媒體類型，在小於並包含 991px 的裝置大小之下，所呈現的 CSS 語法。不過其實媒體類型是可以省略的，如果省略效果就會是「all 所有裝置」。範例如下：

``` CSS
@media (max-width: 767px) {
    /* CSS 語法 */
}
```

以上範例就是不限任何裝置，在包含 767px 寬度以下，所要呈現的 CSS 語法。

>  ## 利用媒體查詢設計響應式網頁

**CSS**

``` CSS
/* CSS Reset 省略 */
img {
    max-width: 100%;
    height: auto;
}
.wrap {
    width: 1200px;
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item {
    width: 24%;
    border: 1px solid black;
}
@media (max-width: 991px) {
    .item {
        width: 48%;
    }
}
@media (max-width: 767px) {
    .item {
        width: 98%;
    }
}
```

**HTML**

``` HTML
<div class="wrap">
    <div class="item">
        <img src="https://fakeimg.pl/300x300/eee">
        <h2>title</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, omnis.
    </div>
    <div class="item">
        <img src="https://fakeimg.pl/300x300/eee">
        <h2>title</h2>
        Dolore harum in dignissimos, quo expedita commodi rerum aliquid soluta.
    </div>
    <div class="item">
        <img src="https://fakeimg.pl/300x300/eee">
        <h2>title</h2>
        Expedita quisquam molestiae quae culpa id hic in consequuntur. Consequuntur.
    </div>
    <div class="item">
        <img src="https://fakeimg.pl/300x300/eee">
        <h2>title</h2>
        Fuga cumque excepturi exercitationem suscipit et eveniet libero repellat maiores.
    </div>
</div>
```

### 避免圖片過大破版：img 必做設定

呈現在網頁上的圖片，基本上會建議要呈現多大、圖片大小就設定成一樣，是最節省資源又不失品質的體驗。但有時我們無法決定圖片的大小是如何，如果圖片太大的話，就會造成網頁破版。

因此在此範例中，會先將圖片最大訂在 100%，這樣不管圖片大小如何在網頁上的呈現寬度都會是區塊的 100%。

### 外容器除了設定 width，還要設定 max-width

width 跟 max-width 的差別在於，width 是我設定目前這個區塊的寬度為多少，而 max-width 則是這個區塊的寬度最寬僅能到多少。

以這個範例來說，我預設設定了 1200 px，在比 1200px 大的螢幕裝置上，區塊都會呈現 1200px 的寬度。但如果是在平板或是手機螢幕寬度小於 1200px 的情況下，寬度就不會呈現到 1200px，而是最寬也只會等於使用裝置大小的可視寬度，如此就能確保區塊會在可視範圍內呈現。

### 瀏覽器會依照裝置大小呈現不同的 CSS 語法

這篇就不懶惰了（？來附上幾張截圖吧 XDDD 首先第一張就是最原始的大於 1200px 的 14吋筆電所顯示的畫面，可以看到我使用 `margin: auto;` 讓外容器水平居中於網頁時，左右都還是有一些空隙。

![可視範圍寬度大於 1200px，左右都還有空隙](https://img.guiblogs.com/css-media-rwd/1.jpg)

再來這個階段，可以看到都還有背景我撰寫這篇文章的編輯器，就代表瀏覽器視窗已經縮小。此時瀏覽器視窗寬度已經小於 1200px，如果照著外容器設定寬度為 1200px 並沒有其它的情況之下，是會出現 x 軸滾輪的。但是因為我有設定 `width: 100%;`，在外容器寬度大於裝置寬度時，最大寬度也只能呈現裝置寬度的 100%，因此不會出現 x 軸滾輪。

![可視範圍寬度小於 1200px 但也不會出現 x 軸](https://img.guiblogs.com/css-media-rwd/2.jpg)

此時可視範圍寬度已經小於 991px，此時大多介於平板裝置的螢幕大小。此時就會引入 `@media (max-width: 991px)` 的 CSS 語法設定。可以看到 Chrome 右下角的開發人員工具，原本的 `width: 24%;` 被符合條件的媒體查詢的 `width: 48%;` 覆蓋，因此現在一行僅會顯示兩個 .item 區塊。

![可視範圍寬度小於 991px](https://img.guiblogs.com/css-media-rwd/3.jpg)

再來就是可視範圍寬度小於 767px 的呈現啦，此時可以看到原先兩項 width 設定都被覆蓋掉了，取而代之的是 `@media (max-width: 767px)` 內的 width 設定。

![可視範圍寬度小於 767px](https://img.guiblogs.com/css-media-rwd/4.jpg)

> ## 手機優先：從行動裝置開始設計網頁排版

上述範例都是從電腦裝置的角度，由大螢幕慢慢設計至小螢幕。然而現在手機上網的比率其實是比較多的，如果我們都是從大螢幕開始進行設計，媒體查詢的特性是有符合條件式就會引入裡面的 CSS 內容渲染至網頁上，因此如果要到最小尺寸螢幕，以上述範例來講要先載入大螢幕樣式、平板樣式最後才會載入手機樣式，對於行動裝置使用者有較多資源消耗。

另外 Google 在 2016 年陸續開始宣布針對搜尋引擎，啟用行動優先索引，因此網頁如果從手機開始進行設計，會有利於 SEO 優化。BootStrap 就是使用行動裝置優先的方式設計。

Google 相關政策以及對於 SEO 的影響可參考『[9月流量恐失血！Google搜尋排名改採「行動優先索引」，SEO該怎麼因應？](https://www.bnext.com.tw/article/56878/google-mobile-first-indexing)』。	

### 利用 min-width 設計行動裝置優先的 RWD

由於行動裝置優先是從小裝置寫到大裝置，因此設置媒體查詢的斷點時，要從原本的 `max-width` 改成 `min-width`，先撰寫最小裝置的 CSS 樣式設定後，在透過 `min-width` 的方式慢慢將條件式的可視範圍往上加，就能撰寫行動裝置優先的 RWD 設計。

**CSS**

``` CSS
/* CSS Reset 省略 */
img {
    max-width: 100%;
    height: auto;
}
.wrap {
    max-width: 100%;
    margin: auto;
}
.item {
    width: 98%;
    border: 1px solid black;
}
@media (min-width: 768px) {
    .wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .item {
        width: 48%;
    }
}
@media (min-width: 992px) {
    .wrap {
        width: 1200px;
    }
    .item {
        width: 24%;
    }
}
```

這邊我們將原先從電腦螢幕開始設計的 CSS 改寫成行動裝置優先，有做以下修正：

* 設定在初始 .wrap 的寬度 1200px 改移到可視範圍寬度最低為 992px 以上時才設定在 .wrap
* 由於手機預設一行一個 .item，因此一開始可不用到 Flex 的語法，因此移到可視範圍寬度最低為 768px 時，一行需要呈現 2 個 .item 時使用
* 其餘設定在屬性內的 `max-width` 則不用變動，因為最寬可視範圍以及最寬圖片寬度一樣只能到 100% 才符合 RWD

> ## 後記

運用這些語法就能夠大概的開發一個響應式網頁了，但其實開發響應式網頁並沒有想像中那麼簡單，有非常多眉角需要注意與優化，要同時考量不同裝置的使用者體驗、確保每個裝置都要能夠正常呈現排版，其實是很不容易的事情（近期接案生活嘔心瀝血的經歷），持續學習與實作才能戰勝 RWD 啊！

> ## 參考資料

* [金魚都能懂網頁設計入門 : 媒體查詢 - 鐵人賽第二十天](https://www.youtube.com/watch?v=czkmXTkjCDM)
* [金魚都能懂網頁設計入門 : RWD入門 - 鐵人賽第二十一天](https://www.youtube.com/watch?v=0FayRAu1du0)
* [Day6 如何做出響應式網頁(RWD)？](https://ithelp.ithome.com.tw/articles/10203671)