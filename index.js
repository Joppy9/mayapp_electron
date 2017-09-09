
// アプリケーションをコントロールするモジュール
var electron = require('electron');
var app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Electronの初期化完了後に実行
app.on('ready', () => {
  let win = new BrowserWindow({
    width: 400,
    height: 500,
    backgroundColor: '#FFCCCC'
  });
  win.loadURL('file://' + __dirname + '../html/index.html')
  win.webContents.openDevTools();
  win.on('closed',function(){
    mainWindow = null;
  })
});
