import React from "react";
import { Routes,Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login"

// all the routing using the routing library should be done from here; 
import Home from "../Pages/Home"
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return <div>
  <Routes>
    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
    <Route  path="/login" element={<Login/>}/>
   <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>

  </Routes>

  </div>;
};

export default AllRoutes;
