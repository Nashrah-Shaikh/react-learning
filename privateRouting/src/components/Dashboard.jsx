import React, { useContext } from 'react'
import { Authcontext } from '../context/Context';

const Dashboard = () => {
  const {Users,setAuthUsers} = useContext(Authcontext);
  const logout = () => {
    // localStorage.removeItem("auth")
    setAuthUsers(false)
    // window.location.reload()
  }
  return (
    <div>
      Dashboard
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
