import React, { useEffect, useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

function SubCategoriesByCategory() {
    return (
        <div>
            <Header />
            <SubCategoriesContent />
            <Footer />

        </div>
    )
}


function SubCategoriesContent() {
    return (
        <>
            <Breadcurmbs pageTitle="SubCategories" />
            <SubCategoriesCards />
            <Appointment />
        </>
    )
}


function SubCategoriesCards() {

    let id = useLocation().pathname.split("/")[2];

    let [SubCategories, setSubCategories] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    async function FetchSubCategories() {

        try {
            setLoading(true);
            let response = await axios.get(`https://salon-backend-jwt.onrender.com/subcategories?category_id=${id}`)
            console.log(response.data);
            setSubCategories(response.data.data);
        } catch (e) {
            setError(e);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

    }


    useEffect(() => {
        FetchSubCategories();
    }, [])
    if (error) return <h2>{error}</h2>



    return (
        <>
            <section className="section-spacing">
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
                            {SubCategories ?
                                SubCategories.map((category, index) => {
                                    return (
                                        <>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="gallery-item wow fadeIn">
                                                    <Link to={`/servicesbysubcategory/${category._id}`} className="venobox" data-gall="gallery">
                                                        <img src={category.subcategory_image} alt />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{category.subcategory_name}</h3>
                                                            <p>{category.subcategory_description}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                :
                                <h3>SubCategories Not Found</h3>
                            }
                        </>)}

                    </div>
                </div>
            </section>

        </>
    )
}

export default SubCategoriesByCategory
