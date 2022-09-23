import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Resort = ({ place }) => {
  const { image, title, price, rating } = place;

  return (
    <div className="resort">
      <div className="card__img">
        <img src={image} alt="" />
      </div>

      <div className="info">
        <h3>{title}</h3>
        <span style={{ color: '#8b3eea', fontSize: '13px' }}>
          {rating}/5 Excellent
        </span>
        <div className="price">
          <p> Luxariour places with fully modern facilities </p>
        </div>
      </div>
    </div>
  );
};

export default Resort;
