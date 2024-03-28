import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AgencyInteriorContact from '../../components/AgencyInetriorcontact';
import FooterSection from '../../layout/Footer';
import Subscribe from '../../components/Subscribe';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Image
import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"
import user4 from "../../assets/images/users/user-4.jpg"
import user5 from "../../assets/images/users/user-5.jpg"

import team9 from "../../assets/images/team/team-9.jpg"
import team10 from "../../assets/images/team/team-10.jpg"
import team11 from "../../assets/images/team/team-11.jpg"
import team12 from "../../assets/images/team/team-12.jpg"

import blog1 from "../../assets/images/blog/blog-1.jpg"
import blog2 from "../../assets/images/blog/blog-2.jpg"
import blog3 from "../../assets/images/blog/blog-3.jpg"

interface Testimonials {
    id: number; image: string; name: string; designation: string;
}

interface TeamMembers {
    name: string; role: string; image: string;
}

interface BlogPosts {
    id: number; title: string; date: string; image: string;
}

const testimonials: Testimonials[] = [
    { id: 1, image: user1, name: 'Thomas Najera', designation: 'Web Designer' },
    { id: 2, image: user2, name: 'Luther Lante', designation: 'Web Developer' },
    { id: 3, image: user3, name: 'James Britt', designation: 'Manager' },
    { id: 4, image: user4, name: 'Ruben Levy', designation: 'Frontend Developer' },
    { id: 5, image: user5, name: 'Lucas Roberts', designation: 'CEO' }
];

const teamMembers: TeamMembers[] = [
    { name: 'Christopher Amaro', role: 'Designer', image: team9, },
    { name: 'Jeremy Palmateer', role: 'Founder', image: team10, },
    { name: 'Ruben Spradling', role: 'Manager', image: team11, },
    { name: 'Denny Strickland', role: 'Developer', image: team12, },
];

const blogPosts: BlogPosts[] = [
    { id: 1, title: 'A enim minim veniam quis...', date: '10 ', image: blog1, },
    { id: 2, title: 'Consectetuer adicing comm...', date: '11 ', image: blog2, },
    { id: 3, title: 'Maecenas ante tiunt tempus...', date: '12 ', image: blog3, }
];

const Section1 = () => {
    return (
        <React.Fragment>
            {/* Client */}
            <section className="section interior-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Happy Clients Say</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        <Col lg={12}>
                            <Swiper
                                className="mySwiper6"
                                spaceBetween={10}
                                slidesPerView={2}
                                modules={[Pagination, Autoplay]}
                                loop={true}
                                pagination={{ clickable: true }}
                            >
                                {(testimonials || [])?.map((testimonial: Testimonials) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className="item m-2">
                                            <div className="interior-client-box bg-white mt-4 p-5">
                                                <div className="interior-client-img float-start">
                                                    <img src={testimonial.image} className="img-fluid rounded-circle" alt="" />
                                                </div>
                                                <div className="interior-client-content ps-4">
                                                    <p className="line-height_1_8 f-16 text-muted">Contrary popular belief is not simply random roots piece classical in latin making tha over years web page editors cites old.</p>
                                                    <h6 className="mt-4 f-15 text-uppercase letter-spacing_2">{testimonial.name}</h6>
                                                    <p className="text-muted f-12 mb-0">{testimonial.designation}</p>
                                                </div>
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

            {/* Team */}
            <section className="section interior-team" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                    Smart Team
                                </h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames
                                    turpis egestas duis dignissim finibus commodo nibh malesuada
                                    sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        {(teamMembers || [])?.map((member: TeamMembers, index: number) => (
                            <Col lg={3} key={index}>
                                <div className="interior-team-box text-center mt-4">
                                    <div className="interior-team-img">
                                        <img src={member.image} className="img-fluid rounded-circle" alt="" />
                                    </div>

                                    <div className="interior-team-content p-4 text-center mt-3">
                                        <h3 className="text-uppercase letter-spacing_2 f-15">
                                            {member.name}
                                        </h3>
                                        <p className="text-muted text-uppercase f-13 mb-0">
                                            {member.role}
                                        </p>

                                        <div className="mt-3">
                                            <ul className="list-inline startup-team-social mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item ml-2">
                                                    <Link to="#" className="rounded-circle">
                                                        <i className="mdi mdi-linkedin"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Subscribe */}
            <Subscribe />

            {/* Blog */}
            <section className="section interior-blog" id="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Blog Posts</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-3">
                        {(blogPosts || [])?.map((post: BlogPosts) => (
                            <div className="col-lg-4" key={post.id}>
                                <div className="interior-blog-box mt-4">
                                    <div className="interior-blog-img">
                                        <img src={post.image} className="img-fluid" alt="" />
                                    </div>

                                    <div className="interior-blog-content">
                                        <div className="date">
                                            <span className="f-14">{post.date}</span>
                                            <br />
                                            <span className="text-uppercase f-12">Sep</span>
                                        </div>

                                        <div className="blog-info mt-3">
                                            <Link to="#">
                                                <h6 className="f-18">{post.title}</h6>
                                            </Link>
                                            <ul className="list-inline blog-brand">
                                                <li className="list-inline-item f-15">
                                                    By : <Link to="#">TulsyTheme</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-muted mt-3">The man therefore that always holds in these matters a different pleasure, or a pain.</p>

                                        <div className="mt-4">
                                            <Link to="#" className="btn btn-sm btn-dark-custom border-hrz">
                                                <span className="border-vrt">Read More</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr />

            {/* Contact */}
            <AgencyInteriorContact />

            {/* Footer */}
            <FooterSection />

        </React.Fragment>
    )
}

export default Section1