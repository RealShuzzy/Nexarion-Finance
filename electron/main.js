const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Main window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    frame: false,

    minWidth: 960,
    minHeight: 540,
  });

  mainWindow.loadFile(path.join(__dirname, '../react-ui/dist/index.html'));
  //mainWindow.webContents.openDevTools();
}

// Login window
function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 400,
    height: 300,
    resizable: false,
    fullscreenable: false,
    title: 'Nexarion Login',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    frame: false,
  });

  loginWindow.loadFile(
    path.join(__dirname, '../react-ui/dist/index.html'), { hash: '/login' } );

  loginWindow.once('ready-to-show', () => {
    loginWindow.show();
  });

  
  loginWindow.on('closed', () => {
    loginWindow = null;
  });
  
}

app.whenReady().then(createLoginWindow);

// Login
ipcMain.on('login-success', () => {
  if (loginWindow) {
    loginWindow.close();
    loginWindow = null;
  }
  createMainWindow();
});

// Logout
ipcMain.on('logout', () => {
  if (mainWindow) {
    mainWindow.close();
    mainWindow = null;
  }
  createLoginWindow();
});

// Titlebar window-controls
ipcMain.on('window-action', (event, action) => {
  const senderWindow = BrowserWindow.fromWebContents(event.sender);
  if (!senderWindow ) return;

  switch (action) {
    case 'minimize':
      senderWindow.minimize();
      break;
    case 'maximize':
      if (senderWindow.isMaximized()) {
        senderWindow.unmaximize();
      } else {
        senderWindow.maximize();
      }
      break;
    case 'close':
      senderWindow.close();
      break;
  }
});