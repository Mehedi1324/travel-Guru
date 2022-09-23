import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import '../SIgn In/Login.scss';
const Login = () => {
  const {
    handleSignIn,
    emailRef,
    passwordRef,
    handleResetPassword,
    error,
    handleFacebookSignIn,
    handleGoogleSignIn,
  } = useFirebase();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <p onClick={handleShow} className="loginBtn">
          {' '}
          <button>
            Sign In <FaSignInAlt />{' '}
          </button>
        </p>
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header closeButton className="mHeader">
            <Modal.Title>
              {' '}
              Sign In <FaSignInAlt />{' '}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="login__form">
              <Col md={7} lg={7} sm={7} xs={7}>
                <form onSubmit={handleSignIn}>
                  <h4>REGISTERED CUSTOMERS</h4>
                  <p>
                    Email <span style={{ color: 'red' }}>*</span>
                  </p>

                  <input ref={emailRef} type="email" />
                  <br />
                  <p>
                    Password <span style={{ color: 'red' }}>*</span>
                  </p>

                  <input ref={passwordRef} type="password" />
                  <br />
                  <div className="d-flex">
                    <input type="submit" value="Login" />
                    <p onClick={handleResetPassword}>Forgot Your Password ?</p>
                  </div>
                </form>
                <div className="mb-4">
                  <span style={{ color: 'red' }}>{error}</span>
                </div>
                <Link to="/register">
                  <button className="btn">Create New Account?</button>
                </Link>
              </Col>

              {/*Sign in with social media account */}

              <Col md={5} lg={5} sm={5} xs={5}>
                <h4>OR SIGN IN WITH</h4>
                <button onClick={handleFacebookSignIn} className=" social s1">
                  <FaFacebookF className="sb" />
                  Sign In With Facebook
                </button>
                <button onClick={handleGoogleSignIn} className=" social s2">
                  <FaGoogle className="sb" />
                  Sign In With Google
                </button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Login;
