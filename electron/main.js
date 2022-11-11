const {app} = require('electron')
const controlWindow = require('./controlWindow.js')

function App() {
  const win = require('./createWindow.js')
  const tray = require('./tray.js')

  const {toggle} = controlWindow(win, tray)

  tray.on('click', toggle)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})