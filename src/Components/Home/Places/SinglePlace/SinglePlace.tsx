import React from 'react'

const SinglePlace = (props:any) => {
    const{place,country,update,img}=props.SPlace
  return (
    <div className="col-lg-4 shadow">
                <div className="card border-0">
                    <img src={img} className="card-img-top" alt="..."/>
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
                            <small className="text-muted">
                                <i className="far fa-clock">{update} days</i>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SinglePlace