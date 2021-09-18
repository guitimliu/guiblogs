---
title: "使用 is_iterable()  解決：Warning: count(): Parameter must be an array or an object that implements Countable"
date: 2021-02-21 18:22:47
tags: 
- PHP
- Joomla
- is_iterable()
- count()
categories:
- [PHP]
- [Joomla]
---

去年與學弟幫忙實驗室架設一個新的 Joomla 時，那時是使用 gk_shop_and_buy 這個佈景，但在新增一篇文章時，我們發現到了它會出現這個錯誤訊息：

![錯誤訊息](https://img.guiblogs.com/joomla-is-iterable/joomla-is-iterable-before.jpg)

<!-- more -->

> ## 問題點

看到了這段訊息後的第一反應，想必就是到它所指定的擋案來看看了。

* 擋案：templates/gk_shop_and_buy/html/com_content/article/default.php
* 位置：line 13 - line 19

```
if($attribs && count($attribs)) {
    foreach($attribs as $key => $value) {
        if($value != null) {
           $params->set($key, $value);
        }
    }
}
```

> ## 解決方法

因此開始使用 Google 查找資料，查到了[這篇文章](https://stackoverflow.com/questions/61745533/php-7-4-warning-count-parameter-must-be-an-array)後，注意到了這個從 PHP 7.1 開始出現的 is_iterable() 函數。

後來就將 line 13 的這一段程式碼：

```
if($attribs && count($attribs)) {
```

中的 count 改為 is_iterable：

```
if($attribs && is_iterable($attribs)) {
```

改完之後，錯誤訊息就消失了！

![改善完成](https://img.guiblogs.com/joomla-is-iterable/joomla-is-iterable-after.jpg)

> ## 結論與心得

閱讀這篇文章的同時也在尋找之所以會有這段錯誤，是因為 count() 它只有針對於 array 作為參數，但如果 print_r 出 $attribs 時，就可以發現這個變數是儲存 stdClass Object，也就因此無法使用 count() 這個函數去做計算了。

而這篇文章的另外一個方法是使用 is_countable() 解決，實際使用過後也是能解決，但因為目前對它的了解程度還不如 is_iterable()，因此等哪天有空去了解這個函數的用法後，或許會在修改本篇文章或是發表新文章！

> ## 參考資料

* PHP 7.4 - Warning: count(): Parameter must be an array
https://stackoverflow.com/questions/61745533/php-7-4-warning-count-parameter-must-be-an-array