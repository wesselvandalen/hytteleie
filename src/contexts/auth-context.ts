import { createContext } from "react";

interface AuthContextType {
    user: any;
}

const defaultAuthContext: AuthContextType = {
    user: null,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);