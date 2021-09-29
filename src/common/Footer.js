import React from 'react'

const Footer = () => {
    return (
        <footer class="w3l-footer-16">
            <div class="w3l-footer-16-main">

                <div class="container SetupFooter">

                    <div class="row footer-p">

                        <div class="col-lg-8 mt-lg-0 mt-4 pr-lg-5">
                            <div class="d-sm-flex align-items-center top-footer-content mb-5">
                                <a href="index-2.html">
                                    {/* <!-- <i
                                    class="fab fa-accusoft icon-color mr-1"></i>N<span class="icon-color" style="font-weight:700;">R</span><span style="font-weight:500;">T</span> --> */}
                                    <img src="/custom/NeuralResource.png" width="30%" />
                                </a>

                                <p class="top-p ml-sm-4 pl-sm-4 mt-sm-0 mt-2">
                                    If you want to grow your bussiness with our best employees or if you want us to make website for you
                                    then you can
                                    contact us via following source </p>
                            </div>
                            <div class="row footer-grids pt-4">
                                <div class="col-sm-4 col-6 column">

                                    <div id="archives-4" class="footer-gd-16 widget_archive">
                                        <h6 class="footer-links-title">Services</h6>
                                        <ul>
                                            <li><a href='#'></a>IT outsource</li>
                                        </ul>
                                        <ul>
                                            <li><a href='#'></a>Web development</li>
                                        </ul>
                                        <ul>
                                            <li><a href='#'></a>iOS & android development</li>
                                        </ul>
                                        <ul>
                                            <li><a href='#'></a>Digital marketing</li>
                                        </ul>


                                    </div>
                                </div>
                                <div class="col-sm-4 col-6 column pl-sm-0">

                                    <div id="categories-4" class="footer-gd-16 widget_categories">
                                        <h6 class="footer-links-title">Categories</h6>
                                        <ul>
                                            <li class="cat-item cat-item-2"><a href="category/business/index.html">Business</a>
                                            </li>
                                            <li class="cat-item cat-item-3"><a href="category/corporate/index.html">Corporate</a>
                                            </li>
                                            <li class="cat-item cat-item-4"><a href="category/creative/index.html">Creative</a>
                                            </li>
                                            <li class="cat-item cat-item-5"><a href="category/design/index.html">Design</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-sm-4 col-6 column pl-sm-0">

                                    <div id="meta-4" class="footer-gd-16  widget_meta">
                                        <h6 class="footer-links-title">Contact</h6>
                                        <ul>
                                            <li><a href="#">+91 9084411981</a></li>
                                            <li><a href="#">Contact@neuralresource.com</a></li>
                                            <li><a href="#">Bareilly,Uttar Pradesh India</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-7 column mt-lg-0 mt-4">

                            <h3>Newsletter </h3>
                            <div class="end-column FooterSubscribe">
                                <form action="#" class="subscribe" method="post">
                                    <input type="email" name="Email" placeholder="Email Address" required="" />
                                    <button class="button-style"><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
                                </form>
                                <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                            </div>

                            <div class="columns-2 mt-4 FooterSocial">
                                <ul class="social">

                                    <li><a href="#"><span class="fab fa-facebook-f" aria-hidden="true"></span></a>
                                    </li>

                                    <li><a href="#"><span class="fab fa-twitter" aria-hidden="true"></span></a>
                                    </li>

                                    <li><a href="#"><span class="fab fa-google-plus-g" aria-hidden="true"></span></a>
                                    </li>

                                    <li><a href="#"><span class="fab fa-instagram" aria-hidden="true"></span></a>
                                    </li>

                                    <li><a href="#"><span class="fab fa-linkedin-in" aria-hidden="true"></span></a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* <!-- copyright --> */}
                    <div class="below-section mt-5 text-center">
                        <p class="copy-text CopyRights">&copy; 2021 All Rights Reserved | by <a
                            href="https://neuralresource.com/">Neural Resource Technologies. </a>
                        </p>
                    </div>
                    {/* <!-- //copyright --> */}

                </div>
            </div>
        </footer>

    )
}

export default Footer
