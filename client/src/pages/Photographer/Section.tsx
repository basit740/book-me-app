import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import photo from "../../assets/images/photographer-about-img.jpg"
import Counter from '../../components/Counter';

// Image
import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

interface ServicesData {
    icon: string; title: string;
}

interface PricingData {
    title: string; price: string; icon: string; active: string; features: string[];
}

interface TestimonialsData {
    author: string; role: string; image: string;
}

const servicesData: ServicesData[] = [
    { icon: 'pe-7s-pen', title: 'Web design', },
    { icon: 'pe-7s-config', title: 'Web development', },
    { icon: 'pe-7s-camera', title: 'Photography', },
    { icon: 'pe-7s-phone', title: 'Responsive Design', },
    { icon: 'pe-7s-helm', title: 'Seo Friendly', },
    { icon: 'pe-7s-tools', title: 'Support', }
];
const pricingData: PricingData[] = [
    {
        title: 'Basic', price: '29.99', icon: 'pe-7s-ball', active: "photographer-pricing-box",
        features: [
            '100 print photographs',
            'Top-level artistic editing',
            'With complex retouching',
            '100 internet photographs',
            '3 hours of shooting',
        ],
    },
    {
        title: 'Business', price: '59.99', icon: 'pe-7s-camera', active: "photographer-pricing-box-active",
        features: [
            '100 print photographs',
            'Top-level artistic editing',
            'With complex retouching',
            '100 internet photographs',
            '3 hours of shooting',
        ],
    },
    {
        title: 'Wedding', price: '79.99', icon: 'pe-7s-umbrella', active: "photographer-pricing-box",
        features: [
            '100 print photographs',
            'Top-level artistic editing',
            'With complex retouching',
            '100 internet photographs',
            '3 hours of shooting',
        ],
    },
];

const testimonialsData: TestimonialsData[] = [
    { author: "Randall Wilton", role: "Manager", image: user1 },
    { author: "Elaine Lamarr", role: "Designer", image: user2 },
    { author: "Warren Williams", role: "Developer", image: user3 },
];

const Section = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setActiveIndex(selectedIndex);
    };

    const indicatorsData = [
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
    ]

    const renderIndicators = () => {
        return indicatorsData.map((item: any, index: any) => (
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
            {/* Home */}
            <section className="section photographer-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="text-center text-white">
                                        <p className="photographer-home-subtitle text-uppercase letter-spacing_2">
                                            Hello, my name is Jon Doe
                                        </p>
                                        <h4 className='intro mb-0 '>
                                            <span className="typing2 ">
                                                <Typewriter
                                                    options={{
                                                        strings: ["I'M PHOTOGRAPHER", "I'M DESIGNER", "I'M WEB DEVELOPER"],
                                                        autoStart: true,
                                                        loop: true,
                                                    }} />
                                            </span>
                                        </h4>
                                        <h4 className="photographer-text-uppercase mt-4">
                                            <span
                                                className="element"
                                                data-elements="I'M photographer,I'M Web developer,I'M Designer"
                                            ></span>
                                        </h4>
                                        <p className="photographer-home-desc f-15 mt-4 mx-auto line-height_1_8">
                                            Pleasure rationally encounter in consequences that are extremely painful again
                                            pursues loves because pain.
                                        </p>
                                        <div className="mt-4">
                                            <ul className="list-inline photographer-home-social mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-linkedin"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-instagram"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="section" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="mt-4">
                                <img src={photo} className="img-fluid" alt="" />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="photographer-about-content mt-4 ps-5">
                                <p className="text-muted f-12 text-uppercase letter-spacing_2">We Are A Team</p>
                                <h3 className="photographer-about-title text-uppercase mt-3 letter-spacing_4">The Story About Us</h3>
                                <div className="photographer-about-border mt-4"></div>
                                <p className="text-muted line-height_1_8 mt-4 pt-2">Praesentium voluptatum deleniti corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident similique sunt in culp advantag laborum dolorum quidem facilis expedita distinctio.</p>
                                <div className="agency-about-skill mt-4 pt-3">
                                    <div>
                                        <p className="text-uppercase fw-bold f-13 mb-2">Photography</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '80%' }}>
                                                <div className="progress-value fw-bold">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Videography</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '60%' }}>
                                                <div className="progress-value fw-bold">60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Photoshoot</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '40%' }}>
                                                <div className="progress-value fw-bold">40%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-uppercase fw-bold f-13 mb-2">Video Editing</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{ width: '75%' }}>
                                                <div className="progress-value fw-bold">75%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Service */}
            <section className="section photographer-services" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Services</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(servicesData || [])?.map((service: ServicesData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="photographer-services-box p-3 mt-4">
                                    <div className="photographer-services-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h4 className="photographer-services-title mt-4 f-15 letter-spacing_2 text-uppercase">{service.title}</h4>
                                    <p className="text-muted mt-4 mb-0">Trouble that are bound and blame belongs those who fail their dutye through which the same from toil and pain.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Cta */}
            <section className="section bg-photographer-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className="photographer-cta-box text-white text-center">
                                <h4 className="text-uppercase letter-spacing_4">Do You want to Work With Us?</h4>
                                <p className="mt-4 pt-2 letter-spacing_2 f-12 text-uppercase">I am available for your project.</p>

                                <div className="mt-5">
                                    <Button variant="light" className="text-uppercase btn-md">Get In Touch</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Pricing */}

            <section className="section photographer-pricing" id="pricing">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Pricing Plans</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(pricingData || [])?.map((item: PricingData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className={`${item.active} p-5 mt-4`}>
                                    <div className="text-center">
                                        <div className="photographer-pricing-icon">
                                            <i className={item.icon}></i>
                                        </div>

                                        <h5 className="mt-4 letter-spacing_4 text-uppercase f-18">{item.title}</h5>
                                        <h1 className="mt-4"><span className="f-18">$ </span>{item.price}</h1>
                                    </div>
                                    <div className="photographer-pricing-plan mt-5 ps-5">
                                        {item.features.map((feature, index) => (
                                            <p className="pricing-plan text-muted" key={index}>{feature}</p>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-3 text-center">
                                        <Link to="#" className="btn btn-md btn-dark-custom">Purchase Now</Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <hr />

            {/* Client */}

            <section className="section gym-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">What People Say</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 pt-3 ">
                        <Col lg={9}>
                            <div className="carousel-indicators  d-flex">
                                {renderIndicators()}
                            </div>
                            <Carousel className='justify-content-center' id="startup-owl-demo" activeIndex={activeIndex} onSelect={handleSelect} indicators={false} >
                                {(testimonialsData || [])?.map((testimonial: TestimonialsData, index: number) => (
                                    <Carousel.Item key={index}>
                                        <div className="item">
                                            <div className="startup-client-box text-center">
                                                <div className="photographer-client-icon">
                                                    <i className="mdi mdi-format-quote-open"></i>
                                                </div>
                                                <div className="photographer-desc">
                                                    <p className="photographer-desc f-16 text-muted mt-3">Belongs to those who fail in their duty through weakness of will which is the saying through shrinking power of choice is untrammelled and when is to be nothing best every pleasure welcomed and every pain avoided.</p>
                                                </div>

                                                <div className="startup-client-img mt-5">
                                                    <img src={testimonial.image} className="img-fluid rounded-circle" alt="" />
                                                </div>
                                                <h4 className="f-15 letter-spacing_2 text-uppercase mt-4">{testimonial.author}</h4>
                                                <p className="f-12 text-muted mb-0">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <Counter />

        </React.Fragment>
    )
}

export default Section