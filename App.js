// U32196076
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';

export const GlobalContext = React.createContext();

function App() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => setTours(data))
      .catch(error => console.error('Error fetching tour data:', error));
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <GlobalContext.Provider value={{ tours, removeTour }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Gallery} />
            {/* Additional routes can be added here */}
          </Switch>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
