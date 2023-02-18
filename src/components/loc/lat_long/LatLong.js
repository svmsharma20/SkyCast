import './LatLong.css';

const LAT = 'Latitude: ';
const LONG = 'Longitude: ';
const TZ = 'Timezone: ';

export const LatLong = (props) => {
  return (
    <div className="latlong-container">
      <div className="latlong-item">
        <label htmlFor="lat">{LAT}</label>
        <label htmlFor="latval">{props.locationInfo.latitude}</label>
      </div>
      <div className="latlong-item">
        <label htmlFor="long">{LONG}</label>
        <label htmlFor="longval">{props.locationInfo.longitude}</label>
      </div>
      <div className="latlong-item">
        <label htmlFor="long">{TZ}</label>
        <label htmlFor="longval">{props.locationInfo.timezone}</label>
      </div>
    </div>
  );
};

export default LatLong;
