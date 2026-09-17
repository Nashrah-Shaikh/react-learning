import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDeails = () => {
  const { id } = useParams();
  const [details,setDeatils] = useState(null)
  const fetchDetails = async () => {
    try {
      const fetchUser = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
    const data = await fetchUser.json();
    console.log("userDeatails",data)
    setDeatils(data)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDetails()
  },[])
  return <div>
    <div>
    <div>Name:<span>{details?.name}</span></div>
    <div>Username:<span>{details?.username}</span></div>
    <div>Phone NO:<span>{details?.phone}</span></div>
    <div>Email:<span>{details?.email}</span></div>
    
    </div>
  </div>;
};

export default UserDeails;
