function controlWindow(win, tray) {
    function toggle() {
        if(win.isVisible()) {
            win.hide()
        } else {
            show()
        }
    }
    
    function show() {
        // pegar o posicionamento da win/tray
        const {x, y} = getPosition()
        // atualizar o posicionamento da win
        win.setPosition(x, y, false)
        // mostrar a win
        win.show()
        win.focus()
    }

    function getPosition() {
        const { screen } = require('electron')
        const {x, y} = screen.getCursorScreenPoint()

        return {x, y}
    }

    return {
        toggle
    }
}

module.exports = controlWindow