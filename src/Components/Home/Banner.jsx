import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylings/Home.scss';
const Banner = () => {
  return (
    <div className="home__bnr">
      <h3>Let's</h3>
      <h1>Explore the world together</h1>
      <h3>Turn the moments into memories with us.</h3>
      <Link to="booking">
        <input type="submit" value="Book A Place Right Now" />
      </Link>{' '}
    </div>
  );
};

export default Banner;
