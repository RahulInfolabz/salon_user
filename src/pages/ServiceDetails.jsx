import React, { useEffect, useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import api from '../utils/AxiosConfig'
const apiUrl = import.meta.env.VITE_BASE_URL;

function ServiceDetails() {
    return (
        <div>
            <Header />
            <ServiceDetailsContent />
            <Footer />
        </div>
    )
}


function ServiceDetailsContent() {
    return (
        <>
            <Breadcurmbs pageTitle="Service Details" />
            <ServiceDetailSection />
        </>
    )
}

function ServiceDetailSection() {
    let id = useLocation().pathname.split("/")[2];
    let [servicedetails, setServiceDetails] = useState({});
    let [booking, setbooking] = useState({
        service_id: id,
        booking_date: "",
        notes: ""
    });

    let [error, setError] = useState("");

    let [loading, setLoading] = useState(true);

    let navigate = useNavigate();

    async function FetchServiceDetails() {
        try {
            let response = await axios.get(`${apiUrl}/services/${id}`);
            console.log(response.data.data);
            setServiceDetails(response.data.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false)
        }
    }


    function handelInputchange(e) {
        setbooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }


    console.log(booking);



    async function handelSubmit(e) {
        e.preventDefault();
        try {
            let bookingresponse = await api.post("/user/bookService", booking);
            console.log(bookingresponse.data);
            if (bookingresponse.data.success) {
                setbooking({
                    service_id: id,
                    booking_date: "",
                    notes: ""
                })

                try {
                    let orderresponse = await api.post("/user/genOrderId", { booking_id: bookingresponse.data.booking })
                    console.log(orderresponse.data.data);

                    if (orderresponse.data.success) {
                        const { amount, booking_id, currency, order_id } = orderresponse.data.data;

                        // Set up RazorPay options
                        const options = {
                            key: "rzp_test_VQhEfe2NCXbbwI", // Replace with your RazorPay Key ID
                            amount: amount,
                            currency: currency,
                            name: "SALON PLATFORM",
                            description: "Test Transaction",
                            order_id: order_id,
                            handler: async (paymentresponse) => {
                                console.log("Payment Response", paymentresponse);

                                try {
                                    let verifyresponse = await api.post("/user/verifyPayment", {
                                        razorpay_order_id: paymentresponse.razorpay_order_id,
                                        razorpay_payment_id: paymentresponse.razorpay_payment_id,
                                        razorpay_signature: paymentresponse.razorpay_signature,
                                        booking_id: booking_id

                                    })

                                    console.log(verifyresponse);

                                    if (verifyresponse.data.success) {

                                        alert(verifyresponse.data.message);
                                        navigate("/services");
                                    }

                                } catch (e) {
                                    console.log(e);

                                }
                            },
                            prefill: {
                                name: "John Doe",
                                email: "john.doe@example.com",
                                contact: "9999999999",
                            },
                            theme: {
                                color: "#3399cc",
                            },
                        };

                        const paymentObject = new window.Razorpay(options);
                        paymentObject.open();
                    }

                } catch (e) {
                    console.log(e);

                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        FetchServiceDetails();
    }, [id])

    if (error) return <h3>{error}</h3>


    return (
        <>
            {loading ? (<>
                <div className="section-spacing">
                    <div className="container">
                        <div className="row">

                            {/* Left Image Skeleton */}
                            <div className="col-md-4">
                                <div className="service-item">
                                    <div className="thumb skeleton-box" style={{ height: "250px" }}></div>
                                    <div className="service-info text-center">
                                        <div className="skeleton-box" style={{ height: "20px", width: "60%", margin: "10px auto" }}></div>
                                        <div className="skeleton-box" style={{ height: "15px", width: "80%", margin: "10px auto" }}></div>
                                        <div className="skeleton-box" style={{ height: "40px", width: "50%", margin: "10px auto" }}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content Skeleton */}
                            <div className="col-md-8">
                                <div className="service-details">
                                    <div className="skeleton-box" style={{ height: "25px", width: "40%", marginBottom: "15px" }}></div>

                                    <div className="skeleton-box" style={{ height: "15px", width: "100%", marginBottom: "10px" }}></div>
                                    <div className="skeleton-box" style={{ height: "15px", width: "95%", marginBottom: "10px" }}></div>
                                    <div className="skeleton-box" style={{ height: "15px", width: "90%", marginBottom: "10px" }}></div>

                                    <div className="skeleton-box" style={{ height: "20px", width: "30%", margin: "20px 0" }}></div>

                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="skeleton-box" style={{ height: "12px", width: "100%", marginBottom: "8px" }}></div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>) :
                <div>
                    <section className="section-spacing">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="service-item wow fadeIn">
                                        <div className="thumb">
                                            <a href="service-single.html"><img src={servicedetails.service_image} alt /></a>
                                        </div>
                                        <div className="service-info text-center">
                                            <h3><a href="service-single.html">{servicedetails.service_name}</a></h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                                <form id="contactForm" onSubmit={handelSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                                    <div className="form-group">
                                                        <input id="booking_date" className="form-control" onChange={handelInputchange} name="booking_date" type="date" required data-error="Select Date" />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea placeholder="Your Notes" name='notes' onChange={handelInputchange} id="notes" cols={20} rows={8} className="form-control" required data-error="Please enter your notes" />
                                                        <div className="help-block with-errors" />
                                                    </div>
                                                    <div className="text-center">
                                                        <input defaultValue="Book Now" name="submit" className="btn btn-primary" type="submit" />
                                                        <div id="msgSubmit" className="hidden" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="service-details">
                                        <h3>Duration: {servicedetails.duration_mins}<br />Rs. {servicedetails.price}</h3>
                                        <p>Category : {servicedetails.category.category_name}</p>
                                        <p>SubCategory : {servicedetails.subcategory.subcategory_name}</p>
                                        <p>{servicedetails.service_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }

            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>You may also like</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a href="service-single.html"><img src={ServiceDetails ? ServiceDetails.service_image : ""} alt /></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3><a href="service-single.html">Stone Message</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <a href="service-single.html" className="btn btn-default">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a href="service-single.html"><img src="../img/services/3.jpg" alt /></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3><a href="service-single.html">Body Message</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <a href="service-single.html" className="btn btn-default">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item wow fadeIn">
                                <div className="thumb">
                                    <a href="service-single.html"><img src="../img/services/5.jpg" alt /></a>
                                </div>
                                <div className="service-info text-center">
                                    <h3><a href="service-single.html">Aromatherapy</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                    <a href="service-single.html" className="btn btn-default">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="contact-us.html" className="btn btn-primary">Contact us</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ServiceDetails
