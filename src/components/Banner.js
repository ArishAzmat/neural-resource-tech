import React from 'react'
import Technologies from './Technologies'
import Testimonial from './Testimonial';
import bannerImg from '../assets/img/bann1.png';
import contentImg from '../assets/img/home-ab.png';
import imgPhn from '../assets/img/mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faLaptop, faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
// import {  faLaptop, faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <>
            {/* BANNER SECTION */}
            <section id="home" className="w3l-banner py-5">
                <div className="banner-image">

                </div>
                <div className="banner-content">
                    <div className="container pt-5 pb-md-4 HomePageHeroHeader">
                        <div className="row align-items-center">
                            <div className="col-md-6 pt-md-0 pt-4">
                                <h3 className="mb-lg-4 mb-3 title">
                                    We Are <span className="typed-text"></span><span className="cursor">&nbsp</span></h3>
                                <p>Our Company Neural Resource Technology helps companies to find experienced and skilled IT experts. We
                                    provide IT staffing solutions to you according to your requirement. We focus on what is best for your
                                    business or organization because your growth is our motto. We also make websites with the newest
                                    technologies and skilled IT experts.</p>
                                <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                                    <a className="btn button-style" href="services/about_us.html" id='send-button'>Get Started</a>
                                </div>
                            </div>
                            <div className="col-md-6 mt-md-0 mt-4">
                                <img className="img-fluid" src={bannerImg} alt="banner-dsc" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>

            {/* ABOUT SECTION */}

            <div className="w3l-content-photo-5 py-5">
                <div className="container py-lg-5 py-4 HomePageAbout">
                    <div className="row align-items-center">
                        <div className="col-md-6 content-photo order-md-first order-last">
                            <img src={contentImg} className="img-fluid" alt="content-photo" />
                        </div>
                        <div className="col-md-6 content-left mb-md-0 mb-5 pl-lg-5 order-md-last order-first">
                            <h3 className="mb-3">
                                Welcome To Our Website</h3>
                            <p className="mt-3">By joining Neural Resource, you will not only take our resouce but also become a part of our
                                family. We give our
                                resource as well as give a support from our side.
                                We have tiered our staff to withstand even the toughest of conditions.
                                Our staff is honest about their work. There are people who are smart enough to face difficult
                                environments.We are a
                                branch whose fruit is its staff and you are the one to taste it.
                                Join neural resource for better future of your busssiness.</p>
                            <a className="btn button-style mt-lg-5 mt-4" href="about-page/index.html" id='send-button'>Learn More </a>
                        </div>
                    </div>
                </div>
            </div>
            <section></section>

            {/* TECHNOLOGIES SECTION */}
            <Technologies />

            <section></section>

            {/* EXPERTISE SECTION */}
            <section className="w3l-features-4">
                <div className="features4-block text-center py-5">
                    <div className="container py-md-5 py-3 HomePageServices">

                        <div className="row features4-grids justify-content-center">

                            <div class="col-lg-3 col-md-6">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon className="fa-icon" icon={faBusinessTime} /></span>
                                        {/* <span><FontAwesomeIcon className="fa-icon" icon={faBusinessTime} /></span> */}
                                    </div>
                                    <h5><a href="services-page/index.html">1. IT Development</a>
                                    </h5>
                                    <p>
                                        Our IT development experience has helped organizations obtain a competitive advantage through
                                        cost-effective and effective web solutions.. </p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mt-md-0 mt-2">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon className="fa-icon" icon={faLaptop} /></span>
                                        {/* <span><FontAwesomeIcon className="fa-icon" icon={faLaptopstyle={{color:'#23d997'}}}/></span> */}
                                    </div>
                                    <h5><a href="services-page/index.html">2. IT Staffing</a>
                                    </h5>
                                    <p>Our significant IT staffing experience can provide the required assistance and saving the company time,
                                        effort and money while providing access to a pool of available..</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 mt-lg-0 mt-2">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon className="fa-icon" icon={faClipboard} /></span>
                                        {/* <span><FontAwesomeIcon className="fa-icon" icon={faClipboardstyle={{color:'#23d997'}}}/></span> */}
                                    </div>
                                    <h5><a href="services-page/index.html">3. Permanent Hiring</a>
                                    </h5>
                                    <p>We can assist you whether you are currently hiring, seeking advice on industry recruitment trends, or
                                        simply looking for information on predicted compensation..</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mt-lg-0 mt-2">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon className="fa-icon" icon={faClipboardCheck} /></span>
                                        {/* <span><FontAwesomeIcon className="fa-icon" icon={faClipboardCheckstyle={{color:'#23d997'}}}/></span> */}
                                    </div>
                                    <h5><a href="services-page/index.html">4. Training Program</a>
                                    </h5>
                                    <p>Learn and Grow with us, Our training program are best to learn new tehnologies and build your strength
                                        in industry..</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section >

            <section></section>

            {/* MOBILE SECTION */}

            <section className="w3l-promocode">
                <div className="promo-block py-5">
                    <div className="container py-md-5 py-4 HomePagePromocode">
                        <div className="row aap-4-section">
                            <div className="col-lg-6 app4-right-image">
                                <img src={imgPhn} className="img-fluid" alt="App Device" />
                            </div>
                            <div className="col-lg-6 app4-left-text pl-lg-0 mb-lg-0 mb-5">
                                <h6>We are best in developing Mobile Applications </h6>
                                <h4>Get quality applications with us </h4>
                                <p className="mb-4">
                                    Grow your business online with a suitable appllication with us </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>

            {/* TESTIMONIAL SECTION */}
            <Testimonial />

            <section></section>
        </>
    )
}

export default Banner;
