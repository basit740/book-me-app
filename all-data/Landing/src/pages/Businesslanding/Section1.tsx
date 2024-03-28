import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import Blog from '../../components/Blog'
import ContactCommon from '../../components/ContactCommon'

// Image
import team1 from "../../assets/images/team/team-1.jpg"
import team2 from "../../assets/images/team/team-2.jpg"
import team3 from "../../assets/images/team/team-3.jpg"
import team4 from "../../assets/images/team/team-4.jpg"

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

interface TeamData {
    name: string; role: string; pic?: string; image?: string;
}

interface IndicatorsData {
    picture: string;
}

const teamMembers: TeamData[] = [
    { name: 'John Parker', role: 'Developer', pic: team1, },
    { name: 'Michael Christen', role: 'Manager', pic: team2, },
    { name: 'David Brower', role: 'Designer', pic: team3, },
    { name: 'Robert McDaniel', role: 'Marketing', pic: team4, },
];
const clientData: TeamData[] = [
    { name: 'Bernard Parsons', role: 'Developer', image: user1, },
    { name: 'William Mooneyhan', role: 'Manager', image: user2, },
    { name: 'Michael Johnson', role: 'Designer', image: user3, },
];

const Section1 = () => {

    const indicatorsData: IndicatorsData[] = [
        { picture: user1 },
        { picture: user2 },
        { picture: user3 },
    ]
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
        setActiveIndex(selectedIndex);
    };

    const renderIndicators = () => {
        return (indicatorsData || [])?.map((item: IndicatorsData, index: number) => (
            <button type="button" data-bs-target="#carouselExampleIndicators" className={index === activeIndex ? 'active ' : ''}
                onClick={() => handleSelect(index)} key={index}>
                <img src={item.picture} alt="" className="testi-img img-fluid rounded-circle mx-auto d-block" />
            </button>
        ))
    };

    return (
        <React.Fragment>
            {/* Team */}
            <section className="section" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Team</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {
                            (teamMembers || [])?.map((item: TeamData, index: number) => {
                                return (
                                    <Col lg={3} key={index}>
                                        <div className="business-team-box text-center mt-4">
                                            <div className="business-team-img">
                                                <img src={item.pic} className="img-fluid" alt="" />
                                            </div>
                                            <div className="business-team-content mt-4">
                                                <h4 className="f-15 text-uppercase letter-spacing_2">{item.name}</h4>
                                                <p className="mb-0 text-muted f-12">{item.role}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>

            {/* CTA */}
            <section className="section business-bg-cta">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="business-cta-box text-center text-white">
                                <h4 className="business-cta-title letter-spacing_4 text-uppercase">Lets us help Your IT problems</h4>
                                <p className="f-15 mt-4">We'd love to hear from You!</p>
                                <div className="mt-4 pt-3">
                                    <Button href="#about" className=' btn-md btn-white' >
                                        Let's Talk
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Client */}
            <section className="section business-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Clients</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" mt-5 pt-4">
                        <Col lg={12}>
                            <div id="carouselExampleIndicators" className="carousel business-carousel slide"
                                data-bs-ride="carousel">
                                <div className="carousel-indicators  d-flex">
                                    {renderIndicators()}
                                </div>
                                <Carousel id="carouselExampleIndicators" className="carousel business-carousel slide"
                                    onSelect={handleSelect} activeIndex={activeIndex} indicators={false}  >
                                    {
                                        (clientData || [])?.map((item: TeamData, index: number) => (
                                            <Carousel.Item key={index}>
                                                <div className="business-testi-box text-center mt-4">
                                                    <p className="text-muted line-height_1_8 f-17">
                                                        The european languages are members of the same family their separate existence is a myth for science music
                                                        sport etc europe their pronunciation many desktop publishing packages their most common words.
                                                    </p>
                                                    <h5 className="f-15 text-uppercase letter-spacing_2 mt-4">{item.name}</h5>
                                                    <p className="text-muted mb-0 f-12">{item.role}</p>
                                                </div>
                                            </Carousel.Item>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Blog */}
            <Blog />

            <hr />

            {/* Contact */}
            <ContactCommon />


        </React.Fragment>
    )
}

export default Section1