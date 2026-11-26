import {useContext, useState} from 'react'
import { useNavigate } from 'react-router'
import {Authcontext} from "../context/Context"
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate()
  const {setAuthUsers, setAdminUser} = useContext(Authcontext);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [name, setName]= useState("")
  const signup =async (e)=>{
    e.preventDefault()
    const payload={
      name:name,
      email:email,
      password:password

    }
    try {
      const info = await axios.post("https://todo-node-znuo.onrender.com/api/auth/signup",payload)
      console.log ("signup",info)
      alert("Sign up successful! Please login to continue.")
    } catch (error) {
      console.log("sign up error", error)
      
    }
    setAuthUsers(false)
    setAdminUser(false)
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={signup}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="emai">Email:</label>
          <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="passwod">password:</label>
          <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
