import React from 'react'
import Technologies from './Technologies'
import Testimonial from './Testimonial'
import bannerImg from '../img/bann1.png';
import contentImg from '../img/home-ab.png';
import imgPhn from '../img/mobile.png';

const Banner = () => {
    return (
        <>
            {/* BANNER SECTION */}
            <section id="home" class="w3l-banner py-5">
                <div class="banner-image">

                </div>
                <div class="banner-content">
                    <div class="container pt-5 pb-md-4 HomePageHeroHeader">
                        <div class="row align-items-center">
                            <div class="col-md-6 pt-md-0 pt-4">
                                <h3 class="mb-lg-4 mb-3 title">
                                    We Are <span class="typed-text"></span><span class="cursor">&nbsp</span></h3>
                                <p>Our Company Neural Resource Technology helps companies to find experienced and skilled IT experts. We
                                    provide IT staffing solutions to you according to your requirement. We focus on what is best for your
                                    business or organization because your growth is our motto. We also make websites with the newest
                                    technologies and skilled IT experts.</p>
                                <div class="mt-md-5 mt-4 mb-lg-0 mb-4">
                                    <a class="btn button-style" href="services/about_us.html">Get Started</a>
                                </div>
                            </div>
                            <div class="col-md-6 mt-md-0 mt-4">
                                <img class="img-fluid" src={bannerImg} alt="banner-dsc" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>

            {/* ABOUT SECTION */}

            <div class="w3l-content-photo-5 py-5">
                <div class="container py-lg-5 py-4 HomePageAbout">
                    <div class="row align-items-center">
                        <div class="col-md-6 content-photo order-md-first order-last">
                            <img src={contentImg} class="img-fluid" alt="content-photo" />
                        </div>
                        <div class="col-md-6 content-left mb-md-0 mb-5 pl-lg-5 order-md-last order-first">
                            <h3 class="mb-3">
                                Welcome To Our Website</h3>
                            <p class="mt-3">By joining Neural Resource, you will not only take our resouce but also become a part of our
                                family. We give our
                                resource as well as give a support from our side.
                                We have tiered our staff to withstand even the toughest of conditions.
                                Our staff is honest about their work. There are people who are smart enough to face difficult
                                environments.We are a
                                branch whose fruit is its staff and you are the one to taste it.
                                Join neural resource for better future of your busssiness.</p>
                            <a class="btn button-style mt-lg-5 mt-4" href="about-page/index.html">Learn More </a>
                        </div>
                    </div>
                </div>
            </div>
            <section></section>

            {/* TECHNOLOGIES SECTION */}
            <Technologies />

            <section></section>

            {/* EXPERTISE SECTION */}
            <section class="w3l-features-4">
                <div class="features4-block text-center py-5">
                    <div class="container py-md-5 py-3 HomePageServices">

                        <div class="row features4-grids justify-content-center">

                            <div class="col-lg-3 col-md-6">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span class="fas fa-business-time icon-color" aria-hidden="true"></span>
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
                                        <span class="fas fa-laptop-code icon-color" aria-hidden="true"></span>
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
                                        <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
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
                                        <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
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
            </section>

            <section></section>

            {/* MOBILE SECTION */}

            <section class="w3l-promocode">
                <div class="promo-block py-5">
                    <div class="container py-md-5 py-4 HomePagePromocode">
                        <div class="row aap-4-section">
                            <div class="col-lg-6 app4-right-image">
                                <img src={imgPhn} class="img-fluid" alt="App Device" />
                            </div>
                            <div class="col-lg-6 app4-left-text pl-lg-0 mb-lg-0 mb-5">
                                <h6>We are best in developing Mobile Applications </h6>
                                <h4>Get quality applications with us </h4>
                                <p class="mb-4">
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
