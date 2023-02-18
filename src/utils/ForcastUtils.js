import { getError, formatMsg } from './CommonUtils';
import { request } from './RequestUtils';

const FORCAST_URL =
  'https://api.open-meteo.com/v1/forecast?latitude={0}&longitude={1}&timezone={2}&daily=sunrise,sunset&current_weather=true';

export const CURR_WEATHER = 'current_weather';
export const TEMPERATURE = 'temperature';
export const WINDSPEED = 'windspeed';
export const WIND_DIRECTION = 'winddirection';
export const DAILY = 'daily';
export const SUNRISE = 'sunrise';
export const SUNSET = 'sunset';

export const fetchForcast = (locationInfo, sucessCallBack) => {
  const url = formatMsg(
    FORCAST_URL,
    locationInfo.latitude,
    locationInfo.longitude,
    locationInfo.timezone
  );

  request(url)
    .then((res) => {
      // console.log(res);
      const result = res.data;
      // console.log(result[CURR_WEATHER][TEMPERATURE]);
      if (result) {
        const forcast = {
          TEMPERATURE: result[CURR_WEATHER][TEMPERATURE],
          WINDSPEED: result[CURR_WEATHER][WINDSPEED],
          WIND_DIRECTION: result[CURR_WEATHER][WIND_DIRECTION],
          SUNRISE: result[DAILY][SUNRISE][0],
          SUNSET: result[DAILY][SUNSET][0],
        };
        console.log(forcast);
        sucessCallBack(forcast);
      } else {
        sucessCallBack({});
      }
    })
    .catch((error) => console.error(error));
};

export default fetchForcast;
