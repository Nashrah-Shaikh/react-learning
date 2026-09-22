import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const About = () => {
  const [showData, setShowData] = useState();
  const fetchpost = async () => {
    try {
      const postdata = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(postdata)
      setShowData(postdata?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchpost();
  }, []);

  return (
    <div>
      {showData?.map((result)=>(

     <div key={result?.id}>
      <Link to={`/about/${result?.id}`}  style={{display:"flex", gap:"10px"}}>
      <h4>{result?.id}</h4> <h4>{result?.title}</h4> 
      </Link>
     </div>
      ))

      }
    </div>
  );
};

export default About;
