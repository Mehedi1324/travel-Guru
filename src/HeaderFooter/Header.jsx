import '../HeaderFooter/Header.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import Login from '../SIgn In/Login';
const Header = () => {
  const { user, handleLogout } = useFirebase();
  const [navbar, setNavbar] = useState(false);
  const [toggoleActive, setToggleActive] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);
  const handleToggle = () => {
    setToggleActive(!toggoleActive);
  };
  return (
    <div className="w-100 header">
      {/*_______________ Navbar_________________ */}
      <nav className={navbar ? 'navbar nav__active ' : 'navbar'}>
        <div className="nav__logo">
          <NavLink onClick={() => setToggleActive(false)} to="/">
            <img src="./image/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div onClick={handleToggle} className="toggle__btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div
          className={toggoleActive ? 'hdr__link toggle__active' : 'hdr__link'}
        >
          <span className="link__item">
            <NavLink
              onClick={() => setToggleActive(!toggoleActive)}
              to="/about"
            >
              About
            </NavLink>
          </span>
          <span className="link__item">
            <NavLink
              onClick={() => setToggleActive(!toggoleActive)}
              to="/contact"
            >
              Contact
            </NavLink>
          </span>
          <span className="link__item">
            <NavLink
              onClick={() => setToggleActive(!toggoleActive)}
              to="/booking"
            >
              Flight
            </NavLink>
          </span>
          <span className="link__item">
            {user.email ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <Login />
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
