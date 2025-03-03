const API_KEY = import.meta.env.VITE_RATES_API_KEY;
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`;

export const getRates = () =>
  fetch(API_URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      return {
        baseCode: data.base_code,
        conversionRates: {
          EUR: data.conversion_rates.EUR,
          USD: data.conversion_rates.USD,
          RUB: data.conversion_rates.RUB,
        },
      };
    });
