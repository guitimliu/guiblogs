---
title: 如何更換 cPanel 虛擬主機的 PHP 版本？
date: 2021-05-16 21:52:20
tags:
- PHP
- cPanel
- 虛擬主機
- 版本
categories:
- [PHP]
- [cPanel]
index_img: https://img.guiblogs.com/cpanel-change-php-version/change-pnp-version.jpg
---

時代以及網路在進步，PHP 也不例外，1995 年 PHP 1.0 誕生之後，至今也已經邁向了 PHP 8 時代了！而版本的跌進，當然也就有從早至今的版本可以提供選擇。

而 cPanel 就有一個功能，是提供用戶能夠切換 PHP 版本，當然我不知道是否是只要有 cPanel 就一定有這個功能，可能要視主機商提供的權限而定？不過至少我目前操作的 cPanel 是擁有可以切換 PHP 版本的。

<!-- more -->

## 升級前請三思而後行！

首先，不管是 PHP 版本的升級、還是其他的更新，在做這些變動前備份是一定要做的。

再來，必須要確認你上面的程式，是否在 PHP 升級過後會出現一些問題？之前實驗室的 Joomla，就曾經在 PHP 升級的情況之下，造成了錯誤；所以升級前務必要先想清楚。

## 確定好要升級後，PHP 升級教學！

1. 一開始當然就是進入你的 cPanel 控制台，並進行登入。

![登入 cPanel](https://img.guiblogs.com/cpanel-change-php-version/cpanel-change-php-version-login.jpg)

### 你的 cPanel 資訊？
> * cPanel 網址：https://網址:2083 or https://cpanel.網址/ 皆可
> P.s. 以我所就讀的學校校內右邊網址通常連不進去，在校內建議用左邊的網址進入。
> * cPanel 帳號、密碼：主機商給的 cPanel 帳號密碼。

2. 若是繁體中文語言，找到「軟體」欄內的「多 PHP 管理器」鏈結點擊進去。

![點擊「多 PHP 管理器」](https://img.guiblogs.com/cpanel-change-php-version/php-manage.jpg)

3. 進入後，你會看到系統預設的 PHP 版本。不過若要修改自己本身的 PHP 版本，請勾選自己網址旁的選取方塊，再來到網頁右邊的「PHP 版本」選擇要更換的版本，按下套用後即可完成更換！

![選擇 PHP 版本](https://img.guiblogs.com/cpanel-change-php-version/change-pnp-version.jpg)