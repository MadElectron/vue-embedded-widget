export const currency = (value) => {
  return new Intl.NumberFormat("ru-RU").format(value);
};
