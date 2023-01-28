import { createContext, useState } from "react"

export const UserContext = createContext()

export default function UserProvider({ children }) {
    
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(loggedUser !== null ? loggedUser : {})


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}