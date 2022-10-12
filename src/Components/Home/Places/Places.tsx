import React, { useEffect, useState } from 'react'
import miami from '../../../Images/Fourth-part/miami.jpg'
import florida from '../../../Images/Fourth-part/florida.jpg'
import sanFransisco from '../../../Images/Fourth-part/san fransisco.jpg'
import saudiArabia from '../../../Images/Fourth-part/saudi arabia.jpg'
import singapore from '../../../Images/Fourth-part/singapore.jpg'
import turkey from '../../../Images/Fourth-part/turkey.jpg'
import SinglePlace from './SinglePlace/SinglePlace'


const Places = () => {
    const [SinglePlaces, setSinglePlaces] = useState([]);

    useEffect(() => {
     
  fetch('./singlePlaces.JSON')
  .then(res=>res.json())
  .then(data=>setSinglePlaces(data))
    
      
    }, [])

  return (
    /* =======================
    Popular place part
    ========================= */
    <section className="container text-center w-auto pt-5 mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h1 className="font-monospace">Popular Places</h1>
                <p className="font-monospace">Suffered alteration in some form, by injected humour or good day
                    randomised
                    booth anim 8-bit hella wolf moon beard words.</p>
            </div>
        </div>

        {/* <!-- ================
        cards part
        ================ --> */}
        <div className="row gy-4">
            
        {
                SinglePlaces.map(SPlace=><SinglePlace
                   SPlace={SPlace}
                ></SinglePlace>)
            }

        </div>
        <div>
            <button type="submit" className="btn btn-danger mt-5 px-5 py-3">More Places</button>
        </div>
    </section>
  )
}

export default Places