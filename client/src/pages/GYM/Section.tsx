import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import AppGymPricing from '../../components/AppGympricing';

// Image
import back5 from "../../assets/images/background/bg-5.jpg"
import back6 from "../../assets/images/background/bg-6.jpg"
import back7 from "../../assets/images/background/bg-7.jpg"

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

import feature from "../../assets/images/features/feature-3.png"

interface CarouselData {
    backgroundImage: string;
}

interface AppFeaturesData {
    icon: string; title: string; description: string;
}

interface TestimonialData {
    id: number; image: string; name: string; designation: string;
}

const carouselData: CarouselData[] = [
    { backgroundImage: back5, },
    { backgroundImage: back6, },
    { backgroundImage: back7, },
];
const appFeaturesData1: AppFeaturesData[] = [
    { icon: 'pe-7s-hammer', title: 'Digital ordering', description: 'The European languages a members the same family their separate tence type specimen book.', },
    { icon: 'pe-7s-gym', title: 'Marketing', description: 'If you are going passage Ipsum you need to be sure there publising desk anything embarrassing.', },
    { icon: 'pe-7s-hourglass', title: 'POS integration', description: 'The languages only differ in thamar their and their a tha most common cure words consectetur.', },

];

const appFeaturesData2: AppFeaturesData[] = [
    { icon: 'pe-7s-date', title: 'Logistics', description: 'The European languages a members the same family their separate tence type specimen book.', },
    { icon: 'pe-7s-user', title: 'Data Management', description: 'If you are going passage Ipsum you need to be sure there publising desk anything embarrassing.', },
    { icon: 'pe-7s-anchor', title: 'Analytics', description: 'The languages only differ in thamar their and their a tha most common cure words consectetur.', },
];
const testimonialData: TestimonialData[] = [
    { id: 1, image: user1, name: 'Randall Wilton', designation: 'Manager' },
    { id: 2, image: user2, name: 'John Doe', designation: 'CEO' },
    { id: 3, image: user3, name: 'Jane Smith', designation: 'Marketing Manager' }
];

const Section = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
        setActiveIndex(selectedIndex);
    };

    const indicatorsData = [
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
    ]

    const renderIndicators = () => {
        return (indicatorsData || [])?.map((item: any, index: any) => (
            <button type="button" data-bs-target="#carouselExampleIndicators" className={index === activeIndex ? 'active ' : ''}
                onClick={() => handleSelect(index)}  >
                <div className="avatar-xs">
                    <div className={item.text}>
                    </div>
                </div>
            </button>
        ))
    };

    return (
        <React.Fragment>
            <section className="gym-home" id="home">
                <Container fluid className="p-0">
                    <Row>
                        <Carousel id="carouselExampleControls" controls indicators={false}>
                            {(carouselData || [])?.map((item: CarouselData, index: number) => (
                                <Carousel.Item key={index} style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                                    <div className="home-center">
                                        <div className="home-desc-center">
                                            <div className="bg-overlay"></div>
                                            <Container>
                                                <Row className="justify-content-center">
                                                    <Col lg={8}>
                                                        <div className="gym-home-content text-center text-white">
                                                            <h4 className="gym-home-subtitle text-uppercase letter-spacing_2">Gym, Dancing & Yogo</h4>
                                                            <h4 className="gym-home-title gym-text-uppercase mt-4 fst-italic letter-spacing_6">Shape Yourself</h4>
                                                            <p className="f-16 mt-4 mx-auto mb-0 text-white-50">Pleasure rationally encounter in consequences that are extremely painful again pursues loves desires obtain because pain.</p>

                                                            <div className="mt-4 pt-3 d-grid  d-md-block">
                                                                <Button variant="warning" className="btn-md btn-custom me-md-3" type="button">
                                                                    Contact us Now
                                                                </Button>
                                                                <Button variant="warning" className="btn-md btn-custom" type="button">
                                                                    Purchase Now
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
            <section className="section" id="about">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Popular Classes</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3 align-items-center">
                        <Col lg={6}>
                            <div className="gym-about-img mt-4">
                                <img src={back6} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="gym-about-content mt-4">
                                <h4 className="text-uppercase f-20 letter-spacing_2">Gym Trainer</h4>
                                <p className="text-muted mt-3">Fitness expedita distinctio libero tempore soluta nobis eligendi optio cumque nihil impedit minus quod maxime placeat facere possimus omnis voluptas assumenda omnis dolor repellendus poribus autem quibusdam in officiis debitis rerum saepe perferendis doloribus asperiores repellat.</p>

                                <p className="mb-1 mt-4"><i className="mdi mdi-checkbox-multiple-marked f-18 pe-3"></i>Pellentesque egestas convallis pulvinar justo nulla eleifend.</p>
                                <p><i className="mdi mdi-checkbox-multiple-marked f-18 pe-3"></i>Lentesque egestas convallis pulvinar justo nulla eleifend.</p>

                                <div className="mt-4 pt-3">
                                    <Button href="#" variant="dark-custom" className='btn-md'>View Details</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <hr />

            {/* Features */}
            <section className="section app-features" id="features">
                <Container>
                    <Row className='justify-content-center' >
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Features</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" mt-5 pt-3 align-items-center" >

                        <Col lg={4} >
                            {(appFeaturesData1 || [])?.map((item: AppFeaturesData, index: number) => (
                                <div className="gym-features-content" key={index}>
                                    <div className="mt-5 text-end">
                                        <div className="gym-features-icon float-end ms-4">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="gym-features-info me-5">
                                            <h5 className="f-15 text-uppercase letter-spacing_2">{item.title}</h5>
                                            <p className="text-muted mt-3">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>

                        <Col lg={4}>
                            <div className="app-features-img text-center mt-4">
                                <img src={feature} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={4}>
                            {(appFeaturesData2 || [])?.map((item: AppFeaturesData, index: number) => (
                                <div className="gym-features-content" key={index} >
                                    <div className="mt-5">
                                        <div className="gym-features-icon float-start me-4">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="gym-features-info ms-5">
                                            <h5 className="f-15 text-uppercase letter-spacing_2">{item.title}</h5>
                                            <p className="text-muted mt-3">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <section className="section gym-bg-counter">
                <div className="bg-overlay"></div>
                <Container>
                    <Row id="counter">
                        <Col lg={3}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-like"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={253} duration={2} />
                                    <span className="counter_value display-4" id="count1" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Projects like</h5>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-smile"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={252} duration={2} />
                                    <span className="counter_value display-4" id="count2" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Happy Clients</h5>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-anchor"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={1252} duration={2.5} />
                                    <span className="counter_value display-4" id="count3" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Projects Completed</h5>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div className="text-center">
                                <div className="counter-icon">
                                    <i className="pe-7s-user"></i>
                                </div>
                                <h2 className="counter-count mt-4 text-white">
                                    <CountUp start={0} end={52} duration={2} />
                                    <span className="counter_value display-4" id="count4" ></span>
                                </h2>
                                <h5 className="mt-3 text-uppercase f-13 text-light letter-spacing_2">Employee</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Client */}
            <section className="section gym-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Testimonial</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 pt-3">
                        <Col lg={9}>
                            <div className="carousel-indicators  d-flex">
                                {renderIndicators()}
                            </div>
                            <Carousel id="startup-owl-demo" activeIndex={activeIndex} onSelect={handleSelect} indicators={false}>
                                {(testimonialData || [])?.map((item: TestimonialData) => (
                                    <Carousel.Item key={item.id}>
                                        <div className="item">
                                            <div className="startup-client-box text-center mt-4">
                                                <div className="gym-client-img mx-auto">
                                                    <img src={item.image} className="img-fluid" alt="" />
                                                </div>
                                                <h3 className="f-20 mt-4 pt-3 text-uppercase letter-spacing_2">Excellent Training Given By Gym !!</h3>
                                                <p className="text-muted mt-4 f-16">Mistaken idea of denouncing pleasure and praising pain
                                                    complete account of the system and expound the actual teachings of the great
                                                    explorer master-builder human happiness rejects make a type specimen book dislikes.</p>
                                                <h4 className="f-15 text-uppercase letter-spacing_2 mt-4">{item.name}</h4>
                                                <p className="text-muted f-12 mb-0">{item.designation}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Pricing */}
            <AppGymPricing />

        </React.Fragment>
    )
}

export default Section;