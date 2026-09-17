import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [userList, setUserList]= useState([])
  const fetchData =async()=>{
    try{
      const users = await fetch("https://jsonplaceholder.typicode.com/users")
      const jsonList = await users.json()
      setUserList(jsonList)
      console.log(jsonList)

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
     {userList?.map((result)=> (
      <Link to={`/user/${result?.id}`} style={{display:"flex",gap:"10px"}} >
      
      <h3 >{result?.id}</h3>
      <h3>{result?.website}</h3>
      </Link>
     ))}
    </div>
  )
}

export default Home
