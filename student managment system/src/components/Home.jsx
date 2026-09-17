import React, { useEffect,useState } from "react"; //It is a react library 
import { Link } from "react-router-dom";

const Home = () => {
  const [todo,setTodo] = useState([])
  const getToday = () => {
    console.log("today Function data")
  }

  function getTomorrow(){
    console.log("Tomorrow Function")
  }
  const getTodo = async () => {
    try {
      const getTodoData = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await getTodoData.json();
      setTodo(data)
      console.log("todoData", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTodo();
    getToday();
    getTomorrow();
  }, []);

  
  return <>{todo.map((result) => (<Link to={`/user/${result.id}`} key={result.id}>
    <div className="container">
    <p>{result.id}</p>
    <h5>{result.name}</h5>
    </div>
  </Link>))}</>
};

export default Home;
