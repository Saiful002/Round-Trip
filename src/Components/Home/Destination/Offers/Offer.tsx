import React from 'react'

const Offer = (props:any) => {
    const{name,price,offer,img}=props.place
  return (
    <div className="col-lg-4">
                <div className="card bg-dark text-white w-100">
                    <img src={img} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="pt-5 mt-5">
                        <h3 className="card-title pt-5 text-white">{name}</h3>
                        <a href=""><button className="text-white bg-success border-0 rounded-pill p-2">{offer}</button></a>
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Offer