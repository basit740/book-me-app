import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Image
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";

interface BlogData {
    id: number; img: string; date: string; title: string;
}

const blogData: BlogData[] = [
    { id: 1, img: blog1, date: "15 January, 2022", title: "Consectetuer tellus in bibendum posuere mattis dolor asperiores repellat.", },
    { id: 2, img: blog2, date: "16 January, 2022", title: "Fonsectetuer tellus in bibendum posuere mattis dolor asperiores repellat.", },
    { id: 3, img: blog3, date: "17 January, 2022", title: "Sonsectetuer tellus in bibendum posuere mattis dolor asperiores repellat.", }
]

const AgencySoftwareBlog: React.FC = () => {
    return (
        <React.Fragment>
            <section className="section" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our News</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {
                            (blogData || [])?.map((item: BlogData, key: number) => (
                                <Col lg={4} key={key}>
                                    <div className="agency-blog-box mt-4">
                                        <div className="agency-blog-img">
                                            <img src={item.img} className="img-fluid" alt="" />
                                        </div>
                                        <div className="agency-blog-content bg-white p-4">
                                            <div className="agency-blog-date  text-white text-center p-1 position-absolute" style={{ width: "160px", borderRadius: "2px", marginTop: "-40px", backgroundColor: "#323232" }}>
                                                <p className="mb-0 f-13"><i className="mdi mdi-calendar-range pe-2"></i> {item.date}</p>
                                            </div>
                                            <div className="agency-blog-info">
                                                <h5 className="f-16 line-height_1_6"> {item.title}</h5>
                                                <div className="mt-3">
                                                    <Link to="#" className="more-details text-uppercase text-muted fw-bold f-12">More Details <i className="mdi mdi-arrow-right"></i></Link>
                                                </div>
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

export default AgencySoftwareBlog;