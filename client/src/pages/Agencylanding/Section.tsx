import React from 'react'
import { Carousel, Col, Container, Modal, ProgressBar, Row } from 'react-bootstrap';
import Counter from '../../components/Counter';
import { Link } from 'react-router-dom';
import PortfolioWork from '../../components/PortfolioWork';

// Image
import user1 from "../../assets/images/users/user-1.jpg";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";

interface ServicesData {
    icon: string; title: string;
}

interface TestData {
    id: number; image: string; author: string; post: string;
}

const servicesData: ServicesData[] = [
    { icon: 'pe-7s-display1', title: 'Web Development', },
    { icon: 'pe-7s-pen', title: 'Graphic Design', },
    { icon: 'pe-7s-phone', title: 'App Development', },
    { icon: 'pe-7s-portfolio', title: 'Software Development', },
    { icon: 'pe-7s-compass', title: 'Digital Marketing', },
    { icon: 'pe-7s-display2', title: 'UI & XI Design', },
];

const testData: TestData[] = [
    { id: 1, image: user1, author: "Randall Wilton", post: "General Manager" },
    { id: 2, image: user2, author: "Elaine Lamarr", post: "Graphic Designer" },
    { id: 3, image: user3, author: "Warren Williams", post: "Web Developer" },
]

const Section = () => {

    // modal open+close state
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    
    return (
        <React.Fragment>
            {/* Home */}
            <section className="section agency-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className='justify-content-center'>
                                <Col lg={12}>
                                    <div className="agency-home-content text-center text-white">
                                        <p className="agency-home-sub-title text-uppercase f-14 letter-spacing_4">
                                            Awesome Agency Landing
                                        </p>
                                        <h4 className="agency-home-title text-uppercase mt-4 letter-spacing_6">
                                            Multipurpose And Creative
                                        </h4>
                                        <p className="agency-home-desc f-15 mt-4 mx-auto line-height_1_8">
                                            Pleasure rationally encounter in consequences that are extremely painful again
                                            pursues loves desires obtain pain itself because pain.
                                        </p>
                                        <div className="mt-5">
                                            <Link to="#" className="btn btn-custom">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="section about" id="about">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="heading text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                    We are skilled
                                </h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis
                                    dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={6}>
                            <div className="agency-about-content mt-4">
                                <h4 className="line-height_1_8 text-uppercase f-22 letter-spacing_4">
                                    Web studio stunning & Engaging online Experiences
                                </h4>
                                <p className="text-muted mt-3 mb-0">
                                    Temporibus autem quibusdam officiis debitis rerum nectatibus saepe eveniet
                                    voluptates repudiandae on molestiae recusandae voluptatibus maiores asperiores
                                    repellat.
                                </p>

                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-md btn-dark-custom">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="offset-lg-1 mt-5 mt-lg-0">
                            <div className="agency-about-skill">
                                <div>
                                    <p className="text-uppercase fw-bold f-13 mb-2">Design<span className='fw-bold fs-12' style={{ marginLeft: "65%" }}>80%</span></p>
                                    <ProgressBar now={80} />
                                </div>
                                <div className="mt-4">
                                    <p className="text-uppercase fw-bold f-13 mb-2">Development <span className='fw-bold fs-12' style={{ marginLeft: "33%" }}>60%</span></p>
                                    <ProgressBar now={60} />
                                </div>
                                <div className="mt-4">
                                    <p className="text-uppercase fw-bold f-13 mb-2">Natural <span className='fw-bold fs-12' style={{ marginLeft: "22%" }}>40%</span></p>
                                    <ProgressBar now={40} />
                                </div>
                                <div className="mt-4">
                                    <p className="text-uppercase fw-bold f-13 mb-2">Code<span className='fw-bold fs-12' style={{ marginLeft: "65%" }}>75%</span></p>
                                    <ProgressBar now={75} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Services */}
            <section className="section service" id="services">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis
                                    dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 pt-3">
                        {(servicesData || [])?.map((item: ServicesData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="agency-services-box text-center p-3">
                                    <div className="agency-services-icon mt-3">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h5 className="f-15 mt-4 text-uppercase letter-spacing_2">{item.title}</h5>
                                    <p className="mt-4 text-muted">Consectetur adipisci a numquam tempora incidunt labore dolore magnam auam quaerat voluptatem.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <Counter />

            {/* Portfolio */}
            <PortfolioWork />

            <hr />

            {/* Testimonial */}
            <section className="section testimonial" id="client">
                <Container>
                    <Row className=" justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Customers</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </div>
                    </Row>

                    <Row className=" mt-5 pt-3">
                        <Col lg={12}>
                            <Carousel id="agency-owl-demo" controls={true} prevIcon={<i className="mdi mdi-menu-left"></i>} nextIcon={<i className="mdi mdi-menu-right"></i>}>
                                {(testData || [])?.map((item: TestData) => (
                                    <Carousel.Item key={item.id}>
                                        <div className="agency-testimonial-box text-center ml-2 mr-2 p-5">
                                            <div className="agency-testi-desc bg-white">
                                                <p className="text-muted f-17 mb-0">Dolorem ipsum quia dolor sit amet consectetur adipisci velit modi numquam tempora incidunt labore dolore magnam aliquam quaerat voluptatem enim laboriosam aliquid commodi consequatur.</p>
                                            </div>
                                            <div className="agency-testimonial-img mt-5 pt-3">
                                                <img src={item.image} className="img-fluid rounded-circle" alt="" />
                                                <div className="mt-4">
                                                    <h5 className="text-uppercase f-15 letter-spacing_2">{item.author}</h5>
                                                    <p className="text-muted f-13 mb-0">{item.post}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}

                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Cta */}
            <section className="section cta-2">
                <div className="bg-overlay"></div>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="app-video-box text-center text-white">
                                <h2 className="app-video-title text-uppercase">Watch Video</h2>
                                <p className="app-video-desc f-16 mx-auto mt-4 pt-2">
                                    Always holds these matters principle of selection he rejects pleasures to secure other greater pleasures
                                    else pains.
                                </p>

                                <div className="mt-5 app-video-icon">
                                    <Link to="#" className="modal-btn" onClick={openModal}>
                                        <span className="avatar-sm">
                                            <span className="rounded-circle btn-icon">
                                                <i className="mdi mdi-play text-white"></i>
                                            </span>
                                        </span>
                                    </Link>
                                    <Modal show={showModal} onHide={closeModal} centered size="lg" contentClassName='home-modal bg-transparent' className="bd-example-modal-lg watchvideomodal" aria-hidden="true">
                                        <Modal.Header closeButton className="border-0" closeVariant='white'></Modal.Header>
                                        <video id="VisaChipCardVideo" className="video-box w-100 h-100 pb-0" controls >
                                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                        </video>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section