import React from 'react';
import bg1 from '../assets/img/bg1.png';
import about from '../assets/img/about.png';
import image from '../assets/img/image.jpg';
import banner from '../assets/img/banner.png'
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBlog, faCogs, faLink, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            {/* INNER BANNER */}
            <div class="inner-banner" >
                {/* <style>
                    .inner-banner {
                        background - image: url(../wp-content/themes/setup/assets/images/banner.png);
            }
                </style> */}
                <section class="w3l-breadcrumb">
                    <div class="container AboutPageBanner">
                        <h4 class="inner-text-title font-weight-bold mb-2">
                            About Us</h4>

                        <ul class="breadcrumbs-custom-path AllBreadcrumbs">
                            <a href="https://wp.w3layouts.com/setup" rel="nofollow">Home</a>&nbsp;&nbsp;&#187;&nbsp;&nbsp;About
                            page
                        </ul>
                    </div>
                </section>
            </div>

            {/* ABOUTPAGE ABOUT SECTION */}
            <section class="w3l-about2 py-5">
                <div class="container py-md-5 py-4 AboutPageAbout">
                    <div class="row align-items-center">
                        <div class="col-lg-6 about-2-secs-right">
                            <img src={about} alt=""
                                class="img-fluid img-responsive" />
                        </div>
                        <div class="col-lg-6 about-2-secs pl-lg-5 mb-lg-0 mb-4">
                            <h3 class="title-big">
                                We have 5+ years of work experience. </h3>
                            <p>Neural resource is a company with 5 years of great experience with it's client and we have
                                resource with hands on experience they have.</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle} />
                                    {/* <span class="fas fa-check-circle icon-color" aria-hidden="true"></span> */}
                                    We make dynamic and static websites. </li>
                                <li><FontAwesomeIcon icon={faCheckCircle} />
                                    Provide staff with hands on experience. </li>
                                <li><FontAwesomeIcon icon={faCheckCircle} />
                                    Make android and iOS application. </li>
                                <li><FontAwesomeIcon icon={faCheckCircle} />
                                    Work with great technology i.e React, PHP, Laravel etc. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            </section>

            {/* ABOUTPAGE STATS SECTION */}
            <section>
            </section>

            <section class="w3_stats py-5" id="stats">
                <div class="container py-md-4 py-3 AboutPageStats">
                    <div class="w3-stats">

                        <div class="row text-center justify-content-center">

                            <div class="col-md-3 col-6">
                                <div class="counter">
                                    <div class="timer count-title count-number" data-to="5100" data-speed="1500"></div>
                                    <p class="count-text">
                                        Websites Designing </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-6">
                                <div class="counter">
                                    <div class="timer count-title count-number" data-to="971" data-speed="1500"></div>
                                    <p class="count-text">
                                        Apps Development </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-6 mt-md-0 mt-4">
                                <div class="counter">
                                    <div class="timer count-title count-number" data-to="7600" data-speed="1500"></div>
                                    <p class="count-text">
                                        Outsourcing  </p>
                                </div>
                            </div>

                            <div class="col-md-3 col-6 mt-md-0 mt-4">
                                <div class="counter">
                                    <div class="timer count-title count-number" data-to="36" data-speed="1500"></div>
                                    <p class="count-text">
                                        website development  </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* OUR TEAM */}
            <section></section>

            <section class="w3l-content-11-main">
                <div class="content-design-11 py-5">
                    <div class="container py-md-4 py-3 AboutPageTeam">
                        <div class="text-center mb-sm-5 mb-4">
                            <label class="sub-title mb-2">Team</label>
                            <h3 class="title-big">
                                Our Creative Team</h3>
                        </div>

                        <div class="row justify-content-center pt-lg-2">

                            <div class="col-md-4 col-sm-6">
                                <div class="position-relative">
                                    <img src={team1} class="img-responsive"
                                        alt="content-photo" />
                                    <div class="text-position">
                                        <h4><a href="#url">Aida Bugg</a>
                                        </h4>
                                        <p>Subtitle </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 mt-sm-0 mt-4">
                                <div class="position-relative">
                                    <img src={team3} class="img-responsive"
                                        alt="content-photo" />
                                    <div class="text-position">
                                        <h4><a href="#url">Jimic Nasium</a>
                                        </h4>
                                        <p>Subtitle </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 mt-md-0 mt-4">
                                <div class="position-relative">
                                    <img src={team2} class="img-responsive"
                                        alt="content-photo" />
                                    <div class="text-position">
                                        <h4><a href="#url">Henry Itondo</a>
                                        </h4>
                                        <p>Subtitle </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* ABOUTPAGE SERVICES */}
            <section>
            </section>

            <section class="w3l-content-4 py-5" id="features">

                <div class="container py-md-5 py-4 AboutPageServices">
                    <div class="row">

                        <div class="content-left col-lg-6">
                            <h3 class="title-big">
                                Passion, Dedication And Hard Work </h3>
                            <p class="mt-4">Employees of Neural resource are passionate about their work. They work hard with
                                dedicative attitude. </p>
                            <p class="mt-4">
                            </p>

                        </div>

                        <div class="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-md-5 mt-5 align-self">

                            <div class="row content4-right-grids mb-lg-5 mb-5">
                                <div class="col-2 content4-right-icon">
                                    <div class="content4-icon">
                                        <FontAwesomeIcon icon={faBlog} />
                                    </div>
                                </div>
                                <div class="col-10 content4-right-info">
                                    <h6><a href="#url">
                                        Dynamic and Static website</a>
                                    </h6>
                                    <p>We built dynamic and Static website with latest technology and by skilled team of deveelopers </p>
                                </div>
                            </div>

                            <div class="row content4-right-grids mb-lg-5 mb-5">
                                <div class="col-2 content4-right-icon">
                                    <div class="content4-icon">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </div>
                                </div>
                                <div class="col-10 content4-right-info">
                                    <h6><a href="#url">
                                        The Best Business Services</a>
                                    </h6>
                                    <p>Neural resource provides the best bussiness service for your bussiness so that your organization grow like a charm. </p>
                                </div>
                            </div>

                            <div class="row content4-right-grids">
                                <div class="col-2 content4-right-icon">
                                    <div class="content4-icon">
                                        <FontAwesomeIcon icon={faLink} />
                                    </div>
                                </div>
                                <div class="col-10 content4-right-info">
                                    <h6><a href="#url">
                                        permanent staffing </a>
                                    </h6>
                                    <p>We made a team of great experienced developers with skill of different technologies. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section>
            </section>

            {/* ABOUTPAGE CONTENT WITH PHOTO */}
            <section>
            </section>

            <section class="w3l-content-about py-5">
                <div class="container py-md-5 py-4 AboutPageCWP">
                    <img src={image} alt="" class="img-fluid radius-image-full" />
                    <div class="row mt-sm-5 mt-4">
                        <div class="col-lg-6 about-left-inner pr-lg-5">
                            <h3 class="title-main-2 font-weight-bold">
                                We create a new standard for businesses </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUTPAGE TESTIMONIALS */}

            <section class="w3l-clients py-5" id="testimonials">
                <div class="container py-md-5 py-4 AboutPageTestimonials">
                    <div class="text-center mb-sm-5 mb-4">
                        <label class="sub-title mb-2">Testimonials</label>
                        <h3 class="title-big">
                            What Clients Says </h3>
                    </div>
                    <div id="owl-demo2" class="owl-carousel owl-theme pb-5">

                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Neural resource provides best staff solution for bussiness.</p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3>
                                            Mohit Garg </h3>
                                        <p class="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>This company made by work easier with its services, great experience.</p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3>
                                            Deepak Shakya </h3>
                                        <p class="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Made an iOS app just as I wanted. thank you Neural resource.</p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3>
                                            Andrew wilson</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>The envirnment of this office is the best i've experienced. they do their work perfectly and even they enjoy what they are doin' </p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3>
                                            Matthew Shephard</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>I had training in this company and now i'am there where I wanted to be. Actually I got job in MNC. All thanks to Neural resource.</p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3> Ansh gupta </h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="item">
                            <div class="testimonial-content">
                                <div class="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Though it is new oranization but they are best in place. </p>
                                </div>
                                <div class="bottom-info mt-4">
                                    <div class="people-info align-self">
                                        <h3>
                                            Cooper watson. </h3>
                                        <p class="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
            </section>

        </div>
    )
}

export default About;
