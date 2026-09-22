import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Aboutshow = () => {
    const {id}= useParams()
    console.log("Aboutdetails",id)
    const [list, setList] = useState()
    const showdata= async() => {
        try {
            const fetchdata = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setList(fetchdata?.data)
            console.log(fetchdata)
        } catch (error) {
            console.log("error",error)
        }

    }
    useEffect (()=>{
        showdata()
    },[])
  return (
    <div>
      <p><span style={{fontWeight:"bold"}}>
        Id:</span>{list?.id}</p>
      <p><span style={{fontWeight:"bold"}}>body:</span>{list?.body}</p>
      <p><span style={{fontWeight:"bold"}}>title:</span>{list?.title}</p>

    </div>
  )

}

export default Aboutshow
