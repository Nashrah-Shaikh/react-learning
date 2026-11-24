import { createContext, useState } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({children})=>{
const [authUsers,setAuthUsers] = useState(false)
const auths = {
    Users: authUsers,
    Admin:false,
    setAuthUsers
}
    return (<Authcontext.Provider value ={auths}>{children}</Authcontext.Provider>)
}