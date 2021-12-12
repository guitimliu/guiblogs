---
title: 如何利用 PHP 的 str_split 函式將字串字元一個個分割成字串
date: 2021-12-12 22:55:48
tags:
- [PHP]
categories:
- [PHP]
- [str_split]
index_img: http://img.guiblogs.com/index_img/php-str-split.jpg
---

最近去面試寫測驗時，我的撰寫邏輯需要使用到字串分割，但 PHP 的字串分割我真的超級不熟，每次使用每次忘記，所以就打算直接記錄在這裡。

<!-- more -->

## str_split 用法

``` php
str_split(變數, 分割長度);
```

* 變數：須被分割成字串之變數
* 分割長度：預設值為 1，想兩兩配一起就寫 2

## 來段範例吧

``` php
<?php

$string = 'abc def';
// 將字串一個個分成陣列
$arr1 = str_split($string);
// 一個陣列職最多兩個字元
$arr2 = str_split($string, 2);

// Output 1
print_r($arr1);
// Output 2
print_r($arr2);

?>
```

## 輸出結果

``` php
Array
(
    [0] => a
    [1] => b
    [2] => c
    [3] =>  
    [4] => d
    [5] => e
    [6] => f
)
Array
(
    [0] => ab
    [1] => c 
    [2] => de
    [3] => f
)
```

可以看到輸出結果一的部分，將一段字串內的每個字元都被分配到各一個陣列值去；第二個輸出結果則是一個陣列值最多兩個字元。（注意第二個輸出結果的第 1 筆資料，`c ` 旁邊是有空格的！）

## 後記

意外發現新用法（是的我以前沒用過，也有可能是我忘記），不然以往我如果要一個一個分割我會這麼做：

``` php
preg_split('//', $mystring, -1, PREG_SPLIT_NO_EMPTY)
```

是從 [PHP 字串分割並存入陣列 - Wibibi 網頁設計教學百科](https://www.wibibi.com/info.php?tid=PHP_%E5%AD%97%E4%B8%B2%E5%88%86%E5%89%B2%E4%B8%A6%E5%AD%98%E5%85%A5%E9%99%A3%E5%88%97) 找到的用法，又是正規表達式又是標記，很容易忘記啊 XDD

## 參考資料

* [PHP 字串分割 explode 與 str_split 函式](https://www.itread01.com/content/1548367021.html)