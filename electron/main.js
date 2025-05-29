const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const window = new BrowserWindow({
        width:1280,
        height:720,
        webPreferences:{
            nodeIntegration:false,
            contextIsolation:true,
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true,
        titleBarStyle: 'hidden',
        frame: false,

        minWidth:960,
        minHeight:540,
        
    })

    window.loadFile(path.join(__dirname, '../react-ui/dist/index.html'))
}

app.whenReady().then(createWindow)