import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from "axios"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <HomeContent />
            <Footer />
        </div>
    )
}

function HomeContent() {
    return (
        <>
            <HomeBanner />
            <HomeServices />
            <HomeChooseUs />
            <HomeGallery />
            <Appointment />
            <HomeTeam />
            <HomeFacts />
            <HomeTestimonial />
        </>
    )
}


function HomeBanner() {
    return (
        <>
            <section className="carousel slide" id="banner" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: 'url(img/banner/slide-1.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInDown">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInUp">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInUp">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-2.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInLeft">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInLeft">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInLeft">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundImage: 'url(img/banner/slide-3.jpg)' }}>
                        <div className="banner-caption">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="hero-text">
                                            <h6 className="animated fadeInRight">Consetetur Adipiscing</h6>
                                            <h1 className="animated fadeInRight">Soft &amp; Pure Spa Salon</h1>
                                            <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt ullamcorper magna, in tincidunt ex auctor et.</p>
                                            <a href="contact-us.html" className="btn btn-primary animated fadeInRight">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#banner" data-slide-to={0} className="active" />
                        <li data-target="#banner" data-slide-to={1} />
                        <li data-target="#banner" data-slide-to={2} />
                    </ol>
                </div>
            </section>
        </>
    )
}


function HomeServices() {
    let [services, setServices] = useState([]);
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);

    async function FetchServices() {
        try {
            setLoading(true)
            let response = await axios.get("https://salon-backend-jwt.onrender.com/services")
            console.log(response.data);
            setServices(response.data.data.slice(0, 6));
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
                                                            <a href="service-single.html"><img src={value.service_image} style={{ height: "200px" }} alt /></a>
                                                        </div>
                                                        <div className="service-info text-center">
                                                            <h3><a href="service-single.html">{value.service_name}</a></h3>
                                                            <p>{value.service_description}</p>
                                                            <a href="service-single.html" className="btn btn-default">Read More</a>
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
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="/services" className="btn btn-primary">All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function HomeChooseUs() {
    return (
        <>
            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="img-block wow fadeIn">
                                <img src="img/why-choose/1.jpg" alt />
                                <div className="play-button">
                                    <a href="#" data-toggle="modal" data-target="#video-modal"><i className="fa fa-play" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="text-block wow fadeIn">
                                <h2>Why Choose us?</h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                                <ul>
                                    <li>Created from natural herbs</li>
                                    <li>100% safe for your skin</li>
                                    <li>Unique from other spa treatments</li>
                                    <li>Created by medical professionals of spa lab</li>
                                    <li>Special gifts &amp; offers for you</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function HomeGallery() {
    let [categories, setCategories] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    async function FetchCategories() {

        try {
            setLoading(true);
            let response = await axios.get("https://salonapi-backend.onrender.com/categories")
            console.log(response.data);
            setCategories(response.data.data.slice(0, 6));
        } catch (e) {
            setError(e);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

    }


    useEffect(() => {
        FetchCategories();
    }, [])
    if (error) return <h2>{error}</h2>


    return (
        <>
            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Our gallery</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {loading ? (<>
                            <h2>Loading.....</h2>
                        </>) : (<>
                            {categories ?
                                categories.map((category, index) => {
                                    return (
                                        <>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="gallery-item wow fadeIn">
                                                    <a href="img/gallery/1.jpg" className="venobox" data-gall="gallery">
                                                        <img src={category.category_image} alt />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{category.category_name}</h3>
                                                            <p>{category.category_description}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                :
                                <h3>Categories Not Found</h3>
                            }
                        </>)}

                    </div>


                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="/categories" className="btn btn-primary">All Categories</Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


function Appointment() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="appoinment-text wow fadeIn">
                                <h2>Make an Appointment?</h2>
                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, In massa urna pellentesque habitant morbi tristique senectus.</p>
                                <p>Call us : 002-6666-8888 or fill out our online booking &amp; equiry form and we’ll contact you.</p>
                                <a href="#" data-toggle="modal" data-target="#appointment" className="btn btn-primary">Make Appointment</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="appoinment-img text-md-right text-center wow fadeIn">
                                <img className="tilt-img" src="img/appointment/1.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function HomeTeam() {
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
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a href="team.html" className="btn btn-primary">View Our Experts</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function HomeFacts() {
    return (
        <>
            <section className="section-spacing">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="fun-fact-img wow fadeIn">
                                <img className="tilt-img" src="img/fun-facts/1.png" alt />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">800</span>
                                        <h3>Clients</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">50</span>
                                        <h3>Therapists</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">35</span>
                                        <h3>Procedures</h3>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-center">
                                    <div className="features-info">
                                        <span className="counter">890</span>
                                        <h3>Treatments</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function HomeTestimonial() {
    return (
        <>
            <section className="section-spacing inverse-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2><span>Happy Clients</span></h2>
                                <p>Our product is fully personalized and well balanced for all age of customers or adults. We maintain the standards by lorem ipsum and certified by dolor set amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/1.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">David Warner</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/2.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">Alex Smith</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/3.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">David Warner</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-list">
                            <div className="author-comment">
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                </div>
                                <p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.</p>
                            </div>
                            <div className="author-info">
                                <div className="author_thumb">
                                    <img src="img/testimonials/1.png" alt />
                                </div>
                                <div className="author-meta">
                                    <span className="author-name">Alex Smith</span>
                                    <span className="designation"><em>Envato Customer</em></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
export { Appointment }