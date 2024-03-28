import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

interface PricingPlans {
    name: string;
    icon: string;
    features: string[];
    price: string;
    ribbon: boolean;
    style?: string;
}

const pricingPlans: PricingPlans[] = [
    {
        name: 'Basic',
        icon: 'pe-7s-graph1',
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Customer Support 24/7',
        ],
        price: '39.99',
        ribbon: false
    },
    {
        name: 'Professional',
        icon: 'pe-7s-gleam',
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Customer Support 24/7',
        ],
        price: '59.99',
        style: "business-pricing-box-active",
        ribbon: true
    },
    {
        name: 'Standard',
        icon: 'pe-7s-way',
        features: [
            '100 MB Disk Space',
            '2 Subdomains',
            '5 Email Accounts',
            'Webmail Support',
            'Customer Support 24/7',
        ],
        price: '89.99',
        ribbon: false
    },
];

const Pricing: React.FC = () => {

    return (
        <React.Fragment>
            <section className="section business-pricing" id="pricing">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                                    Pricing Plan
                                </h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Pellentesque habitant morbi tristique senectus malesuada fames
                                    turpis egestas duis dignissim finibus commodo nibh malesuada
                                    sollis diam.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        {(pricingPlans || [])?.map((item: PricingPlans, index: number) => (
                            <Col lg={4} key={index}>
                                <div className={`business-pricing-box ${item.style} text-center mt-4`}>
                                    <div className="p-4 mt-3">
                                        {
                                            item.ribbon &&
                                            <div className="business-pricing-lable">
                                                <span className="business-lable-name">POPULAR</span>
                                            </div>
                                        }

                                        <div className="business-pricing-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h4 className="business-pricing-title text-uppercase letter-spacing_4 mt-4">
                                            {item.name}
                                        </h4>
                                    </div>
                                    <div className="business-pricing-features">
                                        {(item.features || [])?.map((feature, index) => (
                                            <p className="text-muted mb-0" key={index}>
                                                {feature}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="p-4">
                                        <div>
                                            <h1>{item.price}</h1>
                                        </div>
                                        <div className="p-4">
                                            <Button href="#about" className="btn btn-md btn-dark-custom">
                                                Purchase now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Pricing