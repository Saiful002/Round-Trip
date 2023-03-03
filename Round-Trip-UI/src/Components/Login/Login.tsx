import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import '../Login/Login.css'
import { useForm } from "react-hook-form";
import useAuth from './hooks/useAuth';


interface LocationState {
  from: {
    pathname: any;
  };
}


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  }; 

  const {signInWithGoogle}=useAuth();
  const location=useLocation();
  const navigate = useNavigate();


const redirectInitialPage=()=>{
  signInWithGoogle()
  .then (()=>{
    navigate((location.state as LocationState).from||'/booking/:id')
    
        })
}



  return (
           
      <div className="login">
        
          <form className='html' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='txt'>Please LOGIN</h1>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-lg-2 col-form-label">Email</label>
    <div className="col-lg-10">
      <input type="email" className="form-control" id="inputEmail3"{...register("email",{ required: true })}/>
      {errors.email && <span className='text-danger'>This field is required</span>}
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-lg-2 col-form-label">Password</label>
    <div className="col-lg-10">
      <input type="password" className="form-control"id="inputPassword3" {...register("password",{ required: true }) }/>
      {errors.password && <span className='text-danger'>This field is required</span>}
      
    </div>
  </div>
  
  <button type="submit" className="btn btn-success">LogIn</button>
  <h4 className='mt-5'>Don't have an account ? Please <NavLink to='/register' className='text-decoration-none text-primary'>Register</NavLink></h4>
  <button onClick={redirectInitialPage} type="submit" className="btn btn-warning">SignIn With Google  <i className="fa-brands fa-google"></i></button>
</form>

    

      </div>


  )
}

export default Login