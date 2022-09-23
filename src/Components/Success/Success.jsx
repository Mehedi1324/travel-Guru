import React from 'react';
import Lottie from 'react-lottie';
import data from '../../thanks.json';
const Success = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  return <Lottie options={defaultOption} />;
};

export default Success;
