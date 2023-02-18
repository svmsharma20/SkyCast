import axios from 'axios';

export const request = (url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { request as default };
