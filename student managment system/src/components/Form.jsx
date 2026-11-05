import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Form = () => {
    const[name, setName]= useState({
        name:"",
        email:"",
        id:""
    })
    const[showdata, setShowdata] = useState([])
    const fetchdata = async ()=>{
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(data)
            setShowdata(data)
        } catch (error) {
            console.log("error",error)
            
        }
    }
    const handleChange = (e) => {
       const {name,value} = e.target;
       setName((prev) => ({...prev,[name]:value}))
    }

    const handleSubmit = () => {
        console.log("name",`${name.name} & ${name.email} & ${name.id}`)
        // console.log("email",name.email)
        // console.log("id",name.id)
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
      <input placeholder="Name" type="text" name="name" value={name.name} onChange={handleChange}/>
      <input placeholder="email" type="email" name="email" value={name.email} onChange={handleChange}/>
      <input placeholder="id" type="text" name="id" value={name.id} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>

      <div>{showdata?.map((result)=>(
        <div key={result.id}>
            <h4>Id:{result?.id}</h4>
            <h4>Name:{result?.name}</h4>
        </div>
      ))}

      </div>
      
    </div>
  )
}

export default Form
