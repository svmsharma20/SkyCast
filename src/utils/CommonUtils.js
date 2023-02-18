export const formatMsg = (str, ...values) => {
  for (let i = 0; i < values.length; i++) {
    const id = '{' + i + '}';
    str = str.replace(id, values[i]);
  }
  return str;
};

export const getError = (message) => {
  return new Error(message);
};

export { getError as default };
