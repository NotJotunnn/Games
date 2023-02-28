const { app, BrowserWindow, Tray } = require("electron");

const { join, resolve } = require('path')

iconPath = resolve(__dirname, '../', 'assets', 'favicon-32x32.png')

function createWindow() {
    const win = new BrowserWindow({
        width: 1037,
        height: 400,
        show: false,
        frame: false,
        resizable: false,
    });

    win.loadFile(join(__dirname, "../pages/index.html"));

    // win.webContents.openDevTools();


    const tray = new Tray(iconPath)
    tray.setToolTip('The next Beethoven')

    tray.on('click', toggle)

    win.on('blur', win.hide)

    function toggle() {
      if(win.isVisible()) {
        win.hide()
      } else {
        show()
      }
    }

    function show() {
      const {x, y} = getPosition()

      win.setPosition(x, y, false)

      win.show()
      win.focus()
    }

    function getPosition() {
      const winBounds = win.getBounds()
      const trayBounds = tray.getBounds()

      const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))

      const y = Math.round(trayBounds.y + trayBounds.height + 3)

      return {x, y}
    }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow
    }
})

app.dock.hide()