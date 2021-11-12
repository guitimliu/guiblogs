---
title: 透過開發人員工具，使用 JavaScript 語法調整影片速率！（YouTube 適用）
date: 2021-11-07 23:41:47
tags:
- [JavaScript]
categories:
- [JavaScript]
index_img: https://i.imgur.com/VPthTJB.png
---

自己還滿習慣觀看各類型影片時會調高速率，想說比較省時間，再來就完全回不去了 XD 而人性的貪婪總是無法被滿足（？）漸漸地就會想要有更高的速率，但是以 YouTube 來說預設最多到 2 倍速，如果還想往上調高，該怎麼做呢？

<!-- more -->

有些影片如果要有那個氣氛、或是講話語速本來就很快，其實用原本的速率也行。不過畢竟胃口被養大了，當然還是會想要有個比較習慣的速率 XD 一開始我是使用 Chrome 的一個外掛，我也忘記叫甚麼名字。但後來在網路上看到使用開發人員工具，並利用 JavaScript 修改速率，還滿有趣的。所以就想說純紀錄一下！

## 開啟開發人員工具

* Chrome 右上三點水按鈕 ---> 更多工具 ---> 開發人員工具
* 右鍵 ---> 檢查
* Ctrl + Shift + I

開啟之後，選擇 Console，我們要在這裡加上 JavaScript 語法。

![Console](https://i.imgur.com/VPthTJB.png)

## 利用 JavaScript 語法設定倍速

在 Console 貼上以下這段語法：

``` JavaScript
document.querySelector('video').playbackRate = 倍速速率;
```

把倍速速率改成你要的速率，以下截圖為例，就是設定影片為 2.5 倍速。

![利用 JavaScript 語法設定倍速](https://i.imgur.com/GjCkQCY.png)

點擊 Enter 後，基本上就能感受到影片速率不同了。

除了 YouTube 以外，也可以試試看其他平台或許也套用這樣設定。

## 參考資料

* [105.08.26 YouTube超過2倍速播放](https://aben20807.blogspot.com/2016/08/1050826-youtube2.html)
    * 這是使用較為傳統語法，也可以用，剛開始我是使用該文章提供的語法～
* [教你用10倍速度看youtube影片](https://aishuafei.com/youtube-play-speed/)
    * 這是使用較新的 querySelector 語法，也是今天這篇文章所使用之語法。

P.S. 我所提供之文章頁面是使我學習到這些應用的文章，不代表為最原始出處哦～如果搜尋這段語法，也會發現有許多相關文章。此篇僅是紀錄用！