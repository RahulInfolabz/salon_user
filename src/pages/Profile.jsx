import React, { useEffect, useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import CheckToken from '../utils/CheckToken'
import Logout from '../utils/Logout'
import api from '../utils/AxiosConfig'

function Profile() {
    return (
        <div>
            <Header />
            <ProfileContent />
            <Footer />

        </div>
    )
}

function ProfileContent() {
    return (
        <>
            <Breadcurmbs pageTitle="Profile" />
            <UserProfileForm />
            <Appointment />
        </>
    )
}

function UserProfileForm() {
    let [user, setUser] = useState({});

    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");


    async function FetchUserProfile() {
        try {
            let response = await api.get("/user/profile");

            console.log(response.data);
            if (response.data.success) {
                setUser(response.data.data);
            }
        } catch (e) {
            setError(e);
            Logout();
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        FetchUserProfile();
    }, [])

    if (error) return <h2>{error}</h2>


    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    {loading ? <h2>Loading...</h2> : <>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h2><span>User Profile</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-8 offset-lg-2">
                                <form className="contact-form">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="full_name"
                                                    placeholder="Full Name"
                                                    value={user.full_name}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={user.email}
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="mobile_no"
                                                    value={user.mobile_no}
                                                    placeholder="Mobile Number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="city"
                                                    value={user.city}
                                                    placeholder="City"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="profile_image"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div>
                                                <input
                                                    disabled
                                                    type="image"
                                                    name="profile_image"
                                                    src={user.profile_image ? user.profile_image : 'https://www.w3schools.com/w3images/avatar6.png'}
                                                    style={{ height: "200px", width: "200px", borderRadius: "50%" }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="text-center">
                                        <input
                                            type="submit"
                                            className="btn btn-primary"
                                            value="Update Profile"
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </>}
                </div>
            </section>
        </>
    );
}

export default Profile
