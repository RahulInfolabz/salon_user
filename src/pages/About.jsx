import React from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'

function About() {
    return (
        <div>
            <Header />
            <AboutContent />
            <Footer />
        </div>
    )
}

function AboutContent() {
    return (
        <>
            <Breadcurmbs pageTitle="About Us" />
            <AboutHistory />
            <AboutTeam />
            <Appointment />

        </>
    )
}


function AboutHistory() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="img-block wow fadeIn">
                                <img src="img/team/our-story.jpg" alt />
                                <div className="play-button">
                                    <a href="#" data-toggle="modal" data-target="#video-modal"><i className="fa fa-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="text-block wow fadeIn">
                                <h2>Our history</h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum justo vitae convallis varius. Nulla tristique risus ut justo pulvinar mattis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end our history */}

        </>
    )
}


function AboutTeam() {
    return (
        <>
            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Meet Our Experts</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/1.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Tasfia</h3>
                                    <h6>Hair Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Tasfia</h3>
                                    <h6>Hair Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/2.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Salina Gomej</h3>
                                    <h6>Message Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Salina Gomej</h3>
                                    <h6>Message Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/3.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Julia Shorez</h3>
                                    <h6>Skin Therapist</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Julia Shorez</h3>
                                    <h6>Skin Therapist</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/4.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Sharmin Akter</h3>
                                    <h6>Therapy Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Sharmin Akter</h3>
                                    <h6>Therapy Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/5.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Tasfia</h3>
                                    <h6>Hair Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Tasfia</h3>
                                    <h6>Hair Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/6.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Salina Gomej</h3>
                                    <h6>Message Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Salina Gomej</h3>
                                    <h6>Message Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/7.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Julia Shorez</h3>
                                    <h6>Skin Therapist</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Julia Shorez</h3>
                                    <h6>Skin Therapist</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="team wow fadeIn">
                                <div className="thumb">
                                    <img src="img/team/8.jpg" alt />
                                </div>
                                <div className="team-info text-center">
                                    <h3>Sharmin Akter</h3>
                                    <h6>Therapy Expert</h6>
                                </div>
                                <div className="team-overlay text-center">
                                    <h3>Sharmin Akter</h3>
                                    <h6>Therapy Expert</h6>
                                    <ul className="social-icons">
                                        <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                        <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="contact-us.html" className="btn btn-primary">Contat Us</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end team member */}

        </>
    )
}

export default About
