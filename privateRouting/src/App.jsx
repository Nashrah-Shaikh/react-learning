import React from "react";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import PublicRoute from "./Routing/public-route";
import PrivateRoute from "./Routing/private-route";
import AdminRoute from "./Routing/admin-route";
import Aiprompt from "./components/Aiprompt";
import Moviedetails from "./components/Moviedetails";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/moviedetails/:id" element={<PrivateRoute><Moviedetails /></PrivateRoute>} />
      <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
      <Route path="/aiprompt" element={<PrivateRoute><Aiprompt/></PrivateRoute>}/>
    </Routes>
  );
};

export default App;
