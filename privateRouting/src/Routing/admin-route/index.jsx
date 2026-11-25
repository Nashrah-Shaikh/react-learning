import {useContext} from 'react'
import { authorization } from "../../auth/auth";
import { Navigate } from "react-router";
import { Authcontext } from "../../context/Context";

const AdminRoute = ({ children }) => {
  const {Users,Admin} = useContext(Authcontext)
  if (Admin && Users)
  return <div>{children}</div>;
  return <Navigate to="/" />;
};

export default AdminRoute;
