import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Image
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";

interface BlogData {
    id: number; imageSrc: string; date: string; title: string;
}

const blogData: BlogData[] = [
    { id: 1, imageSrc: blog1, date: "07.02.2022", title: "Reproduced below for those of which the word interested.", },
    { id: 2, imageSrc: blog2, date: "08.02.2022", title: "Fusce pretium metus purus a commodo interdum.", },
    { id: 3, imageSrc: blog3, date: "09.02.2022", title: "Reproduced below for those of which the word interested.", }
]

const Blog: React.FC = () => {
    return (
        <React.Fragment>
            <section className="section" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Blog</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {
                            (blogData || [])?.map((item: BlogData, key: number) => (
                                <Col lg={4} key={key}>
                                    <div className="business-blog-box mt-4">
                                        <div className="business-blog-img">
                                            <img src={item.imageSrc} className="img-fluid" alt="" />
                                        </div>

                                        <div className="business-blog-content bg-white p-3">
                                            <div className="post-lable">By <Link to="#">John Doe</Link> <span>{item.date}</span></div>
                                            <h5 className="f-18 line-height_1_6">
                                                <Link className="text-primary" to="#">{item.title}</Link>
                                            </h5>
                                            <p className="text-muted mt-3">Quisque sed enim elementum interdum ultricies blandit ligula mauris ultrices seuismod convallis porta.</p>
                                            <div className="mt-4">
                                                <Button href="#about" variant="dark" size="sm">Read More</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Blog;