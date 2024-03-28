import React from 'react'
import { Button, Carousel, Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Counter from '../../components/Counter'
import { Link } from 'react-router-dom'
import InteriorConstructionWork from '../../components/InteriorConstructionWork'

// Image
import bg2 from "../../assets/images/background/bg-2.jpg"
import bg8 from "../../assets/images/background/bg-8.jpg"
import bg9 from "../../assets/images/background/bg-9.jpg"
import bg10 from "../../assets/images/background/bg-10.jpg"

interface SlideData {
    backgroundImage: string; subtitle: string; title: string;
}

const Section = () => {

    const slideData: SlideData[] = [
        { backgroundImage: bg8, subtitle: 'Bedroom interior', title: 'Interior Decorators', },
        { backgroundImage: bg9, subtitle: 'Bedroom interior', title: 'Interior Decorators', },
        { backgroundImage: bg10, subtitle: 'Bedroom interior', title: 'Interior Decorators', },
    ];

    return (
        <React.Fragment>

            {/* Home */}
            <section className="interior-home" id="home">
                <Container fluid className="p-0">
                    <Row>
                        <Carousel indicators={false}>
                            {(slideData || [])?.map((slide: SlideData, index: number) => (
                                <Carousel.Item key={index} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="bg-overlay"></div>
                                            <Container>
                                                <Row className="justify-content-center">
                                                    <Col lg={8}>
                                                        <div className="interior-home-content text-center text-white">
                                                            <p className="interior-home-subtitle text-uppercase letter-spacing_4">
                                                                {slide.subtitle}
                                                            </p>
                                                            <h4 className="interior-home-title mt-4 fst-italic letter-spacing_6">
                                                                {slide.title}
                                                            </h4>
                                                            <div className="mt-4 pt-3 d-grid gap-2 d-md-block">
                                                                <Button className="btn btn-warning btn-md btn-custom me-md-2" type="button">
                                                                    Our Projects
                                                                </Button>
                                                                <Button className="btn btn-warning btn-md btn-custom" type="button">
                                                                    Get A Quote
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Row>
                </Container>
            </section>

            {/* About */}
            <section className="section about" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="interior-about-content">
                                <h4 className="text-uppercase f-20 letter-spacing_2">Who We Are</h4>
                                <p className="mt-4 text-muted">
                                    Molestias excepturi occaecati cupiditate provident similique culpa officia deserunt mollitia animi id
                                    laborum dolorum fuga harum quidem rerum facilis expedita distinctio libero tempore soluta eligendi maxime
                                    placeat facere possimus omnis voluptas assumenda omnis dolor repellendus sautem quibusdam officiis
                                    debitis eveniet voluptates repellat.
                                </p>

                                <Row>
                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Lighting placement
                                            </h5>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Architectural details
                                            </h5>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Space Planning
                                            </h5>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Project management
                                            </h5>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Goods purchasing
                                            </h5>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-dark f-14">
                                                <i className="mdi mdi-check-all pe-2"></i>Color consulting
                                            </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="interior-about-img">
                                <img src={bg10} className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Services */}
            <section className="section interior-services" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        <Col lg={12}>
                            <Tab.Container id="pills-tab" defaultActiveKey="#planning">
                                <Nav className="nav nav-tabs nav-pills mb-3" role="tablist">
                                    <Nav.Item>
                                        <Nav.Link eventKey="#planning">
                                            <div className="interior-services-icon">
                                                <i className="pe-7s-date"></i>
                                            </div>
                                            <h5 className="mb-0 text-uppercase f-15 letter-spacing_2 mt-3">Planing</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="#interior">
                                            <div className="interior-services-icon">
                                                <i className="pe-7s-plugin"></i>
                                            </div>
                                            <h5 className="mb-0 text-uppercase f-15 letter-spacing_2 mt-3">Interior</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="#decoration">
                                            <div className="interior-services-icon">
                                                <i className="pe-7s-shuffle"></i>
                                            </div>
                                            <h5 className="mb-0 text-uppercase f-15 letter-spacing_2 mt-3">Decoration</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="#exclusively">
                                            <div className="interior-services-icon">
                                                <i className="pe-7s-check"></i>
                                            </div>
                                            <h5 className="mb-0 text-uppercase f-15 letter-spacing_2 mt-3">Exclusively</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content" id="pills-tabContent">
                                    <Tab.Pane eventKey="#planning">
                                        <div className="row mt-5 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="interior-services-img mt-4">
                                                    <img src={bg8} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="interior-services-info mt-4">
                                                    <h3 className="text-uppercase f-22 letter-spacing_4">Creative Design</h3>
                                                    <p className="text-muted mt-4">
                                                        Teachings of the great explorer the master builder of human happiness rejects dislikes or avoids
                                                        pleasure itself because pleasur but because those pursue pleasure rationally encounter
                                                        consequences that are extremely painful again is there anyone who loves or circumstances occur
                                                        which toil and pain procure him some great pleasure take a trivial example which exercise.
                                                    </p>
                                                    <p className="text-muted">
                                                        Pursues or desires to obtain pain of becaus but because occasionally undertakes laborious
                                                        physical exercise from it?
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-md btn-dark-custom">
                                                            Read More <i className="mdi mdi-arrow-right-bold ps-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#interior">
                                        <div className="row mt-5 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="interior-services-info mt-4">
                                                    <h3 className="text-uppercase f-22 letter-spacing_4">Creative Design</h3>
                                                    <p className="text-muted mt-4">
                                                        Teachings of the great explorer the master builder of human happiness rejects dislikes or avoids
                                                        pleasure itself because pleasur but because those pursue pleasure rationally encounter
                                                        consequences that are extremely painful again is there anyone who loves or circumstances occur
                                                        which toil and pain procure him some great pleasure take a trivial example which exercise.
                                                    </p>
                                                    <p className="text-muted">
                                                        Pursues or desires to obtain pain of becaus but because occasionally undertakes laborious
                                                        physical exercise from it?
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-md btn-dark-custom">
                                                            Read More <i className="mdi mdi-arrow-right-bold ps-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="interior-services-img mt-4">
                                                    <img src={bg9} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#decoration">
                                        <div className="row mt-5 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="interior-services-img mt-4">
                                                    <img src={bg10} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="interior-services-info mt-4">
                                                    <h3 className="text-uppercase f-22 letter-spacing_4">Architect Design</h3>
                                                    <p className="text-muted mt-4">
                                                        Teachings of the great explorer the master builder of human happiness rejects dislikes or avoids
                                                        pleasure itself because pleasur but because those pursue pleasure rationally encounter
                                                        consequences that are extremely painful again is there anyone who loves or circumstances occur
                                                        which toil and pain procure him some great pleasure take a trivial example which exercise.
                                                    </p>
                                                    <p className="text-muted">
                                                        Pursues or desires to obtain pain of becaus but because occasionally undertakes laborious
                                                        physical exercise from it?
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-md btn-dark-custom">
                                                            Read More <i className="mdi mdi-arrow-right-bold ps-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#exclusively">
                                        <div className="row mt-5 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="interior-services-info mt-4">
                                                    <h3 className="text-uppercase f-22 letter-spacing_4">Creative Decoration</h3>
                                                    <p className="text-muted mt-4">
                                                        Teachings of the great explorer the master builder of human happiness rejects dislikes or avoids
                                                        pleasure itself because pleasur but because those pursue pleasure rationally encounter
                                                        consequences that are extremely painful again is there anyone who loves or circumstances occur
                                                        which toil and pain procure him some great pleasure take a trivial example which exercise.
                                                    </p>
                                                    <p className="text-muted">
                                                        Pursues or desires to obtain pain of becaus but because occasionally undertakes laborious
                                                        physical exercise from it?
                                                    </p>
                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-md btn-dark-custom">
                                                            Read More <i className="mdi mdi-arrow-right-bold ps-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="interior-services-img mt-4">
                                                    <img src={bg2} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <Counter />

            {/* Work */}
            <InteriorConstructionWork />

        </React.Fragment>
    )
}

export default Section