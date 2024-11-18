import {app,BrowserWindow} from 'electron';

function mainWindow (){
    const window = new BrowserWindow({width:1000,height:600})
    window.loadURL('http://localhost:3000')
}

app.whenReady().then(mainWindow);