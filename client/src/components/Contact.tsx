import React, { useState } from 'react'
import { Alert, Col, Container, Form, Row } from 'react-bootstrap'

const Contact: React.FC = () => {

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Access form field values
    const name = formData.get('name');
    const email = formData.get('email');
    const comments = formData.get('comments');

    const validationError = validateForm(name, email, comments);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }
    form.reset();
    setErrorMsg('');
  };

  const validateForm = (name: any, email: any, comments: any) => {
    if (!name || name.trim() === '') {
      return 'Please enter your name.';
    }
    if (!email || email.trim() === '') {
      return 'Please enter your email.';
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
          <Row className='justify-content-center'>
            <Col lg={8}>
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                  Get In Touch
                </h2>
                <p className="heading-title-desc text-muted mt-4">
                  Pellentesque habitant morbi tristique senectus malesuada fames
                  turpis egestas duis dignissim finibus commodo nibh malesuada
                  sollis diam.
                </p>
              </div>
            </Col>
          </Row>

          <div className="row mt-5 pt-4">
            <Col lg={6}>
              <div className="startup-map mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                  height="350"
                  style={{ border: 0, width: '100%' }}
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
            </Col>

            <Col lg={6}>
              <div className="custom-form mt-3">
                <form method="post" onSubmit={handleSubmit} className="contact-form" name="myForm" id="myForm">
                  {/* <div id="error-msg"></div> */}
                  {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                  <Row>
                    <Col lg={6}>
                      <div className="form-group mt-3">
                        <Form.Control name="name" id="name" type="text" placeholder="Your name" />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="form-group mt-3">
                        <Form.Control name="email" id="email" type="email" placeholder="Your email" />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <div className="form-group mt-3">
                        <Form.Control as="textarea" name="comments" id="comments" rows={8} placeholder="Your message" />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-dark-custom" value="Send Message" />
                        <div id="simple-msg"></div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </div>
        </Container>
      </section>

    </React.Fragment>
  )
}

export default Contact;