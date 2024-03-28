import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Pricing from '../../components/Pricing';
import Typewriter from 'typewriter-effect';
import Work from '../../components/Work';

// images
import about from "../../assets/images/business-about-img.jpg"
import ruler from "../../assets/images/icons/rulers.png"
import brief from "../../assets/images/icons/briefcase.png"
import present from "../../assets/images/icons/presentation.png"
import tool from "../../assets/images/icons/tools.png"
import test from "../../assets/images/icons/browser-testing.png"
import head from "../../assets/images/icons/headphones.png"

interface ServicesData {
    icon: string; title: string;
}

const servicesData: ServicesData[] = [
    { icon: ruler, title: 'UI/UX Design', },
    { icon: brief, title: 'Branding Identity', },
    { icon: present, title: 'Desktop Idea', },
    { icon: tool, title: 'Easy to Use', },
    { icon: test, title: 'Dynamic Growth', },
    { icon: head, title: 'Friendly Support', },
];

const Section = () => {

    const [showModal, setShowModal] = React.useState<boolean>(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <React.Fragment>
            {/* Home */}
            <section className="section business-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="business-home-content text-center text-white">
                                    <h4 className="intro">
                                        <span className="typing">
                                            <Typewriter
                                                options={{
                                                    strings: ['Fully Responsive.', 'Unique & Clean Designed', 'Well Documented.'],
                                                    autoStart: true,
                                                    loop: true,

                                                }} />
                                        </span>
                                    </h4>
                                    <h4 className="business-home-subtitle mt-4 letter-spacing_2">Hi There! Welcome To Tulsy Templates!</h4>
                                    <p className="business-home-desc mt-4 f-15">The wise therefore these matters to this principle of selection rejects pleasures to secure pleasures.</p>
                                    <div className="mt-4 pt-3 mouse-down">
                                        <Button href="#about" className="btn btn-md btn-custom">Know About Us</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* About */}
            <section className="section business-about" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="business-about-img position-relative">
                                <img src={about} className="img-fluid position-relative" alt="" />
                                <div className="bg-color-overlay"></div>
                                <div className="app-video-icon">
                                    <Link className="modal-btn" to="#" data-bs-toggle="modal" data-bs-target=".watchvideomodal" onClick={openModal}>
                                        <span className="play-btn">
                                            <span className="btn-icon">
                                                <i className="mdi mdi-play"></i>
                                            </span>
                                        </span>
                                    </Link>
                                    <Modal show={showModal} onHide={closeModal} centered size="lg" contentClassName='home-modal bg-transparent'>
                                        <Modal.Header closeButton className="border-0 "></Modal.Header>
                                        <Modal.Body className="home-modal p-0">
                                            <video id="VisaChipCardVideo" className="video-box w-100 h-100 pb-0" controls >
                                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                            </video>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <div className="business-about-content ms-3 mt-5 mt-lg-0">
                                <h4 className="letter-spacing_2 f-18 text-uppercase">Nullam quis sit amet faucibus tincidunt.</h4>
                                <p className="text-muted mt-4">Consequate dolor in reprehenderit in voluptate velit esse cillum dolore fugiat pariatur excepteur sint occaecat cupidatat non proident sunt deserunt mollit pleasures to secure other laborum.</p>

                                <div className="mt-5">
                                    <p className="business-about-features text-muted">
                                        <i className="mdi mdi-check me-3 about-icon"></i>
                                        <span>Tempora incidunt labore</span>
                                        <Link to="#" className="business-about-highlight">
                                            Dolore magnam suaerat voluptatem.
                                        </Link>
                                    </p>

                                    <p className="business-about-features text-muted">
                                        <i className="mdi mdi-check me-3 about-icon"></i>
                                        <span>Pleasure rationally encounter</span>
                                        <Link to="#" className="business-about-highlight">
                                            Business-s that extremely painful.
                                        </Link>
                                    </p>

                                    <p className="business-about-features text-muted">
                                        <i className="mdi mdi-check me-3 about-icon"></i>
                                        <span>Feserunt mollitia animi</span>
                                        <Link to="#" className="business-about-highlight">
                                            Naborum dolorum fuga
                                        </Link>
                                        harum quidem distinctio.
                                    </p>

                                    <p className="business-about-features text-muted">
                                        <i className="mdi mdi-check me-3 about-icon"></i>
                                        <Link to="#" className="business-about-highlight">
                                            Gaborious physical exercise
                                        </Link>
                                        <span>
                                            except to obusiness-btain some advantage from.
                                        </span>
                                    </p>

                                    <p className="business-about-features text-muted">
                                        <i className="mdi mdi-check me-3 about-icon"></i>
                                        <span>Keleniti atque corrupti</span>
                                        <Link to="#" className="business-about-highlight">
                                            They dolores molestias
                                        </Link>
                                        sint occaecati cupiditate.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Services */}
            <section className="section business-services" id="services">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </div>
                    </div>

                    <Row className="mt-5 pt-3">
                        {(servicesData || [])?.map((service: ServicesData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="text-center mt-4 p-2">
                                    <div className="business-services-img mt-3">
                                        <img src={service.icon} className="img-fluid" alt="" />
                                    </div>
                                    <h5 className="f-15 text-uppercase letter-spacing_2 mt-4 pt-3">{service.title}</h5>
                                    <p className="text-muted mt-4 mb-0">Pellentesque mollis imperdiet congue ptent class taciti sociqu litora torquent conubia nostra inceptos himenaeos.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <hr />

            {/* Work */}

            <Work />

            {/* Counter */}
            <section className="section business-bg-counter" id="screen">
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="business-counter-content text-white">
                                <div className="business-counter-icon">
                                    <i className="mdi mdi-account-multiple-plus-outline"></i>
                                </div>
                                <h1 className="line-height_1_4 mt-4">A dedicated team who cares about your success</h1>
                                <p className="business-counter-desc mt-4 f-15 mb-0">Tulsy ornare dcursus molestie nibh laoreet maecenas turpis sapien varius consequat.</p>
                            </div>
                        </Col>

                        <Col lg={6} className="offset-lg-1">
                            <Row id="counter">
                                <Col lg={6}>
                                    <div className="business-counter-box text-center text-white">
                                        <h2 className="counter-count mt-4 text-white">
                                            <CountUp start={45} end={253} duration={2} />
                                            <span className="counter_value display-4" id="count1"></span>
                                        </h2>
                                        <p className="letter-spacing_2 f-15 text-uppercase mt-3 mb-0">Work Completed</p>
                                    </div>

                                    <div className="business-counter-box text-center text-white my-4">
                                        <h2 className="counter-count mt-4 text-white">
                                            <CountUp start={45} end={252} duration={2} />
                                            <span className="counter_value display-4" id="count2"></span>
                                        </h2>
                                        <p className="letter-spacing_2 f-15 text-uppercase mt-3 mb-0">Customer Rate</p>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="business-counter-box text-center text-white">
                                        <h2 className="counter-count mt-4 text-white">
                                            <CountUp start={180} end={1252} duration={2.5} />
                                            <span className="counter_value display-4" id="count3"></span>
                                        </h2>
                                        <p className="letter-spacing_2 f-15 text-uppercase mt-3 mb-0">Sales Clients</p>
                                    </div>

                                    <div className="business-counter-box text-center text-white mt-4">
                                        <h2 className="counter-count mt-4 text-white">
                                            <CountUp start={0} end={52} duration={2} />
                                            <span className="counter_value display-4" id="count4"></span>
                                        </h2>
                                        <p className="letter-spacing_2 f-15 text-uppercase mt-3 mb-0">Certified Team</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Pricing */}
            <Pricing />

            <hr />

        </React.Fragment>
    )
}

export default Section