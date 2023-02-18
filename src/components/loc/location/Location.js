import EnterLocation from '../enter_location/EnterLocation';
import LatLong from '../lat_long/LatLong';
import { useState } from 'react';
import './Location.css';
import getLatLong from '../../../utils/LocationUtils';

export const Location = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const setLatLong = (lat, long) => {
    setLatitude(lat);
    setLongitude(long);
  };

  const searchHandler = (locArr) => {
    getLatLong(locArr, setLatLong);
  };

  return (
    <div className="location-container">
      <EnterLocation onSearch={searchHandler} />
      <LatLong latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default Location;
