type ImapLogin = {
    status: "host-not-found" | "success" | "credentials" | "unkonw",
    info?: string
}

type UserCredentials = {
    email: string,
    password: string,
    host: string
}

type Calendar = {
    description: string,
    timezone: string,
    url: string,
    ctag: number,
    calendarColor: string,
    displayName: string,
    components: string[],
    resourcetype: string[],
    syncToken: number,
    projectedProps: object,
    reports: string[]
}

type EventPayloadMapping = {
    checkCredentials: ImapLogin,
    saveUserCredentials: UserCredentials,
    getUserCredentials:  UserCredentials
    removeUserCredentials: void,
    createConn: any,
    getCalendars: any,
}

interface Window {
    electron: {
        checkCredentials: (email: string, password: string, host: string) => Promise<ImapLogin>,
        saveUserCredentials: (userCredentials: UserCredentials) => void,
        getUserCredentials: () => Promise<UserCredentials> 
        removeUserCredentials: () => Promise<void>,
        createConn: () => Promise<any>,
        getCalendars: () => Promise<Calendar[]>
    }
}