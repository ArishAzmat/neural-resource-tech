import React from 'react';
import bg1 from '../assets/img/bg1.png';
import about from '../assets/img/about.png';
import image from '../assets/img/image.jpg';
import banner from '../assets/img/banner.png'
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/team3.jpg';
import testi1 from '../img/testi1.jpg';
import testi2 from '../img/testi2.jpg';
import testi3 from '../img/testi3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBlog, faCogs, faLink, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            {/* INNER BANNER */}
            <div className="inner-banner" >

                <section className="w3l-breadcrumb">
                    <div className="container AboutPageBanner">
                        <h4 className="inner-text-title font-weight-bold mb-2">
                            About Us</h4>

                        <ul className="breadcrumbs-custom-path AllBreadcrumbs">
                            <a href="https://wp.w3layouts.com/setup" rel="nofollow">Home</a>&nbsp;&nbsp;&#187;&nbsp;&nbsp;About
                            page
                        </ul>
                    </div>
                </section>
            </div>

            {/* ABOUTPAGE ABOUT SECTION */}
            <section className="w3l-about2 py-5">
                <div className="container py-md-5 py-4 AboutPageAbout">
                    <div className="row align-items-center">
                        <div className="col-lg-6 about-2-secs-right">
                            <img src={about} alt=""
                                className="img-fluid img-responsive" />
                        </div>
                        <div className="col-lg-6 about-2-secs pl-lg-5 mb-lg-0 mb-4">
                            <h3 className="title-big">
                                We have 5+ years of work experience. </h3>
                            <p>Neural resource is a company with 5 years of great experience with it's client and we have
                                resource with hands on experience they have.</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle} />
                                    {/* <span className="fas fa-check-circle icon-color" aria-hidden="true"></span> */}
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

            <section className="w3_stats py-5" id="stats">
                <div className="container py-md-4 py-3 AboutPageStats">
                    <div className="w3-stats">

                        <div className="row text-center justify-content-center">

                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <div className="timer count-title count-number" data-to="5100" data-speed="1500"></div>
                                    <p className="count-text">
                                        Websites Designing </p>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className="counter">
                                    <div className="timer count-title count-number" data-to="971" data-speed="1500"></div>
                                    <p className="count-text">
                                        Apps Development </p>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mt-md-0 mt-4">
                                <div className="counter">
                                    <div className="timer count-title count-number" data-to="7600" data-speed="1500"></div>
                                    <p className="count-text">
                                        Outsourcing  </p>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mt-md-0 mt-4">
                                <div className="counter">
                                    <div className="timer count-title count-number" data-to="36" data-speed="1500"></div>
                                    <p className="count-text">
                                        website development  </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* OUR TEAM */}
            <section></section>

            <section className="w3l-content-11-main">
                <div className="content-design-11 py-5">
                    <div className="container py-md-4 py-3 AboutPageTeam">
                        <div className="text-center mb-sm-5 mb-4">
                            <label className="sub-title mb-2">Team</label>
                            <h3 className="title-big">
                                Our Creative Team</h3>
                        </div>

                        <div className="row justify-content-center pt-lg-2">

                            <div className="col-md-4 col-sm-6">
                                <div className="position-relative">
                                    <img src={team1} className="img-responsive"
                                        alt="content-photo" />
                                    <div className="text-position">
                                        <h4><a href="#url">Aida Bugg</a>
                                        </h4>
                                        <p>Subtitle </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 mt-sm-0 mt-4">
                                <div className="position-relative">
                                    <img src={team3} className="img-responsive"
                                        alt="content-photo" />
                                    <div className="text-position">
                                        <h4><a href="#url">Jimic Nasium</a>
                                        </h4>
                                        <p>Subtitle </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 mt-md-0 mt-4">
                                <div className="position-relative">
                                    <img src={team2} className="img-responsive"
                                        alt="content-photo" />
                                    <div className="text-position">
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

            <section className="w3l-content-4 py-5" id="features">

                <div className="container py-md-5 py-4 AboutPageServices">
                    <div className="row">

                        <div className="content-left col-lg-6">
                            <h3 className="title-big">
                                Passion, Dedication And Hard Work </h3>
                            <p className="mt-4">Employees of Neural resource are passionate about their work. They work hard with
                                dedicative attitude. </p>
                            <p className="mt-4">
                            </p>

                        </div>

                        <div className="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-md-5 mt-5 align-self">

                            <div className="row content4-right-grids mb-lg-5 mb-5">
                                <div className="col-2 content4-right-icon">
                                    <div className="content4-icon">
                                        <FontAwesomeIcon icon={faBlog} />
                                    </div>
                                </div>
                                <div className="col-10 content4-right-info">
                                    <h6><a href="#url">
                                        Dynamic and Static website</a>
                                    </h6>
                                    <p>We built dynamic and Static website with latest technology and by skilled team of deveelopers </p>
                                </div>
                            </div>

                            <div className="row content4-right-grids mb-lg-5 mb-5">
                                <div className="col-2 content4-right-icon">
                                    <div className="content4-icon">
                                        <FontAwesomeIcon icon={faCogs} />
                                    </div>
                                </div>
                                <div className="col-10 content4-right-info">
                                    <h6><a href="#url">
                                        The Best Business Services</a>
                                    </h6>
                                    <p>Neural resource provides the best bussiness service for your bussiness so that your organization grow like a charm. </p>
                                </div>
                            </div>

                            <div className="row content4-right-grids">
                                <div className="col-2 content4-right-icon">
                                    <div className="content4-icon">
                                        <FontAwesomeIcon icon={faLink} />
                                    </div>
                                </div>
                                <div className="col-10 content4-right-info">
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

            <section className="w3l-content-about py-5">
                <div className="container py-md-5 py-4 AboutPageCWP">
                    <img src={image} alt="" className="img-fluid radius-image-full" />
                    <div className="row mt-sm-5 mt-4">
                        <div className="col-lg-6 about-left-inner pr-lg-5">
                            <h3 className="title-main-2 font-weight-bold">
                                We create a new standard for businesses </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUTPAGE TESTIMONIALS */}

            <section className="w3l-clients py-5" id="testimonials">
                <div className="container py-md-5 py-4 AboutPageTestimonials">
                    <div className="text-center mb-sm-5 mb-4">
                        <label className="sub-title mb-2">Testimonials</label>
                        <h3 className="title-big">
                            What Clients Says </h3>
                    </div>
                    <div id="owl-demo2" className="owl-carousel owl-theme pb-5">

                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Neural resource provides best staff solution for bussiness.</p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url"><img
                                        src={testi1} className="img-responsive"
                                        alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3>
                                            Mohit Garg </h3>
                                        <p className="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>This company made by work easier with its services, great experience.</p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url"><img
                                        src={testi2} className="img-responsive"
                                        alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3>
                                            Deepak Shakya </h3>
                                        <p className="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Made an iOS app just as I wanted. thank you Neural resource.</p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url"><img
                                        src={testi3} className="img-responsive"
                                        alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3>
                                            Andrew wilson</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>The envirnment of this office is the best i've experienced. they do their work perfectly
                                        and even they enjoy what they are doin' </p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url"><img
                                        src={testi1} className="img-responsive"
                                        alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3>
                                            Matthew Shephard</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>I had training in this company and now i'am there where I wanted to be. Actually I got
                                        job in MNC. All thanks to Neural resource.</p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url"><img
                                        src={testi2} className="img-responsive"
                                        alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3> Ansh gupta </h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="item">
                            <div className="testimonial-content">
                                <div className="testimonial">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <p>Though it is new oranization but they are best in place. </p>
                                </div>
                                <div className="bottom-info mt-4">
                                    <a className="comment-img" href="#url">
                                        <img src={testi3} className="img-responsive"
                                            alt="placeholder image" /></a>
                                    <div className="people-info align-self">
                                        <h3>
                                            Cooper watson. </h3>
                                        <p className="identity">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
