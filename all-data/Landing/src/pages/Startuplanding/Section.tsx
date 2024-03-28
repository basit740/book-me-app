import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Section: React.FC = () => {

  // open+close modal state
  const [showModal, setShowModal] = useState<boolean>(false);
  // modal open
  const openModal = () => setShowModal(true);
  // modal close
  const closeModal = () => setShowModal(false);

  return (
    <React.Fragment>
      <section className="section startup-home" id="home">
        <div className="bg-overlay"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="startup-home-content text-center text-white">
                    <h4 className="startup-home-title text-uppercase letter-spacing_4">Startup landing page your product</h4>
                    <p className="startup-home-desc f-16 mt-4 mx-auto line-height_1_8 mb-0">Pleasure rationally encounter in consequences that are extremely painful again pursues loves desires obtain pain because pain.</p>
                    <div className="softwere-home-watch-video mt-5">
                      <Link className="modal-btn" to="#" onClick={openModal}>
                        <i className="mdi mdi-play play-icon-circle play play-icon f-20"></i>
                        <p className="f-14 letter-spacing_2 text-uppercase mt-4 mb-0">WATCH OUR VIDEO</p>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* modal */}
        <Modal show={showModal} onHide={closeModal} centered size="lg" contentClassName="home-modal bg-transparent border-0" className="bd-example-modal-lg watchvideomodal" aria-hidden="true" fade>
          <Modal.Header closeButton className="border-0" closeVariant="white"></Modal.Header>
          <video id="VisaChipCardVideo" className="video-box w-100 h-100 pb-0" controls >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </Modal>
      </section>
    </React.Fragment >
  )
}

export default Section;