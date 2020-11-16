import React from 'react'
import Heading from '../globalComponents/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>        
                </form>
            </div>
        </section>
    )
}
