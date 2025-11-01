export const currency = (value, options = {}) => {
  return new Intl.NumberFormat("ru-RU", options).format(value);
};
