import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function Infoblock({ heading }) {
    return (
        <section className="bg-theme my-5 py-4 ">
            <div className="container" >
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Quis adipisicing amet fugiat sunt proident velit ea adipisicing velit veniam cupidatat pariatur sint dolore. 
                            Consectetur et ea tempor sit ex aute incididunt aliquip. Laborum occaecat eu esse ut cillum sit. 
                            Exercitation excepteur culpa ea pariatur nulla voluptate ex eiusmod et elit ipsum est consectetur.
                        </p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
