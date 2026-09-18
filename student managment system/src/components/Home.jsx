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
     {userList?.map((result)=>(
      <div>
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
