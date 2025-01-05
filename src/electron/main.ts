import {app, BrowserWindow} from "electron"
import path from "path";
import { isDev } from "./util.js";

type test = String;


app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        // Aggiunte:
    });

    if (isDev()) {
        mainWindow.loadURL("htps://locahost:6969");
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
    }

})