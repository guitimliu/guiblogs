---
title: Vue 搭配 template 標籤使渲染資料不額外產生標籤
date: 2022-01-16 21:59:07
tags:
- [Vue]
categories:
- [Vue]
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/vue-template.jpg
---

使用 Vue 開發程式時，`v-for` 是一個經常使用的指令，用於一組陣列渲染。不過今天如果只是要進行迴圈渲染，不想額外產生新標籤，又該怎麼進行撰寫？

<!-- more -->

## 遇到的問題

前幾天利用 Bootstrap Carousel 元件，想使用 Vue 將資料渲染使用。但發現一個問題：

``` HTML
<div class="carousel-inner">
    <div v-for="(url,num) in temp.imagesUrl">
        <div v-if="num == 0" class="carousel-item active">
            <img class="w-100" :src="url" :alt=`照片${num+1}`>
        </div>
        <div v-else class="carousel-item">
            <img class="w-100" :src="url" :alt=`照片${num+1}`>
        </div>
    </div>
    <!-- 其它 Buutton -->
</div>
```

這個範例我為了要跑 v-for 指令，所以特別再加上一層 `<div>` 標籤；但這樣會使渲染後的 HTML 語法如下： 

``` HTML
<div class="carousel-inner">
    <div>
        <div class="carousel-item active">
            <img class="w-100" src="照片網址1" alt="照片1">
        </div>
    </div>
    <div>
        <div class="carousel-item">
            <img class="w-100" src="照片網址2" alt="照片2">
        </div>
    </div>
    <!-- 其它 Buutton -->
</div>
```

從外觀上來看，或許只是多了一層 `<div>` 標籤，但是在 Carousel 的機制下，是無法正常運作的！這會使 Carousel 無法順利轉到下一張圖片，點擊上下張或是指定按鈕也無效。

## 解決方法：使用 `<template>` 標籤

使用 `<template>` 標籤搭配進行渲染，能夠使 DOM 結構產生時不會新增額外不必要標籤。

``` HTML
<div class="carousel-inner">
    <template v-for="(url,num) in temp.imagesUrl">
        <div v-if="num == 0" class="carousel-item active">
            <img class="w-100" :src="url" :alt=`照片${num+1}`>
        </div>
        <div v-else class="carousel-item">
            <img class="w-100" :src="url" :alt=`照片${num+1}`>
        </div>
    </template>
    <!-- 其它 Buutton -->
</div>
```

將用於放置 v-for 的標籤改成 `<template>`，最後產生語法如下：

``` HTML
<div class="carousel-inner">
    <div class="carousel-item active">
        <img class="w-100" src="照片網址1" alt="照片1">
    </div>
    <div class="carousel-item">
        <img class="w-100" src="照片網址2" alt="照片2">
    </div>
    <!-- 其它 Buutton -->
</div>
```

於是回到 Demo，Bootstrap Carousel 元件就能正常運作了。

## 參考資料

* [Vue 常用指令及方法：v-for](https://hackmd.io/@hexschool/S1DJeKTdL/%2FKWXW13ewTaq2M_svlEAYXA)