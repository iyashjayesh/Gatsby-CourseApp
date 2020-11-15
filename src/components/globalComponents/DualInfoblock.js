import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function DualInfoblock({heading, src}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <p className="lead text-white mb-5">
                               Yash is a programmer Yash is a programmer Yash is a programmer
                               Yash is a programmer Yash is a programmer Yash is a programmer
                               Yash is a programmer!     
                            </p>
                        </div>
                        <div className="col-4">
                            <div className="card bg-dark">
                                <img className="card-img-top" src={src}/>
                                <div className="card-body">
                                    <h5 className="card-title text-white">Just Click photos</h5>
                                    <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="./">
                                        <button className="btn btn-warning btn-block">
                                            {heading}
                                        </button>
                                    </Link>
                                </div>
                            </div>    
                        </div>
                    </div>
            </div>
        </section>
    )
}
