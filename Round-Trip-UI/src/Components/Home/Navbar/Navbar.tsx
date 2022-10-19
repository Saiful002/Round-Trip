import React from 'react'
import {
     NavLink
   } from "react-router-dom";
import logo from '../../../Images/Icon/logo.png'
import useAuth from '../../Login/hooks/useAuth';

const Navbar = () => {
     const {user, signingOut}=useAuth();
  return (
    
    /* ===================
         1st navbar part 
        ==================== */
        
        <section className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light navigation justify-content-center">
        {user.email? <div>
                            <img className='border rounded-circle border-dark ms-3' style={{"width":"20%"}} src={user.photoURL} alt="" />
                <span>{user.displayName}</span>
               
            </div>: <div></div>}
            <div className="container m-0">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" width="138" height="100" className="d-inline-block align-text-top"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                             <NavLink className="nav-link active" to="/" aria-current="page">Home</NavLink>
                            {/* <a className="nav-link active"aria-current="page">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active ms-3" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link active ms-3" to="/destination">Destination</NavLink>
                            {/* <a className="nav-link active ms-3">Destination</a> */}
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle active ms-3" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Destination details</a></li>
                                <li><a className="dropdown-item" href="#">Elements</a></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle active ms-3" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blog
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                <li><a className="dropdown-item" href="#">Single-Blog</a></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active ms-3" href="#"  aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    <ul className="fs-3  navbar-nav me-5 mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <a href=""><i className="fab fa-facebook text-secondary me-3"></i></a>
                            <a href=""><i className="fab fa-instagram-square text-secondary me-3"></i></a>
                            <a href=""><i className="fab fa-linkedin text-secondary me-3"></i></a>
                            <a href=""><i className="fab fa-youtube-square text-secondary me-3"></i></a>
                        </li>
                    </ul>

                    {/*==================
                    modal part 
                    ===================== */ }

                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
               {/* ====================
               Button trigger modal
               ==========================
                */}
                            <button type="button" className="btn btn-danger mt-3" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Search
                            </button>
            


                   {/* ==================
                          Modal
                    ================== 
                    */}

                            <div className="modal fade " id="exampleModal" 
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">

                                        <div className="modal-body d-flex">
                                            <input className=" w-100" type="search" name="" id=""
                                                placeholder="Search Here"/>
                                            <button type="button" className="btn btn-danger">Search</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <div >
                            {/* ====================
                        Login Condition modal
                        ==========================
                            */}
                        
 <div className='text-end'>
        
    {user.email ?
                            <button type="button" className="nav-item btn btn-danger mt-2 mx-2">
                             <NavLink className="nav-link active text-white p-1" to="/home"  onClick={signingOut}>LogOut <i className="fa-solid fa-right-to-bracket"></i></NavLink>
                            
                        </button> : 
                
                            <button type="button" className="nav-item btn btn-success mt-2 mx-2">
                             <NavLink className="nav-link active text-white p-1" to="/login">LogIn <i className="fa-solid fa-right-to-bracket"></i></NavLink>
                        </button>}
    </div> 
                        
                       
                    </div>
                        
                    </ul>
                    
                        

                </div>
            </div>
            
        </nav>
        
    </section>
    
  )
}

export default Navbar