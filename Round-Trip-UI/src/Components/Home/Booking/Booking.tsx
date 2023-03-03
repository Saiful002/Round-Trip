import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


type DataType={
  img:any;
  price:any;
  offer:any;
  place:any;
  country:any
}
const Booking = () => {
 const {id}=useParams();


  const [bookingPlaces,setBookingPlaces]=useState({}as DataType)

  useEffect(() => {
   
fetch(`http://localhost:5000/bookings/${id}`)
.then(res=>res.json())
.then(data=>setBookingPlaces(data))


  
    
  }, [])

  

const{img,price,offer,place,country}=bookingPlaces

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
                    </div>
                </div>
            </div>
  )
}

export default Booking