import {useContext} from 'react'
import { useNavigate } from 'react-router'
import {Authcontext} from "../context/Context"


const Login = () => {
  const navigate = useNavigate()
  const {Users,setAuthUsers} = useContext(Authcontext);
  console.log("users",Users)
  const login = ()=>{
    // localStorage.setItem("auth",true);
    setAuthUsers(true)
    navigate('/dashboard');
    // window.location.reload()
  }
  return (
    <div>
      Login
      
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
