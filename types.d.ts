type ImapLogin = {
    status: "host-not-found" | "success" | "credentials" | "unkonw",
    info?: string
}

type UserCredentials = {
    email: string,
    password: string,
    host: string
}

type EventPayloadMapping = {
    checkCredentials: ImapLogin,
    saveUserCredentials: UserCredentials,
    getUserCredentials:  UserCredentials
    removeUserCredentials: void
}

interface Window {
    electron: {
        checkCredentials: (email: string, password: string, host: string) => Promise<ImapLogin>,
        saveUserCredentials: (userCredentials: UserCredentials) => void,
        getUserCredentials: () => Promise<UserCredentials> 
        removeUserCredentials: () => Promise<void>
    }
}