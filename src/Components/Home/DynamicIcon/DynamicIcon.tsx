import React from "react"


const DynamicIcon = () => {
  return (
   /* ======================
        Icon part 
        ====================*/
        <section className="container pt-5 mt-5">
            <div className="row gx-3 gy-3">
                <div className="col-lg-4 col-md-4 text-center">
                    <span>
                        <i className="fas fa-subway fs-1 text-danger"></i>
                    </span>
                    <h3>Comfortable Journey</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <span>
                        <i className="fas fa-hotel fs-1 text-danger"></i>
                    </span>
                    <h3>Luxuries Hotel</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <span>
                        <i className="fas fa-globe-europe fs-1  text-danger"></i>
                    </span>
                    <h3>Travel Guide</h3>
                    <p>A wonderful serenity has taken to the possession of my entire soul.
                    </p>
                </div>
            </div>
        </section>
  )
}

export default DynamicIcon