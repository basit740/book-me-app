import React, { useState } from 'react'
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Counter from '../../components/Counter';

// Image
import shape from "../../assets/images/home-softwere-shape.png"
import home from "../../assets/images/softwere-home-img.png"

import feature4 from "../../assets/images/features/feature-4.png"
import feature5 from "../../assets/images/features/feature-5.png"

import screen7 from "../../assets/images/screenshots/screenshot-7.jpg"
import screen8 from "../../assets/images/screenshots/screenshot-8.jpg"
import screen9 from "../../assets/images/screenshots/screenshot-9.jpg"
import screen10 from "../../assets/images/screenshots/screenshot-10.jpg"
import screen11 from "../../assets/images/screenshots/screenshot-11.jpg"

import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

interface SoftwareAboutData {
  icon: string; title: string;
}

interface Testimonials {
  id: number; author: string; role: string; image: string;
}

const softwareAboutData: SoftwareAboutData[] = [
  { icon: 'pe-7s-light', title: 'Creative Design', },
  { icon: 'pe-7s-portfolio', title: 'Easy to Use', },
  { icon: 'pe-7s-like2', title: 'Secure Data' }
];

const testimonials: Testimonials[] = [
  { id: 1, author: 'Dennis Hammer', role: 'Founder', image: user1 },
  { id: 2, author: 'Robert Chea', role: 'Designer', image: user2 },
  { id: 3, author: 'Victor Smith', role: 'Manager', image: user3 }
];


const Section = () => {

  // modal
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <React.Fragment>
      {/* Home */}
      <section className="softwere-home" id="home">
        <div className="bg-overlay"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="softwere-home-content text-white mt-4">
                    <h4 className="softwere-home-title text-uppercase line-height_1_4 letter-spacing_4">
                      We Are Building Software To Help
                    </h4>
                    <p className="softwere-home-desc f-15 mt-4 mx-auto">
                      Fusce convlis justo dolor egestas condimentum
                      duis mattis odio sit amet tristique faucibus odio commodo augue eget finibus odio etiam pharetra
                      tempus aliquam metus semper.
                    </p>
                    <div className="softwere-home-watch-video mt-5">
                      <Link className="modal-btn" to="#" data-bs-toggle="modal" data-bs-target=".watchvideomodal" onClick={openModal}>
                        <i className="mdi mdi-play play-icon-circle play play-icon f-20"></i>
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="softwere-home-img text-center">
                    <img src={home} className="img-fluid" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Row>
                <div className="softwere-home-shape-img">
                  <img src={shape} alt="" className="img-fluid mx-auto d-block" />
                </div>
              </Row>
            </Container>
          </div>
        </div>

        <Modal show={showModal} onHide={closeModal} centered size="lg" className="bd-example-modal-lg watchvideomodal" aria-hidden="true" contentClassName='home-modal bg-transparent'>
          <Modal.Header closeButton className="border-0" closeVariant='white'></Modal.Header>
          <video id="VisaChipCardVideo" className="video-box w-100 h-100 pb-0" controls >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </Modal>
      </section>

      {/* About */}
      <section className="section software-about" id="about">
        <Container>
          <Row>
            {(softwareAboutData || [])?.map((item: SoftwareAboutData, index: number) => (
              <Col lg={4} key={index}>
                <div className="softwere-about-box text-center p-3">
                  <div className="softwere-about-icon">
                    <i className={item.icon} />
                  </div>
                  <h4 className="f-15 text-uppercase letter-spacing_2 mt-4">{item.title}</h4>
                  <p className="text-muted mt-4">Quisque rutrum vamus lectus nulla dictum venenatis celerisque felis porta morbi conentum vebulum libero.</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <hr />

      {/* Features */}
      <section className="section" id="features">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Features</h2>
                <p className="heading-title-desc text-muted mt-4">
                  Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                  commodo nibh malesuada sollis diam.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-3 align-items-center">
            <Col lg={6}>
              <div className="softwere-features-img mt-4">
                <img src={feature4} className="img-fluid" alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="softwere-features-content">
                <p className="f-20 text-muted">01.</p>
                <h4 className="mt-4 text-uppercase f-20 letter-spacing_2">Beautiful Features</h4>
                <p className="softwere-features-desc text-muted mt-4">
                  Vestibulum vehicula tincidunt metus viverra diam socitudin donec consectetur massa vel tincidunt sed
                  vitae aliquam mauris cursus sed felis a porta aliquam volutpat In mattis justo sit amet sem porttitor
                  imperdie morbi blandit augue fermentum.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-md btn-dark-custom">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-5 align-items-center">
            <Col lg={6}>
              <div className="softwere-features-content">
                <p className="f-20 text-muted">02.</p>
                <h4 className="mt-4 text-uppercase f-20 letter-spacing_2">Real Time Systems</h4>
                <p className="softwere-features-desc text-muted mt-4">
                  Vestibulum vehicula tincidunt metus viverra diam socitudin donec consectetur massa vel tincidunt sed
                  vitae aliquam mauris cursus sed felis a porta aliquam volutpat In mattis justo sit amet sem porttitor
                  imperdie morbi blandit augue fermentum.
                </p>

                <div className="mt-4">
                  <Link to="#" className="btn btn-md btn-dark-custom">
                    Learn more
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="softwere-features-img mt-4">
                <img src={feature5} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Counter */}
      <Counter />

      {/* Screenshot */}
      <section className="section" id="screen">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Screenshot In Details</h2>
                <p className="heading-title-desc text-muted mt-4">
                  Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                  commodo nibh malesuada sollis diam.
                </p>
              </div>
            </Col>
          </Row>

          <Row className=" mt-5 pt-3">
            <Col lg={12}>
              <Swiper className="homeslider pb-5"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                initialSlide={3}
                keyboard={true}
                preventClicks={true}
                mousewheel={true}
                loop={true}
                preventClicksPropagation={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                coverflowEffect={{
                  rotate: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
              >
                <div className="swiper-wrapper mt-4">
                  <SwiperSlide>
                    <img src={screen7} className="img-fluid" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={screen8} className="img-fluid" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={screen9} className="img-fluid" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={screen10} className="img-fluid" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={screen11} className="img-fluid" alt="" />
                  </SwiperSlide>
                </div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <hr />

      {/* Customer */}
      <section className="section testimonial" id="client">
        <Container>
          <Row className=" justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Our Customers</h2>
                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
              </div>
            </div>
          </Row>

          <Row className=" mt-5 pt-3">
            <Col lg={12}>
              <Carousel id="agency-owl-demo" controls={true} prevIcon={<i className="mdi mdi-menu-left"></i>} nextIcon={<i className="mdi mdi-menu-right"></i>}>
                {(testimonials || [])?.map((item: Testimonials) => (
                  <Carousel.Item key={item.id}>
                    <div className="agency-testimonial-box text-center ml-2 mr-2 p-5">
                      <div className="agency-testi-desc bg-white">
                        <p className="text-muted f-17 mb-0">Dolorem ipsum quia dolor sit amet consectetur adipisci velit modi numquam tempora incidunt labore dolore magnam aliquam quaerat voluptatem enim laboriosam aliquid commodi consequatur.</p>
                      </div>
                      <div className="agency-testimonial-img mt-5 pt-3">
                        <img src={item.image} className="img-fluid rounded-circle" alt="" />
                        <div className="mt-4">
                          <h5 className="text-uppercase f-15 letter-spacing_2">{item.author}</h5>
                          <p className="text-muted f-13 mb-0">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Video */}
      <section className="section cta-2">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="app-video-box text-center text-white">
                <h2 className="app-video-title text-uppercase">Watch Video</h2>
                <p className="app-video-desc f-16 mx-auto mt-4 pt-2">
                  Always holds these matters principle of selection he rejects pleasures to secure other greater pleasures else
                  pains.
                </p>

                <div className="mt-5 app-video-icon">
                  <Link to="#" className="modal-btn" onClick={openModal}>
                    <span className="avatar-sm">
                      <span className="rounded-circle btn-icon">
                        <i className="mdi mdi-play text-white"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default Section