import '../HeaderFooter/Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import Login from '../SIgn In/Login';
const Header = () => {
  const { user, handleLogout } = useFirebase();
  const [navbar, setNavbar] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', stickyNav);

  return (
    <div className="w-100 header">
      {/*_______________ Navbar_________________ */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav__logo">
          <Link to="/">
            <img src="./image/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="hdr__link">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking">Flight</Link>
          {user.email ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <Login />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
