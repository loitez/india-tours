import styles from "./Button.module.scss";
import { ButtonProps } from "../../types/button.types.ts";

export const Button = ({ children, version = "default-btn", className }: ButtonProps) => {
  const classNames = [version, className, styles.button].filter(Boolean).join(" ");

  return <button className={classNames}>{children}</button>;
};
