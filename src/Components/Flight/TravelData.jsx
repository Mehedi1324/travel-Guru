import React from 'react';

const TravelData = (props) => {
  const { date, time, to, adult, bookPackage } = props.booking;

  return (
    <div className="form__row">
      <h5>Travel Data</h5>
      <div className="total__price">
        <p className="text-danger ">Date: {date}</p>
        <p className="text-danger ">Time: {time}</p>
      </div>
      <div className="total__price">
        <p>Place :</p>
        <p>{to}</p>
      </div>
      <div className="total__price">
        <p>Booked sits (only adults):</p>
        <p>{adult} </p>
      </div>
      <div className="total__price">
        <p>Package :</p>
        <p>{bookPackage} days</p>
      </div>
    </div>
  );
};

export default TravelData;
