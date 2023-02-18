import { getError, formatMsg } from './CommonUtils';

const LOCATION_URL =
  'https://geocoding-api.open-meteo.com/v1/search?name={0}&count={1}';

const count = 10;

export const getLatLong = (locationName) => {
  let locArr = locationName.split(',');
  locArr = locArr
    .map((item) => {
      item = item.trim();
      return item;
    })
    .filter((item) => item.length !== 0);
  if (locArr.length === 0) {
    throw getError('Invalid city/country name');
  }
  console.log(formatMsg(LOCATION_URL, locArr[0], count));
};

export default getLatLong;
