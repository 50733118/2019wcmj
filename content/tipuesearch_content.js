var tipuesearch = {"pages": [{'title': '簡介', 'text': '在網際內容管理這門課,主要目的是學習到如何創建一個個人github倉儲,並用可攜式系統使用SSH上傳資料至個人網站,以及更新倉儲 \n 在這門課學習到的相關資料 : \n 網路連線設定 \n 配置可攜程式環境 \n 倉儲改版 \n 靜態 CMSimfly \n Mobile 網站內容 \n', 'tags': '', 'url': '簡介.html'}, {'title': '課程相關資料', 'text': '本資料來源: http://cpgx.kmol.info/wcm2019/content/index.html \n', 'tags': '', 'url': '課程相關資料.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n', 'tags': '', 'url': '配置可攜式環境.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容拍快照: git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit \xa0 git commit 執行之前, 必須使用 git config 建立臨時或永久的身分註記, 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n 靜態 CMSimfly \n 利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用 \xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容 \n', 'tags': '', 'url': '倉儲改版.html'}, {'title': 'Moblie網站內容', 'text': '參考倉儲: \xa0 https://github.com/mdecourse/acmsimfly \n 參考網站: \n http://mde.tw/acmsimfly \n https://github.com/BlackrockDigital \n https://themewagon.com/theme_tag/bootstrap-4-templates/ \n https://github.com/kamranahmedse/developer-roadmap \xa0( blog ) \n 學習如何使用 CMSimfly, 在網站中加入各種內容 (導入 Bootstrap frontend framework) 使用 Flask, bs4 與 lxml 模組 了解 CMSimfly 如何建構, 並且嘗試修改現有功能, 除錯或建立自己的網際內容管理系統 \n', 'tags': '', 'url': 'Moblie網站內容.html'}, {'title': '架構CMSimfly', 'text': 'CMSimfly 以 Python 3 編寫, 利用 Flask 網路框架可以在伺服器運行, 讓使用者利用瀏覽器擷取動態 WWW 伺服器所送至近端的 html 加上 Javascript 程式碼, 然後在瀏覽器中顯示網際內容編輯器 (採用 tinymce4). \n 在使用者能夠透過 tinymce4 編輯各 CMSimfly 動態網際頁面之前, CMSimfly 利用 Beautiflysoup 4 對 config/content.htm 進行分頁, 然後將 H1 標註中的文字當作第一階的頁面, H2 與 H3 標註內容則當作第二階與第三階的頁面標題, 而標題與標題之間的 html 與 Javascript 則分別當作各階次頁面的內容. \n 因此 CMSimfly 可以在任何支援 Python 3 、Flask 與 Beautifulsoup 4 的環境中啟動 WWW 伺服器 (即在近端以 python wsgi.py 執行, 或在遠端以 uwsgi 與 nginx 執行 wsgi.py 中的 application), 接著使用者就可以根據伺服器啟動時所使用電腦的 IP 與埠號進行連線. \n 使用者連線後, Beautifulsoup 即對 config/content.htm 分頁, 然後根據頁面配置讓使用者在瀏覽器中使用 login 登入, 或者以動態的方式檢視各階次的分頁. \n 當使用者透過 login 登入 CMSimfly 成功後, 便可以指定頁面進行編輯, 修改後內容將存入 config/content.htm, 而尚未改版前的 content.htm 則改名為 content_backup.htm, 此一功能是防止 CMSimfly 因頁面解讀錯誤時, 誤刪資料時, 使用者可以從 content_backup.htm 取回上一版的資料內容. \n 動態轉靜態內容 \n 由於動態 CMSimfly 只能在 Python3 環境中運行, 而某些免費的雲端服務所提供的 WWW 伺服器僅提供 html 加上 Javascript 伺服, 因此為了讓 CMSimfly 動態系統的內容, 能夠將內容送到這些只提供 WWW 伺服器的系統中執行, CMSimfly 加入 generate_pages 的功能, 也就是根據 config/content.htm 中各頁面的標題與資料, 以 Beautifulsoup4 再結合 lxml 模組, 將 content.htm 疊上各頁面所選定的 css 與其他配置頁面格式的 Javascript, 轉成位於 content 目錄中的靜態網站內容, 此一包含 index.html 的各頁面 html 檔案, 可以在任何只支援 html 伺服器的環境中運行, 例如: Github Pages 或 Fossil SCM 中的 doc 伺服頁面功能. \n 截至目前的說明, 希望啟動 CMSimfly 動態運行, 需要 \xa0 Python 3 、Flask 與 Beautifulsoup 4\xa0, 若要將動態內容轉為靜態內容, 則額外需要 lxml 模組. \n Python 3 在隨身系統的模組安裝指令為: \n pip install flask bs4 lxml \n 表示要利用 pip 安裝 flask, bs4 與 lxml 模組. \n \n', 'tags': '', 'url': '架構CMSimfly.html'}, {'title': 'Game', 'text': '課本章節:\xa0 https://link.springer.com/chapter/10.1007/978-1-4842-4155-4_2 \xa0 \n The player throws a pair of dice. The sum of the two top faces is what matters so a 1 and a 3 is the same as 2 and 2. The sum of two 6-sided dice can be any number from 2 to 12. If the player throws a 7 or 11 on the first throw, the player wins. If the player throws a 2, 3, or 12, the player loses. For any other result (4, 5, 6, 8, 9, 10), this result is recorded as what is called the player’s point and a follow-up throw is required. On follow-up throws, a throw of 7 loses and a throw of the player’s point wins. For anything else, the game continues with the follow-up throw rules. \n', 'tags': '', 'url': 'Game.html'}, {'title': 'Game1', 'text': '\n Try it \n \n <p><button onclick="myFunction()">Try it</button></p>\n<p id="demo"></p>\n<script>// <![CDATA[\nfunction myFunction() {\n\xa0\xa0document.getElementById("demo").innerHTML = Math.floor(Math.random()*10);\n}\n// ]]></script> \n \n \n', 'tags': '', 'url': 'Game1.html'}, {'title': 'Game2', 'text': ' Your browser doesn\'t support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n <script type="text/javascript">// <![CDATA[\nvar cwidth = 400;\n    var cheight = 300;\n    var dicex = 50;\n    var dicey = 50;\n    var dicewidth = 100;\n    var diceheight = 100;\n    var dotrad = 6;\n    var ctx;\n    var dx;\n    var dy;\n    var firstturn = true;\n    var point;\nfunction throwdice() {\n    var sum;\n    var ch = 1+Math.floor(Math.random()*6);\n    sum = ch;\n    dx = dicex;\n    dy = dicey;\n    drawface(ch);\n    dx = dicex + 150;\n    ch=1 + Math.floor(Math.random()*6);\n    sum += ch;\n    drawface(ch);\n    if (firstturn) {\n        switch(sum) {\n            case 7:\n            case 11:\n              document.f.outcome.value="You win!";\n              break;\n            case 2:\n            case 3:\n            case 12:\n              document.f.outcome.value="You lose!";\n              break;\n            default:\n              point = sum;\n              document.f.pv.value=point;\n              firstturn = false;\n              document.f.stage.value="Need follow-up throw.";\n              document.f.outcome.value="   ";\n        }\n    }\n    else {\n        switch(sum) {\n        case point:\n           document.f.outcome.value="You win!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n           break;\n        case 7:\n           document.f.outcome.value="You lose!";\n           document.f.stage.value="Back to first throw.";\n           document.f.pv.value=" ";\n           firstturn = true;\n        }\n            }\n}\nfunction drawface(n) {\n  ctx = document.getElementById(\'canvas\').getContext(\'2d\');  \n  ctx.lineWidth = 5;\n  ctx.clearRect(dx,dy,dicewidth,diceheight);\n  ctx.strokeRect(dx,dy,dicewidth,diceheight)\n  var dotx;\n  var doty;\n  ctx.fillStyle = "#009966";\n    switch(n) {\n        case 1:\n         draw1();\n         break;\n        case 2:\n         draw2();\n         break;\n        case 3:\n         draw2();\n         draw1();\n         break;\n        case 4:\n         draw4();\n         break;\n        case 5:\n         draw4();\n         draw1();\n         break;\n        case 6:\n         draw4();\n         draw2mid();\n         break;\n         \n    }\n}\nfunction draw1() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + .5*dicewidth;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw2() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\nfunction draw4() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+diceheight-3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + diceheight-3*dotrad;  //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy+ 3*dotrad;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill(); \n}\nfunction draw2mid() {\n    var dotx;\n    var doty;\n    ctx.beginPath();\n    dotx = dx + 3*dotrad;\n    doty = dy + .5*diceheight;\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    dotx = dx+dicewidth-3*dotrad;\n    doty = dy + .5*diceheight; //no change\n    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);\n    ctx.closePath();\n    ctx.fill();\n}\n// ]]></script>\n<p><canvas height="300" id="canvas" width="400"> Your browser doesn\'t support the HTML5 element canvas. </canvas> <br> <button onclick="throwdice();">Throw dice </button></p>\n<form id="f" name="f">Stage: <input name="stage" type="text" value="First Throw"> Point: <input name="pv" type="text" value="   "> Outcome: <input name="outcome" type="text" value="     "></form> \n \n', 'tags': '', 'url': 'Game2.html'}, {'title': '期中影片', 'text': '\n', 'tags': '', 'url': '期中影片.html'}, {'title': 'ROC Flag(W14)', 'text': ' 導入 Brython 標準程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n  導入 Brython 標準程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n  導入 Brython 標準程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n \n  導入 Brython 標準程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'ROC Flag(W14).html'}, {'title': 'VM虛擬主機(W15)', 'text': 'W15 \n 1.到ubuntu網站下載Sever \n ubuntu網站: https://www.ubuntu.com/ \n \n \n 2.打開VM-->創建一台虛擬主機 \n \n \n 3.設定完打開虛擬主機--->載入檔案 \n \n 4.按Start-->設定 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 5.做完這個設定就可以開始使用了 \n \n', 'tags': '', 'url': 'VM虛擬主機(W15).html'}]};