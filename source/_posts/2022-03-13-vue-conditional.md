---
title: Vue 條件渲染 v-if 如何使用？與 v-show 有什麼差別？
date: 2022-03-13 21:40:12
tags:
- [Vue]
categories:
- [Vue]
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/vue-conditional.jpg
---

假設網頁中有一個情境是不同的條件顯示不同的區塊，像是非登入狀態顯示登入與註冊連結、登入狀態顯示登出連結，類似這種情境怎麼做到？以 Vue 來說，此時就能使用條件渲染 v-if、v-show 等指令。

<!-- more -->

## v-if 與 v-else

以上述的情境，我們先來段範例：

### HTML

``` HTML
<div id="app">
    <ul class="menu" v-if="is_login">
        <li><a href="#">登出</a></li>
    </ul>
    <ul class="menu" v-else>
        <li><a href="#">登入</a></li>
        <li><a href="#">註冊</a></li>
    </ul>
</div>
```

### JavaScript

``` JavaScript
const app = {
    data() {
        return {
            is_login: true;
        }
    }
}
```

### 範例解說

以這段範例來說，有兩個 ul 選單，我們希望在一個狀態之下只顯示一個 ul 選單，以 Vue 來說我們只要針對這兩個 ul 區塊設定 v-if、v-else 條件渲染語法。

基本上就跟程式語言的 if...else... 用法一樣，在 v-if 設定條件式，因此我們將 data 中 is_login 帶入，假設為 true 代表為登入狀態，即顯示登出那個 ul 區塊，反之為 false 就顯示 v-else 區塊。

## v-else-if

跟一般程式語言一樣，如果需要多條件判斷，可使用 v-else-if 這段指令。假設呈現不同會員等級就很適合使用。

### HTML

``` HTML
<div id="app">
    <div v-if="member_level == '管理員'">
        <p>您擁有最高管理權限</p>
    </div>
    <div v-else-if="member_level == '編輯'">
        <p>您擁有新增文章權限</p>
    </div>
    <div v-else-if="member_level == '會員'">
        <p>您擁有回復文章權限</p>
    </div>
    <div v-else>
        <p>您擁有觀看文章權限</p>
    </div>
</div>
```

### JavaScript

``` JavaScript
const app = {
    data() {
        return {
            member_level: '編輯'
        }
    }
}
```

## 範例解說

這個範例總共分成管理員、編輯、一般會員以及沒有註冊的訪客，我們將條件式直接填入 v-if 與 v-else-if，當達成指定條件後，顯示該區塊。

## v-if 與 v-show 的差別是什麼

### v-if

基本上 v-if 與 v-else 狀態切換的改變，會是直接開啟、關閉其生命週期，所以如過透過像是按鈕切換等功能切換 v-if 與 v-else 區塊，原本顯示的區塊會在原始碼消失，顯示新區塊。

### v-show

使用這個指令基本上跟 v-if 差不多（不過剛剛稍微測試，v-else-show 似乎不能運作？大家可以動手測試看看 XD），不過切換狀態時，原本顯示的區塊如果被替換，會透過 CSS `display: none;` 來隱藏區塊，而不會動到生命週期。