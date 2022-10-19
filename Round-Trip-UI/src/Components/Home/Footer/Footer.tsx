import React from 'react'
import '../Footer/Footer.css'
import logo from '../../../Images/Icon/logo.png'
import pto1 from '../../../Images/Footer/pto-1.jpg'
import pto2 from '../../../Images/Footer/pto-2.jpg'
import pto3 from '../../../Images/Footer/pto-3.jpg'
import pto4 from '../../../Images/Footer/pto-4.jpg'
import pto5 from '../../../Images/Footer/pto-5.jpg'
import pto6 from '../../../Images/Footer/pto-6.jpg'

const Footer = () => {
  return (
    <footer id="about">
        <section className="container">
            <div className="row text-white p-5">
                <div className="col-lg-4 col-md-6">
                    <img src={logo} style={{width: "138px", height: "100px"}} alt=""/>
                    <p className="text-white-50">5th flora, 700/D kings road, green
                        lane New York-1782
                        +10 367 826 2567
                        contact@carpenter.com</p>
                    <p className="d-flex justify-content-evenly fs-5">
                        <a href=""><i className="fab fa-facebook text-secondary"></i></a>
                        <a href=""><i className="fab fa-instagram-square text-secondary"></i></a>
                        <a href=""><i className="fab fa-linkedin text-secondary"></i></a>
                        <a href=""><i className="fab fa-youtube-square text-secondary"></i></a>
                    </p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h4>Company</h4>
                    <span>
                        <p><a href="#" className="text-white-50 text-decoration-none">Pricing</a></p>
                        <p><a href="#" className="text-white-50 text-decoration-none">About</a></p>
                        <p><a href="#" className="text-white-50 text-decoration-none">Gallery</a></p>
                        <p><a href="#" className="text-white-50 text-decoration-none">Contact</a></p>
                    </span>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4>Popular Destination</h4>
                    <div className="d-flex">
                        <span className="col-lg-6">
                            <p><a href="#" className="text-white-50 text-decoration-none">Indonesia</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">India</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">Franch</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">Italy</a></p>
                        </span>
                        <span className="col-lg-6">
                            <p><a href="#" className="text-white-50 text-decoration-none">America</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">Switzerland</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">Canada</a></p>
                            <p><a href="#" className="text-white-50 text-decoration-none">England</a></p>
                        </span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <h4>Instagram</h4>
                    <span className="col-lg-4 col-sm-6">
                        <img src={pto1} className="p-1" alt=""/>
                    </span>
                    <span className="col-lg-4 col-sm-6">
                    <img src={pto2} className="p-1" alt=""/>
                    </span>
                    <span className="col-lg-4 col-sm-6">
                    <img src={pto3} className="p-1" alt=""/>
                    </span>
                    <span className="col-lg-4 col-sm-6">
                    <img src={pto4} className="p-1" alt=""/>
                    </span>
                    <span className="col-lg-4 col-sm-6">
                    <img src={pto5} className="p-1" alt=""/>
                    </span>
                    <span className="col-lg-4 col-sm-6">
                    <img src={pto6} className="p-1" alt=""/>
                    </span>
                </div>
            </div>
        </section>
        <hr className="text-white"/>
        <p className="text-center mb-0 py-4"><small className="text-white-50 ">Copyright ©2021 All rights reserved | This
                template is
                made
                with <i className="far fa-smile-wink"> by <span className="text-danger"> Chowdhury </span></i>
            </small>
        </p>
    </footer>
  )
}

export default Footer