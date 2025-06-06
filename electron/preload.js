const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  windowAction: (action) => ipcRenderer.send('window-action', action),
  loginSuccess: () => ipcRenderer.send('login-success'),
  logout: () => ipcRenderer.send('logout'),
});
