import { CurrencyRates } from "../types";

export const getRecalculatedRates = (rates: CurrencyRates) => {
	const { INR, EUR, USD, RUB } = rates;

	if (INR === 0) {
		throw new Error("Курс рупии к рублю не может быть равен нулю");
	}

	const INR_EUR = Number((INR / EUR).toFixed(2)); // Курс евро к рупии
	const INR_USD = Number((INR / USD).toFixed(2)); // Курс доллара к рупии
	const INR_RUB = Number((INR / RUB).toFixed(2));

	return {
		INR_EUR,
		INR_USD,
		INR_RUB,
	};
};
