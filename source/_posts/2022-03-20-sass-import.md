---
title: 使用 @import 讓你 Sass 切分檔案、維護管理更方便！
date: 2022-03-20 21:01:27
tags:
- [CSS]
- [Sass]
- [SCSS]
categories:
- [CSS]
index_img: http://img.guiblogs.com/index_img/sass-import.jpg
---

我們都知道一支檔案篇幅不要太長，因此就需要透過載入檔案方式來進行整合。而 Sass 則可透過 import 這個語法載入其它樣式。

<!-- more -->

## 基本寫法

以下語法皆以 SCSS 撰寫。

``` SCSS
/* 載入目錄 components 下 banner.scss 樣式 */
@import 'components/banner';
```

載入上不用特別加上副檔名，直接使用 `目錄/檔名` 形式載入即可。

## @import 整合範例

來一段範例，假設同一目錄中有以下 SCSS 檔案：

```
style.scss
bootstrap.scss
_reset.scss
_base.scss
_banner.scss
```

我希望 style.scss 可以載入 _reset.scss、_base.scss、_banner.scss，可以在 style.scss 這麼撰寫：

``` SCSS
@import "reset";
@import "base";
@import "banner";
```

如此一來進行編譯後，就會產生以下 CSS 檔案：

```
style.css -> 包含 reset、base、banner 等內容
bootstrap.css
```

## 檔名底線用途

從 @import 整合範例能夠看到經過編譯後僅保留 style.css 與 bootstrap.css 兩支檔案，是因為其它三支檔案都在檔名開頭加上底線，基本上編譯時就不會將這些檔案編譯成獨立 CSS 檔案。

## @import 建議載入順序

[Sass / SCSS 筆記：如何利用變數管理重複設定值？](https://guiblogs.com/sass-variable/) 提到 Sass / SCSS 為由上而下編譯，因此在載入順序建議可依照以下順序來載入：

* 變數檔，使後面讀取變數順利
* Mixin
* CSS Reset
* 通用類別
* Other files ...

以要被後面讀取的資訊或是要被 Reset 的內容放在前面為主。