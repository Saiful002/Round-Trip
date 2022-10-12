import React from 'react'
import '../Carousel/Carousel.css'
import France from '../../../Images/First-part/France.jpg'
import Indonesia from '../../../Images/First-part/Indonesia.jpg'
import Switzerland from '../../../Images/First-part/Switzerland.jpg'

const Carousel = () => {
  return (
    /* =====================
         carousel part 
        ========================*/
        <section className="container-fluid p-0">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={France} className="d-block w-100"alt="..."/>
                        <div className="carousel-caption d-sm-block d-md-block carousel-text">
                            <h5>France</h5>
                            <p>Pexel perfect design with awesome content</p>
                            <a href="#"><button className="btn btn-success btn-lg">Explore Now</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Indonesia} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-sm-block d-md-block carousel-text">
                            <h5>Indonesia</h5>
                            <p>Pexel perfect design with awesome content</p>
                            <a href="#"><button className="btn btn-success btn-lg">Explore Now</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Switzerland} className="d-block w-100" alt=" ..."/>
                        <div className="carousel-caption d-sm-block d-md-block carousel-text">
                            <h5>Switzerland</h5>
                            <p>Pexel perfect design with awesome content</p>
                            <a href="#"><button className="btn btn-success btn-lg">Explore Now</button></a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
  )
}

export default Carousel