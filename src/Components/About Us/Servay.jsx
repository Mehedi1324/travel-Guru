import React from 'react';

import { Row, Col } from 'react-bootstrap';
const Servay = () => {
  return (
    <div>
      <div className="counting">
        <Row className="row2">
          <Col md={6} lg={3} sm={6} xs={12} className="col">
            <div className="count">
              <img src="./image/user.png" alt="world" />
              <div>
                <span className="p">2348</span>
                <p>Partners</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} sm={6} xs={12} className="col">
            <div className="count">
              <img src="./image/bank.png" alt="world" />
              <div>
                <span className="p">1748</span>
                <p>Listed property</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} sm={6} xs={12} className="col">
            <div className="count">
              <img src="./image/world-map.png" alt="world" />
              <div>
                <span className="p">4287</span>
                <p>Destinations</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} sm={6} xs={12} className="col">
            <div className="count">
              <img src="./image/calander.png" alt="world" />
              <div>
                <span className="p">40</span>
                <p>Booking</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Servay;
