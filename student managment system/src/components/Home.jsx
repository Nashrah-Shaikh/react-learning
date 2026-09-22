import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
  const [userList, setUserList]= useState([])
  const fetchData =async()=>{
    try{
      const users = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log("users",users)
      setUserList(users?.data)
      
      

    }catch(err){
      console.log("error",err)
    }
  }

  useEffect(()=> {
    fetchData()
  },[])
  return (
    // userList.map((res)=>(<>{}</>))
    <div>
     {userList?.map((result,index)=>(
      <div key={index}>
        <Link to={`/user/${result?.id}`}>
        <h4>{result?.id}</h4>
        <h4>{result?.name}</h4>
        </Link>
        
      </div>
     ))}
    </div>
  )
}

export default Home
