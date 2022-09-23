import React from 'react';
import Lottie from 'react-lottie';
import data from '../../error1.json';
const Error = () => {
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: data,
  };
  const style = {
    height: '80px',
    background: '#2647a3',
  };
  return (
    <div>
      <div style={style}></div>
      <Lottie
        style={{ marginTop: '-15%', marginBottom: '-15%' }}
        options={defaultOption}
      />
      ;
    </div>
  );
};

export default Error;
