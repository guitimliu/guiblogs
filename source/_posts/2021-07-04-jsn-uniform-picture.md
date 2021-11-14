---
title: Joomla! 表單元件 JSN UniForm 利用 HTML 語法加上圖片
date: 2021-07-04 22:30:11
tags:
- Joomla
- [JSN UniForm]
categories:
- [Joomla]
index_img: https://img.guiblogs.com/jsn-uniform-picture/jsn-uniform-picture.jpg
---

Joomla! 的表單元件 JSN UniForm 預設提供的表單功能，在 radioButton 內沒有提供圖片選項（不過是免費版的部分，且是 2020 年時改的，不知道之後有沒有改？）

不過後來發現，只要透過簡單的 HTML 語法就能夠達成這個效果了！

<!--more-->

## 教學開始

首先聲明一下，這一篇就是稍微紀錄一下，如果你看到的時候已經可以在設定中能夠新增圖片，那就以元件本身設定為主囉！

進入 radioButton 設定，點選 Values，然後照著以下圖片輸入著 img 的 HTML 語法，以 Enter 換行方式分隔選項（不用加 `<br>` 或是 `,`），中間馬賽克的 src 部分輸入圖片網址就完成了～

![JSN UniForm 加上圖片](https://img.guiblogs.com/jsn-uniform-picture/jsn-uniform-picture.jpg)