import React, { useEffect, useState } from 'react'
import '../Destination/Destination.css'
import Offer from './Offers/Offer'
 

const Destination = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
     
  fetch('./tourPackages.JSON')
  .then(res=>res.json())
  .then(data=>setPlaces(data))
    
      
    }, [])



  return (
    /* ================
    Destination part 
    ==================== */
    <section className="container text-center w-100 pt-5 mt-5" id="destination">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h1 className="font-monospace">Popular Destination</h1>
                <p className="font-monospace">Suffered alteration in some form, by injected humour or good day
                    randomised
                    booth anim 8-bit hella wolf moon beard words.</p>
            </div>
        </div>
         {/* =========
                 cards 
               ========  */}
        <div className="row gy-4 cards">
            {
                places.map(place=><Offer 
                place={place}
                ></Offer>)
            }
        </div>
        


    </section>
  )
}

export default Destination