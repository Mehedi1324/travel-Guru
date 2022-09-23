import React from 'react';

const Cost = ({ residenceCost, travelCost, finalCost }) => {
  return (
    <div className="form__row">
      <h5>Booking Amounts</h5>
      <div className="total__cost">
        <div className="total__price">
          <p>Resedence : </p>
          <p> $ {residenceCost}</p>
        </div>
        <div className="total__price">
          <p>Flight : </p>
          <p> $ {travelCost}</p>
        </div>

        <div className="total__price total">
          <h6>Total Cost : </h6>
          <h6> $ {finalCost}</h6>
        </div>
      </div>
    </div>
  );
};

export default Cost;
