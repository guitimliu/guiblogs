---
title: 淺談面試考題之一：Cookie 與 Session 的差異
date: 2021-12-14 16:27:52
tags:
- [cookie]
- [session]
categories:
- [開發相關]
index_img: http://img.guiblogs.com/index_img/cookie-session.jpg
---

今天來談談一個面試可能會考的題目：Cookie 與 Session 的差異，這兩者能夠記錄一些使用者的狀態、資訊，至於它們本身的差異為何，就是今天要來筆記的部分。

<!-- more -->

## 為何需要用到它們

HTTP 協議屬於一種**無狀態協議**，代表**每一次的請求都是獨立的**，所以 HTTP 本身是不會記錄資訊，比方說登入表單輸入帳號的提示，這部分 **HTTP 是無法紀錄的**。因此就衍伸出了 **Cookie** 來去進行記錄，待會介紹的 **Session** 亦是如此。

如果要更白話來講就像是：道路本身人來人往，但道路本身不會記錄有誰曾經經過；而路上的攝影機，就能夠紀錄到攝像範圍內路過的人事物。

## Cookie

Cookie 又稱**小餅乾**，是瀏覽網頁時伺服器那邊傳送給自己電腦的一塊資訊，瀏覽器就會儲存它，下一次瀏覽該網頁時再傳送給伺服器。

最常見的就是應用於登入表單，如果沒有特別設定，會提示之前我們所輸入的帳號資訊；或是用於紀錄目前登入狀態。

### Cookie 本身特性

首先 Cookie 有其**生命週期**，因此如果生命週期結束就會失效。

**另外 Cookie 只會針對原本網域起作用**，例如在 `www.google.com` 的 Cookie 不會再 `tw.yahoo.com` 上起作用。

### Cookie 其缺點

Cookie 的缺點是**伺服器端可以修改 Cookie 的資料**，因此無法確保資料是真實的，所以不太能用於機密資料的傳遞。

## Session

Session 紀錄**伺服器上使用者資訊**，常見應用於**儲存使用者在伺服器上的資訊**，比方說是**用戶驗證**後，除了本身記錄其資訊外，會產生對應 ID 傳入客戶端並使用 Cookie 進行記錄。

以飯店來舉例：飯店或櫃台（伺服器端、Server）證明你是 201 房客，飯店這邊除了紀錄你的資訊外，也會給你一組 201 房間鑰匙，而你（客戶端）就會拿到鑰匙放在自己身上某處（可理解為 Cookie），你就能夠拿這副鑰匙去打開房門。（不確定這樣舉例是否合適，有大神路過歡迎指教）

## 兩者應用層面

* Cookie：放置瀏覽器儲存的資訊以及伺服器端回傳的 Session 資訊
* Session：伺服器進行資料驗證以及紀錄伺服器使用者資訊

## 參考資料

* [Day14-Session與Cookie差別](https://medium.com/tsungs-blog/day14-session%E8%88%87cookie%E5%B7%AE%E5%88%A5-eb7b4035a382)
* [Day23 - Cookie &amp; Session - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10187212)
* [Cookie 和 Session 究竟是什麼？有什麼差別？｜ALPHA Camp Blog](https://tw.alphacamp.co/blog/cookie-session-difference)
* [[不是工程師] 會員系統用Session還是Cookie? 你知道其實他們常常混在一起嗎？](https://progressbar.tw/posts/92)
* [介紹 Session 及 Cookie 兩者的差別說明](https://blog.hellojcc.tw/introduce-session-and-cookie/)
* [白話 Session 與 Cookie：從經營雜貨店開始 | by Huli | Medium](https://hulitw.medium.com/session-and-cookie-15e47ed838bc)
* [深度分析：面試90%被問到的 Session、Cookie、Token，看完這篇你就掌握了！ | IT人](https://iter01.com/511357.html)