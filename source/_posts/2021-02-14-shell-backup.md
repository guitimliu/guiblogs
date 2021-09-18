---
title: 撰寫 Shell 指令，每日自動備份資料庫 - 使用 cPanel Cron Job
date: 2021-02-14 14:01:32
tags:
- shell
- cPanel
categories: Linux
---

我所待的 Lab 裡滿多網站都是用 cPanel 的排程每日備份資料庫內容，但後來發現某一家主機商下面的備份檔，一下備份正常、一下卻又出現檔案大小「763」容量極小的備份不完全狀況，如下所示......

![執行前畫面](https://img.guiblogs.com/shell-backup/shell-backup-before.jpg)

<!-- more -->

> ## 原始作法

網站所使用的虛擬主機有提供 cPanel 控制台，因而利用 cPanel 內建的 Cron Job 排程器進行每日排程。指令如下：

```
/usr/bin/mysqldump --user=帳號 --password=密碼 --all-databases --single-transaction > /home/帳號/public_html/backup/full_backup_`date -I`.sql
```

> ## 新作法

後來到網上找了許多相關文章，中文資源找不到往國外資源翻也依舊找不到。後來想了想：那如果自己寫一個腳本來做呢？

新的作法，會搭配原有備份指令，並另外新增自己撰寫的 check shell 指令檔案；利用 cPanel 排程機制，每日自動執行該檔案。

1. cPanel Cron Job 指令：每日0時0秒執行一次

```
/bin/sh /home/cPanel帳號/public_html/backup/db_backup.sh	
```

2. Shell 腳本檔：db_backup.sh

```
#!/bin/sh

filesize=$(stat -c%s /home/cPanel帳號/public_html/backup/full_backup_`date -I`.sql) # 要檢查的備份檔位置
while [ 1000 -gt $(($filesize)) ] # 如果檔案小於 1000，代表備份失敗，進入迴圈再次進行備份
do
    /usr/bin/mysqldump --user=cPanel帳號 --password=cPanel密碼 --all-databases --single-transaction > /home/cPanel帳號/public_html/backup/full_backup_`date -I`.sql # 再次進行備份
    filesize=$(stat -c%s /home/cPanel帳號/public_html/backup/full_backup_`date -I`.sql) # 重新選取要被檢查的備份檔，並進入迴圈進行檢查，直到檔案大小大於 1000
done
```

GitHub Link: [mysql-auto-backup](https://github.com/guitimliu/mysql-auto-backup)

> ## 結論與後記

這段程式其實是我在去年差不多三～四月寫的，雖然只有短短幾行程式碼，但當時為了解決這個問題，前前後後花了三天的時間，從自己研究到實驗室的同學一起學習，最後寫出一個能夠備份的腳本，成果一出來的那一刻到現在還是令人難忘！

至於舊作法為何偶爾會無法備份成功？其實我也不知道，猜測是因為資料內容過大無法直接透過 cPanel 的機制去備份？這我就不清楚了，可能要請路過的大神來做解答。

目前指令執行到現在也快一年了，除了之前因為虛擬主機空間用完、虛擬主機莫名被降方案（QQ）之外，基本上都是執行成功的，附上去年 4/21 時自動備份執行結果。

![執行後結果畫面](https://img.guiblogs.com/shell-backup/shell-backup-after.jpg)