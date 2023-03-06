
import { createContext, useContext, useEffect, useReducer} from "react";

interface User {
    logged: Boolean;
    email: string;
    username: string
}
const KEY_LOCALSTORAGE = 'userMiranda'
export const UserContext = createContext({});

export const useUser = () => {
    return useContext(UserContext);
};
const local = localStorage.getItem(KEY_LOCALSTORAGE)
const initialState = local ? JSON.parse(local) : {logged: false, email:'', username:''}

const reducer = (state: User,action)=> {
    switch(action.type){
        case 'login':
            return { logged: true, email: action.value.email, username: action.value.username}
        case 'edit username':
            return {...state, username: action.value}
        case 'edit email':
            return {...state, email: action.value}
        case 'logout':
            return{logged: false, email:'', username:''}
        default:
            return state    
    }
}

export const UserProvider = ({ children }) => {
    const [user, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem( KEY_LOCALSTORAGE, JSON.stringify(user))
    }, [user])


    return (
        <UserContext.Provider value={{user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
