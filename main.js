// jshint esversion:6
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


//init win
let win;


function createWindow() {

  // Create browser window
  win = new BrowserWindow({width:800, height: 600, icon: __dirname+'/img/sysinfo.png'});

  //load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open dev tools
  win.webContents.openDevTools();


  win.on('closed', () => {
    win = null;
  });
}


  //run create window function
  app.on('ready', createWindow);

  //quit when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();

    }
  });
