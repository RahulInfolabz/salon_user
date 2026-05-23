import React, { useEffect, useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_BASE_URL;

function Services() {
    return (
        <div>
            <Header />
            <ServicesContent />
            <Footer />
        </div>
    )
}

function ServicesContent() {
    return (
        <>
            <Breadcurmbs pageTitle="Services" />
            <ServicesCards />
            <Appointment />
        </>
    )
}


function ServicesCards() {
    let [services, setServices] = useState([]);
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    async function FetchServices() {
        try {
            setLoading(true)
            let response = await axios.get(`${apiUrl}/services`)
            console.log(response.data);
            setServices(response.data.data);
        } catch (e) {
            setError(e);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }

    useEffect(() => {
        FetchServices();
    }, [])

    if (error) { return <h3>{error}</h3> }



    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Our Services</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            loading ? <h3>Loading.....</h3> : (<>
                                {services ? (<>
                                    {services.map((value, index) => {
                                        return (
                                            <>
                                                <div className="col-md-4">
                                                    <div className="service-item wow fadeIn">
                                                        <div className="thumb">
                                                            <Link to={`/servicedetails/${value._id}`}><img src={value.service_image} style={{ height: "200px" }} alt /></Link>
                                                        </div>
                                                        <div className="service-info text-center">
                                                            <h3><Link to={`/servicedetails/${value._id}`}>{value.service_name}</Link></h3>
                                                            <p>{value.service_description}</p>
                                                            <Link to={`/servicedetails/${value._id}`} className="btn btn-default">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}

                                </>) :
                                    <>
                                        <h1>Services not found.</h1>
                                    </>
                                }
                            </>)
                        }
                    </div>
                </div>
            </section>
        </>
    )

}
export default Services
