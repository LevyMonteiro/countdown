const {Tray} = require('electron')
const {resolve} = require('path')

const iconPath = resolve(__dirname, "../", "img", "tomato-icon.png")

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('Pomodoro Timer')

    return tray
}

module.exports = createTray()