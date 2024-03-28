import React, { useState } from 'react'

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"

import client1 from "../../assets/images/clients/client-1.png"
import client2 from "../../assets/images/clients/client-2.png"
import client3 from "../../assets/images/clients/client-3.png"
import client4 from "../../assets/images/clients/client-4.png"

import pricingImage1 from '../../assets/images/pricing/pricing-1.jpg';
import pricingImage2 from '../../assets/images/pricing/pricing-2.jpg';
import pricingImage3 from '../../assets/images/pricing/pricing-3.jpg';

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper'
import { Link } from 'react-router-dom'
import Blog from '../../components/Blog'
import Footer from '../Businesslanding/Footer'

const clientData = [
    { userImg: user1, userName: 'Russell McGee', clientLogo: client1, },
    { userImg: user2, userName: 'John Poynter', clientLogo: client2, },
    { userImg: user3, userName: 'Michael Cobb', clientLogo: client3, },
    { userImg: user4, userName: 'Kevin Kinney', clientLogo: client4, },
];

const pricingData = [
    { title: 'Standard', price: '$23.99', image: pricingImage1, },
    { title: 'Premium', price: '$53.99', image: pricingImage2, active: "-active" },
    { title: 'Advanced', price: '$73.99', image: pricingImage3, },
];

const teamData = [
    { name: "Graig L. Catalano", role: "Developer", image: user1, },
    { name: "Thomas M. Mock", role: "Photoshop", image: user2, },
    { name: "Robert L. Kyte", role: "Designer", image: user3, }
]

const Section1 = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // Access form field values
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');
        const address = formData.get('address');
        const comments = formData.get('comments');

        const validationError = validateForm(name, email, number, address, comments);
        if (validationError) {
            setErrorMsg(validationError);
            return;
        }
        form.reset();
        setErrorMsg('');
    };

    const validateForm = (name: any, email: any, number: any, address: any, comments: any) => {
        if (!name || name.trim() === '') {
            return 'Please enter your name.';
        }
        if (!email || email.trim() === '') {
            return 'Please enter your email.';
        }
        if (!number || number.trim() === '') {
            return 'Please enter a phone number.';
        }
        if (!address || address.trim() === '') {
            return 'Please enter your address.';
        }
        if (!comments || comments.trim() === '') {
            return 'Please enter your comments.';
        }
        return '';
    };

    return (
        <React.Fragment>
            {/* Client */}
            <section className="section construction-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Client Says</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        <Col lg={12}>
                            <Swiper className="mySwiper6"
                                spaceBetween={10}
                                slidesPerView={2}
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                autoplay={true}>
                                {clientData.map((client, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item m-2">
                                            <div className="construction-client-box bg-white text-center p-4 mt-5">
                                                <div className="construction-client-img">
                                                    <img src={client.userImg} className="img-fluid rounded-circle" alt="" />
                                                </div>

                                                <div className="construction-client-content mt-5">
                                                    <h5 className="text-uppercase letter-spacing_2 f-15">{client.userName}</h5>
                                                    <p className="f-16 mt-4">Nullam tempor lacinia porta imperdiet faucibus liquam consequat consequat faucibus tempor purus suscipit malesuada diam vita sagittis.</p>

                                                    <div className="construction-client-logo mt-4">
                                                        <img src={client.clientLogo} width="120" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
            <hr />

            {/* Pricing */}
            <section className="section" id="pricing">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Pricing</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {pricingData.map((item: any, index: any) => (
                            <Col lg={4} key={index}>
                                <div className="construction-pricing-box text-center mt-4">
                                    <div className="p-4">
                                        <h3 className="mb-0">{item.price}</h3>
                                    </div>

                                    <div className={`construction-pricing-standard${item.active} p-3`}>
                                        <h4 className="text-uppercase f-20 letter-spacing_4 mb-0">{item.title}</h4>
                                    </div>
                                    <div className="p-5">
                                        <div className="construction-pricing-img">
                                            <img src={item.image} className="img-fluid rounded-circle" alt="" />
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <p className="text-muted">Popular Construction Project</p>
                                            <p className="text-muted">Highway Construction</p>
                                            <p className="text-muted mb-0">Specialty Architects Engineers</p>
                                        </div>

                                        <div className="mt-4 pt-3">
                                            <Link to="#" className="btn btn-md btn-dark-custom">
                                                Purchase Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA */}
            <section className="section bg-construction-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="construction-cta-content text-white text-center">
                                <h4 className="construction-cta-title text-uppercase line-height_1_4 letter-spacing_2">
                                    Providing Personalized and High Quality services
                                </h4>
                                <p className="mt-4 text-white-50">
                                    Contrary to popular belief quisque s ipsum ultrices pulvinar cras iaculis magna a congue ligula congue donec
                                    vehicula sit amet tincidunt.
                                </p>
                                <div className="mt-4 pt-3">
                                    <Button variant="outline-light" className='btn-md btn-white' >
                                        Get In Touch
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* team */}
            <section className="section" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Smart Team</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="row mt-5 pt-3">
                        {teamData.map((teamMember, index) => (
                            <Col lg={4} key={index}>
                                <div className="team p-4 text-center mt-4">
                                    <div className="agency-team-img">
                                        <img src={teamMember.image} className="img-fluid rounded-circle" alt={teamMember.name} />
                                    </div>
                                    <h5 className="mt-4 text-uppercase letter-spacing_2 f-15">{teamMember.name}</h5>
                                    <p className="text-muted f-13">{teamMember.role}</p>
                                    <p className="text-muted mb-0">There are many on variations passages sufered tha alteration form injected randomised in look.</p>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Container>
            </section>
            <hr />

            {/* Blog */}
            <Blog />

            {/* Contact */}

            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Get In Touch</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        <Col lg={8}>
                            <div className="custom-form mt-4">
                                <Form onSubmit={handleInputChange} name="myForm" id="myForm">
                                    {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="name" id="name" type="text" placeholder="Your Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="email" id="email" type="email" placeholder="Your Email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="number" id="number" type="number" placeholder="Phone Number" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="address" id="address" type="address" placeholder="Address" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="comments" id="comments" as="textarea" rows={5} placeholder="Your Message" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mt-3">
                                                <Button type="submit" id="submit" name="send" className="submitBnt btn btn-md btn-dark-custom w-100">Send Message</Button>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="startup-map mt-4">
                                <iframe title='play' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" height="330" style={{ border: "0", width: "100%" }} allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

            {/* Footer */}
            <Footer />


        </React.Fragment>
    )
}

export default Section1