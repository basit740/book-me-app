import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Contact from '../../components/Contact'
import Accordions from '../../components/Accordion'

// IMage
import faq from "../../assets/images/book-faq-img.jpg"

interface PricingItem {
    id: number;
    title: string;
    price: string;
    data?: string;
    features: string[];
    buttonText: string;
};

const pricingData: PricingItem[] = [
    {
        id: 1, title: 'Pro Pack', price: '199',
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Topics Covered',
        ], buttonText: 'Purchase now',
    },
    {
        id: 2, title: 'Standard Pack', price: '299', data: "Customer",
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Topics Covered',
            'Customer Support 24/7',
        ], buttonText: 'Purchase now',
    },
    {
        id: 3, title: 'Nerd Pack', price: '399',
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Topics Covered',
        ], buttonText: 'Purchase now',
    },
];


const Section1 = () => {
    return (
        <React.Fragment>

            {/* Pricing */}
            <section className="section book-pricing" id="pricing">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Pricing and Plans</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim
                                    finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        {(pricingData || [])?.map((pricing: PricingItem) => (
                            <Col lg={4} key={pricing.id}>
                                <div className="book-pricing-box mt-4">
                                    <div className="bg-primary text-white text-center p-4">
                                        <h4 className="book-pricing-title text-uppercase letter-spacing_2">{pricing.title}</h4>
                                        <h4 className="book-pricing-price mt-3">
                                            {pricing.price}
                                            <span className="f-12"> / Per Copy</span>
                                        </h4>
                                    </div>
                                    <div className="book-pricing-features">
                                        <p className="text-muted mb-0">100 MB Disk Space <i
                                            className="mdi mdi-check text-dark float-end"></i></p>
                                        <p className="text-muted mb-0">2 Subdomains<i className="mdi mdi-check text-dark float-end"></i>
                                        </p>
                                        <p className="text-muted mb-0">5 Email Accounts<i className="mdi mdi-check text-dark float-end"></i>
                                        </p>
                                        <p className="text-muted mb-0">Webmail Support<i className="mdi mdi-close text-muted float-end"></i>
                                        </p>
                                        <p className="text-muted mb-0">Topics Covered<i className="mdi mdi-close text-muted float-end"></i>
                                        </p>
                                        {pricing.data ? <p className="text-muted mb-0">{pricing.data} Support 24/7<i className="mdi mdi-check text-dark float-end"></i></p> : ""}
                                    </div>
                                    <div className="p-4 mt-3 text-center">
                                        <Button href="#" className="btn btn-dark-custom">
                                            {pricing.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Cta */}
            <section className="book-bg-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="book-cta-box text-center text-white">
                                <h3 className="book-cta-title letter-spacing_4 text-uppercase">Add this awesome book to your collection</h3>
                                <p className="mt-4 f-15 letter-spacing_4">Schedule a meeting with our agent</p>

                                <div className="mt-5">
                                    <Button href="#" variant="outline-light" className='btn btn-md btn-white'>Buy For $79.99</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Faq */}
            <section className="section book-faqs" id="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Frequently Asked Questions</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
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

            <hr />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <footer className="section py-5 book-bg-footer">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="book-footer-box text-center">
                                <div className="book-footer-icon">
                                    <i className="pe-7s-notebook text-white"></i>
                                </div>

                                <div className="mt-5">
                                    <ul className="list-inline book-footer-social mb-0">
                                        <li className="list-inline-item" >
                                            <Link to="#" className="rounded">
                                                <i className="mdi mdi-facebook"></i>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded">
                                                <i className="mdi mdi-twitter"></i>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded">
                                                <i className="mdi mdi-linkedin"></i>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded">
                                                <i className="mdi mdi-google-plus"></i>
                                            </Link>
                                        </li>

                                        <li className="list-inline-item">
                                            <Link to="#" className="rounded">
                                                <i className="mdi mdi-twitter"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <p className="copy-right text-center mt-4 mb-0">
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

export default Section1