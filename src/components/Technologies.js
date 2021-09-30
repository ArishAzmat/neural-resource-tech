// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faJs, faLaravel, faPhp, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faAppleAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {
    return (
        <section className="features-section pt-5" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 right-wthree-img align-self order-lg-last order-first">
                        <div className="text-center mb-sm-5 mb-4">
                            <h3 className="title-big">
                                <span className="text-blue"> Our</span> <span className="icon-color">Technologies </span>
                            </h3>
                        </div>

                        <div className="row text-center justify-content-center">


                            <div className="col-sm-3 col-3 icon-text-style">
                                <FontAwesomeIcon icon={faAndroid} size='3x' />
                                {/* <i className="fa fa-android icon-color"></i> */}
                                <p>Android</p>
                            </div>

                            <div className="col-sm-3 col-3 icon-text-style">
                                <FontAwesomeIcon icon={faAppleAlt} size='3x' />
                                {/* <i className="fa fa-apple icon-color"></i> */}
                                <p>iOS</p>
                            </div>

                            <div className="col-sm-3 col-3 icon-text-style  border-right-0">
                                <FontAwesomeIcon icon={faReact} size='3x' />
                                {/* <i className="fa fa- icon-color"></i> */}
                                <p>React JS </p>
                            </div>

                            <div className="col-sm-3 col-3 icon-text-style icon-text-style-2">
                                <FontAwesomeIcon icon={faLaravel} size='3x' />
                                {/* <i className="fa fa-laravel icon-color"></i> */}
                                <p>Laravel</p>
                            </div>

                            <div className="col-sm-3 col-3 icon-text-style icon-text-style-2">
                                <FontAwesomeIcon icon={faPhp} size='3x' />
                                {/* <i className="fa fa-php icon-color"></i> */}
                                <p>PHP</p>
                            </div>

                            <div className="col-sm-3 col-3 icon-text-style icon-text-style-2 border-right-0">
                                <FontAwesomeIcon icon={faDatabase} size='3x' />
                                {/* <i className="fa fa-database icon-color"></i> */}
                                <p>SQL</p>
                            </div>
                            <div className="col-sm-3 col-3 icon-text-style icon-text-style-2 border-right-0">
                                <FontAwesomeIcon icon={faJs} size='3x' />
                                {/* <i className="fa fa-js icon-color"></i> */}
                                <p>Javascript</p>
                            </div>
                            <div className="col-sm-3 col-3 icon-text-style icon-text-style-2 border-right-0">
                                <FontAwesomeIcon icon={faWordpress} size='3x' />
                                {/* <i className="fa fa-wordpress icon-color"></i> */}
                                <p>Wordpress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Technologies
