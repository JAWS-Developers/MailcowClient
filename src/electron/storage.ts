import keytar from 'keytar';

export const saveCredentials = async (params: { email: string, password: string, host: string }) => {
    await keytar.setPassword('MailCowClient', "email", params.email);
    await keytar.setPassword('MailCowClient', "password", params.password);
    await keytar.setPassword('MailCowClient', "host", params.host);
};

export const getCredentials = async (): Promise<UserCredentials> => {
    return {
        email: await keytar.getPassword('MailCowClient', "email") + "",
        password: await keytar.getPassword('MailCowClient', "password") + "",
        host: await keytar.getPassword('MailCowClient', "host") + ""
    };

};

export const removeCredentials = async (): Promise<void> => {
    await keytar.deletePassword('MailCowClient', "email");
    await keytar.deletePassword('MailCowClient', "password");
    await keytar.deletePassword('MailCowClient', "host");

};

export class CredentialsManager {
    private email: string = "";
    private password: string = "";
    private host: string = "";

    async saveCredentials(params: { email: string, password: string, host: string }) {
        await keytar.setPassword('MailCowClient', "email", params.email);
        await keytar.setPassword('MailCowClient', "password", params.password);
        await keytar.setPassword('MailCowClient', "host", params.host);
        this.email = params.email;
        this.password = params.password;
        this.host = params.host;
    }

    async getCredentials() {
        return await { email: this.email, password: this.password, host: this.host }
    }

    async loadCredentials() {
        this.email = await keytar.getPassword('MailCowClient', "email") + ""
        this.password = await keytar.getPassword('MailCowClient', "password") + ""
        this.host = await keytar.getPassword('MailCowClient', "host") + ""
    }

    async removeCredentials() {
        await keytar.deletePassword('MailCowClient', "email");
        await keytar.deletePassword('MailCowClient', "password");
        await keytar.deletePassword('MailCowClient', "host");
    }
}