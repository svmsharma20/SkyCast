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

export const getLatLong = (locArr, sucessCallBack) => {
  const url = formatMsg(LOCATION_URL, locArr[0], count);

  request(url)
    .then((res) => {
      const result = res.data.results;
      if (result) {
        const filteredRes =
          locArr.length === 1
            ? result
            : result.filter((res) => res.country === locArr[1]);

        if (filteredRes.length !== 0) {
          sucessCallBack(filteredRes[0].latitude, filteredRes[0].longitude);
        }
      } else {
        sucessCallBack('', '');
      }
    })
    .catch((error) => console.error(error));
};

export default getLatLong;
