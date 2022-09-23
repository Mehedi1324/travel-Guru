import React from 'react';
import Slider from 'react-slick';

const Partners = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,

    autoplaySpeed: 4000,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="partners">
      <div className="title">
        <h1>Our Partners</h1>
        <h2></h2>
      </div>
      <div>
        <Slider {...settings}>
          <div className="partner__img">
            <img src="./image/1.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/2.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/3.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/4.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/5.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/6.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/7.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/8.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/4.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/6.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/8.png" alt="" />
          </div>
          <div className="partner__img">
            <img src="./image/5.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
