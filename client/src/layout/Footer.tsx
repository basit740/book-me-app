import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterSection: React.FC = () => {
    return (
        <React.Fragment>
            <footer className="section agency-footer pb-5">
                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Information</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Pages</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Feuchers</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Pricing</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Help</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Sign Up </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms of Services</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Resources</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Monitoring Grader </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Video Tutorial</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Term &amp; Service</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Tulsy API</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Subscribe Now</h6>
                                <p className="subscribe-desc mt-4 mb-0">
                                    Tempora on dolore theet magnam aliquam quaerat voluptatem.
                                </p>

                                <div className="mt-4 text-center mx-auto">
                                    <div className="agency-footer-subcribe">
                                        <form action="#">
                                            <input placeholder="Email" type="text" />
                                            <button type="submit" className="btn btn-custom">
                                                <i className="mdi mdi-airplane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
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
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default FooterSection;