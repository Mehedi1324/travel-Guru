import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Promo = () => {
  return (
    <div className="promo">
      <Row className="row">
        <Col md={6} lg={3} sm={6} xs={6}>
          <h2>Go beyond your</h2>
          <h2
            style={{
              borderBottom: '2px solid #8b3eea',
              width: '50%',
              paddingBottom: '10px',
            }}
          >
            imagination
          </h2>
          <p>Discover your ideal experience with us</p>
        </Col>
        <Col md={6} lg={3} sm={6} xs={6}>
          <div className="cont">
            <img src="./image/imagination1.png" alt="" />
            <div className="cntnt">
              <p>7% Discount for Summer Vacation</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={6} xs={6}>
          <div className="cont">
            <img src="./image/imagination2.png" alt="" />
            <div className="cntnt">
              <p>10% Discount for winter vacation</p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={3} sm={6} xs={6}>
          <div className="cont">
            <img src="./image/imagination3.png" alt="" />
            <div className="cntnt">
              <p>7% Discount for all Airlines</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Promo;
