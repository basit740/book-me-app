import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

interface PricingData {
  title?: string; month?: string; price?: string; priceColor?: string; back?: string; active?: string; text?: string;
}

const pricingData: PricingData[] = [
  { title: 'Basic Plan', month: '1 Month', price: '13.90', priceColor: "text-muted", },
  { title: 'Advanced Plan', month: '3 Month', price: '23.90', back: "bg-primary", active: "-active", text: "text-white" },
  { title: 'Expert Plan', month: '6 Month', price: '33.90', priceColor: "text-muted", }
];

const AppGymPricing: React.FC = () => {

  return (
    <React.Fragment>
      <section className="section app-pricing" id="pricing">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="home-title text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">Pricing Plan</h2>
                <p className="heading-title-desc text-muted mt-4">Pellentesque habitant morbi tristique senectus malesuada fames turpis egestas duis dignissim finibus commodo nibh malesuada sollis diam.</p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-3">
            {(pricingData || [])?.map((plan: PricingData, index: number) => (
              <Col lg={4} key={index}>
                <div className="gym-pricing-box bg-white text-center mt-4">
                  <div className={`gym-pricing-title${plan.active} p-5 ${plan.back}`}>
                    <h4 className={`mb-0 text-uppercase f-16 ${plan.text}`}>{plan.title}</h4>
                  </div>
                  <div className="gym-month-lebal">
                    <p className="mb-0">{plan.month}</p>
                  </div>
                  <div className="gym-pricing-plan mt-4">
                    <h2 className={`${plan.priceColor} mb-0`}><span className="f-18">$</span>{plan.price}</h2>
                  </div>

                  <div className="p-5">
                    <p className="text-muted">100 MB Disk Space</p>
                    <p className="text-muted">2 Subdomains</p>
                    <p className="text-muted">5 Email Accounts</p>
                    <p className="text-muted">Webmail Support</p>
                    <p className="text-muted">5 Email Accounts</p>
                    <div className="mt-5">
                      <Button href="#" variant="dark" className=" btn-md">Select Plan</Button>
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

export default AppGymPricing;