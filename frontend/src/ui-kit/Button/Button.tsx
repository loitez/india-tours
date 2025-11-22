import styles from "./Button.module.scss";
import { ButtonProps } from "../../types";

export const Button = ({ children, version = "default-btn", className, type, title, onClick }: ButtonProps) => {
  const classNames = [version, className, styles.button].filter(Boolean).join(" ");

  return <button className={classNames} type={type} title={title} onClick={onClick}>{children}</button>;
};
