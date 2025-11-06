export const currency = (value, options = {}) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    ...options,
  }).format(value);
};
