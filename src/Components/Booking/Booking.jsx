import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Stylings/Booking.scss';
import { addBookings } from '../../Actions/bookingAction';
import { deleteFromCart } from '../../Actions/bookingAction';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Booking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [adult, setAdult] = useState('');
  const [sitType, setSitType] = useState('');
  const [children, setChildren] = useState('');
  const [bookPackage, setBookPackage] = useState('');
  const [moduleBody, setModuleBody] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bookingReducer);
  const cartInfo = state.bookedItems;
  const handleFlightBooking = (e) => {
    e.preventDefault();
    if (cartInfo.length > 0) {
      setModuleBody(
        'You have already selected one of our packages, reset the data to update/rebook any package'
      );
    } else {
      dispatch(
        addBookings(from, to, date, time, adult, sitType, children, bookPackage)
      );
      setModuleBody(
        'Package selected successfully, one step ahead to finish the process'
      );
    }
    handleShow();
    setFrom('');
    setTo('');
    setDate('');
    setTime('');
    setAdult('');
    setSitType('');
    setChildren('');
    setBookPackage('');
  };
  const handleResetData = () => {
    dispatch(deleteFromCart());
    setModuleBody('Data Cleared Successfully');
    handleShow();
  };

  // Bootstrap Modal Setup______________

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="booking">
      {/*____________ Bootstrap Modal____________ */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <h5>{moduleBody}</h5>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="px-3 py-2"
            variant="secondary"
            onClick={handleClose}
          >
            Close & Update
          </Button>
          <Link to="/flight">
            {' '}
            <Button className="px-3 py-2" variant="primary">
              Find Flight
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      {/* __________________________________________ */}

      <div className="booking__ticket">
        <h1
          style={{
            color: '#11e811',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: '40px',
            fontFamily: 'cursive',
            borderBottom: '5px solid #517617',
            paddingBottom: '8px',
          }}
        >
          Book Your Favourite Package
        </h1>
        <div className="booking__form">
          <form>
            <Row>
              <Col md={12} lg={12} sm={12} xs={12} className="col">
                <h6>Flying From : </h6>
                <select
                  className="w-100"
                  value={from}
                  required
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="bangledesh">Bangladesh</option>
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="nepal">Nepal</option>
                  <option value="china">China</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="usa">USA</option>
                </select>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12} className="col">
                <h6>Flying To : </h6>
                <select
                  className="w-100"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option>Select</option>
                  <option>Bangladesh</option>
                  <option>China</option>
                  <option>Dubai</option>
                  <option>Turkey</option>
                  <option>London</option>
                  <option>Darjeeling</option>
                  <option>Malysia</option>
                  <option>Thiland</option>
                  <option>Maldives</option>
                </select>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col">
                <h6>Departure Date : </h6>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col">
                <div className="dep ml">
                  <h6>Departure Time : </h6>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option>Select</option>
                    <option>5.00am</option>
                    <option>7.00am</option>
                    <option>11.30am</option>
                    <option>2.00pm</option>
                    <option>5.30pm</option>
                    <option>11.00pm</option>
                  </select>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col">
                <div className="dep">
                  <h6>Adults : </h6>
                  <select
                    value={adult}
                    onChange={(e) => setAdult(e.target.value)}
                  >
                    <option>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col">
                <div className="dep ml">
                  <h6>
                    Children{' '}
                    <span style={{ fontSize: '14px' }}>(under 10)</span> :{' '}
                  </h6>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  >
                    <option>Select</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>more..</option>
                  </select>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col">
                <div className="dep">
                  <h6> Class : </h6>
                  <select
                    value={sitType}
                    onChange={(e) => setSitType(e.target.value)}
                  >
                    <option>Select</option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6} className="col ">
                <div className="dep ml">
                  <h6>
                    Package <span style={{ fontSize: '14px' }}>(days) </span>:{' '}
                  </h6>
                  <select
                    value={bookPackage}
                    onChange={(e) => setBookPackage(e.target.value)}
                  >
                    <option>Select</option>
                    <option>15</option>
                    <option>18</option>
                    <option>21</option>
                    <option>30</option>
                    <option>40</option>
                  </select>
                </div>
              </Col>
              <input
                className="w-100 mt-4 book__btn"
                type="submit"
                value="Find Flight"
                onClick={handleFlightBooking}
              />
            </Row>
          </form>
          <button className="btn" onClick={handleResetData}>
            Reset / Update your data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
