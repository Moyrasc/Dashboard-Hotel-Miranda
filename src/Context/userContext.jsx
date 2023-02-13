import { createContext, useContext, useEffect, useState } from "react";

const KEY_LOCALSTORAGE = 'userMiranda'
export const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)) || { email: "", password: "" });

    useEffect(() => {
        localStorage.setItem( KEY_LOCALSTORAGE, JSON.stringify(user))
    }, [user])


    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}
