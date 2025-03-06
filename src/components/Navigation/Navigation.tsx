import {Link, NavLink} from "react-router-dom";
import styles from "./Navigation.module.scss";
import { Button } from "../../ui-kit";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/courses">Курсы</NavLink>
      <NavLink to="/blog">Блог</NavLink>
      <NavLink to="/about">Обо мне</NavLink>
        <Link to="/application-form">
            <Button version="secondary-btn">Записаться на занятие</Button>
        </Link>

    </nav>
  );
};
