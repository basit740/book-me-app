import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

// Image
import user1 from "../assets/images/users/user-1.jpg";
import user2 from "../assets/images/users/user-2.jpg";
import user3 from "../assets/images/users/user-3.jpg";

interface TestData {
    id: number; image: string; author: string; post: string;
}

interface IndicatorsData {
    text: string;
}

const testData: TestData[] = [
    { id: 1, image: user1, author: "Randall Wilton", post: "General Manager" },
    { id: 2, image: user2, author: "Elaine Lamarr", post: "Graphic Designer" },
    { id: 3, image: user3, author: "Warren Williams", post: "Web Developer" },
]

const Testimonial: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: any) => {
        setActiveIndex(selectedIndex);
    };

    const indicatorsData: IndicatorsData[] = [
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
        { text: "avatar-title rounded-circle" },
    ]

    const renderIndicators = () => {
        return (indicatorsData || [])?.map((item: IndicatorsData, index: number) => (
            <button type="button" data-bs-target="#carouselExampleIndicators" className={index === activeIndex ? 'active ' : ''}
                onClick={() => handleSelect(index)} key={index} >
                <div className="avatar-xs">
                    <div className={item.text}>
                    </div>
                </div>
            </button>
        ))
    };
    return (
        <React.Fragment>
            <section className="section gym-client" id="client">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Testimonia</h2>
                                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 pt-3">
                        <Col lg={9}>
                            <div className="carousel-indicators  d-flex">
                                {renderIndicators()}
                            </div>
                            <Carousel className='owl-carousel owl-theme' id="startup-owl-demo" activeIndex={activeIndex} onSelect={handleSelect} indicators={false}>
                                {(testData || [])?.map((item: TestData, key: number) => (
                                    <Carousel.Item key={key}>
                                        <div className="item" >
                                            <div className="startup-client-box text-center">
                                                <div className="photographer-desc">
                                                    <p className="photographer-desc f-16 text-muted mt-3">Belongs to those who fail in their duty through weakness of will which is the saying through shrinking power of choice is untrammelled and when is to be nothing best every pleasure welcomed and every pain avoided.</p>
                                                </div>

                                                <div className="startup-client-img mt-5">
                                                    <img src={item.image} className="img-fluid rounded-circle" alt="" />
                                                </div>
                                                <h4 className="f-15 mt-4 letter-spacing_2 text-uppercase">- {item.author} <span className="f-12 text-muted">{item.post}</span></h4>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Testimonial