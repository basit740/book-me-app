import React from 'react'
import { Accordion, Col } from 'react-bootstrap'

const Accordions: React.FC = () => {
    return (
        <React.Fragment>
            <Col lg={6}>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade active show" id="pills-genarel" role="tabpanel" aria-labelledby="pills-genarel-tab">

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <h6> <span>01.</span> Vestibum purus scel nonummy.</h6></Accordion.Header>
                                <Accordion.Body className='text-muted f-14 line-height_1_8 p-3'>
                                    Voluptas assumenda omnis dolor tha repeldus teribus quibusdam officiis debitis rerum netbus saepe eveniet voluptates repudiandae sint molestiae recusandae Itaque earum they rerum hic tenetur sapiente delectus power repellat.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h6> <span>02.</span>Quisque rutrum etiam ultricies.</h6></Accordion.Header>
                                <Accordion.Body className='text-muted f-14 line-height_1_8 p-3'>
                                    Necesibus saepe eveniet voluptates repudiandae sint molestiae recusandae Itaque earum rerum hic tenetur a sapiente delectus reiciendis reat voluptatibus maiores alias consequatur perferend power choice doloribus asperiores repellat.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h6> <span>03.</span>Curabitur tint posue imperdiet.</h6></Accordion.Header>
                                <Accordion.Body className='text-muted f-14 line-height_1_8 p-3'>
                                    Molestiae recusandae Itaque earum they rerum tenetur sapiente delectus reiciendis reat voluptatibus maiores alias consequatur perferend power choice asperiores repellat.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h6> <span>04.</span>Donec hendrerit facilisis.</h6></Accordion.Header>
                                <Accordion.Body className='text-muted f-14 line-height_1_8 p-3'>
                                    Temporibus quibusdam officiis debitis rerum necessitatibus saepe eveniet voluptates repudiandae sint delectus reiciendis reat voluptatibus maiores alias consequatur.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default Accordions