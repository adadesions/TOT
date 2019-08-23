import React from 'react'
import '../assets/css/Information.css'

export default function Information() {
    return (
        <div className="information-component container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <div className="img-info-section container-fluid">
                        <h1>Information!</h1>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="text-info-section container-fluid">
                        <p>
                            Javascript ES6 and ReactJS Course <br />
                            Today is the second of the course <br />
                            Hopefully, everyone enjoys my class!!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}