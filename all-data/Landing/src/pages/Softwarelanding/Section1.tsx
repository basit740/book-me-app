import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import team5 from "../../assets/images/team/team-5.jpg"
import team6 from "../../assets/images/team/team-6.jpg"
import team7 from "../../assets/images/team/team-7.jpg"

import faq from "../../assets/images/softwere-faq-img.png"

import Subscribe from '../../components/Subscribe';
import Accordions from '../../components/Accordion';
import AgencySoftwareBlog from '../../components/AgencysoftwareBlog';
import AgencyInetriorcontact from '../../components/AgencyInetriorcontact';

const teamMembers = [
    { id: 1, name: 'Tomas Trahan', image: team5, },
    { id: 2, name: 'Michael Daniels', image: team6, },
    { id: 3, name: 'Reynaldo Lavigne', image: team7, },
];

const pricingPlans = [
    { id: 1, title: 'Basic', price: 20, },
    { id: 2, title: 'Standard', price: 50, },
    { id: 3, title: 'Premium', price: 90, },
];

const footerData = [
    { icon: 'pe-7s-download', title: 'Download Now', description: 'Sign up and download instant software to get started now', },
    { icon: 'pe-7s-call', title: 'Call Us', description: 'If you have any query about Prosoft, please call us on', },
    { icon: 'pe-7s-comment', title: 'Chat With Us', description: 'If you need live support, chat with our technical team now', },
];

const Section1 = () => {

    return (
        <React.Fragment>
            {/* Team */}
            <section className="section softwere-team" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Innovative Team</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh
                                    malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {teamMembers.map((member) => (
                            <Col lg={4} key={member.id}>
                                <div className="softwere-team-box mt-4">
                                    <div className="softwere-team-img">
                                        <Image src={member.image} alt="" fluid />
                                    </div>
                                    <div className="softwere-team-content text-center mt-4 p-2">
                                        <h4 className="f-15 text-uppercase letter-spacing_2">{member.name}</h4>
                                        <p className="text-muted f-13 mt-3">Position</p>
                                        <p className="text-muted mt-3">Placerat nulla consectetur tempor maecenas commodo sagittis vitae mauris sit amet vehila congue venenatis.</p>

                                        <div className="mt-4 text-center">
                                            <ul className="list-inline softwere-team-social mb-0 ">
                                                <li className="list-inline-item mx-3">
                                                    <Link to="#" className="rounded-circle  ">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2 mx-3">
                                                    <Link to="#" className="rounded-circle  ">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2 mx-3">
                                                    <Link to="#" className="rounded-circle  ">
                                                        <i className="mdi mdi-linkedin"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Pricing */}

            <section className="section softwere-pricing" id="pricing">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Pricing</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh
                                    malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {pricingPlans.map((plan) => (
                            <Col lg={4} key={plan.id}>
                                <div className="softwere-pricing-box text-center mt-4">
                                    <div className="bg-dark p-3">
                                        <h4 className="mb-0 text-uppercase f-18 letter-spacing_4 text-white">{plan.title}</h4>
                                    </div>
                                    <div className="p-5">
                                        <div className="softwere-pricing-plan">
                                            <h3><sup>$</sup> {plan.price} <span>/month</span> </h3>
                                        </div>
                                        <div className="softwere-features mt-4 pt-3">
                                            <p className="text-muted">CRM Auto-Sync</p>
                                            <p className="text-muted">Unlimited Email</p>
                                            <p className="text-muted">Track Energy</p>
                                            <p className="text-muted">Power And Dialing</p>
                                            <p className="text-muted">Speech Analytics</p>
                                            <p className="text-muted">Sales platform</p>
                                        </div>
                                        <div className="mt-5">
                                            <Button href="#" className="btn btn-md btn-dark-custom">
                                                Get Started
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <hr />
            {/* Subscribe */}
            <Subscribe />

            {/* Faq */}

            <section className="section book-faqs" id="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Frequently Asked Questions</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={6}>
                            <div className="book-faq-img mt-4 text-center">
                                <img src={faq} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Accordions />
                    </Row>
                </Container>
            </section>

            {/* Blog */}
            <AgencySoftwareBlog />
            <hr />

            {/* Contact */}
            <AgencyInetriorcontact />

            {/* Footer */}
            <footer className="section-footer bg-softwere-footer">
                <Container>
                    <Row>
                        {footerData.map((item, index) => (
                            <Col lg={4} key={index}>
                                <div className="softwere-footer p-4 mt-4">
                                    <div className="softwere-footer-icon">
                                        <i className={item.icon + ' text-white'}></i>
                                    </div>
                                    <h4 className="text-uppercase f-15 letter-spacing_4 text-white mt-4">{item.title}</h4>
                                    <p className="text-muted mt-4 f-15 line-height_1_6">{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-4 py-4">
                        <Col lg={12}>
                            <div className="text-center">
                                <p className="copy-rights text-white mb-0">
                                    &copy; {new Date().getFullYear()} Tulsy. Design by Themesdesign
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </React.Fragment>
    )
}

export default Section1