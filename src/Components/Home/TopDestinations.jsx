import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Home.scss';
const TopDestinations = () => {
  return (
    <div className="destination">
      <div className="title">
        <h1>Top destinations</h1>
        <h2></h2>
      </div>
      <div className="places">
        <Row className="row">
          <Col md={12} lg={6} sm={12} xs={12} className="col">
            <div className="des__container">
              <img src="./image/big-img.png" alt="" />
              <div className="des__content">
                <div className="content__detail">
                  <h2>Up to</h2>
                  <h1>50% off</h1>
                  <h2>Honeymoon packages</h2>
                  <Link to="/booking">
                    <input type="button" value="Book now" />
                  </Link>{' '}
                </div>
              </div>
            </div>
          </Col>

          {/* Colum 2 start from here */}

          <Col md={12} lg={6} sm={12} className="d__col2">
            <Row className="dest des__res row2">
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container des__res">
                  <img src="./image/destination1.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>China</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container des__res">
                  <img src="./image/destination2.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>Darjeeling</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container des__res">
                  <img src="./image/destination3.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>Malaysia</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="dest des__res">
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container ">
                  <img src="./image/destination4.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>Gangtok</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container ">
                  <img src="./image/destination5.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>Thailand</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12} className="des__col">
                <div className="des__container ">
                  <img src="./image/destination6.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>Australia</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="dest ">
              <Col md={12} lg={12} sm={12} xs={12}>
                <div className="des__container">
                  <img src="./image/destination7.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>London</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12}>
                <div className="des__container">
                  <img src="./image/destination8.png" alt="" />
                  <div className="des__content">
                    <div className="content__detail">
                      <p>USA</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Link to="booking">
        <input
          type="submit"
          value="Let's Create some precious moments (Book Now)"
        />
      </Link>
    </div>
  );
};

export default TopDestinations;
