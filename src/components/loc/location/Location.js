import EnterLocation from '../enter_location/EnterLocation';
import LatLong from '../lat_long/LatLong';
import { useState } from 'react';
import './Location.css';
import getLatLong from '../../../utils/LocationUtils';

export const Location = (props) => {
  const searchHandler = (locArr) => {
    getLatLong(locArr, props.onSearch);
  };

  return (
    <div className="location-container">
      <EnterLocation onSearch={searchHandler} />
      <LatLong locationInfo={props.locationInfo} />
    </div>
  );
};

export default Location;
