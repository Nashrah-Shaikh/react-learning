import React, { useContext } from "react";
import { Navigate } from "react-router";
import {Authcontext} from "../../context/Context"

const PublicRoute = ({ children }) => {
  const {Users,Admin} = useContext(Authcontext)
  if (Users && Admin) {
    return <Navigate to="/admin" />;
  } else if (Users) {
    return <Navigate to="/dashboard" />;
  } else {
    return <div>{children}</div>;
  }
};

export default PublicRoute;
