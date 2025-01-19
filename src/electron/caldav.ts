import { createDAVClient } from "tsdav";
import { getCredentials } from "./storage.js";

let davClient: any = null;

export const createConn = async () => {
    const credentials = await getCredentials();
    davClient = await createDAVClient({
        serverUrl: `https://${credentials.host}/SOGo/dav/${credentials.email}`,
        credentials: {
            username: credentials.email,
            password: credentials.password,
        },
        authMethod: 'Basic', // Usa Basic Auth per SOGo
        defaultAccountType: 'caldav',
    });
}

export const getCalendars = async () => {
    return await davClient.fetchCalendars();
}