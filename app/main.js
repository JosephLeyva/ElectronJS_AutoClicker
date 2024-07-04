const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        minHeight: 300,
        minWidth: 400,
        maxHeight: 300,
        maxWidth: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('closed', () => {
        app.quit();
    });

    mainWindow.removeMenu();
});