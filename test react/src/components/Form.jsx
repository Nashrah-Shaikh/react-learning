import axios from 'axios'
import {useState, useEffect} from 'react'

const Form = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority]= useState("")
    const [Duedate, setDuedate]= useState("")
    const [show, setShow]= useState("")
    const [tododata, setTododata]= useState([])
    const [refresh, setRefresh] = useState(false)
    const [formUpdate, setformUpdate]= useState(false)
    const [id, setId] = useState()

   const postdata = async(e)=>{
    e.preventDefault()
    console.log(`${title},${description},${priority},${Duedate}`)
    const payload={
    title:title,
    description:description,
    priority:priority,
    dueDate:Duedate
    }
    try {
        const {data} = await axios.post("https://todo-node-znuo.onrender.com/api/todos", payload)
        console.log(data.data)
        setShow(data.data)
        setRefresh(!refresh)
    } catch (error) {
        console.log("errorr", error)
        
    }
   }
    const getdata =async () =>{
    try {
        const {data} = await axios.get("https://todo-node-znuo.onrender.com/api/todos")
        console.log(data.data)
        setTododata(data.data)
    } catch (error) {
        console.log("errorr", error)
        
    }
    
    }
    const getdataid =async (id)=>{
        try {
            const {data} = await axios.get(`https://todo-node-znuo.onrender.com/api/todos/${id}`)
            console.log(data.data)
            setTitle(data.data.title)
            setDescription(data.data.description)
            setPriority(data.data.priority)
            setformUpdate(true)
            setId(data.data._id)
        } catch (error) {
            console.log("error", error)
            
        }
    }
    const updatedata =async (e)=>{
        e.preventDefault()
        const payload={
    title:title,
    description:description,
    priority:priority,
    dueDate:Duedate
    }
        try {
            const {data} = await axios.put(`https://todo-node-znuo.onrender.com/api/todos/${id}`,payload);
            console.log("update data",data)
            setRefresh(!refresh)
            setformUpdate(false)
            setTitle("");
            setDescription("");
            setPriority("");
            setDuedate("");

        } catch (error) {
            console.log("update error",error)
        }
    }
    useEffect(()=>{
        getdata()
    },[refresh])

    
  return (
    <div>
      <h1>form</h1>
      <form>
       <div>
        <label htmlFor="title">Title:</label>
       <input id="title" type="txt" value ={title} onChange={(e)=> setTitle(e.target.value)}/> 
       </div>
       <div>
        <label htmlFor="description">Description:</label>
       <input id="description" type="txt" value={description} onChange={(e)=> setDescription(e.target.value)} /> 
       </div>
       <div>
        <label htmlFor="priority">Priority:</label>
       <select id="priority" value={priority} onChange={(e)=> setPriority(e.target.value)} >
        <option></option>
        <option>high</option>
        <option>medium</option>
        <option>low</option>
       </select>
      </div>
       <div>
        <label htmlFor="Duedate">Duedate:</label>
       <input id="Duedate" type="date" value={Duedate} onChange={(e)=>setDuedate(e.target.value)} /> 
       </div>
       <div>
        {formUpdate== false?
        <button onClick={postdata} >Submit</button>:
        <button onClick={updatedata}>Update</button>
       }

       </div>
      </form>
      <div>
        <h3>Title:{show?.title}</h3>
        <h3>description:{show?.description}</h3>
        <h3>Priority:{show?.priority}</h3>
        <h3>DueDate:{show?.Duedate}</h3> 
      </div>

      <table style={{border:"1px solid black"}}>
        
        <thead>
            <tr>
                <th style={{border:"1px solid black"}}>title</th>
                <th style={{border:"1px solid black"}}>description</th>
                <th style={{border:"1px solid black"}}>priority</th>
                <th style={{border:"1px solid black"}}>Duedate</th>
            </tr>
        </thead>
        <tbody>
            
                {tododata?.map((result)=> (
                    <tr>
                <td>{result?.title}</td>
                <td>{result?.description}</td>
                <td>{result?.priority}</td>
                <td>{result?.dueDate}</td>
                <button onClick={()=>getdataid(result?._id)}>Update</button>
                </tr>
                ))}
        </tbody>

      </table>
    </div>

    
  )
}

export default Form
