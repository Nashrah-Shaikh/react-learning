import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Aboutshow = () => {
    const {id}= useParams()
    console.log("Aboutdetails",id)
    const [list, setList] = useState()
    const showdata= async() => {
        try {
            const fetchdata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const jsondata = await fetchdata.json()
            console.log(jsondata)
            setList(jsondata)
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
