import { useState } from "react"
import axios from 'axios'

const Contact = () => {
 const [title,setTitle] = useState("")
 const [body, setBody] = useState("");
 const [userId,setUserId] = useState();
 const [showdata, setShowdata] = useState(null);

 const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
    title:title,
    body:body,
    userId:parseInt(userId)
    }
    console.log(`${userId}, ${title}, ${body}`)
    console.log("call payload",payload)
    try {
      const {data} = await axios.post(`https://jsonplaceholder.typicode.com/posts`,payload)
      console.log("success data",data)
      setShowdata(data)
    } catch (error) {
      console.log("post error---->",error)
    }
 }
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
        <label htmlFor="UserId" >
          UserId
        </label>
        <input id="UserId" type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-input">
        <label htmlFor="title" >
          Title
        </label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-input">
        <lable htmlFor="body">
          Body
          </lable>
          <input value={body} onChange={(a) => setBody(a.target.value)} />
        </div>
        <div>
          <button className="sbt-btn">Submit</button>
        </div>
        {showdata === null ?<div>There is no data yet</div>:
        <div>
          <h2>title:{showdata?.title}</h2>
          <h4>Body:{showdata?.body}</h4>
        </div>
        }
      </form>
      </>
    
  )
}  

export default Contact
