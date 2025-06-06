const { contextBridge, ipcRenderer } = require('electron');
const windowName = process.argv.find(arg => arg.startsWith('--window-name='))?.split('=')[1];

contextBridge.exposeInMainWorld('electronAPI', {
  windowAction: (action) => ipcRenderer.send('window-action', action),
  loginSuccess: () => ipcRenderer.send('login-success'),
  logout: () => ipcRenderer.send('logout'),
  getWindowName: () => windowName,
});
