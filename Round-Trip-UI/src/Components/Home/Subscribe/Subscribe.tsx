import React from 'react'
import extra from '../../../Images/Third-part/extra.jpg'


const Subscribe = () => {
  return (
    /* ===============
    Subscribe part 
    =============== */
    <section className="container-fluid pt-5 mt-5 px-0">
        <div className="card bg-dark text-white w-100">
            <img src={extra}className="card-img img-fluid" style={{height: "290px"}} alt="..."/>
            <div className="card-img-overlay d-flex align-items-center flex-column p-5">
                <div className="col-lg-6 col-md-6 col-sm-12 text-white">
                    <h2>Subscribe Our Newsletter</h2>
                    <p>Subscribe newsletter to get offers and about new places to discover.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
                    <div>
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Your Email"/>

                    </div>
                    <div>
                        <button type="submit" className="btn btn-danger ">Subscribe</button>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Subscribe