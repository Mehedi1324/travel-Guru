import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import '../SIgn In/Register.scss';
const RegisterPage = () => {
  const {
    fNameRef,
    lNameRef,
    emailRef,
    passwordRef,
    repasswordRef,
    handleSignUp,
  } = useFirebase();
  return (
    <div className="register__page">
      <div className="banner">
        <h2>Register</h2>
      </div>
      <div className="register__form">
        <div className="inside__form">
          <div className="regitel">
            <h3 style={{ color: '#818090' }}>Register Account</h3>
            <h3>Register Your Account</h3>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="name__inp">
              <div>
                <p className="inp__title">
                  First Name <span style={{ color: 'red' }}>*</span>
                </p>
                <input type="text" ref={fNameRef} required />
              </div>
              <div>
                <p className="inp__title">
                  Last Name <span style={{ color: 'red' }}>*</span>
                </p>
                <input type="text" ref={lNameRef} required />
              </div>
            </div>
            <p className="inp__title">
              Email <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="email" required ref={emailRef} />
            <br />

            <p className="inp__title">
              Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={passwordRef} required />
            <p className="inp__title">
              Confirm Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={repasswordRef} required />
            <br />

            <div className="d-flex">
              <input
                className="regi__btn"
                type="submit"
                value="Create an Account"
              />
            </div>
          </form>
          <div className="social__auth text-center">
            <h4 className="my-3">______ OR _____</h4>
            <div className="s__btn">
              <button className="bg-white">
                Sign Up With Google | <FcGoogle />
              </button>
              <button className="bg-primary text-white">
                Sign Up With Facebook | <FaFacebookF />
              </button>
            </div>
          </div>
          <Link to="/login">
            {' '}
            <button className="btn my-3">
              <FaArrowLeft /> Back to login{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
