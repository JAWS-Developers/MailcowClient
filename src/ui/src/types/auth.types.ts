export type AuthContextType = {
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
    loading: boolean;
    user: User;
}

export type User = {
    email: string;
    id: number;
    name: string;
    surname: string;
}