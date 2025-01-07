import keytar from 'keytar';

export const saveCredentials = async (params: { email: string, password: string, host: string}) => {
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