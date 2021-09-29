import React from 'react'

const Header = () => {
    return (
        <header id="site-header" class="main-header fixed-top">
            <div class="container HeaderLogoEd">
                <nav class="navbar navbar-expand-lg stroke px-0">

                    <h1>
                        <a class="navbar-brand" href="index.html">
                            {/* <!-- <i class="fab fa-accusoft icon-color mr-1"></i> N<span class="icon-color" style="font-weight:700;">R</span><span style="font-weight:500;">T</span>
                        <br>
                        <span class="inner-text">Neural Resource Technologies</span> --> */}
                            <img src="/custom/NeuralResource.png" width="30%" />
                        </a>
                    </h1>

                    <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul id="primary-menu" class="navbar-nav ml-lg-auto">
                            <li id="menu-item-10"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-10 nav-item active">
                                <a href="index.html" class="nav-link active">Home</a></li>
                            <li id="menu-item-17"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17 nav-item">
                                <a href="services/about_us" class="nav-link">About</a>
                            </li>
                            <li id="menu-item-21"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21 nav-item"><a
                                    href="services/services.html" class="nav-link">Services</a></li>
                            {/* <!-- <li id="menu-item-27" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-27 nav-item dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" id="navbar-dropdown-menu-link-27" aria-haspopup="true" aria-expanded="false">Pages</a>
<div  class="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-27">
<a href="blog-posts/index.html" class="dropdown-item" id="menu-item-9">Blog Posts</a><a href="404-page/index.html" class="dropdown-item" id="menu-item-32">404 Page</a><a href="elements-page/index.html" class="dropdown-item" id="menu-item-36">Elements Page</a><a href="single-landing-page/index.html" class="dropdown-item" id="menu-item-40">Landing Page</a></div>
</li> --> */}
                            <li id="menu-item-28"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 nav-item"><a
                                    href="services/contact.html" class="nav-link">Contact</a></li>
                        </ul>
                        <ul class="navbar-nav">
                            {/* <!-- search right --> */}
                            <div class="search-right ml-lg-3 HeaderSearch">
                                <form action="https://neuralresource.com/" method="GET" class="search-box position-relative">
                                    <input type="search" name="s" placeholder="Enter Keyword" required="required" autofocus=""
                                        class="search-popup" />
                                    <button type="submit" class="btn search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            {/* <!--//search-right--> */}
                        </ul>

                    </div>

                    {/* <!-- toggle switch for light and dark theme --> */}
                    <div class="cont-ser-position w3DarkLight">
                        <nav class="navigation">
                            <div class="theme-switch-wrapper">
                                <label class="theme-switch" for="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div class="mode-container">
                                        <i class="gg-sun"></i>
                                        <i class="gg-moon"></i>
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

export default Header
