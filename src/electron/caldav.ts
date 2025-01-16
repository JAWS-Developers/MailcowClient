import { createDAVClient } from "tsdav";
import { getCredentials } from "./storage.js";

let davClient = null;

const createConn = async () => {
    const credentials = await getCredentials();
    davClient = await createDAVClient({
        serverUrl: `https://${credentials.host}/SOGo/dav/${credentials.email}/Calendar/personal/`,
        credentials: {
            username: credentials.email,
            password: credentials.password,
        },
        authMethod: 'Basic', // Usa Basic Auth per SOGo
        defaultAccountType: 'caldav',
    });
    return 
}