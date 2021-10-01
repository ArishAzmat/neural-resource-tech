import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faLaptop, faClipboard, faClipboardCheck, faPhone, faList } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faInstagram, faPinterest, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';
import serv from '../assets/img/service1.png';


// import React from 'react'

const Services = () => {

    return (
        <>
            <div class="inner-banner">
                {/* <style>
            .inner-banner {
                background-image: url(../wp-content/themes/setup/assets/images/banner.png);
            } */}
                {/* </style> */}
                <section class="w3l-breadcrumb">
                    <div class="container ServicesPageBanner">
                        <h4 class="inner-text-title font-weight-bold mb-2">
                            Services</h4>

                        <ul class="breadcrumbs-custom-path AllBreadcrumbs">
                            <a href="https://wp.w3layouts.com/setup"
                                rel="nofollow">Home</a>&nbsp;&nbsp;&#187;&nbsp;&nbsp;Services page
                        </ul>
                    </div>
                </section>
            </div>


            <section class="w3l-servicesblock py-5">
                <div class="container py-lg-5 py-md-3">


                    {/* <!-- ServicesPage Skills Section --> */}

                    <section>
                    </section>

                    <div class="row ServicesPageSkills">

                        <div class="col-lg-6 about-right-faq align-self pr-lg-5">
                            <h3 class="title-big">
                                Powerful Solution For Your Startup Business </h3>
                            <p class="mt-3 mb-4">All the startups need some crucial thing to grow in market. Like great employees, a good website or application and its marketing and the good thing is Neural Resource has everything a startup needs.</p>

                            <div class="progress-info info1">
                                <h6 class="progress-tittle">
                                    Quality Services <span class="">80%</span>
                                </h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar"
                                    >
                                    </div>
                                </div>
                            </div>

                            <div class="progress-info info2">
                                <h6 class="progress-tittle">
                                    Experienced Developers <span class="">95%</span>
                                </h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar">
                                    </div>
                                </div>
                            </div>

                            <div class="circle1">
                                <div id="progress2" data-dimension="160" data-text="" data-fontsize="32" data-percent=""
                                    data-fgcolor="#ffb700" data-bgcolor="#eee" data-width="15" data-bordersize="5"
                                    data-animationstep="2">
                                </div>
                                <h4>
                                </h4>
                            </div>


                            <div class="progress-info info3 mb-0">
                                <h6 class="progress-tittle">
                                    Long term support<span class="">75%</span>
                                </h6>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6 left-wthree-img mt-lg-0 mt-5">
                            <img serv={serv} />
                        </div>

                    </div>

                    <section>
                    </section>

                    {/* <!-- //ServicesPage Skills Section -->


            <!-- ServicesPage Content with Photo --> */}

                    <section>
                    </section>

                    <div class="row mt-5 pt-5 ServicesPageCWP">
                        <div class="col-lg-6 left-wthree-img mt-lg-0 mt-5 order-lg-first order-last">
                            <img src="../wp-content/themes/setup/assets/images/service1.png" alt=""
                                class="img-fluid radius-image" />
                        </div>
                        <div class="col-lg-6 about-right-faq align-self pl-lg-5 order-lg-last order-first">
                            <h3 class="title-big">
                                We Provide Awesome Services For You </h3>
                            <p class="mt-3">Neural Resource provides best service for your bessiness. Either its development, Designing, Outsourcing, or Marketing. We are there for you. </p>
                            <a class="btn button-style mt-lg-5 mt-4" href="#url">Learn More </a>
                        </div>
                    </div>

                    <section>
                    </section>

                    {/* <!-- //ServicesPage Content with Photo --> */}


                </div>
            </section>







            {/* <!-- ServicesPage Services --> */}

            <section>
            </section>

            <section class="w3l-bottom-grids-6 py-5">
                <div class="container py-lg-5 py-md-4 ServicesPageServices">
                    <div class="text-center mb-sm-5 mb-4">
                        <label class="sub-title mb-2">Features</label>
                        <h3 class="title-big">
                            What We Provide </h3>
                    </div>

                    <div class="grids-area-hny main-cont-wthree-fea row justify-content-center">

                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faLaptop} /></span>
                                <h4><a href="#url" class="title-head">Dynamic & <br />Static website</a>
                                </h4>
                                <p>We make Dynamic and static website for your bussiness or product with all our new technology so you can always be ahead. </p>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faAndroid} /></span>
                                <h4><a href="#url" class="title-head">iOS & Android application</a>
                                </h4>
                                <p>Our company make iOS and android application as well for you. because in this world an application in mobile is must.  </p>
                                {/* <!-- <a href="#url" class="more">Read More </a> --> */}
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                                <h4><a href="#url" class="title-head">Digital Marketing</a></h4>
                                <p>In order to grow in this digital fiels one should always know about digital marketting, our website market your website or product digitally in order to gether traffic for you.</p>
                                {/* <!-- <a href="#url" class="more">Read More</a>  */}
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faPinterest} /></span>
                                <h4><a href="#url" class="title-head">Contratual staffing</a></h4>
                                <p>For your bussiness we provide our best engineers who are best in their fields2, they have enough  skills and experience.</p>
                                {/* <!-- <a href="#url" class="more">Read More </a> --> */}
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faTwitter} /></span>
                                <h4><a href="#url" class="title-head"> Client Support</a></h4>
                                <p>As you become a member of our Neural Resource Technology, it is our responsibility to provide enough support to you and it is our responsibility to make you grow.</p>
                                {/* <!-- <a href="#url" class="more">Read More </a> --> */}
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 grids-feature mt-lg-5 mt-4">
                            <div class="area-box">
                                <span><FontAwesomeIcon icon={faBusinessTime} /></span>
                                <h4><a href="#url" class="title-head">Training Programme</a></h4>
                                <p>And if you are the one who wants to learn new skill and want a suitable job for your future theen it is the best place to learn new technologies.</p>
                                {/* <!-- <a href="#url" class="more">Read More </a> --> */}
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section>
            </section>

            {/* </div> */}
            {/* <!-- //ServicesPage Services --> */}






            {/* <!-- ServicesPage Work Flow --> */}

            <section>
            </section>

            <section class="w3l-features-4">
                <div class="features4-block text-center py-5">
                    <div class="container py-md-5 py-3 ServicesPageWorkFlow">

                        <div class="row features4-grids justify-content-center">

                            <div class="col-lg-4 col-md-6">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon icon={faBusinessTime} /></span>
                                    </div>
                                    <h5><a href="index.html">1. Planning & Research</a>
                                    </h5>
                                    <p>
                                        For every bussiness planning is neccessary and in Neural resource we plan what is best for your bussiness then we research about how you'll grow then we make it through. </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-md-0 mt-2">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon icon={faLaptop} /></span>
                                    </div>
                                    <h5><a href="index.html">2. Optimizing</a>
                                    </h5>
                                    <p>Our goal is to improve efficiency of retrieval of website we made for you..</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-lg-0 mt-2">
                                <div class="features4-grid">
                                    <div class="feature-images">
                                        <span><FontAwesomeIcon icon={faList} /></span>
                                    </div>
                                    <h5><a href="index.html">3. Result</a>
                                    </h5>
                                    <p>As you come in our company our main priority is to give best result as you want and the result what brings you to your  end goal.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section>
            </section>
        </>


    )
}
export default Services;
