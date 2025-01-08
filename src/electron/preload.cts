const { contextBridge, ipcRenderer } = require('electron');
//const { imapLogin } = require("./imap");

contextBridge.exposeInMainWorld('electron', {
  checkCredentials: (email, password, host) => ipcInvoke("checkCredentials", { email, password, host }),
  saveUserCredentials: (userCredentials) => ipcSend("saveUserCredentials", userCredentials),
  getUserCredentials: () => ipcInvoke("getUserCredentials"),
  removeUserCredentials: () => ipcInvoke("removeUserCredentials")
} satisfies Window['electron'])

function ipcInvoke<Key extends keyof EventPayloadMapping>(
  key: Key,
  params?: any
): Promise<EventPayloadMapping[Key]> {
  return ipcRenderer.invoke(key, params);
}

function ipcSend<Key extends keyof EventPayloadMapping>(
  key: Key,
  payload: EventPayloadMapping[Key]
) {
  ipcRenderer.send(key, payload);
}