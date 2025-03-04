import { DefaultProps } from "../../types/default.types.ts";
import styles from "./Button.module.scss";
import { ButtonProps } from "../../types/button.types.ts";

export const Button = ({ children, version = "default" }: ButtonProps) => {
  const classNames = [version, styles.button].filter(Boolean).join(" ");

  return <button className={classNames}>{children}</button>;
};
