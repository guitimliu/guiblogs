---
title: Xampp 錯誤訊息：MySQL shutdown unexpectedly. 解決方法
date: 2021-06-27 14:34:21
tags:
- Xampp
- MySQL
categories:
- [Xampp]
- [MySQL]
---

有些人可能有個壞習慣，就是 Xampp 沒有正常關閉就直接進行關機；當然不只 Xampp，相信非常多視窗也都是跟著 Xampp 一起被強制關機。

> ## 強制關機的結果：資料庫意外關閉

實習日常的第一個動作，就是開啟電腦、打開 Xampp 的 Apache 與 MySQL。但就在某一天，發現打不開 MySQL，並出現以下錯誤訊息：

```
09:42:22 AM [mysql] Attempting to start MySQL app...
09:42:22 AM [mysql] Status change detected: running
09:42:22 AM [mysql] Status change detected: stopped
09:42:22 AM [mysql] Error: MySQL shutdown unexpectedly.
09:42:22 AM [mysql] This may be due to a blocked port, missing dependencies,
09:42:22 AM [mysql] improper privileges, a crash, or a shutdown by another method
09:42:22 AM [mysql] Press the Logs button to view error logs and check
09:42:22 AM [mysql] the Windows Event Viewer for more clues
09:42:22 AM [mysql] If you need more help, copy and post this
09:42:22 AM [mysql] entire log window on the forums
```

<!-- more -->

查了一下網路上的資料，發現是因為我沒有關閉 Xampp 就進行電腦關機的動作，導致 Xampp 資料毀損。

> ## 我是如何解決的？

透過參考資料那篇文章，成功地解決了這個問題！由於那篇文章是英文語系，在這邊我就翻成中文：

Ps. 貼心提醒：做任何修改之前，請先進行備份哦！我自己有將 Xampp 整個先備份，記得我一開始有做錯，幸好有備份 XD

1. 將 Xampp\mysql\data 這個資料夾重新命名成另外一個名稱
2. 重新建立一個同名的資料夾
3. 將 Xampp\mysql\backup 內的所有內容複製到新建立的 Xampp\mysql\data
4. 從舊的 Xampp\mysql\data 複製除了 mysql、performance_schema 以及 phpmyadmin 等資料夾的所有檔案，到新的 mysql\data，尤其是 ibdata1 這支檔案，覆蓋到新的 mysql\data 裡

> ## 總結與心得

其實這就是一個夜路走多總會遇到鬼的概念，之前覺得沒什麼是因為沒有發生過，只覺得直接關機就好多方便。然而經歷過一次切身之痛就知道該學乖了，人也真是奇妙的生物，每次都要從教訓過才學會成長！XD

所以希望大家不管是 Xampp 還是其他應用程式，確實將其關閉再將電腦關機，絕對不差這幾分鐘的動作的～第一次能夠修復完成或許是運氣好，如果發生第二次呢？

> ## 參考資料

1. XAMPP - MySQL shutdown unexpectedly - Stack Overflow
https://stackoverflow.com/questions/18022809/xampp-mysql-shutdown-unexpectedly