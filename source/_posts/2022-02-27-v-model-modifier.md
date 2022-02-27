---
title: Vue 的幾個 V-model 修飾符：lazy、number、trim
date: 2022-02-27 21:51:47
tags:
- [Vue]
categories:
- [Vue]
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/v-model-modifier.jpg
---

v-model 可透過一些修飾符，來去對 input 進行限制與效果。

## lazy：轉為 change 事件後同步

編輯資料時不會一起更動值，等到輸入完畢離開 input 後才會變動

``` html
<!-- HTML -->
<div id="app">
    <input type="text" v-model.lazy="message">
    {{ message }}
</div>
```

## number：改變 input 資料型別 typeof

``` html
<!-- HTML -->
<div id="app">
    <input type="text" v-model="message">
    <input type="text" v-model.number="message">
    <input type="number" v-model="message">
    <input type="number" v-model.number="message">
    {{ message }}
    {{ typeof message }}
</div>

<script>
	// 假設值為 123456：
    /*
    	欄位一：string
    	欄位二：number
    	欄位三：string
    	欄位四：number
    */
</script>
```

* `{{ typeof 資料名稱 }}` 可取得該筆資料的資料型別
* 加上修飾符 .number 才能改變其資料型態為 number，否則儘管輸入數字也會是 string

## trim：去掉頭尾空格

``` html
<!-- HTML -->
<div id="app">
    <input type="text" v-model="message">
    <input type="text" v-model.trim="message">
    首{{ message }}尾
</div>

<script>
	// 假設值為 " 哈囉 "：
    /*
    	欄位一：首 哈囉 尾
    	欄位二：首哈囉尾
    */
</script>
```

* trim 能夠自動去除用戶在 input 框內首尾輸入的空格

## 參考資料

* [v-model - Vue 常用指令及方法](https://hackmd.io/@hexschool/S1DJeKTdL/%2FCHGTC0zPT4efLjbmoR9hqw)
* [vue修飾符——.lazy - IT閱讀](https://www.itread01.com/content/1541221390.html)
    * 參考了一下如何介紹 lazy