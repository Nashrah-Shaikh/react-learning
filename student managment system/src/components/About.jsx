import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const About = () => {
  const [showData, setShowData] = useState();
  const fetchpost = async () => {
    try {
      const postdata = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      console.log(postdata);
      setShowData(postdata?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchpost();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent:"center", flexWrap: "wrap", gap: "15px" }}>
      {showData?.map((result) => (
        <div
          key={result?.id}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
            width:"16%"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid black",
            }}
          >
            <h4>{result?.id}</h4> <h4>{result?.title}</h4>
          </div>
          <div style={{borderBottom:"1px solid black"}}>
            <p>{result?.body}</p>
          </div>
          <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
          <Link
            to={`/about/${result?.id}`}
            style={{ display: "flex", textDecoration:"none" }}
          >{result?.userId}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
