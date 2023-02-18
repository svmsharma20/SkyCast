import './LatLong.css';

const LAT = 'Latitude: ';
const LONG = 'Longitude: ';

export const LatLong = (props) => {
  return (
    <div className="latlong-container">
      <div className="latlong-item">
        <label htmlFor="lat">{LAT}</label>
        <label htmlFor="latval">{props.latitude}</label>
      </div>
      <div className="latlong-item">
        <label htmlFor="long">{LONG}</label>
        <label htmlFor="longval">{props.longitude}</label>
      </div>
    </div>
  );
};

export default LatLong;
