import './App.css';
import { useState } from 'react';
import ForcastGrid from './components/forcast/forcast_grid/ForcastGrid';
import Header from './components/header/Header';
import Location from './components/loc/location/Location';

function App() {
  const [locationInfo, setLocationInfo] = useState({});

  const setLocInfo = (lat, long, tz) => {
    const loc = {
      latitude: lat,
      longitude: long,
      timezone: tz,
    };
    setLocationInfo(loc);
  };

  return (
    <div className="App">
      <Header />
      <Location onSearch={setLocInfo} locationInfo={locationInfo} />
      <ForcastGrid locationInfo={locationInfo} />
    </div>
  );
}

export default App;
