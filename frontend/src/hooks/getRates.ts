// const API_KEY = import.meta.env.VITE_RATES_API_KEY;
import { CurrencyRates } from "../types";

const API_URL = `https://www.cbr-xml-daily.ru/latest.js`;

export const getRates = (): Promise<CurrencyRates> =>
	fetch(API_URL, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			return {
				INR: data.rates.INR,
				EUR: data.rates.EUR,
				USD: data.rates.USD,
				RUB: 1,
			};
		});
