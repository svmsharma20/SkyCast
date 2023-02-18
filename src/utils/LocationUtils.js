import { getError, formatMsg } from './CommonUtils';
import { request } from './RequestUtils';

const LOCATION_URL =
  'https://geocoding-api.open-meteo.com/v1/search?name={0}&count={1}';

const count = 10;

export const getLocArr = (location) => {
  let locArr = location.split(',');
  locArr = locArr
    .map((item) => {
      item = item.trim();
      return item;
    })
    .filter((item) => item.length !== 0);
  if (locArr.length === 0) {
    throw getError('Invalid city/country name');
  }
  return locArr;
};

export const getLatLong = (locArr) => {
  const url = formatMsg(LOCATION_URL, locArr[0], count);
  // console.log(url);
  request(url);
};

export default getLatLong;
