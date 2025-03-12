import styles from "./Header.module.scss";
import { getRates, getRecalculatedRates } from "../../hooks";
import { useEffect, useMemo, useState } from "react";
import { CurrencyRates } from "../../types";
import logo from "~assets/HindiLogo.svg";
import {Wrapper} from "../Wrappers";
import { Navigation } from "../Navigation";
import {Link} from "react-router-dom";
import {Button} from "../../ui-kit";

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
      <Link to="/">
        <Wrapper wrapperType="image" className={styles.header__logo}>
          <img src={logo} alt="" />
        </Wrapper>
      </Link>
      <Navigation></Navigation>
      <div className={styles.header__btns}>
        <Link to="/application-form">
          <Button version="secondary-btn">Записаться на занятие</Button>
        </Link>
        <Link to="/login">
          Войти
        </Link>
      </div>
      {/*<div className={styles.header__currencies}>
        {Object.entries(recalculatedRates).map(([key, value]) => (
          <Currency key={key} rate={value} />
        ))}
      </div>*/}
    </div>
  );
};
