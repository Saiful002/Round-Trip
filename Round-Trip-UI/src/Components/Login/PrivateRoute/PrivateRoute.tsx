import React from 'react'
import {Outlet,Navigate, useLocation, useNavigate} from'react-router-dom' 
import useAuth from '../hooks/useAuth';

export const PrivateRoute = () => {
    const {user}=useAuth();
let auth ={'token':false}

user.email?auth={'token':true}:auth ={'token':false};
const location=useLocation();


  return (
    auth.token?<Outlet/>:<Navigate to='/login' replace state={{from:location}}/>
    
  )
}

export default PrivateRoute;