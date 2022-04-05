---
title: 透過 row-cols，Bootstrap 格線 class 免重覆設定！
date: 2022-04-03 22:30:14
tags:
- [Bootstrap]
categories:
- [CSS]
- [Bootstrap]
index_img: http://img.guiblogs.com/index_img/bootstrap-row-cols.jpg
---

使用 Bootstrap 格線系統可以很方便的排出多欄式的版面，然而在每個子欄的 class 都要不斷地加上 `col-md-6`、`col-xl-3` 等似乎又覺得有些麻煩，但其實我們可以直接在父層設定後，使子層能夠依照父層的設定進行排版。

<!-- more -->

## `.col-*` 寫法

一開始新手在學習撰寫格線系統時，可能會主要以下面這樣形式撰寫：

``` HTML
<div class="container">
    <div class="row">
        <div class="col-md-6 col-xl-3">
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae saepe sed et laborum. Odit, impedit a aliquid cupiditate soluta fugiat reprehenderit ducimus excepturi cum dolores dolore quae quia enim!</p>
        </div>
        <div class="col-md-6 col-xl-3">
            <h3>title</h3>
            <p>Facere expedita asperiores adipisci quos! Fugit eum corporis qui doloremque quia pariatur deserunt eligendi numquam, iste, possimus cumque quam repellat molestias temporibus. Veritatis quas molestiae autem hic? A, nostrum possimus?</p>
        </div>
        <div class="col-md-6 col-xl-3">
            <h3>title</h3>
            <p>Odio voluptates veritatis facilis ea quo sapiente libero iusto necessitatibus, quibusdam suscipit corporis sunt nisi officiis natus aspernatur beatae eos eaque possimus dolor alias perferendis. Distinctio cum placeat impedit laboriosam.</p>
        </div>
        <div class="col-md-6 col-xl-3">
            <h3>title</h3>
            <p>Neque eligendi inventore a ullam. Sapiente quae culpa accusantium numquam, earum cupiditate alias dignissimos eos dolor minus sed repudiandae eaque amet quibusdam nulla vero repellat at? Et cumque veniam nulla?</p>
        </div>
    </div>
</div>
```

但假設後續我要針對版面排列方式進行修正，就必須很麻煩的一個一個改，就算有搜尋取代的功能，但有時候也不會只有一個地方使用到格線系統，還是會有些許不方便。

## `.row-cols-*` 寫法

先來段範例讓大家參考：

``` HTML
<div class="container">
    <div class="row row-cols-md-2 row-cols-xl-4">
        <div class="col">
            <h3>title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae saepe sed et laborum. Odit, impedit a aliquid cupiditate soluta fugiat reprehenderit ducimus excepturi cum dolores dolore quae quia enim!</p>
        </div>
        <div class="col">
            <h3>title</h3>
            <p>Facere expedita asperiores adipisci quos! Fugit eum corporis qui doloremque quia pariatur deserunt eligendi numquam, iste, possimus cumque quam repellat molestias temporibus. Veritatis quas molestiae autem hic? A, nostrum possimus?</p>
        </div>
        <div class="col">
            <h3>title</h3>
            <p>Odio voluptates veritatis facilis ea quo sapiente libero iusto necessitatibus, quibusdam suscipit corporis sunt nisi officiis natus aspernatur beatae eos eaque possimus dolor alias perferendis. Distinctio cum placeat impedit laboriosam.</p>
        </div>
        <div class="col">
            <h3>title</h3>
            <p>Neque eligendi inventore a ullam. Sapiente quae culpa accusantium numquam, earum cupiditate alias dignissimos eos dolor minus sed repudiandae eaque amet quibusdam nulla vero repellat at? Et cumque veniam nulla?</p>
        </div>
    </div>
</div>
```

### 子層改寫

先將子欄所有 `.col-*`、`.col-md-*` 或 `.col-xl-*` 等改寫成純 `.col`，讓父層來設定。

### 父層改寫

再來至父層 `.row`，`.row` 保留不變外，再加上 `.row-cols-*` 的設定。值得注意的是，`*` 所設定的數字即設定整個版面需要呈現幾欄，而非設定單欄需要占多少個位置。`Ex. .row-cols-3` 代表三欄式版面。

與 `.col-*` 設定一樣，可在與 `.row` 同層 div 設定 `.row-cols-md-*`、`.row-cols-xl-*` 響應式版面設定。

## 參考資料

* [網格系統 (Grid system) · Bootstrap 5 繁體中文文件 - 六角學院 v5.0](https://bootstrap5.hexschool.com/docs/5.0/layout/grid/)