import React from 'react';
import { FaArrowLeft, FaArrowRight, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';

const LoginPage = () => {
  const {
    handleSignIn,
    emailRef,
    passwordRef,
    handleResetPassword,
    error,
    handleFacebookSignIn,
    handleGoogleSignIn,
  } = useFirebase();
  return (
    <div>
      <div className="banner">
        <h2>Login</h2>
      </div>
      <div className="register__form">
        <div className="inside__form">
          <div className="regitel">
            <h3 style={{ color: '#818090' }}>Login your account</h3>
            <h3>Logged in to stay in touch</h3>
          </div>
          <form onSubmit={handleSignIn}>
            <p className="inp__title">
              Email <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="email" required ref={emailRef} />
            <br />

            <p className="inp__title">
              Password <span style={{ color: 'red' }}>*</span>
            </p>

            <input type="password" ref={passwordRef} required />

            <div className="d-flex">
              <input className="regi__btn" type="submit" value="Log In" />
            </div>
            <button
              onClick={handleResetPassword}
              style={{ float: 'right' }}
              className="btn"
            >
              Forgot Your Password ?
            </button>
          </form>
          <div className="social__auth text-center">
            <div className="s__btn mt-5">
              <button onClick={handleGoogleSignIn} className="bg-white">
                Sign In With Google | <FcGoogle />
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="bg-primary text-white"
              >
                Sign In With Facebook | <FaFacebookF />
              </button>
            </div>
          </div>
          <Link to="/register">
            {' '}
            <button className="btn my-3">
              If you don't have any account, please register first{' '}
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
