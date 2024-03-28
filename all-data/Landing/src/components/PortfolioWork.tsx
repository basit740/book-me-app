import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
    { image: work1, groups: ['Natrual'], title: 'The Usefulness', category: 'Design', },
    { image: work2, groups: ['Personal'], title: 'Nonsensical Content', category: 'Photography', },
    { image: work3, groups: ['Personal'], title: 'Prevents Patterns', category: 'Corporate', },
    { image: work4, groups: ['Personal', 'Photography'], title: 'The Advantageous', category: 'Graphics', },
    { image: work5, groups: ['Creative'], title: 'Automatic recognition', category: 'Web Design', },
    { image: work6, groups: ['Natrual', 'Photography'], title: 'Pre-press workflow', category: 'Development', },
];


const PortfolioWork = () => {

    const [filter, setFilter] = React.useState<string>('All');

    const handleFilter = (group: any) => {
        setFilter(group);
    };

    const filteredData = filter === 'All' ? portfolioData : portfolioData.filter(item => item.groups.includes(filter));

    return (
        <React.Fragment>
            <section className="section portfolio" id="work">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Recent Works</h2>
                                <p className="heading-title-desc text-muted mt-4 mb-0">
                                    Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim
                                    finibus commodo nibh malesuada sollis diam.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="filters-group-wrap mt-5 pt-3">
                                <div className="filters-group">
                                    <ul className="nav filter-options list-unstyled list-inline justify-content-center">
                                        <li onClick={() => handleFilter('All')} className={` nav-link list-inline-item mt-2  ${filter === 'All' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            All
                                        </li>
                                        <li data-group="Natrual"
                                            className={` nav-link list-inline-item mt-2  ${filter === 'Natrual' ? 'active' : ''}`}
                                            style={{ cursor: 'pointer' }} onClick={() => handleFilter("Natrual")} >
                                            Natrual
                                        </li>
                                        <li data-group="Creative"
                                            className={` nav-link list-inline-item mt-2  ${filter === 'Creative' ? 'active' : ''}`}
                                            style={{ cursor: 'pointer' }} onClick={() => handleFilter("Creative")} >
                                            Creative
                                        </li>
                                        <li data-group="Personal"
                                            className={` nav-link list-inline-item mt-2  ${filter === 'Personal' ? 'active' : ''}`}
                                            style={{ cursor: 'pointer' }} onClick={() => handleFilter("Personal")} >
                                            Personal
                                        </li>
                                        <li data-group="Photography"
                                            className={` nav-link list-inline-item mt-2  ${filter === 'Photography' ? 'active' : ''}`}
                                            style={{ cursor: 'pointer' }} onClick={() => handleFilter("Photography")} >
                                            Photography
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="container mt-5">
                    <Row id="grid">
                        {(filteredData || [])?.map((item: PortfolioData, index: number) => (
                            <Col lg={4} md={6} xs={12} className="picture-item" key={index}>
                                <div className="position-relative portfolio-box portfolio overflow-hidden border-0">
                                    <Link to={item.image} className="lightbox port-icon">
                                        <img src={item.image} className="img-fluid" alt={item.title} />
                                    </Link>
                                    <div className="portfolio-content">
                                        <div className="gallary-title bg-light p-4">
                                            <h6 className="text-uppercase">
                                                <Link to="#" className="f-15 letter-spacing_2">
                                                    {item.title}
                                                </Link>
                                            </h6>
                                            <p className="text-muted text-uppercase f-12 mb-0 mt-2">{item.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default PortfolioWork

