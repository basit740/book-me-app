import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Image
import work1 from "../assets/images/works/work-1.jpg"
import work2 from "../assets/images/works/work-2.jpg"
import work3 from "../assets/images/works/work-3.jpg"
import work4 from "../assets/images/works/work-4.jpg"
import work5 from "../assets/images/works/work-5.jpg"
import work6 from "../assets/images/works/work-6.jpg"

interface PortfolioData {
    image: string; groups: string[]; title: string; category: string;
}

const portfolioData: PortfolioData[] = [
    { image: work1, groups: ['Architecture'], title: 'The Usefulness', category: 'Design', },
    { image: work2, groups: ['Electric'], title: 'Nonsensical Content', category: 'Painting', },
    { image: work3, groups: ['Electric'], title: 'Prevents Patterns', category: 'Corporate', },
    { image: work4, groups: ['Electric', 'Painting'], title: 'The Advantageous', category: 'Graphics', },
    { image: work5, groups: ['Builder'], title: 'Automatic recognition', category: 'Architecture Design', },
    { image: work6, groups: ['Architecture', 'Painting'], title: 'Pre-press workflow', category: 'Development', },
];


const InteriorConstructionWork: React.FC = () => {

    const [filter, setFilter] = React.useState('All');

    const handleFilter = (group: any) => {
        setFilter(group);
    };

    const filteredData = filter === 'All' ? portfolioData : portfolioData.filter(item => item.groups.includes(filter));

    return (
        <React.Fragment>
            <section className="section portfolio business-portfolio" id="work">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Recent Project</h2>
                                <p className="heading-title-desc text-muted mt-4 mb-0">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus
                                    commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="filters-group-wrap mt-5 pt-3">
                                <div className="filters-group">
                                    <Nav className="filter-options justify-content-center">
                                        <li onClick={() => handleFilter('All')} className={` nav-link list-inline-item mt-2  ${filter === 'All' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            All
                                        </li>
                                        <li onClick={() => handleFilter('Architecture')} className={`nav-link list-inline-item mt-2 ${filter === 'Architecture' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            Architecture
                                        </li>
                                        <li onClick={() => handleFilter('Builder')} className={`nav-link list-inline-item mt-2 ${filter === 'Builder' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            Builder
                                        </li>
                                        <li onClick={() => handleFilter('Electric')} className={`nav-link list-inline-item mt-2 ${filter === 'Electric' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            Electric
                                        </li>
                                        <li onClick={() => handleFilter('Painting')} className={`nav-link list-inline-item mt-2 ${filter === 'Painting' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            Painting
                                        </li>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <Row id="grid">
                        {(filteredData || [])?.map((item: PortfolioData, key: number) => (
                            <Col lg={4} key={key} className="picture-item" data-groups={JSON.stringify(item.groups)}>
                                <div className="gallary-box m-3 portfolio">
                                    <Link className="lightbox port" to="#" title="">
                                        <img className="gallary-container" src={item.image} alt={item.title} />
                                        <div className="item-effect">
                                            <div className="item-caption text-center bg-primary text-white p-3">
                                                <h5 className="f-14 letter-spacing_2 text-uppercase mb-0">Ui Designer</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default InteriorConstructionWork