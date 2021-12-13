---
title: 淺談 PHP include 與 require 以及加上 _once 的差異
date: 2021-12-13 20:35:40
tags:
- [PHP]
- [include]
- [require]
categories:
- [PHP]
index_img: http://img.guiblogs.com/index_img/php-include-require.jpg
---

在 PHP 引入其它檔案，就會使用到 include、require 或是 include_once 以及 require_once。究竟這四個有什麼樣的差別，今天就來筆記一下這個部分。

<!-- more -->

## include

使用 include 載入檔案時，如果發生找不到檔案的情況，會觸發 Warning 錯誤，基本上 Warning 類型的警告不會使程式碼中斷不往下執行，這部分可參考 [Octave 錯誤與警告（Errors and Warnings）](https://blog.gtwang.org/octave/octave-errors-and-warnings/2/) 這篇文章，找時間我也來筆記一下這部分知識點 XD

不過我自己測試的時候，如果是像某一支檔案有一行沒加 `;` 分號而導致的錯誤，就會出現 Error 的錯誤而不會往下繼續執行程式。

## require

require 與 include 不同地方在於，PHP 會在 require 引入後重新編譯，而將被引入檔的內容也會引入至要求引入的檔案。

另外不一樣的一點是，如果載入不到檔案，require 會直接報 Error，所以就不會往下繼續執行。

## include_once 與 require_once

如果在後面加上 `_once` 字符，則會在引入前先檢查是否有在其它地方載入了同樣的檔案，如果有就不會再次載入。

例如說有一些自訂函式，怕重複載入而出現錯誤，就很適合使用這個方法載入。

## 該使用 include 還是 require

查了些網路上的資料，表示動態內容適合使用 include、靜態內容則適合使用 require，不過都沒有提到為什麼，可能是我沒有看到解釋或是才疏學淺 XD

可能是因為相對來講 include 在錯誤表達方面似乎不像 require 那麼嚴謹（？）不過這只是我的猜測，不保證是對的，如果有大神路過，可能要麻煩大神指教 XD

## 參考資料

* [[PHP]include 與 require 的差別](http://syunguo.blogspot.com/2013/04/phpinclude-require.html)
* [深入理解require與require_once與include以及include_once的區別 | 程式前沿](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/239900/)
* [[程式][PHP] require 與 include 的差別。(包含include_once 與 require_one)。 @ 四處流浪的阿基。I am Vagrant Walker :: 痞客邦 ::](https://expect7.pixnet.net/blog/post/36116459)