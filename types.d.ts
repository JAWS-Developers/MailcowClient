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
    imapLogin: ImapLogin,
    saveUserCredentials: UserCredentials,
    getUserCredentials:  UserCredentials
    removeUserCredentials: void
}

interface Window {
    electron: {
        imapLogin: (email: string, password: string, host: string) => Promise<ImapLogin>,
        saveUserCredentials: (userCredentials: UserCredentials) => void,
        getUserCredentials: () => Promise<UserCredentials> 
        removeUserCredentials: () => Promise<void>
    }
}