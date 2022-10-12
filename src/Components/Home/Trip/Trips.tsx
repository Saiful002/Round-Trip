import React from 'react'
import pic1 from '../../../Images/Fifth-part/pic-1.jpg'
import pic2 from '../../../Images/Fifth-part/pic-2.jpg'
import pic3 from '../../../Images/Fifth-part/pic-3.jpg'

const Trips = () => {
  return (
   /* =================
        Trips part 
        ================== */
        <section className="container pt-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <h1 className="font-monospace text-center">Recent Trips</h1>

                </div>
            </div>

            {/* <!-- ===============
            More cards 
            ================ --> */}
            <div className="row gy-5  mt-3 ">
                <div className="col-lg-4 col-md-6">
                    <img src={pic1} className="rounded w-100" alt="..."/>
                    <div className="card-text bg-none">
                        <small>Oct 12, 2020</small>
                        <h4>Journeys Are Best Measured In New Friends</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img src={pic2} className="rounded w-100" alt="..."/>
                    <div className="card-text bg-none">
                        <small>Oct 12, 2020</small>
                        <h4>Journeys Are Best Measured In New Friends</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img src={pic3} className="rounded w-100" alt="..."/>
                    <div className="card-text bg-none">
                        <small>Oct 12, 2020</small>
                        <h4>Journeys Are Best Measured In New Friends</h4>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Trips