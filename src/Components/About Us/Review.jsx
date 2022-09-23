import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
const Review = () => {
  return (
    <div className="customer__review">
      <h1>Customer review</h1>
      <h3></h3>
      <div>
        <Row>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="review__cards">
              <div className="frst__row">
                <p>08 Dec, 2021</p>
                <div className="profile">
                  <img src="./image/review.png" alt="" />
                  <h2>Jesica Simpsn</h2>
                  <p>Tourist</p>
                </div>
                <div className="rating">
                  Excellent
                  <p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>

              <div className="feedback">
                <p className="p">
                  " Loved the overall tour for all 6 days covering jaipur
                  jodhpur and jaisalmer. worth ur money for sure. thanks. Driver
                  was very good and polite and safe driving for all 6 days. on
                  time pickup and drop overall. Thanks for it. "
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="review__cards">
              <div className="frst__row">
                <p>08 Dec, 2021</p>
                <div className="profile">
                  <img src="./image/review6.png" alt="" />
                  <h2>Santa mariam</h2>
                  <p>Tourist</p>
                </div>
                <div className="rating">
                  Excellent
                  <p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>

              <div className="feedback">
                <p className="p">
                  " Loved the overall tour for all 6 days covering jaipur
                  jodhpur and jaisalmer. worth ur money for sure. thanks. Driver
                  was very good and polite and safe driving for all 6 days. on
                  time pickup and drop overall. Thanks for it. "
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} sm={12} xs={12}>
            <div className="review__cards">
              <div className="frst__row">
                <p>08 Dec, 2021</p>
                <div className="profile">
                  <img src="./image/review7.png" alt="" />
                  <h2>Jack cremer</h2>
                  <p>Tourist</p>
                </div>
                <div className="rating">
                  Excellent
                  <p>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>

              <div className="feedback">
                <p className="p">
                  " Loved the overall tour for all 6 days covering jaipur
                  jodhpur and jaisalmer. worth ur money for sure. thanks. Driver
                  was very good and polite and safe driving for all 6 days. on
                  time pickup and drop overall. Thanks for it. "
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Review;
