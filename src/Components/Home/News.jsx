import React from 'react';
import { Row, Col } from 'react-bootstrap';
const News = () => {
  return (
    <div className="news">
      <div className="title">
        <h1>Latest travel news</h1>
        <h2></h2>
      </div>
      <Row className="news__row">
        <Col md={6} lg={6} sm={12} xs={12}>
          {/* News Shironam_______ */}
          <Row>
            <Col md={12} lg={12} sm={12} xs={12} className="col">
              <div className="small__img">
                <img src="./image/small1.png" alt="" />
              </div>
              <div className="news__info">
                <h2>
                  Revolutionising the travel industry, one partnership at a time
                </h2>
                <div>
                  <span
                    style={{
                      color: 'purple',
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '6%',
                    }}
                  >
                    26 Oct 2022 <p>5min read</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={12} lg={12} sm={12} xs={12} className="col">
              <div className="small__img">
                <img src="./image/small2.png" alt="" />
              </div>
              <div className="news__info">
                <h2>
                  t is a long established fact that a reader will be distracted.
                </h2>
                <div>
                  <span
                    style={{
                      color: 'purple',
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '6%',
                    }}
                  >
                    26 Oct 2022 <p>5min read</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={12} lg={12} sm={12} xs={12} className="col">
              <div className="small__img">
                <img src="./image/small3.png" alt="" />
              </div>
              <div className="news__info">
                <h2>There are many variations of passages of sum available</h2>
                <div>
                  <span
                    style={{
                      color: 'purple',
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '6%',
                    }}
                  >
                    26 Oct 2022 <p>5min read</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={12} lg={12} sm={12} xs={12} className="col">
              <div className="small__img">
                <img src="./image/small4.png" alt="" />
              </div>
              <div className="news__info">
                <h2>Contrary to popular belief, Lorem Ipsum is not simply.</h2>
                <div>
                  <span
                    style={{
                      color: 'purple',
                      fontSize: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '6%',
                    }}
                  >
                    26 Oct 2022 <p>5min read</p>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          {/* _____________ */}
        </Col>
        <Col md={6} lg={6} sm={12} xs={12}>
          <div className="news__cont">
            <div className="img">
              <img src="./image/new-big.png" alt="" />
            </div>

            <div>
              <h3>There are many variations of passages available but</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of. The point of using Lorem Ipsum is
                that it has a more
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable long established fact that a reader will be
                distracted content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default News;
