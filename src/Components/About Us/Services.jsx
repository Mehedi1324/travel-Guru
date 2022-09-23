import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className="service">
      <Row>
        <Col md={4} lg={3} sm={6}>
          <div className="cart">
            <img className="mb-2" src="./image/world.png" alt="world" />
            <div>
              <Link to="/about">Best Services</Link>
              <p className="pt-2">
                Your satisfaction is our priority. You will get 24/7 customer
                care support and a family like hospitality after registration.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={6}>
          <div className="cart">
            <img className="mb-2" src="./image/walte.png" alt="world" />
            <div>
              <Link to="/about">Trusted payment</Link>
              <p className="pt-2">
                Our company is well verified. So, be sure that you are not
                throughing your money into the gutter
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={6}>
          <div className="cart">
            <img className="mb-2" src="./image/star.png" alt="world" />
            <div>
              <Link to="/about">Top facility</Link>
              <p className="pt-2">
                There are professional guids and fully private resorts are
                booked for our clients all over the world
              </p>
            </div>
          </div>
        </Col>
        <Col md={4} lg={3} sm={6}>
          <div className="cart">
            <img className="mb-2" src="./image/persentis.png" alt="world" />
            <div>
              <Link to="/about">Awesome deals</Link>
              <p className="pt-2">
                We provide different type of offers on every occation and huge
                discount on full family vacation trip.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
