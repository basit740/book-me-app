import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import back14 from "../../assets/images/background/bg-14.jpg"
import back16 from "../../assets/images/background/bg-16.jpg"
import back17 from "../../assets/images/background/bg-17.jpg"
const Footer = () => {
    return (
        <React.Fragment>
            <footer className="section blog-bg-footer pb-5">
                <div className="container">
                    <Row>
                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Resources</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li><Link to="#">Monitoring Grader</Link></li>
                                    <li><Link to="#">Video Tutorial</Link></li>
                                    <li><Link to="#">Term &amp; Service</Link></li>
                                    <li><Link to="#">Tulsy API</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Help</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li><Link to="#">Sign Up</Link></li>
                                    <li><Link to="#">Login</Link></li>
                                    <li><Link to="#">Terms of Services</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Latest News</h6>
                                <div className="mt-4 pt-2">
                                    <div className="left-recent-content">
                                        <div className="left-recent-img float-start pe-3">
                                            <Link to="#">
                                                <img src={back14} className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                        <div>
                                            <h5 className="f-12 text-uppercase">
                                                <Link to="#" className="left-recent-title">Beautiful day friends..</Link>
                                            </h5>
                                            <p className="mt-2 f-13 text-muted">September 14, 2017</p>
                                        </div>
                                    </div>

                                    <div className="left-recent-content mt-1">
                                        <div className="left-recent-img float-start pe-3">
                                            <Link to="#">
                                                <img src={back16} className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="f-12 text-uppercase">
                                                <Link to="#" className="left-recent-title">Nature valley cooling..</Link>
                                            </h5>
                                            <p className="mt-2 f-13 text-muted">September 14, 2017</p>
                                        </div>
                                    </div>

                                    <div className="left-recent-content mt-1">
                                        <div className="left-recent-img float-start pe-3">
                                            <Link to="#">
                                                <img src={back17} className="img-fluid" alt="" />
                                            </Link>
                                        </div>
                                        <div className="pt-1">
                                            <h5 className="f-12 text-uppercase">
                                                <Link to="#" className="left-recent-title">Best Healthy Salad..</Link>
                                            </h5>
                                            <p className="mt-2 f-12 text-muted">September 14, 2017</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Information</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li><Link to="#">Pages</Link></li>
                                    <li><Link to="#">Our Team</Link></li>
                                    <li><Link to="#">Feuchers</Link></li>
                                    <li><Link to="#">Pricing</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="agency-footer-alt-content p-4">
                                <p className="copy-right text-center mb-0">
                                    © {new Date().getFullYear()} Tulsy. Design by Themesdesign
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
