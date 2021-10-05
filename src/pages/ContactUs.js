import React from 'react';
import '../assets/style/ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHeadphones, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const ContactUs = () => {
    return (
        <div>
            <div className="pull-right-demo-bar toggle-right-sidebar">
                <span className="fa title-open-right-sidebar tooltipstered fa-angle-double-right"></span>
            </div>

            {/* INNER BANNER */}
            <div className="inner-banner">

                <section className="w3l-breadcrumb">
                    <div className="container ContactPageBanner">
                        <h4 className="inner-text-title font-weight-bold mb-2">
                            Contact Us</h4>

                        <ul className="breadcrumbs-custom-path AllBreadcrumbs">
                            <a href="https://wp.w3layouts.com/setup"
                                rel="nofollow">Home</a>&nbsp;&nbsp;&#187;&nbsp;&nbsp;Contact page
                        </ul>
                    </div>
                </section>
            </div>

            {/* CONTACT */}

            <section>
            </section>

            <section className="w3l-contact py-5" id="contact">
                <div className="container py-lg-5 py-md-4 py-2 ContactPage">

                    <div className="text-center mb-sm-5 mb-4">
                        <label className="sub-title mb-2">Get in touch</label>
                        <h3 className="title-big">Contact Us</h3>
                    </div>

                    <div className="mx-auto pt-lg-4 pt-md-5 pt-4" >
                        <div className="row contact-block justify-content-center">

                            <div className="col-md-5 contact-left">
                                <h3 className="font-weight-bold mb-md-5 mb-4">Contact Details</h3>

                                <div className="cont-details">

                                    <div className="d-flex contact-grid">
                                        <div className="cont-left text-center mr-3">
                                            <FontAwesomeIcon icon={faGlobe} size='2x' />
                                            {/* <span className="fa fa-globe icon-color"></span> */}
                                        </div>
                                        <div className="cont-right">
                                            <h6>Company Address</h6>
                                            <p>Bareilly,Uttar Pradesh India</p>
                                        </div>
                                    </div>

                                    <div className="d-flex contact-grid mt-4 pt-lg-2">
                                        <div className="cont-left text-center mr-3">
                                            <FontAwesomeIcon icon={faPhone} size='2x' />
                                            {/* <span className="fa fa-phone icon-color"></span> */}
                                        </div>
                                        <div className="cont-right">
                                            <h6>Call Us</h6>
                                            <p><a href="tel:+1(21) 234 4567">+91 9084411981</a></p>
                                        </div>
                                    </div>

                                    <div className="d-flex contact-grid mt-4 pt-lg-2">
                                        <div className="cont-left text-center mr-3">
                                            <FontAwesomeIcon icon={faEnvelopeOpen} size='2x' />
                                            {/* <span className="fa fa-envelope-open icon-color"></span> */}
                                        </div>
                                        <div className="cont-right">
                                            <h6>Email Us</h6>
                                            <p><a href="mailto:example@mail.com" className="mail">Contact@neuralresource.com</a></p>
                                        </div>
                                    </div>

                                    <div className="d-flex contact-grid mt-4 pt-lg-2">
                                        <div className="cont-left text-center mr-3">
                                            <FontAwesomeIcon icon={faHeadphones} size='2x' />
                                            {/* <span className="fa fa-headphones icon-color"></span> */}
                                        </div>
                                        <div className="cont-right">
                                            <h6>Customer Support</h6>
                                            <p><a href="mailto:info@support.com" className="mail"></a></p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-7 contact-right mt-md-0 mt-4 ContactPageForm">
                                <form action="#" method="post" className="signin-form">
                                    <div className="input-grids">

                                        <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                                            className="contact-input" required="" />

                                        <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                                            className="contact-input" required="" />

                                        <input type="text" name="w3lSubject" id="w3lSubect" placeholder="Subject*"
                                            className="contact-input" required="" />

                                        <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                                            className="contact-input" required="" />

                                    </div>
                                    <div className="form-input">

                                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                                            required=""></textarea>

                                    </div>
                                    <button className="btn button-style">Send Message</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>

            {/* <!-- Contact Map section --> */}

            <section>
            </section>

            <div className="map-iframe ContactPageMap text-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                    width="100%" height="400" frameborder="0" allowfullscreen=""></iframe>
            </div>

            <section>
            </section>


        </div>
    )
}

export default ContactUs;
