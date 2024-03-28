import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactCommon from '../../components/ContactCommon';

// Image
import blog1 from "../../assets/images/blog/blog-1.jpg"
import blog2 from "../../assets/images/blog/blog-2.jpg"
import blog3 from "../../assets/images/blog/blog-3.jpg"
import blog10 from "../../assets/images/blog/blog-10.jpg"
import blog13 from "../../assets/images/blog/blog-13.jpg"
import blog12 from "../../assets/images/blog/blog-12.jpg"

interface BlogPosts {
    image: string; title: string;
}

const blogPosts: BlogPosts[] = [
    { image: blog1, title: 'Donec sapien venenatis faucibus.', },
    { image: blog2, title: 'Nullam dictum felis mollis pretium.', },
    { image: blog3, title: 'Vestibulum fringilla pede augue.', },
];

const Section1 = () => {
    return (
        <React.Fragment>
            {/* Blog */}
            <section className="section photographer-blog" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Blog Post</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        {(blogPosts || [])?.map((post: BlogPosts, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="photographer-blog-box mt-4">
                                    <div className="photographer-blog-img">
                                        <img src={post.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="photographer-blog-content bg-white p-2">
                                        <h4 className="f-17 mt-3">{post.title}<Link to="#"></Link></h4>
                                        <p className="text-muted mt-3">Belongs to those their duty through weaknes will which saying through shrinking from toil and pain these distinguish.</p>
                                        <hr className="mt-4" />
                                        <div className="mt-2">
                                            <p className="mb-0 text-muted">
                                                <span>By:</span> Admin <span className="ps-4">Date:</span> 08-07-2019
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Contact */}
            <ContactCommon />

            {/* Footer */}
            <footer className="section agency-footer pb-5">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Resources</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Monitoring Graden</Link>
                                    </li>
                                    <li>
                                        <Link to="#">video Tutorial</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Team &amp; Sevice</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Tulsy API</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Help</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Sign Up </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Terms of Services</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="photographer-instagram">
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Instagram</h6>
                                <Carousel className="slide mt-4" indicators={false} controls={false}>
                                    <Carousel.Item className="carousel-item active">
                                        <img src={blog10} className="img-fluid" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel-item">
                                        <img src={blog12} className="img-fluid" alt="..." />
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel-item">
                                        <img src={blog13} className="img-fluid" alt="..." />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">information</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Pages </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Video Tutorial</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Term &amp; Service</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Tulsy API</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="p-4">
                                <p className="copy-right text-center mb-0">
                                    © {new Date().getFullYear()} Tulsy. Design by Themesdesign
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </React.Fragment>
    )
}

export default Section1