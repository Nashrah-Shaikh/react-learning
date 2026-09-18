import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [showData, setShowData] = useState();
  const fetchpost = async () => {
    try {
      const postdata = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const jsonpost = await postdata.json();
      console.log(jsonpost);
      setShowData(jsonpost);
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

     <div>
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
