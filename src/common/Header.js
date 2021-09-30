import React from 'react';
import logo from '../images/NeuralResource.png';
// import '../style/'



const Header = () => {
    return (
        <header id="site-header" className="main-header fixed-top">
            <div className="container HeaderLogoEd" >
                <nav className="navbar navbar-expand-lg stroke px-0">

                    <h1>
                        <a className="navbar-brand" href="index.html">

                            <img src={logo} width="30%" />
                        </a>
                    </h1>

                    <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul id="primary-menu" className="navbar-nav ml-lg-auto">
                            <li id="menu-item-10"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-10 nav-item active">
                                <a href="index.html" className="nav-link active">Home</a></li>
                            <li id="menu-item-17"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17 nav-item">
                                <a href="services/about_us" className="nav-link">About</a>
                            </li>
                            <li id="menu-item-21"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21 nav-item"><a
                                    href="services/services.html" className="nav-link">Services</a></li>

                            <li id="menu-item-28"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 nav-item"><a
                                    href="services/contact.html" className="nav-link">Contact</a></li>
                        </ul>
                        <ul className="navbar-nav">
                            {/* <!-- search right --> */}
                            <div className="search-right ml-lg-3 HeaderSearch">
                                <form action="https://neuralresource.com/" method="GET" className="search-box position-relative">
                                    <input type="search" name="s" placeholder="Enter Keyword" required="required" autofocus=""
                                        className="search-popup" />
                                    <button type="submit" className="btn search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            {/* <!--//search-right--> */}
                        </ul>

                    </div>

                    {/* <!-- toggle switch for light and dark theme --> */}
                    <div className="cont-ser-position w3DarkLight">
                        <nav className="navigation">
                            <div className="theme-switch-wrapper">
                                <label className="theme-switch" for="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun"></i>
                                        <i className="gg-moon"></i>
                                    </div>
                                </label>
                            </div>
                        </nav>
                    </div>
                    {/* <!-- //toggle switch for light and dark theme --> */}

                </nav>
            </div>
        </header>
    )
}

export default Header;
