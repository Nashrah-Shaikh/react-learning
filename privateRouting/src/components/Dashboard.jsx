import React, { useContext } from 'react'
import { Authcontext } from '../context/Context';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const {setAuthUsers} = useContext(Authcontext);
  const navigate = useNavigate()
  const logout = () => {
    // localStorage.removeItem("auth")
    setAuthUsers(false)
    navigate('/login');
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
