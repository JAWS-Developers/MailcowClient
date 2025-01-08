import { app, BrowserWindow, ipcMain } from "electron"
import path from "path";
import { ipcHandle, ipcMainOn, isDev } from "./utils.js";
import { getPreloadPath } from "./pathResolver.js";
import { imapLogin, ImapManager } from "./imap.js";
import { CredentialsManager, getCredentials, removeCredentials, saveCredentials } from "./storage.js";

type test = String;


app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        // Aggiunte:
        webPreferences: {
            preload: getPreloadPath() // File per IPC
        }
    });


    if (isDev()) {
        mainWindow.loadURL("http://localhost:6969");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }

    ipcHandle("checkCredentials", ImapManager.checkAuthCredentials)

    const credentialsManager = new CredentialsManager();
    credentialsManager.loadCredentials();
    ipcHandle("getUserCredentials", credentialsManager.getCredentials)
    ipcMainOn("saveUserCredentials", credentialsManager.saveCredentials)
    ipcHandle("removeUserCredentials", credentialsManager.removeCredentials);
    


    handleCloseEvents(mainWindow);
})

function handleCloseEvents(mainWindow: BrowserWindow) {
    let willClose = false;

    mainWindow.on('close', (e) => {
        if (willClose) {
            return;
        }
        e.preventDefault();
        mainWindow.hide();
        if (app.dock) {
            app.dock.hide();
        }
    });

    app.on('before-quit', () => {
        willClose = true;
    });

    mainWindow.on('show', () => {
        willClose = false;
    });
}