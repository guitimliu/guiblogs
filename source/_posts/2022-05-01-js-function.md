---
title: 關於 JavaScript 的 Fucntion 那些事
date: 2022-05-01 22:53:47
tags:
- [JavaScript]
categories:
- [JavaScript]
index_img: http://img.guiblogs.com/index_img/js-function.jpg
---

來把以前 JavaScript 關於 Function 的筆記 Po 上來與大家分享～

### 使用函數原因

用輸入跟輸出的例子來說明：

<!-- more -->

|輸入|處理|輸出|
|---|---|---|
|按電視遙控器|遙控器處理我們請求|電視開啟|
|人類上課學習|大腦吸收|寫作業或筆記將想法寫出來|
|將兩個數字丟給處理加法的函數|程式處理加法|輸出結果

而函數 function 就像是上列表格的處理，進行我們要的請求，例如我們可以定義一個加法函數，在裡面撰寫加法程式。

### 範例

```
// 沒有參數
function 變數名稱(){

}
變數名稱(); // 執行函數

// 有參數
function 變數名稱(num1, num2){

}
變數名稱('參數1','參數2'); // 假設有兩個參數，就要傳遞兩個參數進去

// 加法函數，在函數裡寫 console.log 顯示出（無法使用變數接收，因為函數只是顯示出答案，並沒有回傳值）
function add(num1, num2){
    console.log(num1+num2);
}
add(12,24); //執行函數

// 乘法函數，利用 return 回傳值，並使用變數接收；若要顯示答案，須在外層撰寫 console 顯示
function mul(num1, num2){
    return num1 * num2
}
let ans = num(9*9); // 執行函數並賦予值給變數 ans
console.log(ans); // 顯示答案
```

### return

函數內可以有多個 return，但是第一個 return 執行完後，就會跳脫 function，後面不管事 return 還是其它程式，都不會執行

### 全域變數與區域變數邏輯

* 在 function 以外宣告的變數，為全域變數
* 在 function 內宣告的變數或是參數，為區域變數；只能在 function 內使用，
* 在 function 內執行變數，會先尋找 function 內有沒有宣告；如果沒有，會向 function 外尋求是否有同名的全域變數

### 使用 if 執行多個 return，並在內運作全域變數

```
/* 是否有發燒 */

let number = 0; //記錄受測人數

function degree(num){
    number+=1; // 受測人數+1
    if(num>=37.5){
        return "有發燒";
    }else{
        return "沒發燒";
    }
}

console.log(degree(37.2));

result: "沒發燒"
```