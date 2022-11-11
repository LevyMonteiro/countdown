const {app} = require('electron')

function App() {
  const win = require('./createWindow.js')
  const tray = require('./tray.js')

  tray.on('click', () => console.log('open'))
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})