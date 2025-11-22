import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/courses">Курсы</NavLink>
      <NavLink to="/blog">Блог</NavLink>
      <NavLink to="/about">Обо мне</NavLink>
    </nav>
  );
};
