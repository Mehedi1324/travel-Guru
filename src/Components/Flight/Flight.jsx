import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import '../Stylings/Flight.scss';
import Cost from './Cost';
import Coupon from './Coupon';
import TravelData from './TravelData';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../Firebase/useFirebase';
import { deleteFromCart } from '../../Actions/bookingAction';
import { Link } from 'react-router-dom';
const Flight = () => {
  const cartState = useSelector((state) => state.bookingReducer);
  const bookingItems = cartState.bookedItems;
  const { user } = useFirebase();
  const dispatch = useDispatch();
  // Bill calculation _______________
  const days = bookingItems.reduce((x, item) => x + item.bookPackage, 0);
  const adult = bookingItems.reduce((x, item) => x + item.adult, 0);
  const children = bookingItems.reduce((x, item) => x + item.children, 0);
  const residenceCost = adult * days * 120 + children * days * 70;
  const travelCost = 2100 * adult;
  const finalCost = travelCost + residenceCost;

  // Bootstrap Modal Setup______________

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Sending Passenger info to database ___________

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.fname.value + ' ' + e.target.lname.value;
    const email = e.target.email.value;
    const phone_number = e.target.phone_no.value;
    const address = e.target.address.value;
    const house_number = e.target.house_no.value;
    const country = e.target.country.value;
    const district = e.target.district.value;
    const post_code = e.target.post_code.value;
    const passport = e.target.passport_no.value;
    const visa = e.target.visa_no.value;
    const residence_cost = residenceCost;
    const travel_cost = travelCost;
    const total_cost = finalCost;
    const pack = bookingItems[0];
    const userInfo = user.email;
    const result = {
      name,
      email,
      phone_number,
      address,
      house_number,
      country,
      district,
      post_code,
      passport,
      visa,
      residence_cost,
      travel_cost,
      total_cost,
      ...pack,
      userInfo,
    };
    const url = 'http://localhost:1010/userInfo';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Successfully bookes , best of luck for your journey');
        }
      });
    e.target.reset();
    dispatch(deleteFromCart());
    handleShow();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h5>Thanks for being with us</h5>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/success">
            {' '}
            <Button className="px-3 py-2" variant="primary">
              Submit
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      {bookingItems.length === 0 && (
        <div
          style={{
            padding: '150px 150px',
            textAlign: 'center',
            background: '#007acc',
          }}
        >
          <h1>
            <Link className="text-white" to="/booking">
              <u>Book</u>
            </Link>{' '}
            one of our best package to unloack this page
          </h1>
        </div>
      )}

      {/* __________________________________________ */}

      {bookingItems.map((booking) => (
        <div className="flight">
          {/* Banner_________ */}

          <div className="banner">
            <h2>Flight submission</h2>
          </div>

          {/* Body___________ */}

          <div className="title my-5">
            <h1>Leave us a message</h1>
            <h2>{}</h2>
          </div>
          <form className="info" onSubmit={handleOnSubmit}>
            <Row className="info__row">
              <Col md={12} lg={7} sm={12} xs={12}>
                <h2>Passenger information</h2>
                <h4>{}</h4>
                <div>
                  <Row className="form__row">
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="fname"
                        placeholder="First name"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last name"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="phone_no"
                        placeholder="Phone number"
                        required
                      />
                    </Col>
                    <Col md={12} lg={12} sm={12} xs={12}>
                      <input
                        type="text"
                        name="address"
                        placeholder="Street address"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="house_no"
                        placeholder="Apartment, Suite, House no"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="district"
                        placeholder="District"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="post_code"
                        placeholder="Post Code"
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="password"
                        name="passport_no"
                        placeholder="passport no."
                        required
                      />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12}>
                      <input
                        type="text"
                        name="visa_no"
                        placeholder="Visa no."
                        required
                      />
                    </Col>
                  </Row>
                </div>

                {/* Payment_______ */}

                <div className="payment">
                  <h3>Payment method</h3>
                  <h4>{}</h4>
                  <div className="payment__method">
                    <div className="method">
                      <input type="radio" name="radio" />
                      <p>Payment by card</p>
                    </div>
                    <div className="method">
                      <input type="radio" name="radio" />
                      <p>Paypal</p>
                    </div>
                    <div className="method">
                      <input type="radio" name="radio" />
                      <p>Payoneer</p>
                    </div>
                    <div className="method">
                      <input type="radio" name="radio" />
                      <p>Cash on delivery</p>
                    </div>
                  </div>
                  <div className="method agree">
                    <input type="radio" name="radio" />

                    <p>
                      I read and accept all{' '}
                      <span style={{ color: '#8b3eea' }}>
                        Terms and conditios
                      </span>
                    </p>
                  </div>
                  <div className="button ">
                    <input className="pay__btn" type="submit" value="Pay now" />
                  </div>
                </div>
              </Col>
              <Col md={12} lg={5} sm={12} xs={12} className="my-5">
                <TravelData booking={booking} />
                <Coupon />
                <Cost
                  residenceCost={residenceCost}
                  travelCost={travelCost}
                  finalCost={finalCost}
                />
                <div className="place__order">
                  <input type="submit" value="Place Order" />
                </div>
              </Col>
            </Row>
          </form>
        </div>
      ))}
    </>
  );
};

export default Flight;
