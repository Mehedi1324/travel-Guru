import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Resort from './Resort';
const Residence = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('../../../public/residence.json')
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className="residence">
      <div className="title">
        <h1>Living Places</h1>
        <h2>{}</h2>
      </div>
      <div className="place__booking">
        <div className="book__place">
          {places.map((place) => (
            <Resort key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Residence;
