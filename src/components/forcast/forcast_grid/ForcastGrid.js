import { SunDim, SunHorizon, Thermometer, Wind } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { fetchForcast } from '../../../utils/ForcastUtils';
import ForcastItem from '../forcast_item/ForcastItem';
import './ForcastGrid.css';

const extractTimeInfo = (datetime) => {
  let dt = new Date(datetime);
  return dt.getHours() + ':' + dt.getMinutes();
};

export const ForcastGrid = (props) => {
  const [datapoints, setDataPoints] = useState([]);

  const updateDataPoints = (datapoints) => {
    const dpt = [
      {
        id: 1,
        icon: Thermometer,
        value: datapoints['TEMPERATURE'],
        parameter: 'Temperature',
      },
      {
        id: 2,
        icon: Wind,
        value: datapoints['WINDSPEED'],
        parameter: 'Wind',
      },
      {
        id: 3,
        icon: SunDim,
        value: extractTimeInfo(datapoints['SUNRISE']),
        parameter: 'Sunrise',
      },
      {
        id: 4,
        icon: SunHorizon,
        value: extractTimeInfo(datapoints['SUNSET']),
        parameter: 'Sunset',
      },
    ];

    setDataPoints(dpt);
  };

  useEffect(() => {
    fetchForcast(props.locationInfo, updateDataPoints);
  }, [props.locationInfo, setDataPoints]);

  return (
    <div className="forcast-container">
      {datapoints.map((data) => {
        return <ForcastItem data={data} key={data.id} />;
      })}
    </div>
  );
};

export default ForcastGrid;
