import axios from 'axios';

export const request = async (url) => {
  const response = await axios.get(url);
  return response;
};

export { request as default };
