import React from 'react';
import '../Stylings/Contact.scss';
import { Row, Col } from 'react-bootstrap';
const Address = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1>Our Partners</h1>
        <h2></h2>
      </div>
      <div className="contact__row">
        <div className="info">
          <h3>Stay in touch</h3>
          <h3 style={{ color: '#8b3eea' }}>+00 123 456 789</h3>
        </div>
        <div>
          <Row>
            <Col md={6} lg={3} sm={12} xs={12} className="col">
              <div className="address">
                <h6>Head Office</h6>
                <h5>New Mexico</h5>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className="map">View of map</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} xs={12} className="col">
              <div className="address">
                <h6>Head Office</h6>
                <h5>New Mexico</h5>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className="map">View of map</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} xs={12} className="col">
              <div className="address">
                <h6>Head Office</h6>
                <h5>New Mexico</h5>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className="map">View of map</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} xs={12} className="col">
              <div className="address">
                <h6>Head Office</h6>
                <h5>New Mexico</h5>
                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                <p className="map">View of map</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Address;
