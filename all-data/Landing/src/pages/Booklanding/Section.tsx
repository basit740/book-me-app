import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Counter from '../../components/Counter';
import { Swiper, SwiperSlide } from 'swiper/react';

// Image
import book from "../../assets/images/book-home-img.png"
import about from "../../assets/images/book-about-img.png"

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"

interface BookChapter {
    icon: string; title: string;
}

interface ClientsData {
    id: number;
    image: string;
    name: string;
    designation: string;
}

const bookAboutData: BookChapter[] = [
    { icon: 'pe-7s-print', title: 'Printed Book', },
    { icon: 'pe-7s-pen', title: 'User Research', },
    { icon: 'pe-7s-hourglass', title: 'Free Delivery', },
];
const chapterData: BookChapter[] = [
    { icon: 'pe-7s-rocket', title: 'Chapter Title 01', },
    { icon: 'pe-7s-camera', title: 'Chapter Title 02', },
    { icon: 'pe-7s-medal', title: 'Chapter Title 03', },
    { icon: 'pe-7s-like', title: 'Chapter Title 04', },
    { icon: 'pe-7s-gift', title: 'Chapter Title 05', },
    { icon: 'pe-7s-diamond', title: 'Chapter Title 06', },
];

const clientsData: ClientsData[] = [
    {
        id: 1,
        image: user1,
        name: 'Ricardo Green',
        designation: 'Manager',
    },
    {
        id: 2,
        image: user2,
        name: 'Maria Johnson',
        designation: 'Designer',
    },
    {
        id: 3,
        image: user3,
        name: 'Daniel Sammons',
        designation: 'Graphic',
    },
    {
        id: 4,
        image: user4,
        name: 'Jennifer Hoffman',
        designation: 'Developer',
    },
];

const Section = () => {
    return (
        <React.Fragment>
            {/* Home */}
            <section className="section book-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={7}>
                                    <div className="book-home-content text-white mt-4">
                                        <h4 className="book-home-title text-uppercase line-height_1_4 letter-spacing_6">
                                            Promote Your Ebook Successfully
                                        </h4>
                                        <p className="book-home-desc f-16 mt-4">
                                            Perspiciatis omnis iste error sit voluptatem accusantium doloremque laudantium totam aperiam eaque
                                            quae illo inventore veritatis quasi in architecto necessary explicabo.
                                        </p>
                                        <h4 className="book-price mt-4 pt-3">
                                            <span className="f-20 pe-4">
                                                <del> Was $250</del>
                                            </span>
                                            $250.00
                                        </h4>
                                        <div className="mt-5 pt-3">
                                            <Button variant="custom">Purchase now</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}>
                                    <div className="book-home-img mt-4">
                                        <img src={book} className="img-fluid" alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="section book-about" id="about">
                <Container>
                    <Row>
                        {(bookAboutData || [])?.map((item: BookChapter, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="book-about-box mt-4">
                                    <div className="book-about-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="f-15 text-uppercase letter-spacing_2 mt-3">{item.title}</h4>
                                    <div className="book-about-border mt-3"></div>
                                    <p className="text-muted mt-3 mb-0">Passages available but majority have suffered in some form
                                        injected humour randomised words which slightly believable.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <Row className="mt-5 pt-4 align-items-center">
                        <Col lg={7}>
                            <div className="book-about-content mt-4">
                                <h4 className="book-about-title letter-spacing_2">A Word From the Author</h4>
                                <p className="text-muted mt-4 f-15 mb-0">
                                    Because occasionally circumstances occur in which toil procure some great pleasure to take a trivial
                                    example which ever undertakes laborious physical exercise except to obtain some advantage from right
                                    to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences avoids pain
                                    that produces no resultant pleasure.
                                </p>
                                <h2 className="book-baout-signicher mt-4">Karren R. Anderwood</h2>

                                <div className="mt-5">
                                    <Button variant="dark-custom" className='btn-md'>
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <div className="book-about-img mt-4">
                                <img src={about} className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Services */}
            <section className="section" id="services">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Topics Covered Book</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(chapterData || [])?.map((item: BookChapter, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="book-services-box text-center mt-4">
                                    <div className="book-services-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h4 className="f-15 text-uppercase letter-spacing_2 mt-3">{item.title}</h4>
                                    <div className="book-services-border mt-3"></div>
                                    <p className="text-muted mt-3">Passages available but majority have injected humour randomised words
                                        which look slightly believable.</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <Counter />

            {/* Client */}

            <section className="section" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Client</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        <Col lg={12}>
                            <Swiper className="mySwiper4" spaceBetween={5} slidesPerView={3} >
                                {(clientsData || [])?.map((client: ClientsData) => (
                                    <SwiperSlide key={client.id}>
                                        <div className="item mx-2">
                                            <div className="book-client-box text-center mt-4">
                                                <div className="book-client-desc">
                                                    <p className="text-muted p-4 f-17">Example which ever undertakes laborious physical exercise except to obtain some avoids resultant pleasure?</p>
                                                </div>
                                                <div className="book-client-img mt-5">
                                                    <img src={client.image} className="img-fluid rounded-circle" alt="" />
                                                </div>
                                                <h5 className="f-15 text-uppercase letter-spacing_2 mt-4">{client.name}</h5>
                                                <p className="text-muted f-14 mb-0">{client.designation}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

        </React.Fragment>
    )
}

export default Section