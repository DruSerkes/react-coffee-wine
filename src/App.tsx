import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BtnLink } from './components/BtnLink';
import { locationFail } from './helpers/geoCallbacks'


function App() {
  const [coords, setCoords] = useState<null | object>(null)
  const coffeeLink = `https://maps.google.com/?ll=${coords.latitude},${coords.longitude}&q=coffee&z=15`;
  const wineLink = `https://maps.google.com/?ll=${coords.latitude},${coords.longitude}&q=wine+bar&z=15`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
    }, locationFail);
  }, []);

  return (
    <div className="App">
      <h1>Would you like...</h1>
      <BtnLink text="Coffee" color="#6F4E37" link={coffeeLink} />
      <p>or</p>
      <BtnLink text="Wine" color="#722F37" link={wineLink} />
    </div>
  );
}

export default App;
