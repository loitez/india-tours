import { getRates } from "../../hooks";
import { useMemo, useState } from "react";

type CurrencyRates = {
  [currency: string]: number;
};

interface Currencies {
  baseCode: string;
  conversionRates: CurrencyRates;
}

export const Currency = () => {
  // const [currencies, setCurrencies] = useState<Currencies>({});

  const rates = getRates();

  return <></>;
};
