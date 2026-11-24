import {useContext} from 'react'
import { useNavigate } from 'react-router'
import {Authcontext} from "../context/Context"


const Login = () => {
  const navigate = useNavigate()
  const {setAuthUsers, setAdminUser} = useContext(Authcontext);
  
  const login = ()=>{
    // localStorage.setItem("auth",true);
    setAuthUsers(true)
  //  setAdminUser(true)
    navigate('/dashboard');
    // window.location.reload()
  }
  const admin = ()=>{
    setAuthUsers(true)
    setAdminUser(true)
    navigate('/admin');


  }
  return (
    <div>
      <h3>Login</h3>
      
      <button onClick={login}>Login</button>
      <button onClick ={admin}>Admin</button>
      
    </div>
  )
}

export default Login
