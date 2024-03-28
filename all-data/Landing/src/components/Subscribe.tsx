import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Subscribe = () => {
  return (
    <React.Fragment>
        <section className="section interior-bg-subscribe">
                <div className="bg-overlay"></div>
                <Container>
                    <Row className="justify-content-center text-white">
                        <Col lg={7}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                    Don't Forget To Sign Up!
                                </h2>
                                <p className="heading-title-desc text-white mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis
                                    dignissim finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                            <div className="interior-subcribe mt-5 pt-4">
                                <Form>
                                    <InputGroup>
                                        <Form.Control placeholder="Email" type="text" />
                                        <Button variant="custom" type="submit">
                                            Subscribe
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    </React.Fragment>
  )
}

export default Subscribe