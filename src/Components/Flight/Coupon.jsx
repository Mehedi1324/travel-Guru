import React from 'react';

const Coupon = () => {
  return (
    <div className="form__row">
      <h5>Coupon Code</h5>
      <input type="text" value="This feature is not available now" />
      <div className="btn">
        <input type="submit" value="Apply Voucher" />
      </div>
    </div>
  );
};

export default Coupon;
