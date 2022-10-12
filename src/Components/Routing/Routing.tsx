import React from 'react'
import {
  Navigate,
    Routes,
    Route
  } from "react-router-dom";
import Destination from '../Home/Destination/Destination';
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from '../Register/Register';
  

const Routing = () => {
  return (
    <div>
<Routes>
<Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
          
       
    </Routes>
    </div>
  )
}

export default Routing