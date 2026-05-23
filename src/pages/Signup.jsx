import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Signup() {
    return (
        <div>
            <SignupContent />
        </div>
    )
}


function SignupContent() {
    return (
        <>
            <SignupForm />
        </>
    )
}


function SignupForm() {
    let [user, setUser] = useState({
        full_name: "",
        email: "",
        mobile_no: "",
        city: "",
        password: ""
    })

    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    let handelInputChange = (e) => {
        let { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    let handelSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            let response = await axios.post("https://salon-backend-jwt.onrender.com/signup", user);
            if (response.data.success) {
                setUser({
                    full_name: "",
                    email: "",
                    mobile_no: "",
                    city: "",
                    password: ""
                })
                setLoading(false)
                alert(response.data.message);
                navigate("/login")
            }
        } catch (e) {
            setLoading(false);
            alert(e.response.data.message)
            navigate("/signup")
        }
    }


    console.log(user);


    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Signup Now!</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" onSubmit={handelSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                <div className="form-group">
                                    <input placeholder="Full Name" id="full_name" onChange={handelInputChange} value={user.full_name} className="form-control" name="full_name" type="text" required data-error="Please enter your full name" />
                                    <div className="help-block with-errors" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Email Address" id="email" onChange={handelInputChange} value={user.email} className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                                    <div className="help-block with-errors" />
                                </div>

                                <div className="form-group">
                                    <input placeholder="Phone" id="mobile_no" onChange={handelInputChange} value={user.mobile_no} className="form-control" name="mobile_no" type="tel" required data-error="Please enter your valid phone number" />
                                </div>


                                <div className="form-group">
                                    <input placeholder="City" id="city" onChange={handelInputChange} value={user.city} className="form-control" name="city" type="text" required data-error="Please enter your city" />
                                </div>

                                <div className="form-group">
                                    <input placeholder="Password" id="password" onChange={handelInputChange} value={user.password} className="form-control" name="password" type="password" required data-error="Please enter your valid password" />
                                </div>

                                <div className="text-center">
                                    <input value={loading ? "Creating Account ....." : "Signup"} name="submit" className="btn btn-primary" type="submit" />
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

export default Signup
