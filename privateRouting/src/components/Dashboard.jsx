import React, { useContext, useEffect, useState } from 'react'
import { Authcontext } from '../context/Context';
import { useNavigate } from 'react-router';
import {CastDetails} from '../context/MovieContext'
import { Link } from "react-router"
import axios from 'axios'

const Dashboard = () => {
  const [show, setShow] = useState([])
  const {setCast} = useContext(CastDetails)
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
    localStorage.removeItem("token")
    setAuthUsers(false)
    navigate('/');
    // window.location.reload()
  }

  const castData = (result) => {
     console.log("castdetails",result)
     navigate(`/moviedetails/${result?.id}`)
     setCast(result?.casts)
     

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
            <div onClick={() => castData(result)} >CastDetails{result?.movie_id}</div>
            
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Dashboard
