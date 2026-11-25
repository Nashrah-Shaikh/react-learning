import { createContext, useState} from "react";

export const CastDetails = createContext()

export const DetailsProvider = ({children})=>{
const [cast, setCast]= useState() 
const obj={
    setCast,
    cast
}
    return <CastDetails.Provider  value={obj}>{children}</CastDetails.Provider>
}