import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import InteriorConstructionWork from '../../components/InteriorConstructionWork'
import Counter from '../../components/Counter'

// Image
import about from "../../assets/images/construction-about-img.jpg"
import ruler from "../../assets/images/icons/rulers.png"
import tool from "../../assets/images/icons/tools.png"
import desktop from "../../assets/images/icons/desktop.png"
import briefcase from "../../assets/images/icons/briefcase.png"
import drawing from "../../assets/images/icons/drawing-tablet.png"
import presentation from "../../assets/images/icons/presentation.png"

interface ServicesData {
    icon: string; title: string;
}

const servicesData: ServicesData[] = [
    { icon: ruler, title: 'Fast Operations', },
    { icon: tool, title: 'Renovation', },
    { icon: desktop, title: 'Consultation', },
    { icon: briefcase, title: 'Architecture', },
    { icon: drawing, title: 'Planning', },
    { icon: presentation, title: 'Constructor', },
];

const Section = () => {
    return (
        <React.Fragment>
            {/* Home */}
            <section className="section construction-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="construction-home-content text-center text-white">
                                        <h4 className="construction-home-title line-height_1_6 text-uppercase letter-spacing_4">
                                            Great Experiences<br />For Building and Reconstruction
                                        </h4>
                                        <div className="construction-home-border mt-4"></div>
                                        <p className="construction-home-desc f-16 mt-4 mx-auto line-height_1_8">
                                            Pleasure rationally encounter in consequences that are extremely painful again pursues loves desires
                                            obtain pain itself because pain.
                                        </p>
                                        <div className="mt-4 pt-3">
                                            <Button href="#" variant="md" className="btn-custom">What We Do</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* About */}

            <section className="section construction-about" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="construction-about-image">
                                <img src={about} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={7} className="offset-1">
                            <div className="mt-5 mt-lg-0">
                                <h4 className="f-16 text-muted text-uppercase letter-spacing_2">Welcome to Tulsy</h4>
                                <h3 className="mt-4">Renovation Company</h3>
                                <p className="text-muted mt-4">
                                    Phasellus metus lobortis iaculis efficitur facilisis dolor pretium blandit felis convallis scelerisque
                                    purus lacinia donec metus quam vulputate consequat eleifend imperdiet pretium vitae sapien orci varius
                                    natoque penatibus magnis dis parturient montes nascetur ridiculus mus semper scelerisque a varius velit
                                    fringilla class aptent taciti sociosqu litora torquent per conubia nostra per inceptos himenaeos aenean
                                    dapibus ornare sapien lacinia luctus ligula commodo donec.
                                </p>
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <div>
                                            <div className="construction-about-icon">
                                                <i className="pe-7s-config"></i>
                                            </div>
                                            <h4 className="f-15 letter-spacing_2 text-uppercase mt-3">Building</h4>
                                            <p className="text-muted mt-3 mb-0">
                                                Pulvinar aliquam blandit aliquam justo neque rutrum tincidunt vulpate massa amet placerat bibendum.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div>
                                            <div className="construction-about-icon">
                                                <i className="pe-7s-display1"></i>
                                            </div>

                                            <h4 className="f-15 letter-spacing_2 text-uppercase mt-3">Renovation</h4>
                                            <p className="text-muted mt-3 mb-0">
                                                Lulvinar aliquam blandit aliquam justo neque rutrum tincidunt vulpate massa amet placerat bibendum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Services */}
            <section className="section construction-services" id="services">
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

                    <Row className=" pt-3">
                        {(servicesData || [])?.map((service: ServicesData, index: number) => (
                            <Col lg={4} key={index} className='mt-5'>
                                <div className="construction-services-box mt-4">
                                    <div className="construction-services-img">
                                        <img src={service.icon} className="img-fluid" alt="" />
                                    </div>
                                    <div className="construction-services-content mt-3">
                                        <h4 className="f-15 letter-spacing_2 text-uppercase mt-3">{service.title}</h4>
                                        <p className="mb-0 text-muted mt-3">Aliquam ligula order tortor donec lobortis tha turpis pulvinar in suspendise rutrum acumsan maximus mauris condimentum.</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <hr />

            {/* Work */}
            <InteriorConstructionWork />

            {/* Counter */}
            <Counter />
        </React.Fragment>
    )
}

export default Section