import imaps from 'imap-simple';

export async function imapLogin(params: any): Promise<ImapLogin> {
    const { email, password, host } = params;
    const config: imaps.ImapSimpleOptions = {
        imap: {
            user: email,
            password: password,
            host: host, // Cambia con il server IMAP
            port: 993,
            tls: true,
        },
        connectTimeout: 20000
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');
        connection.end();
        return { status: "success" }
    } catch (error: any) {
        switch (error.code) {
            case "ENOTFOUND":
                return { status: "host-not-found" }

            default:
                console.log(error);

                return { status: "unkonw", info: error.code ?? error.textCode }
                break;
        }
    }

}

export class ImapManager {
    private credentials: UserCredentials;

    constructor(credentials: UserCredentials) {
        this.credentials = credentials;
    }

    static async checkAuthCredentials(params: { email: string, password: string, host: string }): Promise<ImapLogin> {
        const config: imaps.ImapSimpleOptions = {
            imap: {
                user: params.email,
                password: params.password,
                host: params.host, // Cambia con il server IMAP
                port: 993,
                tls: true,
            },
            connectTimeout: 20000
        };

        try {
            const connection = await imaps.connect(config);
            await connection.openBox('INBOX');
            connection.end();
            return { status: "success" }
        } catch (error: any) {
            switch (error.code) {
                case "ENOTFOUND":
                    return { status: "host-not-found" }

                default:
                    console.log(error);

                    return { status: "unkonw", info: error.code ?? error.textCode }
                    break;
            }
        }
    }
}