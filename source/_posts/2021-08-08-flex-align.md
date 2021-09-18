---
title: Flex 強大排版術：align-items、align-content 傻傻分不清楚？align-self 又是什麼？
date: 2021-08-08 23:10:18
tags:
- [CSS]
- [Flex]
categories:
- [CSS]
---



前面發了兩篇的 Flex 排版技術文章、也提到了許多主軸的排版方式，今天就要來介紹交錯軸 `align-items`。不過我在學習 Flex 時，發現到除了 `align-items` 之外，竟然還有 `align-content`、`align-self` 這些屬性，對於我這個小小新手來說整個傻傻分不清楚啊！所以，今天就來一起整理一下思緒吧！

<!--more-->

> ## 我們先來釐清一下這三者的差別

在進入探討之前，先來簡單敘述一下這三者代表的是什麼，有些基本概念，再來了解或許會比較好理解：

* align-items：當交錯軸只有一行時的對齊方式
* align-content：交錯軸為多行時的的整體對齊方式
* align-self：交錯軸個別項目的對齊方式

> ## 交錯軸整體對齊：align-content

其實此篇文章我本來是從 align-items 開始撰寫，不過愈是撰寫就感覺愈來愈卡，後來決定先撰寫 align-content 再來介紹 align-items，感覺會比較順暢 XD

### Demo 語法

``` HTML
<div class="wrap">
    <div class="item item-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nulla!
    </div>
    <div class="item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dicta dolorum vel accusantium ea illum corrupti debitis esse ducimus possimus.
    </div>
    <div class="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo esse placeat id. Consectetur, libero rerum! Eveniet placeat laudantium atque voluptatibus soluta doloremque tempora praesentium officia. Autem ad repellat eum?
    </div>
    <div class="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo esse placeat id. Consectetur, libero rerum! Eveniet placeat laudantium atque voluptatibus soluta doloremque tempora praesentium officia. Autem ad repellat eum?
    </div>
    <div class="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo esse placeat id. Consectetur, libero rerum! Eveniet placeat laudantium atque voluptatibus soluta doloremque tempora praesentium officia. Autem ad repellat eum?
    </div>
    <div class="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo esse placeat id. Consectetur, libero rerum! Eveniet placeat laudantium atque voluptatibus soluta doloremque tempora praesentium officia. Autem ad repellat eum?
    </div>
</div>
```

**CSS**

``` CSS
/* CSS Reset 語法省略 */
.wrap {
    width: 960px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch（預設值） | flex-start | center | flex-end | space-between | space-around | space-evenly
}
.item {
    background-color: pink;
    width: 30%;
    margin-bottom: 10px;
}
.item-1 {
    padding-top: 20px;
}
```

### align-content: stretch（預設值）

首先，若一開始我們沒有設定 align-content 值，那它就會使用 align-content 的預設值 stretch，這個設定值不但會讓子層的項目等高，而且所有行的高度會剛好切齊父層高度（100vh 使容器高度等於裝置螢幕可視高度），所以我們看第一行的 item 雖然字數不同，但也仍然等高。

![align-content-stretch](https://img.guiblogs.com/flex-align/align-content-stretch.jpg)

### align-content: flex-start | center | flex-end | space-between | space-around | space-evenly

那如果設定 align-content 為其它屬性呢？雖然 item 依然等高，不過是等於字數推擠出最高的項目高度。接著就會依照每個設定值，呈現不同的對齊方式。這五項設定值我想如果有看過上一篇「[Flex 強大排版術：主軸對齊怎麼做？為何都擠在同一排？相應屬性一次解說！](https://guiblogs.com/css-flex-2/)」就很清楚了，就跟主軸對齊 justify-content 的設定值一樣。（還沒看過的可以先回顧）

![align-content](https://img.guiblogs.com/flex-align/align-content.jpg)

> ## 交錯軸單行對齊：align-items

首先要在 .wrap 增加 align-items 屬性：

``` CSS
align-items: stretch（預設） | flex-start | center | flex-end | baseline
```

上述 align-content 所呈現出的效果，都是預設值 stretch 的效果，所以我們可以看到所有項目都是等高的。那如果設定其它項目呢？

![align-items](https://img.guiblogs.com/flex-align/align-items.jpg)

如果 align-items 設定為 flex-start、center、flex-end 這幾個值，會分別對齊於交錯軸該行的起點、居中以及終點，這部分我想看到現在的各位已經能夠理解。至於 baseline，我們可以看見第一個 item-1 有設定了 padding-top 推擠 20px，因此 item-1 的文字呈現是從頂部向下 20px 開始，而 baseline 的效果就是對齊子層物件內容物的基線，也就是文字。

> ## 指定物件對齊：align-self

這是一個不聽話的屬性（？），之所以不聽話是因為就算父層已經設定了 align-items 指定物件在該行的對齊方式，但我們可以使用 align-self 這個屬性指定其中一個物件的對齊方式。這個屬性有別於其它是設定在父層，這個屬性是要設定在指定要有特殊對齊方式的物件。我們以 .item-1 為範例：

``` CSS
.item-1 {
    padding-top: 20px;
    align-self: flex-start | center | flex-end | stretch;
}
```

可以看到僅有 .item-1 物件分別依照設定值，呈現出起點對齊、居中對齊、終點對齊以及 stretch 的等高效果（會等同於該行最高物件）。

![align-self](https://img.guiblogs.com/flex-align/align-self.jpg)

> ## 後記

為了打這一篇坦白講真了受益良多，之前都搞不太清楚 align-items 與 align-content 的差異，為了打這篇文章我找了網路上許多資訊（有一些是因為不知道該如何解釋，或是怕解釋錯誤而找 QQ），我會放在參考資料，看完這篇也可以透過以下鏈結來看這些資訊，相信會有更多收穫！

> ## 參考資料

* [玩轉 CSS FLEX | CSS教學 | 網頁教學 | 網頁設計](https://www.youtube.com/watch?v=_nCBQ6AIzDU)
* [CSS3 Flex 完整教學](https://www.youtube.com/watch?v=lmBM7_OTDBQ)
* [圖解：CSS Flex 屬性一點也不難](https://wcc723.github.io/css/2017/07/21/css-flex/)
* [align-items 屬性介紹](https://w3c.hexschool.com/flexbox/87d66dc4)
* [align-self 屬性介紹](https://w3c.hexschool.com/flexbox/c3847835)