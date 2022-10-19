import React from 'react'
import { NavLink } from 'react-router-dom'
import Booking from '../../Booking/Booking';

const SinglePlace = (props:any) => {
    const{place,country,offer,img,price,id}=props.SPlace

  return (
    <div className="col-lg-4 shadow">
                <div className="card border-0">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div >
                        <h4 className='text-start pt-2 text-danger'>{price}</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{place}</h5>
                        <p className="card-text">{country}</p>

                        <div className="d-flex justify-content-between align-items-end">
                            <small className="text-muted">
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                            </small>
                            <small>
                                <i className="far fa-clock">{offer}</i>
                            </small>
                        </div>
                        <div className="text-end">
                        <NavLink className="nav-link active" to={`/booking/${id}`} aria-current="page">
                            <button type="button" className="btn btn-success mt-3">Book Now</button>
                            
                            
            
                        
                        
                            </NavLink>
                        

                        
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SinglePlace