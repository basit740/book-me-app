import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

// Image
import map from "../assets/images/map.png"

const AgencyInteriorContact: React.FC = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // Access form field values
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');
        const comments = formData.get('comments');

        const validationError = validateForm(name, email, number, comments);
        if (validationError) {
            setErrorMsg(validationError);
            return;
        }
        form.reset();
        setErrorMsg('');
    };

    const validateForm = (name: any, email: any, number: any, comments: any) => {
        if (!name || name.trim() === '') {
            return 'Please enter your name.';
        }
        if (!email || email.trim() === '') {
            return 'Please enter your email.';
        }
        if (!number || number.trim() === '') {
            return 'Please enter a phone number.';
        }
        if (!comments || comments.trim() === '') {
            return 'Please enter your comments.';
        }
        return '';
    };

    return (
        <React.Fragment>
            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Contact Us</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus
                                    malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={5}>
                            <div className="mt-4">
                                <div style={{ backgroundImage: `url${map}`, backgroundRepeat: "no-repeat" }} className="pb-3">
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-map-marker f-22 me-4" ></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">2276 Lynn Ogden Lane Beaumont
                                                <br />Lodgeville Road TX 77701</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-phone f-22 me-4"></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">Phone: +71 612-234-4023
                                                <br />Fax: +954-627-9727</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-calendar-clock f-22 me-4"></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">Monday-friday: 9.00-19.00
                                                <br />Saturday-Sunday: Holiday</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="agency-contact-icon float-start">
                                            <i className="mdi mdi-email f-22 me-4"></i>
                                        </div>
                                        <div className="agency-contact-info ps-4">
                                            <p className="text-muted">Email: FredVWeaver@rhyta.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="custom-form mt-4">
                                <Form onSubmit={handleInputChange} name="myForm" id="myForm">
                                    {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="name" id="name" type="text" placeholder="Your Name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="email" id="email" type="email" placeholder="Your Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="number" id="number" type="number" placeholder="Phone Number" />
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
                                                <Button type="submit" id="submit" name="send" className="submitBnt btn btn-md btn-dark-custom">Send Message</Button>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>
    )
}

export default AgencyInteriorContact;