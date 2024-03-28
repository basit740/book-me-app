import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter';
import Testimonial from '../../components/Testimonial';
import Contact from '../../components/Contact';
import FooterSection from '../../layout/Footer';
import Pricing from '../../components/Pricing';

//images
//features
import feature8 from "../../assets/images/features/feature-8.jpg"
import feature9 from "../../assets/images/features/feature-9.jpg"
import feature10 from "../../assets/images/features/feature-10.jpg"

//team
import team1 from "../../assets/images/team/team-1.jpg"
import team2 from "../../assets/images/team/team-2.jpg"
import team3 from "../../assets/images/team/team-3.jpg"
import team4 from "../../assets/images/team/team-4.jpg"

interface Data {
    id: number; head: string; icon: string;
}

interface Feature {
    id: number; title: string;
}

interface TeamMembers {
    name: string; role: string; imageSrc: string;
}

const data: Data[] = [
    { id: 1, head: "Easy For Users", icon: "pe-7s-rocket" },
    { id: 2, head: "Pixel Perfect", icon: "pe-7s-vector" },
    { id: 3, head: "Edit Content", icon: "pe-7s-edit" },
]

const feature: Feature[] = [
    { id: 1, title: "COUNTDOWN TIMER" },
    { id: 2, title: "PARALLAX" },
    { id: 3, title: "GOOGLE MAPS" },
]

const teamMembers: TeamMembers[] = [
    { name: 'Christopher Amaro', role: 'Designer', imageSrc: team1, },
    { name: 'Jeremy Palmateer', role: 'Founder', imageSrc: team2, },
    { name: 'Ruben Spradling', role: 'Manager', imageSrc: team3, },
    { name: 'Denny Strickland', role: 'Developer', imageSrc: team4, },
];

const Section1 = () => {
    return (
        <React.Fragment>
            {/* About */}
            <section className="section startup-about" id="about">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <p className="startup-about-heading text-center text-muted line-height_1_8">Which is the same saying through shrinking from toil and pain these cases are perfectly simple and easy to distinguish.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-4">
                        {
                            (data || [])?.map((item: Data, key: number) => (
                                <Col lg={4} key={key}>
                                    <div className="startup-about-box mt-4">
                                        <div className="startup-about-icon float-start">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="startup-about-content ps-4 pt-2">
                                            <h4 className="f-15 letter-spacing_2 text-uppercase">{item.head}</h4>
                                            <p className="text-muted mt-3">Cupiditate they provident tha similique oficia deserunt mollitia laborum dolrum harum expedita distinctio.</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            {/* Features */}
            <section className="section" id="features">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Why Use Tulsy</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-3">
                        <Col md={7}>
                            <div className="startup-features-box mt-4">
                                <div className="startup-features-icon">
                                    <i className="pe-7s-way"></i>
                                </div>
                                <h4 className="mt-3 f-15 text-uppercase letter-spacing_2">Bootstrap 4 fremework</h4>
                                <p className="startup-features-desc text-muted mt-4">There variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words which dont look even slightly believable passage you need sure there anything embarrassing hidden in the cites of text.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-md btn-dark-custom">Learn More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={5}>
                            <div className="startup-features-img mt-4">
                                <img src={feature8} className="img-fluid mx-auto d-block" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-4">
                        <Col md={5}>
                            <div className="startup-features-img">
                                <img src={feature9} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col md={7}>
                            <div className="startup-features-box mt-4">
                                {
                                    (feature || [])?.map((item: Feature, key: number) => (
                                        <div className="mt-4" key={key}>
                                            <div className="float-start">
                                                <i className="mdi mdi-check f-20"></i>
                                            </div>
                                            <div className="ps-5 pt-1">
                                                <h4 className="f-15 text-uppercase letter-spacing_2">{item.title}</h4>
                                                <p className="text-muted">Earum rerum hic tenetur a sapiente delectus reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5 pt-4">
                        <Col md={7}>
                            <div className="startup-features-box mt-4">
                                <div className="startup-features-icon">
                                    <i className="pe-7s-way"></i>
                                </div>
                                <h4 className="mt-3 f-15 text-uppercase letter-spacing_2">Font awesome 5</h4>
                                <p className="startup-features-desc text-muted mt-4">There variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words which dont look even slightly believable passage you need sure there anything embarrassing hidden in the cites of text.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-md btn-dark-custom">Learn More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={5}>
                            <div className="startup-features-img">
                                <img src={feature10} className="img-fluid mx-auto d-block" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Counter */}
            <Counter />

            {/* Testimonial */}
            <Testimonial />

            <hr />

            {/* Pricing */}
            <Pricing />

            {/* CTA */}
            <section className="section bg-stratup-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className="startup-cta-box text-center text-white">
                                <h3 className="text-uppercase letter-spacing_4">
                                    Buy the startups now!
                                </h3>
                                <p className="f-15 mt-4">
                                    Dignissimos ducimus blanditiis praesentium voluptatum deleniti
                                    corrupti molestias.
                                </p>
                                <div className="mt-5 text-center">
                                    <Button href="#" className="btn btn-md btn-white">
                                        Buy Now!
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team */}
            <section className="section" id="team">
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

                    <div className="row mt-5 pt-3">
                        {(teamMembers || [])?.map((member: TeamMembers, index: number) => (
                            <Col lg={3} key={index}>
                                <div className="startup-team-box text-center mt-4">
                                    <div className="startup-team-img">
                                        <Image src={member.imageSrc} alt="" fluid className="img-fluid" />
                                    </div>

                                    <div className="startup-team-content p-4 text-center">
                                        <h3 className="f-15 text-uppercase letter-spacing_2">
                                            {member.name}
                                        </h3>
                                        <p className="text-muted f-13 mb-0">{member.role}</p>

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
                    </div>
                </Container>
            </section>

            <hr />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <FooterSection />

        </React.Fragment>
    )
}

export default Section1