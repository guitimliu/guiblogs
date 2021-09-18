---
title: 網頁版型控制不能不知道的事！區塊與行內元素、盒模型與容器
date: 2021-07-10 17:21:15
tags:
- 網頁排版
- 區塊元素
- 行內元素
- 盒模型
- box-modelㄋ
- padding
- margin
- 行距
- 容器
- 滿版式設計
categories: CSS
---

繼上一篇 [網頁樣式跟想像中不一樣，你 CSS Reset 了嗎？](https://guiblogs.com/css-reset/) 說明了 CSS Reset 造成網頁排版不如預期的因素，其實還有許多因素都會影響網頁上的排版，今天就來了解這些因素，來掌握版型控制技巧！

<!--more-->

> ## 區塊元素與行內元素

* 區塊元素（`display: block;`）
  * 寬度會盡量佔滿整個版面，並依照父元素寬度自適應延伸佔滿
  * 會另起一行來進行呈現
  * Ex. div、h1、ul、li、p
* 行內元素（`display: inline;`）
  * 文字多寬元素就多寬
  * Ex. a、span

### 如何分辨是區塊元素還是行內元素

* 利用 Chrome 開發者工具選取該標籤，看是否盡量佔滿整個版面

  * 盡量佔滿了整個版面：區塊元素

    ![區塊元素會盡量佔滿整個版面](https://img.guiblogs.com/web-pattern/block.jpg)

  * 並沒有佔滿整個版面：行內元素

    ![行內元素並沒有盡可能佔滿整個版面](https://img.guiblogs.com/web-pattern/inline.jpg)

* 使用背景色並設定 width 且寬度設定有作用，儘管背景色沒有佔滿整個版面，但是仍然會另起一行

  ![區塊元素會另起一行](https://img.guiblogs.com/web-pattern/block-background.jpg)

* 使用背景色，若往右滿版即是區塊元素，剛好等於文字寬度則為行內元素，在這個狀況設定 width 也沒效

  ![利用背景顏色觀察是區塊元素還是行內元素](https://img.guiblogs.com/web-pattern/background.jpg)

> ## box-model 盒模型

### padding 與 margin 推擠

* padding 內距，指區塊距離裡面內容的距離
  * 會影響區塊的寬高
* margin 外距，指區塊距離前後區塊或是標籤的距離
  * 計算區塊寬高時不會包含 margin
  * 但是該區塊增加 margin 後會影響在畫面中的占比

![margin 不會被算在 size，但確實會影響在畫面中佔比](https://img.guiblogs.com/web-pattern/size.jpg)

### margin-bottom 推擠

這邊稍微說明一下 margin-bottom 推擠，以下面範例為例：

* 這個 .box，裡面我放置了 p 段落以及 a 標籤鏈結，我在 p 段落設定了一個 `margin-bottom: 8px;`，因此 p 段落與 Link 中間隔了 8px，整體 .box 高度為 80px。

  ![在 .box 內的 p 段落增加底部外距，高度因此增加 8px](https://img.guiblogs.com/web-pattern/p-mb1.jpg)

* 接下來我將原本放置在 p 斷落的 `margin-bottom: 8px;` 移到 a 標籤，卻發現：.box 整體高度只有 72px，少了那 8px！

  ![因為是在 .box 最後一個 a 標籤增加底部外距，所以高度不會因此增加 8px](https://img.guiblogs.com/web-pattern/a-mb1.jpg)

#### 原因為何？

當 .box 本身與該區塊最後的標籤若都有設定 margin-bottom，將會以這兩個值較大的值，來當作 .box 向下推擠的值。

也因此，.box 內最後一個標籤 p 段落，就自然也會被視為是 .box 本身區塊向下推擠多少的候選之一；因為 margin 本身不會算在區塊本身寬高數值裡，所以照上述範例，.box 整體高度就不會再加上那 8px 了！

關於詳細的 padding 與 margin 介紹，我之後會再發一篇文章來詳述（學 YouTuber 來挖坑了 XD）

### box-sizing: border-box;

預設來說，若元素增加 padding 以及 border，都會影響元素的寬高。以下方範例為例：

``` css
width: 50px;
height: 50px;
padding-top:10px;
border: 2px solid black;
```

* 寬度為：50px + 2px * 2 = 54px
  * width + 左右兩邊 border
* 高度為：50px + 10px + 2px * 2 = 64px
  * width + padding-top + 上下兩邊 border

但若增加了 `box-sizing: border-box;`，區塊的寬高將會等於 width 以及 height 設置值；至於 padding 以及 border 所占面積則會往內推擠，壓縮區塊內容區域。

**所以依照上述說明，範例寬高都將會是 50px。**

>  ## 行距 line-height

行距是指一行文字上下距離，舉例 Word 行高來講，就有分固定行高、1.5 倍行高等等，而網頁就是透過 `line-height` 來控制行距。

**以下提供幾個範例：（文字大小皆為16px）**

* 1 行文字、行距 16px：高度為 16px
* 1 行文字、行距 24px：高度為 24px
* 2 行文字、行距 24px：高度為 48px
* 2 行文字、行距 0 px：高度為 0px（你沒看錯！因為文字會通通擠在一起 XD）

從以上範例就可以知道，影響一行高度的並不是字體大小，而是行距。

>  ## 暗藏玄機的圖片底部 - 多出的 2px ~ 3px

網頁排版時會發現 `<img>` 圖片底部會多出 2px ~ 3px 的空隙，如果要解決此問題，可以透過以下 CSS 語法的兩段語法二選一使用，兩種語法都可以解決這個問題。

``` css
/* 以下兩種方法選一種即可 */
img {
  display: block; /* 方法一 */
  vertical-align: middle; /* 方法二 */
}
```

> ## 高度 height 該設定？不設定？

一般來講，我們不會去特別針對區塊高度去做設定，因為內容的文字行數不一定，若今天高度僅設置 50px，但卻有 10 行行距 16px 的文字，塞不下的文字就會超出區塊範圍，很容易造成跑版。

所以一般來講，區塊的高度會用以下方式推擠並產生影響，而不會設定高度：

* padding 內距
* border 框線
* line-height 行距

### 什麼時候可以設定高度？

* 針對圖片時可以設定其高度。

> ## 容器與滿版式設計

* 網站上每一個區塊，都是由一個容器所包圍
* `.container`、`.wrapper` 皆可是容器縮寫

### 滿版式設計

以 [蝦皮購物](https://shopee.tw/) 為例，若想達到像他們整體區塊置中、header 有滿版背景色但也同時保有區塊置中的效果，可參考以下寫法：（不代表蝦皮購物也是這麼寫的）

#### HTML

``` html
<div class="header">
    <div class="container">
        內容
    </div>
</div>

<div class="container">
    內容
</div>
```

#### CSS

``` css
.header {
    background-color: orange;
    color: white;
}

.container {
    width: 1200px;
    margin: 0 auto;
}
```

### 解釋與注意事項

* header 區域是透過 header 的滿版與及其設定的背景色，內放置 container 達成內容區塊置中效果
* 若是 container 區塊包在 header 外或是放在同一 div，header 設定將會受制於 container 大小
  * Ex. header 最大僅 1200px，無法達成滿版效果
* 若要設計滿版效果，不要設計成 `width:1920px;`，若設計稿上這樣寫，是在示意滿版
  * 如果螢幕寬度大於 1920px，就不會是滿版囉 XD

> ## 結語

網頁排版是項博大精深的學問，且參雜許多的規則與感到莫名其妙的狀況（？而且同一個版型，每一次切版卻也都有不同的狀況。

篇幅關係所以大概敘述一下，有機會在好好詳細研究一下！