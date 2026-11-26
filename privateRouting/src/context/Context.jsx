import { createContext, useState } from "react";

export const Authcontext = createContext()

export const AuthProvider = ({children})=>{
const [authUsers,setAuthUsers] = useState(false)
const [adminUser, setAdminUser] = useState(false)
const auths = {
    Users: authUsers || localStorage.getItem("token"),
    Admin:adminUser,
    setAuthUsers,
    setAdminUser
}
    return (<Authcontext.Provider value ={auths}>{children}</Authcontext.Provider>)
}