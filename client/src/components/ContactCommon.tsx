import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

const ContactCommon: React.FC = () => {

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

                    <Row className="mt-5 pt-4">
                        <Col lg={8}>
                            <div className="photographer-contact-form mt-4">
                                <h5 className="text-uppercase f-18 letter-spacing_2">Get In Touch</h5>
                            </div>
                            <div className="custom-form mt-4">
                                <Form onSubmit={handleInputChange} name="myForm" id="myForm">
                                    {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-2">
                                                <Form.Control name="name" id="name" type="text" placeholder="Your Name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-2">
                                                <Form.Control name="email" id="email" type="email" placeholder="Your Email" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-2">
                                                <Form.Control name="number" id="number" type="number" placeholder="Phone Number" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-2">
                                                <Form.Control name="comments" id="comments" as="textarea" rows={5} placeholder="Your Message" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mt-2">
                                                <Button type="submit" id="submit" name="send" className="submitBnt btn btn-md btn-dark-custom">Send Message</Button>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="photographer-contact-info mt-3">
                                <h5 className="text-uppercase f-18 letter-spacing_2">Address</h5>

                                <p className="text-muted mt-4">Sapiente delectus reiciendis voluptatibus maiores alias consequatur
                                    they aut perferendis doloribus asperiores repellat.</p>

                                <div className="mt-4">
                                    <p className="f-15 mt-4"><i className="pe-7s-map-marker photographer-contact-icon me-3"></i>Juniper Drive Southfield, 48075</p>
                                    <p className="f-15 mt-4"><i className="pe-7s-call photographer-contact-icon me-3"></i>(+989-849-0882)</p>
                                    <p className="f-15 mt-4"><i className="pe-7s-mail photographer-contact-icon me-3"></i>Juniper Drive Southfield, 48075</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default ContactCommon