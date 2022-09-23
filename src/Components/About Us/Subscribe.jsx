import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <div className="sub">
      <div>
        <Row className="subscribe">
          <Col md={12} lg={7} sm={12} xs={12}>
            <div className="col1">
              <img src="./image/email.png" alt="email" />
              <div>
                <h2>Get the latest news and offers</h2>
                <h1>Subscribe to our newsletter</h1>
              </div>
            </div>
          </Col>
          <Col md={12} lg={5} sm={12} xs={12}>
            <div className="col2">
              <span className="sub__btn">
                <input type="text" className="inp__box" />{' '}
                <input
                  type="submit"
                  className="inp__submit"
                  value="Subscribe"
                />
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Subscribe;
