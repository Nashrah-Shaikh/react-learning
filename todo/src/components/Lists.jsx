import { useState } from "react";

const Lists = () => {
  const [showlist, setShowlist] = useState([]);
  const [task, setTask] = useState("");
  const [updateBtn,setUpdateBtn] = useState(false)
  const  [trindex,setTrindex] = useState()
  const todolist = (e) => {
    e.preventDefault();
    setShowlist((pre) => {
      if (!pre.includes(task)) {
        return [...pre, task];
      }else{
        alert("this item is alread exist")
        return [...pre]
      }
    });
    setTask("")
    console.log(task);
  };
  const deleteTask = (result) => {
    console.log("delete task", result);
    setShowlist((pre) => {
      return pre.filter((task) => task !== result);
    });
  };

  const edittask = (result, trindex)=>{
    setTask(result)
   setUpdateBtn(true)
   setTrindex(trindex)

  }

  const updateTask = (e) => {
    e.preventDefault()
    console.log(trindex)
     setShowlist((pre) => {
        return pre.map((result,index)=>(
            index == trindex ? [...task] : result
        ))
    })
    setUpdateBtn(false)
    setTask("")
    // console.log("task",task)
  }
  return (
    <div>
      <form onSubmit={updateBtn?updateTask:todolist}>
        <div>
          <label htmlFor="task">Task</label>
          <input
            id="task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {updateBtn?<button>Update</button>:
          <button>Save</button>}
        </div>
      </form>
      <div>
        {showlist?.map((result, index) => (
          <div>
            <p key={index}>
              {index}.{result}
            </p>
            <button onClick={() => deleteTask(result)}>delete</button>
            <button onClick={()=>edittask(result,index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
