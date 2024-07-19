import React, { useState, useEffect } from 'react';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tour data from the API
    fetch('https://course-api.com/react-tours-project')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, readMore: !tour.readMore } : tour
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tours.length === 0 ? (
        <p>No tours available</p>
      ) : (
        tours.map((tour) => (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
            <p>
              {tour.readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
              <button onClick={() => toggleReadMore(tour.id)}>
                {tour.readMore ? 'Show Less' : 'Read More'}
              </button>
            </p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Gallery;
