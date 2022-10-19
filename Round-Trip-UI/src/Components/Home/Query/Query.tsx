import React from 'react'

const Query = () => {
  return (
    /* =================
        Query Part
    ================= */
    <section className="container-fluid bg-dark p-0">
        <div className="container pb-5">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container text-white text-center justify-content-center p-0">
                    <div className="row align-items-center w-100">
                        <div className="col-lg-3 col-sm-12 w-100">
                            <h3 className="text-white m-5 text-nowrap">Where you want to go?</h3>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                            <input className="bg-dark text-white border border-white p-2 form-control" type="text"
                                name="" id="" placeholder="Where to go?"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3">
                            <input className="bg-dark text-white border border-white p-2  form-control" type="date"
                                name="" id="Date"/>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-3 ">
                            <div className="dropdown ">
                                <button className="btn btn-dark dropdown-toggle border border-white p-2 form-control"
                                    type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Travel type
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">

                                    <li><a className="dropdown-item" href="#">Some option</a></li>
                                    <li><a className="dropdown-item" href="#">Another option</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-danger p-2  form-control">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    </section>

  )
}

export default Query