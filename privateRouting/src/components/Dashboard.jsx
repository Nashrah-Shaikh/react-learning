import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../context/Context';
import { useNavigate } from 'react-router';
import axios from 'axios'

const Dashboard = () => {
  const [show, setShow] = useState([])
  const movielist = async()=>{
    try {
      const {data} = await axios.get("https://jsonfakery.com/movies/simple-paginate")
      console.log(data.data)
      setShow(data.data)
    } catch (error) {
      console.log("err", error)
      
    }

  }
  const {setAuthUsers} = useContext(Authcontext);
  const navigate = useNavigate()
  const logout = () => {
    // localStorage.removeItem("auth")
    setAuthUsers(false)
    navigate('/login');
    // window.location.reload()
  }
  useEffect (()=>{
    movielist()
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <div style={{display:"flex",justifyConten:"center", flexWrap:"wrap", gap:"50px", margin:"100px"}}>
        {show?.map((result)=>(
          <div  style={{border:"1px solid black",borderRadius:"15px",padding:"10px", width:"500px", }}
          key={result?.id}>
            <img src={result?.poster_path} style={{width:"100%", marginLeft:"auto", marginRight:"auto", height:"500px"}}/>
            <h3 style={{color:"Blue"}}>Movie Name:{result?.original_title}</h3>
            <h4>release_date:{result?.release_date}</h4>
            <h3>language:{result?.original_language}</h3>
            <p>overview:{result?.overview}</p>
            
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Dashboard
