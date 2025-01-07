import { ipcMain } from "electron";
import { pathToFileURL } from "url";

export function isDev(): boolean {
    return process.env.NODE_ENV === "development";
}

export async function ipcHandle<Key extends keyof EventPayloadMapping>(key: Key, handler: (params?: any) => Promise<EventPayloadMapping[Key]>) {
    ipcMain.handle(key, (_, params) => handler(params))
}

export function ipcMainOn<Key extends keyof EventPayloadMapping>(
    key: Key,
    handler: (payload: EventPayloadMapping[Key]) => void
) {
    ipcMain.on(key, (event, payload) => {
        return handler(payload);
    });
}
