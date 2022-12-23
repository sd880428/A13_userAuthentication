# 短網址產生器

## 規格
+ 程式編輯器: [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/ "Visual Studio Code") 
+ 使用框架: [express](https://www.npmjs.com/package/express)@4.18.2
+ 模板引擎: [express-handlebars](https://www.npmjs.com/package/express-handlebars)@6.0.6
+ 資料庫ODM:[mongoose](https://www.npmjs.com/package/mongoose)@6.8.1
+ 環境變數:[dotevn](https://www.npmjs.com/package/dotenv)@16.0.3
---
## 功能:
+ 驗證登入帳號密碼正確與否並導向畫面
---
## 安裝與執行:
1. clone此專案
```
git clone https://github.com/sd880428/A13....git
```

2. 使用終端機到此專案目錄下
```
cd ~/.../A13_userAuthentication/
```
3. 安裝套件
```
npm i
```
4. 自行加入.env 檔設定環境變數
```
MONGODB_URL = mongodb+srv://<username>:<password>@......mongodb.net/<database>?retryWrites=true&w=majority
```
5. 執行
```
npm run dev
```
6. 終端機顯示以下字串代表成功
```
server has started!!
```
7. 開啟瀏覽器進入 http://localhost:3000 即可