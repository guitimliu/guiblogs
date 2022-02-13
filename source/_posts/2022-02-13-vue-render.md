---
title: 讓 Vue 渲染資料在畫面上的幾個指令
date: 2022-02-13 23:25:49
tags:
- [Vue]
categories:
- [Vue]
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/vue-render.jpg
---

使用 JS 原生要將資料渲染，還要取得 DOM 元素後在進行操作，但是在 Vue 內則可以讓我們省略撰寫渲染的部分，由 Vue 本身來進行渲染，今天要介紹以下四種指令可以幫助我們達到渲染效果。

## 指令

就我目前了解，渲染資料可用下面四種指令：

* `{{ 資料名稱 }}`
* v-text 綁定在標籤上，Ex. `v-text="資料名稱"`
  * `{{ }}` = `v-text`
* v-once 綁定在父層，內層放置資料名稱 Ex. `<div v-once>{{ 資料名稱 }}</div>`
  * 資料名稱放置於子層，而不是 v-once="資料名稱"
  * 僅會輸出一次資料在畫面上，往後更新都不會更動
* v-html 可以編譯 HTML 與法至標籤畫面上 Ex. `v-html="資料名稱"`
  * 不輕易讓用戶撰寫 HTML 語法，否則會用 XSS 攻擊風險；只可在可信內容上使用，不能用於提交內容上
  * 詳細說明可參考：https://cn.vuejs.org/v2/api/#v-html

## 程式範例

### HTML

``` HTML
<div id="app">
    <input class="form-control" v-model="text">
    {{ text }}
    <div v-text="text"></div>
    <div v-once>{{ text }}</div>
    <div v-html="text"></div>
</div>
```

### JavaScript

``` javascript
const app = {
    data () {
        return {
            text: 0,
        }
    }
}

Vue.createApp(app).mount('#app');
```

### 結果

當 `<input class="form-control" v-model="text">` 輸入 `2<br>3`

* {{ text }} 顯示：`2<br>3`

* v-text 顯示：`2<br>3`

* v-once 顯示：0

* v-html 顯示：2