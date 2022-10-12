import React from 'react'
import { NavLink } from 'react-router-dom'
import './../Register/Register.css'
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  password: any;
  address: any;
}

const Register = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return (
    <div className='register'>
        <form className="row g-3 control" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
        <label className="form-label text-white">First name</label>
    <input type="text" className="form-control" placeholder="First name"{...register("firstName")}/>
  </div>
  <div className="col-md-6">
  <label className="form-label text-white">Last name</label>
    <input type="text" className="form-control"placeholder="Last name"{...register("lastName")}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
    <input type="email" className="form-control"placeholder="E-mail" {...register("email")}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label text-white">Password</label>
    <input type="password" className="form-control" placeholder="Password" {...register("password")}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label text-white">Address</label>
    <input type="text"className="form-control" {...register("address")} placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-success px-4 py-3 text-bold">Register</button>
  </div>
  <h4 className='mt-5 text-white'>Already have an account ? Please <NavLink to='/login' className='text-decoration-none text-warning'>Login</NavLink></h4>
</form>

    </div>
  )
}

export default Register