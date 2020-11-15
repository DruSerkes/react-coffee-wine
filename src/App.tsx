import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BtnLink } from './components/BtnLink';
import { locationFail, locationSuccess } from './helpers/geoCallbacks'


function App() {
  const [coords, setCoords] = useState(null)
  const coffeeLink = `https://maps.google.com/?ll=${latitude},${longitude}&q=coffee&z=15`;
  const wineLink = `https://maps.google.com/?ll=${latitude},${longitude}&q=wine+bar&z=15`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition();
  }, [])

  return (
    <div className="App">
      <h1>Would you like...</h1>
      <BtnLink text="Coffee" color="TODO" link={coffeeLink} />
      <p>or</p>
      <BtnLink text="Wine" color="TODO" link={wineLink} />
    </div>
  );
}

export default App;
