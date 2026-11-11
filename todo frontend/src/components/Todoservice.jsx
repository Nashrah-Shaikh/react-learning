import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


const Todoservice = ({refresh, getSingleData}) => {
  const [showdata, setShowdata]=useState([])
  const [disableBtn, setDisable]=useState(false)

  const getdata = async () => {
    try {
      const {data} = await axios.get(
        "https://todo-node-znuo.onrender.com/api/todos"
      );

      console.log("Tododata", data.data);
      setShowdata(data.data)
    } catch (error) {
      console.log("error", error);
    }
  };
  const deletetodo=async(id)=>{
    setDisable(true)
    try {
      const deletedata = await axios.delete(`https://todo-node-znuo.onrender.com/api/todos/${id}`)
      console.log(deletedata)
      getdata();
    } catch (error) {
      console.log("err", error)
      
    }

    setDisable(false)
  console.log("deleteid",id)
  }
  const completetodo =async(id)=>{
    setDisable(true)
    try {
      const compdata = await axios.patch(`https://todo-node-znuo.onrender.com/api/todos/${id}/toggle`)
      alert("Task Completed!!")
      getdata();
    } catch (error) {
      console.log("errrr", error)
      
    }

  setDisable(false)
  }
  useEffect(() => {
    getdata();
  }, [refresh]);

  return (

    <table style={{border:"1px solid black",padding:"10px"}}>
      
      <tbody>
      {showdata?.map((result)=>(
        <tr key={result?._id} >
          <td style={{border:"1px solid black",padding:"10px"}}>{result?.title}</td>
          <td style={{border:"1px solid black",padding:"10px"}}>{result?.description}</td>
          <td style={{border:"1px solid black",padding:"10px"}}>{result?.priority}</td>
          <td style={{border:"1px solid black",padding:"10px"}}>{result?.completed==true?"True":"False"}</td>
          <td style={{border:"1px solid black",padding:"10px"}}>{result?.dueDate}</td>
          <td style={{border:"1px solid black",padding:"10px"}}>
          <button disabled={disableBtn} onClick={()=>deletetodo(result?._id)} >DELETE</button>
           <button onClick={()=>getSingleData(result?._id)} >UPDATE</button>
           <button disabled={disableBtn} onClick={()=>completetodo(result?._id)}>COMPLETED</button>
           </td>
        </tr>
        

        
      ))}
      </tbody>
    </table>
  );
};

export default Todoservice;