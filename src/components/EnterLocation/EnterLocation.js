import React from 'react';
import { useRef } from 'react';
import { getLatLong } from '../../utils/LocationUtils';
import './EnterLocation.css';

const url = `https://geocoding-api.open-meteo.com/v1/search?name={0}&count=1`;

function EnterLocation() {
  const enteredLocation = useRef('');
  const searchHandler = () => {
    const locationName = enteredLocation.current.value.trim();
    // console.log(url.replace('{0}', locationName));
    getLatLong(locationName);
  };

  return (
    <div>
      <div className="location-outline">
        <div className="location-wrapper">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter the city, country name here"
              ref={enteredLocation}
            />
          </div>
          <button className="search-button" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterLocation;
