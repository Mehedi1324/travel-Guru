import React from 'react';
import Services from '../About Us/Services';
import Banner from './Banner';
import News from './News';
import Partners from './Partners';
import Promo from './Promo';
import Residence from './Residence';
import TopDestinations from './TopDestinations';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Promo />
      <TopDestinations />
      <Residence />
      <News />
      <Partners />
    </div>
  );
};

export default Home;
