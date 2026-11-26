import {useContext, useState} from 'react'
import { useNavigate } from 'react-router'
import {Authcontext} from "../context/Context"
import axios from "axios"
import "../App.css";



const Login = () => {
  const navigate = useNavigate()
  const {setAuthUsers, setAdminUser} = useContext(Authcontext);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  
  
  const login = async(e)=>{
    e.preventDefault()
    const payload={
     email:email,
     password:password
    }

    try {
      const logininfo = await axios.post("https://todo-node-znuo.onrender.com/api/auth/login",payload)
      console.log("login info", logininfo.data.token)
      localStorage.setItem("token",logininfo.data.token)
      
    } catch (error) {
      console.log("errr", error)
      
    }
    
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
  const signup = ()=>{
    setAuthUsers(false)
    setAdminUser(false)
    navigate('/signup');
  }
  return (
    <div>
      <div className="logincontainer" >
      <h2>Login</h2>
      
      <form onSubmit={login}>
        <div>
        <label htmlFor="email">Enter Email:</label>
        <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Enter Password:</label>
          <input id="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div>
        
        </div>
        
        
        
      </form>
      <button>Login</button>
      <button onClick ={admin}>admin</button>
      <button onClick ={signup}>Sign UP</button>
      </div>
      
      
      
      
    </div>
  )
}

export default Login
