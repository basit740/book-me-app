import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Counter from '../../components/Counter';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

//images
import screen1 from "../../assets/images/screenshots/screenshot-1.png"
import screen2 from "../../assets/images/screenshots/screenshot-2.png"
import screen3 from "../../assets/images/screenshots/screenshot-3.png"
import screen4 from "../../assets/images/screenshots/screenshot-4.png"
import screen5 from "../../assets/images/screenshots/screenshot-5.png"
import screen6 from "../../assets/images/screenshots/screenshot-6.png"

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"
import user5 from "../../assets/images/users/user-5.jpg"

import client1 from "../../assets/images/clients/client-1.png"
import client2 from "../../assets/images/clients/client-2.png"
import client3 from "../../assets/images/clients/client-3.png"
import client4 from "../../assets/images/clients/client-4.png"
import client5 from "../../assets/images/clients/client-5.png"
import client6 from "../../assets/images/clients/client-6.png"

interface AppAboutFeatures {
    icon: string; title: string; description: string;
}

interface ScreenShots {
    imagePath: string; imageAlt: string;
}

interface Testimonials {
    name: string; image: string; companyLogo: string;
}

const appAboutData: AppAboutFeatures[] = [
    {
        icon: 'pe-7s-shield', title: 'Highly Secured',
        description: 'But right to find fault with man who chooses enjoy a pleasure that has otrffda annoying conuences one who pleasure.',
    },
    {
        icon: 'pe-7s-server', title: 'Easily Manageable',
        description: 'Fault with a man who chooses pleasure that has no annoying consequences or one who avoids pain produces pleasure.',
    },
    {
        icon: 'pe-7s-graph3', title: 'Well Documented',
        description: 'Chooses enjoy a pleasure that has annoying consequences or one who avoids pain that produces pleasure.',
    },
];

const appFeaturesData1: AppAboutFeatures[] = [
    { icon: 'pe-7s-hammer', title: 'Digital ordering', description: 'The European languages a members the same family their separate tence type specimen book.', },
    { icon: 'pe-7s-gym', title: 'Marketing', description: 'If you are going passage Ipsum you need to be sure there publising desk anything embarrassing.', },
    { icon: 'pe-7s-hourglass', title: 'POS integration', description: 'The languages only differ in thamar their and their a tha most common cure words consectetur.', },

];

const appFeaturesData2: AppAboutFeatures[] = [
    { icon: 'pe-7s-date', title: 'Logistics', description: 'The European languages a members the same family their separate tence type specimen book.', },
    { icon: 'pe-7s-user', title: 'Data Management', description: 'If you are going passage Ipsum you need to be sure there publising desk anything embarrassing.', },
    { icon: 'pe-7s-anchor', title: 'Analytics', description: 'The languages only differ in thamar their and their a tha most common cure words consectetur.', },
]

const screenshots: ScreenShots[] = [
    { imagePath: screen1, imageAlt: 'Screenshot 1' },
    { imagePath: screen2, imageAlt: 'Screenshot 2' },
    { imagePath: screen3, imageAlt: 'Screenshot 3' },
    { imagePath: screen4, imageAlt: 'Screenshot 4' },
    { imagePath: screen5, imageAlt: 'Screenshot 5' },
    { imagePath: screen6, imageAlt: 'Screenshot 6' }
];

const testimonials: Testimonials[] = [
    { name: 'Jimmy Helton', image: user1, companyLogo: client1, },
    { name: 'Todd Harrison', image: user2, companyLogo: client2, },
    { name: 'Sandra Sampson', image: user3, companyLogo: client3, },
    { name: 'Jimmy Helton', image: user4, companyLogo: client4, },
    { name: 'Todd Harrison', image: user5, companyLogo: client5, },
    { name: 'Jimmy Helton', image: user1, companyLogo: client6, },
];

const Section = () => {
    return (
        <React.Fragment>
            {/* Home */}
            <section className="app-home" id="home" style={{ overflow: "hidden" }}>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="align-items-center">
                                <Col md={7}>
                                    <div className="App-home-content mt-4">
                                        <h4 className="app-home-sub-title line-height_1_4">
                                            The Perfect app landing page <br /> for your app.
                                        </h4>
                                        <p className="app-home-desc f-16 mt-4 line-height_1_8 text-muted">
                                            Pleasure rationally encounter in consequences that are extremely painful again pursues loves desires
                                            obtain pain itself because pain consequences that are extremely painful.
                                        </p>
                                    </div>

                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-dark-custom">
                                            Download Now
                                        </Link>
                                    </div>
                                </Col>

                                <Col md={5}>
                                    <div className="app-home-img mt-5 mt-lg-0 text-center">
                                        <img src={screen2} className="img-fluid" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="bg-aap-shape"></div>
                <div className="bg-app-circle"></div>
                <div className="bg-app-circle-two"></div>
            </section>

            {/* About */}
            <section className="app-about section pt-0">
                <Container>
                    <Row>
                        {(appAboutData || [])?.map((item: AppAboutFeatures, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="mt-4">
                                    <div className="app-about-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="f-15 text-uppercase letter-spacing_2 mt-4">{item.title}</h4>
                                    <p className="text-muted mt-4 mb-0">{item.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

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
                            {(appFeaturesData1 || [])?.map((item: AppAboutFeatures, index: number) => (
                                <div className="gym-features-content" key={index}>
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

                        <Col lg={4}>
                            <div className="app-features-img text-center mt-4">
                                <img src={screen1} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={4}>
                            {(appFeaturesData2 || [])?.map((item: AppAboutFeatures, index: number) => (
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
            <Counter />

            {/* Screenshot */}
            <section className="section app-service" id="screen">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">App screenshot</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        <Col lg={12}>
                            <Swiper
                                className="mySwiper7"
                                slidesPerView={4}
                                navigation={true}
                                modules={[Pagination, Autoplay]}
                                loop={true}
                            >
                                <div className="swiper-wrapper ">
                                    {(screenshots || [])?.map((item: ScreenShots, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div className="item">
                                                <div className="app-screenshot-item mt-4 mx-3 text-center d-flex justify-content-center">
                                                    <div className="app-screenshot-overlayer">
                                                        <Link className="mfp-image" to={item.imagePath} title=""></Link>
                                                    </div>
                                                    <div className="screenshot-img mb-4">
                                                        <Link to={item.imagePath} className="lightbox">
                                                            <img src={item.imagePath} alt={item.imageAlt} className="img-fluid" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Testimonial */}
            <section className="section app-testimonial" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                    Our Testimonial
                                </h2>
                                <p className="heading-title-desc text-muted mt-4 mb-0">
                                    Pellentesque habitant morbi tristique senectus malesuada fames
                                    turpis egestas duis dignissim finibus commodo nibh malesuada
                                    sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-4 mt-4">
                        <Col>
                            <Swiper
                                className="mySwiper2"
                                slidesPerView={3}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                            >
                                <div className="swiper-wrapper" >
                                    {(testimonials || [])?.map((testimonial: Testimonials, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div className="item px-4 mt-5">
                                                <div>
                                                    <div className="testimonial-contant bg-light p-4">
                                                        <div className="testimonial-icon">
                                                            <i className="mdi mdi-format-quote-open"></i>
                                                        </div>
                                                        <div className="app-testimonial-img">
                                                            <img src={testimonial.image} className="img-fluid rounded-circle" alt="" />
                                                        </div>
                                                        <div className="ms-4 mt-2">
                                                            <h5 className="f-15 text-uppercase letter-spacing_2 mb-1">
                                                                {testimonial.name}
                                                            </h5>
                                                            <Link to="#" className="app-testimonial-brand f-12">
                                                                Tulsythemes
                                                            </Link>
                                                        </div>
                                                        <p className="text-muted mt-4 mb-0"> These cases are perfectly simple and easy when our power nothing in prevents our being able they are what we like best obligation business. </p>
                                                    </div>
                                                    <div className="client-logo text-center my-5">
                                                        <img src={testimonial.companyLogo} className="img-fluid" width="120" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </div>
                                <div className="swiper-button">
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>


        </React.Fragment>
    )
}

export default Section