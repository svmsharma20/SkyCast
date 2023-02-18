import { SunDim, SunHorizon, Thermometer, Wind } from 'phosphor-react';
import ForcastItem from '../forcast_item/ForcastItem';
import './ForcastGrid.css';

export const ForcastGrid = () => {
  const datapoint = [
    {
      icon: Thermometer,
      value: 22,
      parameter: 'Temperature',
    },
    {
      icon: Wind,
      value: 30,
      parameter: 'Wind',
    },
    {
      icon: SunDim,
      value: 22,
      parameter: 'Sunrise',
    },
    {
      icon: SunHorizon,
      value: 30,
      parameter: 'Sunset',
    },
  ];

  return (
    <div className="forcast-container">
      {datapoint.map((data) => {
        return <ForcastItem data={data} />;
      })}
    </div>
  );
};

export default ForcastGrid;
