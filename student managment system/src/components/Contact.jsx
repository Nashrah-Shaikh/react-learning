import {useState} from 'react'
import axios from 'axios'


const Contact = () => {
  const [id, setID] = useState()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [showpost, setShowpost]= useState(null)
  const [loading, setLoading] = useState(false)
  const submitdata =async (e)=>{
    e.preventDefault() 
    console.log(`${id}, ${body}, ${title} `)
    const playload = {
      userId : parseInt(id),
      title: title,
      body: body
    }
    console.log("playLoad",playload)
    setLoading(true)
    try {
      const {data}= await axios.post("https://jsonplaceholder.typicode.com/posts",playload)
      console.log(data)
      setShowpost(data)
    } catch (error) {
      console.log("error", error)
    }
    setLoading(false)
  }
  
  return (
    <div>
      <form onSubmit={submitdata}>
        <div>
        <label htmlFor="userID" >UserId:</label>
        <input type="number" name="userId" value={id} onChange={(e) => setID(e.target.value)}/>
        
        </div>
        <div>
        <label htmlFor="title" >Title:</label>
        <input name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div>
        <label htmlFor="body" >Body:</label>
        <input name="body" value={body} onChange={(e)=>setBody(e.target.value)}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        {loading?<div>loading....</div>:showpost== null ? <div>there is no data yet</div>:
        <div> 
          <h2>Title:{showpost?.title}</h2>
          <h2>Body:{showpost?.body}</h2>
          <h2>UserId:{showpost?.userId}</h2>
          </div>}
      </div>
    </div>
  )
}

export default Contact

