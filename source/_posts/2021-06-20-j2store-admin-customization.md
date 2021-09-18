---
title: Joomla! 嘗試客製化修改元件控制台界面
date: 2021-06-20 20:09:54
tags:
- PHP
- Joomla
- MVC
categories:
- [PHP]
- [Joomla]
---

過去在實驗室時接到一個網站業主的請求。

網站是用 Joomla! 架設、利用 j2Store 搭建起購物車；其中，j2Store 後台界面訂單資訊裡，有個「顧客註記」與「運送追蹤 ID」兩個 input 欄位，如圖所示；業主認為這兩個欄位放在原本這個位置，較不顯眼，希望放置在訂單紀錄下面空白區域。

![修改前](https://img.guiblogs.com/j2store-admin-customization/old.jpg)

<!-- more -->

> ## 但...要從何下手呢？

我的專題是要製作 Joomla! 元件，但非常慚愧的是，當初剩兩個半月之際，~~我閱讀官方文件的進度只有 8 篇~~。

但是卻也正好是有理解前 8 篇內容，所以體認到：如果要修改元件界面，是否跟開發元件時，將文字內容透過 Joomla! MVC 的 view 顯示出 Hello World! 原理是一樣的呢？

於是...開始動工！

> ## 分析網址：找出我們要更改的檔案在哪個目錄？

先來張我那時在實驗室進度報告，PPT 上顯示的解題過程吧～

![解題過程](https://img.guiblogs.com/j2store-admin-customization/process.jpg)

對了，這篇文章的截圖都是我之前進度報告的 PPT 內容以及 Demo 照片，畫質部分請多多包涵（？

我們先來拆解一下網址：
> /administrator/?option=com_j2store&view=order&id=385

* option:com_j2store：元件目錄是 com_j2store，代表是 j2store 元件
* view=order：從 Joomla! MVC 判斷，此界面位於 view 裡的 order 目錄

> ## 複製文字：找出我們要客製的地方在哪個檔案？

再來，因為我們要更改的是「顧客註記」與「運送追蹤 ID」的顯示位置，所以我們要先找到這兩個欄位是放在哪個檔案。

但是 Joomla! 是一個多國語言的 CMS 軟體，所以程式檔案內通常不會有中文字，而是會有一組英文字串作為代稱，語言包會針對這些英文字串，對照後並進行翻譯。

因此，我們必須先找出「顧客註記」或是「運送追蹤 ID」其中一組英文字串出來。

進入語言包檔案，找到與中文相對應的英文字串後，將字串複製起來。

> 順帶一提，我之前是用 fileseek 去尋找字串在哪個檔案，不過近期都直接用 VScode 的搜尋功能了！
> 再來源代碼就是上面所提英文字串，那時不知如何稱呼就隨便取一個名字XD 雖然現在也不知如何稱呼（？

![尋找相對應英文字串](https://img.guiblogs.com/j2store-admin-customization/fine-the-code.jpg)

> ## 利用英文字串，找出「顧客註記」、「運送追蹤 ID」所在檔案

![找出程式所在檔案](https://img.guiblogs.com/j2store-admin-customization/fine-files.jpg)

找到了程式所在地！再來就是慢慢 try，看你想放在哪裡 XD 不過因為 j2store 訂單介面是由好幾個檔案組成而成的，所以就要每個檔案試試看；如果要放在訂單紀錄下面，就要放在同目錄 form_general.php 檔案 line 73 處。

![移動程式](https://img.guiblogs.com/j2store-admin-customization/mobile-program.jpg)

（那個時候不會用 git，所以都用註解來記錄我改了那些 XD 各位會 git 的好孩子別學啊！）

回到控制台看成果，移動完成！

![修改後成果](https://img.guiblogs.com/j2store-admin-customization/after.jpg)

## 後記

任何學習都是為了之後的累積，那時候完全是為了開發元件去看 Joomla! 官方元件開發教學，練習寫 Joomla! MVC，然後接到這個任務時，就不知不覺聯想到開發元件學習到的觀念～

其實在那個時候我對 Joomla! MVC 還是並非很熟的（~~雖然現在也沒有比較熟~~），但是也體認到，學習程式語言這件事情真的是要親自實作過、去做一個作品，反而能夠慢慢累積對程式的熟悉度！就像架設這個 Hexo 讓我開始對 git 不在懼怕了（？