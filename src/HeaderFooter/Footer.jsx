import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../HeaderFooter/Footer.scss';
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaPinterestP,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div>
          <Row className="row">
            <Col lg={3} md={6} sm={6} xs={12}>
              <div className="column">
                <div className="category">
                  <h4>Address</h4>
                  <div className="address d-flex">
                    <div>
                      <FaMapMarkerAlt className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1">
                      {' '}
                      184 Main Rd E, St Albans VIC 3021, Australia
                    </span>
                  </div>
                  <div className="address d-flex">
                    <div>
                      <FaEnvelope className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1"> contact@company.com</span>
                  </div>
                  <div className="address d-flex">
                    <div>
                      <FaPhoneAlt className="add__svg" />
                    </div>{' '}
                    <span className="add_dit1"> +001 2233 456</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="category" lg={3} md={6} sm={6} xs={12}>
              <h4>Company</h4>
              <Link to="#">About Us</Link>
              <br />
              <Link to="#">Testimonials </Link>
              <br />
              <Link to="#">Rewards</Link>
              <br />
              <Link to="#">Work with Us</Link>
              <br />
            </Col>
            <Col className="category" lg={3} md={6} sm={6} xs={12}>
              <h4>Support</h4>
              <Link to="#">Account</Link>
              <br />
              <Link to="#">Contact Us</Link>
              <br />
              <Link to="#">Faq</Link>
              <br />
              <Link to="#">Contact</Link>
              <br />
              <Link to="#">Privacy Policy</Link>
              <br />
            </Col>
            <Col className="category " lg={3} md={6} sm={6} xs={12}>
              <h4>Other Services</h4>
              <Link to="#">Community program</Link>
              <br />
              <Link to="#">Rewards Program</Link>
              <br />
              <Link to="#">Investor Relations</Link>
              <br />
              <Link to="#">Partners</Link>
              <br />
              <Link to="#">List My Hotel</Link>
              <br />
            </Col>
          </Row>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__elements">
          <div>
            <p>Copyright © 2022 Travel Guru . Developer Hasan</p>
          </div>
          <div className="social__icons d-flex ">
            <img src="./image/cards.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
