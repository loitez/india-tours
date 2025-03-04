import styles from "./Header.module.scss";
import { Currency } from "../../ui-kit";
import { getRates, getRecalculatedRates } from "../../hooks";
import { useEffect, useMemo, useState } from "react";
import { CurrencyRates } from "../../types";
import logo from "~assets/HindiLogo.svg";
import { ImageWrapper } from "../Wrappers";
import { Navigation } from "../Navigation";

const MOCK_RATES = {
  INR: 0.978502,
  EUR: 0.0107697,
  USD: 0.011204519,
  RUB: 1,
};

export const Header = () => {
  const [rates, setRates] = useState<CurrencyRates>({});

  useEffect(() => {
    //getRates().then(_ => setRates(_));
    setRates(MOCK_RATES);
  }, []);

  const recalculatedRates = useMemo(() => {
    return getRecalculatedRates(rates);
  }, [rates]);

  return (
    <div className={styles.header}>
      <ImageWrapper>
        <img src={logo} alt="" />
      </ImageWrapper>
      <Navigation></Navigation>
      {/*<div className={styles.header__currencies}>
        {Object.entries(recalculatedRates).map(([key, value]) => (
          <Currency key={key} rate={value} />
        ))}
      </div>*/}
    </div>
  );
};
