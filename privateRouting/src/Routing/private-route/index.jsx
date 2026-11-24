import React, { useContext } from 'react'
import { authorization } from '../../auth/auth'
import { Navigate } from 'react-router'
import {Authcontext} from "../../context/Context"

const PrivateRoute = ({children}) => {
  const {Users} = useContext(Authcontext)
    if(!Users) return <Navigate to="/" />
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
