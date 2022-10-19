import React from 'react'
import {
  Navigate,
    Routes,
    Route
  } from "react-router-dom";
import Booking from '../Home/Booking/Booking';
import Destination from '../Home/Destination/Destination';
import Home from "../Home/Home";
import AuthProvider from '../Login/Contexts/AuthProvider';
import Login from "../Login/Login";
import Register from '../Register/Register';
  

const Routing = () => {
  return (
    <div>

       <AuthProvider>
       <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/booking/:id" element={<Booking/>}/>
          
       
    </Routes>
       </AuthProvider>
    </div>
  )
}

export default Routing