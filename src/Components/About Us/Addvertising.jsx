import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Addvertising = () => {
  return (
    <div className="add">
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div className="add__img">
            <img src="./image/small_banner.png" alt="smallBanner" />
          </div>
        </Col>
        <Col sm={12} md={8} lg={8}>
          <div className="add__img cntnr">
            <img src="./image/big_banner.png" alt="bigBanner" />
            <div className="cntnt">
              <h3>
                Enjoy <span style={{ color: 'red' }}> 20%</span> discount
              </h3>
              <h2>Thailand couple tour</h2>
              <Link to="/about">Find tours</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Addvertising;
