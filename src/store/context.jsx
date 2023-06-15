import { createContext, useState } from "react";

export const AuthContext = createContext('')

export default function Context({ children }) {
    const [user, setUser] = useState('GGFIFYFIYT')

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}