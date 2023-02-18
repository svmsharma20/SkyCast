import EnterLocation from '../enter_location/EnterLocation';
import LatLong from '../lat_long/LatLong';
import { useState } from 'react';
import './Location.css';
import getLatLong from '../../../utils/LocationUtils';

export const Location = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const searchHandler = (locArr) => {
    const positionInfo = getLatLong(locArr);
  };

  return (
    <div className="location-container">
      <EnterLocation onSearch={searchHandler} />
      <LatLong latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default Location;
