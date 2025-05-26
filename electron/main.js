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
        }
    })

    window.loadFile(path.join(__dirname, '../react-ui/dist/index.html'))
}

app.whenReady().then(createWindow)