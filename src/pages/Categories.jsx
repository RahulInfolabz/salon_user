import React, { useEffect, useState } from 'react'
import Breadcurmbs from '../common/Breadcurmbs'
import { Appointment } from './Home'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
const apiUrl = import.meta.env.BASE_URL;

function Categories() {
    return (
        <div>
            <Header />
            <CategoriesContent />
            <Footer />

        </div>
    )
}


function CategoriesContent() {
    return (
        <>
            <Breadcurmbs pageTitle="Categories" />
            <CategoriesCards />
            <Appointment />
        </>
    )
}


function CategoriesCards() {
    let [categories, setCategories] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    async function FetchCategories() {

        try {
            setLoading(true);
            let response = await axios.get(`${apiUrl}/categories`)
            console.log(response.data);
            setCategories(response.data.data);
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
                            {categories ?
                                categories.map((category, index) => {
                                    return (
                                        <>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="gallery-item wow fadeIn">
                                                    <Link to={`/subcategoriesbycategory/${category._id}`} className="venobox" data-gall="gallery">
                                                        <img src={category.category_image} alt />
                                                        <div className="gallery-caption text-center">
                                                            <i className="fa fa-heart-o" />
                                                            <h3>{category.category_name}</h3>
                                                            <p>{category.category_description}</p>
                                                        </div>
                                                    </Link>
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
                </div>
            </section>

        </>
    )
}

export default Categories
