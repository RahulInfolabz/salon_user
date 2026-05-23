import React, { useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import CheckToken from '../utils/CheckToken'
import api from '../utils/AxiosConfig'

function Contact() {
    return (
        <div>
            <Header />
            <ContactContent />
            <Footer />
        </div>
    )
}

function ContactContent() {
    return (
        <>
            <Breadcurmbs pageTitle="Contact Us" />
            <ContactForm />
            <Appointment />
        </>
    )
}


function ContactForm() {

    let [inquiry, setInquiery] = useState({
        inquiry_subject: "",
        inquiry_message: ""
    });

    let [error, setError] = useState("");


    function handelInputChange(e) {
        setInquiery((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    async function handelSubmit(e) {
        e.preventDefault();
        try {
            let response = await api.post("/user/addGeneralInquiry", inquiry);

            if (response.data.success) {
                alert(response.data.message);
                setInquiery({
                    inquiry_subject: "",
                    inquiry_message: ""
                })
            }
        } catch (e) {
            setError(e);
        }
    }

    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-phone-square" />
                                <h3>Make a Call</h3>
                                <p><a href="tel:+61383766284">+61 3 8376 6284</a><br /><a href="tel:+61383766284">+61 3 8376 6284</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-envelope-open-o" />
                                <h3>Send a Mail</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a><br /><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info text-center wow fadeIn">
                                <i className="fa fa-map-marker" />
                                <h3>Find Us</h3>
                                <p>123 West Street, Melbourne <br />Victoria 3000 Australia</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Have Any Question?</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" onSubmit={handelSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                <div className="form-group">
                                    <input placeholder="Subject" id="subject" onChange={handelInputChange} className="form-control" name="inquiry_subject" value={inquiry.inquiry_subject} type="text" required data-error="Please enter your subject" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Comments" onChange={handelInputChange} name='inquiry_message' id="inquiry_message" value={inquiry.inquiry_message} cols={20} rows={8} className="form-control" required data-error="Please enter your comments" defaultValue={""} />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="text-center">
                                    <input defaultValue="Send Message" name="submit" className="btn btn-primary" type="submit" />
                                    <div id="msgSubmit" className="hidden" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
