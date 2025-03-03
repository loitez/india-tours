import styles from "./Header.module.scss";
import { Currency } from "../../ui-kit";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>Logo</div>
      <div className={styles.header__currencies}>
        <Currency />
      </div>
    </>
  );
};
