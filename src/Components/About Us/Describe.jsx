import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Describe = () => {
  return (
    <div className="description">
      <Row>
        <Col md={6} lg={6} sm={12} xs={12}>
          <h4>About Us</h4>
          <h1>We Are The World Best Travel Agency Company Since 2000</h1>
          <div className="p">
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr
            </p>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr
            </p>
          </div>
          <button>Find tours</button>
        </Col>
        <Col md={6} lg={6} sm={12} xs={12}>
          <div className="img">
            <img src="./image/describe.png" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Describe;
