import React, { createContext, useState } from "react";

export const loginContext = createContext();

const ContextProvider = ({children}) =>{
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    
    const login = ()=>{
        setIsLoggedIn(true);
    }

    const logout = ()=>{
        setIsLoggedIn(false);
    }

    const [account , setAccount] = useState({})

    return <loginContext.Provider value={{isLoggedIn , login , logout , account , setAccount}}>
        {children}
    </loginContext.Provider>
}


export default ContextProvider;