import React, { useContext } from 'react';
import { GlobalContext } from '../App';

function Gallery() {
  const { tours, removeTour } = useContext(GlobalContext);

  return (
    <div>
      {tours.length === 0 ? (
        <p>No tours available</p>
      ) : (
        tours.map(tour => (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.info}</p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Gallery;
