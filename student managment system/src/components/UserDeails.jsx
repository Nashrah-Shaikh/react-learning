
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import axios from 'axios'
const UserDeails = () => {
const {id}= useParams()
console.log("id-number",id) 
const [showData, setShowData] = useState(null)
const fetchDetails=async() => {
  try{
    const userdetails = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(userdetails)
    setShowData(userdetails?.data)
  }catch(error){
    console.log("error",error)

  }
} 

useEffect(() => {
fetchDetails()
},[])
  return (
    <div>
      <h4>{name}</h4>
      
      <h4>Name:{showData?.name}</h4>
      <h4>Username:{showData?.username}</h4>
      <h4>Phone Number:{showData?.phone}</h4>
      <p>Address:{showData?.address.city}</p>
      <p>company:{showData?.company.name}</p>
      
    </div>
  )
}

export default UserDeails



