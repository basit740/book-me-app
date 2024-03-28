import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Image
import team1 from "../../assets/images/team/team-1.jpg"
import team2 from "../../assets/images/team/team-2.jpg"
import team3 from "../../assets/images/team/team-3.jpg"

import blog1 from "../../assets/images/blog/blog-1.jpg"
import blog2 from "../../assets/images/blog/blog-2.jpg"
import blog3 from "../../assets/images/blog/blog-3.jpg"

interface TeamData {
    name: string; role: string; image: string;
}

interface Blogs {
    date: string; title: string; image: string;
}


const teamData: TeamData[] = [
    { name: 'Michael Berrios', role: 'Boxing trainer', image: team1, },
    { name: 'Sarah Carroll', role: 'Yoga trainer', image: team2, },
    { name: 'Richard Romero', role: 'Fitness Trainer', image: team3, }
];

const blogs: Blogs[] = [
    { date: '21-8-2022', title: 'Pellentesque habitant they morbi placerat they contures.', image: blog1, },
    { date: '22-8-2022', title: 'Curabitur ligula tha sapien tindunt euismod imperdiet.', image: blog2, },
    { date: '23-02-2022', title: 'Fraesent egestas only tha neque habsse platea dictumst.', image: blog3, }
];

const Section1 = () => {
    return (
        <React.Fragment>

            {/* Form */}
            <section className="section bg-gym-form">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="Gym-grom-box text-white">
                                <div className="text-center">
                                    <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                        Join Our Club
                                    </h2>
                                    <p className="heading-title-desc text-white mt-4">
                                        Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis
                                        dignissim finibus commodo nibh malesuada sollis diam.
                                    </p>
                                </div>

                                <Form className="gym-form mt-5 pt-4">
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group controlId="fullName" className="mt-3">
                                                <Form.Label className="f-14 text-uppercase letter-spacing_2 fw-bold">
                                                    Your Full Name
                                                </Form.Label>
                                                <Form.Control type="text" name="name" />
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6}>
                                            <Form.Group controlId="phone" className="mt-3">
                                                <Form.Label className="f-14 text-uppercase letter-spacing_2 fw-bold">
                                                    Your Phone
                                                </Form.Label>
                                                <Form.Control type="text" name="phone" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>

                                <div className="mt-4">
                                    <Button variant="primary" className='btn-md btn-white'>
                                        Send Request
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team */}
            <section className="section gym-team" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Trainers</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(teamData || [])?.map((member: TeamData, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="gym-team-box mt-4">
                                    <div className="gym-team-img">
                                        <img src={member.image} className="img-fluid" alt="" />
                                    </div>

                                    <div className="gym-team-content text-white p-3">
                                        <h5 className="f-15 text-uppercase letter-spacing_2">{member.name}</h5>
                                        <p className="text-white">{member.role}</p>
                                        <p className="mb-0">Pleasure that annoying consences avoids pain that produces resultant.</p>

                                        <div className="mt-3">
                                            <ul className="list-inline gym-team-social mb-0">
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

            <hr />

            {/* Blog */}
            <section className="section gym-blog" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Blog</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <div className="row mt-5 pt-3">
                        {(blogs || [])?.map((blog: Blogs, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="gym-blog-box bg-white mt-4">
                                    <div className="gym-blog-img">
                                        <img src={blog.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="gym-blog-content p-3">
                                        <p className="text-muted mb-2">{blog.date}</p>
                                        <h4 className="f-17 line-height_1_6"><Link to="#" className="gym-blog-title">{blog.title}</Link></h4>
                                        <div className="gym-blog-border mt-3"></div>
                                        <p className="text-muted mt-3">Business have to repudiated annoyances accepted wise man always
                                            holds these matters this on principle.</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Footer */}
            <footer className="section-footer py-4 gym-bg-footer" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="text-center">
                                <div className="gym-footer-terms">
                                    <ul className="list-inline text-center p-4">
                                        <li className="list-inline-item me-3"><Link to="#">Home</Link></li>
                                        <li className="list-inline-item me-3"><Link to="#">About Us</Link></li>
                                        <li className="list-inline-item me-3"><Link to="#">Features</Link></li>
                                        <li className="list-inline-item me-3"><Link to="#">Blog</Link></li>
                                        <li className="list-inline-item me-3"><Link to="#">Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="gym-footer-alt mt-5">
                                    <p className="text-white text-uppercase mb-2">&copy; {new Date().getFullYear()} Tulsy.</p>
                                    <p className="copy-right mb-0">Design by Themesdesign</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </React.Fragment>
    )
}

export default Section1