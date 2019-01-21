const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 1200,
        height: 1000
    });

    let entryview = "./dist/index.html";
    let load_me_first = url.format({
        pathname: path.join(__dirname, entryview),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(load_me_first);

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('activate', () => {
    if(win === null){
        createWindow();
    }
});