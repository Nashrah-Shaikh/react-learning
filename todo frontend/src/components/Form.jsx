import axios from 'axios'
import {useState} from 'react'
import Todoservice from './Todoservice'

const Form = () => {
    const [dueDate, setDueDate]= useState("")
    const [title, setTitle] = useState("")
    const [priority, setPriority]= useState("")
    const [discription, setDiscription]= useState("")
    const [show, setShow] = useState("")
    const [refresh, setRefresh]= useState(false)
    const [id, setId]= useState("")
    const [updateform, setUpdateform] = useState(false)
    
    
        const formdata = async (e)=> {
        e.preventDefault()
        console.log(`${dueDate}, ${title}, ${priority}`)
        const payload = {
        title:title,
        description:discription,
        priority:priority,
        dueDate: dueDate
}
        try {
            const {data} = await axios.post("https://todo-node-znuo.onrender.com/api/todos",payload)
            console.log(data.data)
            setShow(data.data)
            setRefresh(!refresh)
            
        } catch (error) {
            console.log("error",error)
            
        }
        
    }
    const getSingleData =async(ids)=>{
        try {
            const {data} =await axios.get(`https://todo-node-znuo.onrender.com/api/todos/${ids}`)
            console.log("singledata",data)
            setTitle(data.data.title)
            setPriority(data.data.priority)
            setDiscription(data.data.description)
            setId(data.data._id)
            setUpdateform(true)
            const date = new Date(data.data.dueDate)
            const day = String(date.getDate()).padStart(2, "0");
            console.log(day)
            const month = String(date.getMonth() + 1).padStart(2, "0");
            console.log(month)
            const year = date.getFullYear();
            console.log(year)
            setDueDate(`${year}-${month}-${day}`)
        } catch (error) {
            console.log("error", error)
        }
    }
        const updateData =async(e)=>{
            e.preventDefault()
            const payload = {
            title:title,
            description:discription,
            priority:priority,
            dueDate: dueDate
            }
              try {
                const data = await axios.put(`https://todo-node-znuo.onrender.com/api/todos/${id}`,payload)
                
              } catch (error) {
                console.log("errr",error)
              }
              setRefresh(!refresh)
              setUpdateform(false)
        }
  return (
    <div>
        <h1>Form</h1>
        <form
        //  onSubmit={formdata}
         >

           
            <div>
            <label htmlFor='title'>Title:</label>
            <input name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div>
            <label htmlFor='priority'>Priority:</label>
            <input name="priority" value={priority} onChange={(e)=> setPriority(e.target.value)}/>
            </div>
            <div>
            <label htmlFor='discription'>discription:</label>
            <input name="discription" value={discription} onChange={(e)=> setDiscription(e.target.value)}/>
            </div>
             <div>
            <label htmlFor='dueDate'>DueDate:</label>
            <input type="Date" name="DueDate" value={dueDate} onChange={(e)=> setDueDate(e.target.value)}/>
            </div>
            <div>
                {updateform==false?
             <button onClick={formdata}>Submit</button>:  
             <button onClick={updateData}>Update</button> 
                }
            </div>
            
        </form>
        <div>
            <h2>DueDatw:{show?.dueDate}</h2>
            <h2>Title:{show?.title}</h2>
            <h2>Priority:{show?.priority}</h2>
            <h2>Discription:{show?.description}</h2>
        </div>
        <div> 
            <Todoservice getSingleData={getSingleData} refresh={refresh}/>
        </div>

    </div>
  )
}

export default Form