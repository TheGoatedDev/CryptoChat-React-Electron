const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 1200, height: 900, frame: false, minWidth: 800, show: false });
    mainWindow.on('closed', () => mainWindow = null);

    splash = new BrowserWindow({width: 400, height: 600, frame: false, resizable: false});

    splash.loadURL(isDev ? `file://${path.join(__dirname, '../public/splash.html')}` : `file://${path.join(__dirname, '../build/splash.html')}`);
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    mainWindow.once('ready-to-show', () => {

        setTimeout(() => {
            mainWindow.show();
        }, 3500);
        setTimeout(() => {
            splash.hide();
        }, 2500);
    });

    if (isDev) {
        mainWindow.openDevTools();
    }
    
    globalShortcut.register('CommandOrControl+R', () => { mainWindow.reload(); splash.reload(); });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});