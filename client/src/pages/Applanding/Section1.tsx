import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import Blog from '../../components/Blog';
import AppGymPricing from '../../components/AppGympricing';
import FooterSection from '../../layout/Footer';

//team
import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg";

interface TeamData {
  name: string; role: string; imageSrc: string;
}

const teamData: TeamData[] = [
  { name: "Graig L. Catalano", role: "Developer", imageSrc: user1 },
  { name: "Thomas M. Mock", role: "Photoshop", imageSrc: user2 },
  { name: "Robert L. Kyte", role: "Designer", imageSrc: user3 }
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
    const subject = formData.get('subject');
    const comments = formData.get('comments');

    const validationError = validateForm(name, email, subject, comments);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }
    form.reset();
    setErrorMsg('');
  };

  const validateForm = (name: any, email: any, subject: any, comments: any) => {
    if (!name || name.trim() === '') {
      return 'Please enter your name.';
    }
    if (!email || email.trim() === '') {
      return 'Please enter your email.';
    }
    if (!subject || subject.trim() === '') {
      return 'Please enter a subject.';
    }
    if (!comments || comments.trim() === '') {
      return 'Please enter your comments.';
    }
    return '';
  };

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <React.Fragment>
      {/* Cta */}
      <section className="section cta-2">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="app-video-box text-center text-white">
                <h2 className="app-video-title text-uppercase">Watch Video</h2>
                <p className="app-video-desc f-16 mx-auto mt-4 pt-2">Always holds these matters principle of selection he rejects pleasures to secure other greater pleasures else pains.</p>

                <div className="mt-5 app-video-icon">
                  <Button variant="link" className="modal-btn" onClick={openModal}>
                    <span className="avatar-sm">
                      <span className="rounded-circle btn-icon">
                        <i className="mdi mdi-play text-white"></i>
                      </span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={closeModal} centered size="lg" contentClassName='home-modal bg-transparent' className="bd-example-modal-lg watchvideomodal" aria-hidden="true" fade>
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <video id="VisaChipCardVideo" className="video-box w-100 h-100 pb-0" controls >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
      </Modal>
      {/* /Cta/ Modal */}

      {/* Team */}
      <section className="section" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="home-title text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Smart Team</h2>
                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-3">
            {(teamData || [])?.map((item: TeamData, key: number) => (
              <Col lg={4} key={key}>
                <div className="team p-4 text-center mt-4">
                  <div className="agency-team-img">
                    <img src={item.imageSrc} className="img-fluid rounded-circle" alt="" />
                  </div>
                  <h5 className="mt-4 text-uppercase letter-spacing_2 f-15">{item.name}</h5>
                  <p className="text-muted f-13">{item.role}</p>
                  <p className="text-muted mb-0">There are many on variations passages sufered tha alteration form injected randomised in look.</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing */}
      <AppGymPricing />

      {/* App Downloads */}
      <section className="section bg-app-downlode">
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="app-downlode-content text-center text-white">
                <h4 className="app-downlode-title">Download Tulsy App Today!</h4>
                <p className="app-downlode-desc f-17 mt-4">
                  Cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail to distinguish
                </p>
                <div className="mt-4 pt-3">
                  <Button variant="light" className="me-3 btn-md">Google Play</Button>
                  <Button variant="light" className="btn-md">App Store</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog */}

      <Blog />

      <hr />

      {/* Contact */}
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
            <Col lg={4}>
              <div className="photographer-agency-contact-icon mt-4">
                <p className="text-muted mt-4">Sapiente delectus reiciendis voluptatibus maiores alias consequatur
                  they aut perferendis doloribus asperiores repellat.</p>
                <div className="mt-4 pt-2">
                  <p className="f-15 mt-4 text-muted">
                    <i className="pe-7s-map-marker photographer-contact-icon me-3"></i>
                    Juniper Drive Southfield, 48075
                  </p>
                  <p className="f-15 mt-4 text-muted">
                    <i className="pe-7s-call photographer-contact-icon me-3"></i>(+989-849-0882)
                  </p>
                  <p className="f-15 mt-4 text-muted">
                    <i className="pe-7s-mail photographer-contact-icon me-3"></i>LorettaCNunnally@rhyta.com
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="custom-form">
                <div id="message"></div>
                <Form method="post" onSubmit={handleInputChange} className="contact-form" name="myForm" id="myForm">
                  {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="name" className="my-3">
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="email" className="my-3">
                        <Form.Control type="email" name="email" placeholder="Enter Your Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form.Group controlId="subject" className="my-3">
                        <Form.Control type="text" name="subject" placeholder="Enter Your Subject" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form.Group controlId="comments" className="my-3">
                        <Form.Control as="textarea" name="comments" rows={5} placeholder="Your message" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="mt-3">
                        <Button type="submit" id="submit" name="send" className="submitBnt btn btn-dark-custom w-100">
                          Send Message
                        </Button>
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

      {/* Footer */}
      <FooterSection />

    </React.Fragment>
  )
}

export default Section1;
