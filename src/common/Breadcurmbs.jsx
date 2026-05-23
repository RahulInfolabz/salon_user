import React from 'react'
import { Link } from 'react-router-dom'

function Breadcurmbs(props) {
    return (
        <div>
            <section className="inner-page-banner" style={{ backgroundImage: 'url(img/banner/gallery-banner.jpg)' }}>
                <div className="page-banner-caption">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>{props.pageTitle}</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active">{props.pageTitle}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end banner */}

        </div>
    )
}

export default Breadcurmbs
