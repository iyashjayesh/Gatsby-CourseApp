import React from 'react'

export default function Teamphotosection() {
    return (
        <div className="row">
            <div className="col-10 col-sm-10 mx-auto">
                <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Member XYZ</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Founder</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/1816606/pexels-photo-1816606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Member XYZ</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small class="text-muted">XYZ</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/3541390/pexels-photo-3541390.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Member XYZ</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small class="text-muted">XYZ</small></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
