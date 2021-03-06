import { faFacebook, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import footerLogo from '../assets/img/NeuralResource.png';

const Footer = () => {
  return (
    <footer className="w3l-footer-16">
      <div className="w3l-footer-16-main">
        <div className="container SetupFooter">
          <div className="row footer-p">
            <div className="col-lg-8 mt-lg-0 mt-4 pr-lg-5">
              <div className="d-sm-flex  top-footer-content mb-5">
                <img src={footerLogo} className='logo' width="33%" alt='' />
                <p className="top-p ml-sm-4 pl-sm-4 mt-sm-0 mt-2">
                  If you want to grow your bussiness with our best employees or
                  if you want us to make website for you then you can contact us
                  via following source{" "}
                </p>
              </div>
              <div className="row footer-grids pt-4">
                <div className="col-sm-4 col-6 column">
                  <div id="archives-4" className="footer-gd-16 widget_archive">
                    <h6 className="footer-links-title">Services</h6>
                    <ul>
                      <li>
                        <a href="#">IT outsource</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Web development</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">iOS & android development</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Digital marketing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 col-6 column pl-sm-0">
                  <div id="categories-4" className="footer-gd-16 widget_categories">
                    <h6 className="footer-links-title">Categories</h6>
                    <ul>
                      <li className="cat-item cat-item-2">
                        <a href="category/business/index.html">Business</a>
                      </li>
                      <li className="cat-item cat-item-3">
                        <a href="category/corporate/index.html">Corporate</a>
                      </li>
                      <li className="cat-item cat-item-4">
                        <a href="category/creative/index.html">Creative</a>
                      </li>
                      <li className="cat-item cat-item-5">
                        <a href="category/design/index.html">Design</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 col-6 column pl-sm-0">
                  <div id="meta-4" className="footer-gd-16  widget_meta">
                    <h6 className="footer-links-title">Contact</h6>
                    <ul>
                      <li>
                        <a href="#">+91 9084411981</a>
                      </li>
                      <li>
                        <a href="#">Contact@neuralresource.com</a>
                      </li>
                      <li>
                        <a href="#">Bareilly,Uttar Pradesh India</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-7 column mt-lg-0 mt-4">
              <h3>Newsletter </h3>
              <div className="end-column FooterSubscribe">
                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button className="button-style">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {/* <span className="fa fa-paper-plane" aria-hidden="true"></span> */}
                  </button>
                </form>
                <p>
                  Subscribe to our mailing list and get updates to your email
                  inbox.
                </p>
              </div>

              <div className="columns-2 mt-4 FooterSocial">
                <ul className="social">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} size='2x' className='social-icon' />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} size='2x' size='2x' className='social-icon' />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlusG} size='2x' className='social-icon' />

                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} size='2x' className='social-icon' />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedinIn} size='2x' className='social-icon' />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- copyright --> */}
          <div className="below-section mt-5 text-center">
            <p className="copy-text CopyRights">
              &copy; 2021 All Rights Reserved | by{" "}
              <a href="https://neuralresource.com/">
                Neural Resource Technologies.{" "}
              </a>
            </p>
          </div>
          {/* <!-- //copyright --> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
