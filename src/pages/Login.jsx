import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import cookie from "js-cookie";
const apiUrl = import.meta.env.VITE_BASE_URL;

function Login() {
    return (
        <div>
            <LoginContent />
        </div>
    )
}


function LoginContent() {
    return (
        <>
            <LoginForm />
        </>
    )
}


function LoginForm() {
    let [user, setUser] = useState({
        email: "",
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
            let response = await axios.post(`${apiUrl}/login`, user);
            console.log(response.data);

            if (response.data.success) {
                setUser({
                    email: "",
                    password: ""
                })
                alert(response.data.message);
                cookie.set("token", response.data.token);
                navigate("/")
            }
        } catch (e) {
            setUser({
                email: "",
                password: ""
            })

            setLoading(false);
            alert(e.response.data.message)
            navigate("/Login")
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Login Now!</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <form id="contactForm" onSubmit={handelSubmit} className="contact-form wow fadeIn" data-toggle="validator" method="post">
                                <div className="form-group">
                                    <input placeholder="Email Address" id="email" onChange={handelInputChange} value={user.email} className="form-control" name="email" type="email" required data-error="Please enter your valid email address" />
                                    <div className="help-block with-errors" />
                                </div>

                                <div className="form-group">
                                    <input placeholder="Password" id="password" onChange={handelInputChange} value={user.password} className="form-control" name="password" type="password" required data-error="Please enter your valid password" />
                                </div>

                                <div className="text-center">
                                    <input value={loading ? "Fetching Account ....." : "Login"} name="submit" className="btn btn-primary" type="submit" />
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

export default Login
