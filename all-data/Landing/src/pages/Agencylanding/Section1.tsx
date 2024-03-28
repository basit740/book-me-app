import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FooterSection from '../../layout/Footer';
import AgencyInteriorContact from '../../components/AgencyInetriorcontact';
import AgencySoftwareBlog from '../../components/AgencysoftwareBlog';

//Image
import user1 from "../../assets/images/users/user-1.jpg"
import user2 from "../../assets/images/users/user-2.jpg"
import user3 from "../../assets/images/users/user-3.jpg"

interface TeamMembers {
    name: string; role: string; picture: string;
}

const teamMembers: TeamMembers[] = [
    { name: 'GRAIG L. CATALANOo', role: 'Developer', picture: user1, },
    { name: 'THOMAS M. MOCK', role: 'Photoshop', picture: user2, },
    { name: 'ROBERT L. KYTE', role: 'Designer', picture: user3, },
];

const Section1 = () => {

    return (
        <React.Fragment>
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
                        {(teamMembers || [])?.map((item: TeamMembers, index: number) => (
                            <Col lg={4} key={index}>
                                <div className="team p-4 text-center mt-4">
                                    <div className="agency-team-img">
                                        <img src={item.picture} className="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <h5 className="mt-4 text-uppercase letter-spacing_2 f-15">{item.name}</h5>
                                    <p className="text-muted f-13">{item.role}</p>
                                    <p className="text-muted mb-0">There are many on variations passages sufered tha alteration form injected randomised in look.</p>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Container>
            </section>
            <hr />

            {/* Blog */}

            <AgencySoftwareBlog />

            <hr />

            {/* Contact */}
            <AgencyInteriorContact />


            {/* Footer */}
            <FooterSection />


        </React.Fragment>
    )
}

export default Section1