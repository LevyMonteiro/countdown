const {BrowserWindow} = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 290,
    height: 310,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  })

  win.loadFile('index.html')

  win.on('blur', () => {
    if(win.isVisible()) {
    win.hide()
    }
  })

  return win
}

module.exports = createWindow()