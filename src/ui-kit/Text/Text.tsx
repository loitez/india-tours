import { TextTypesProps } from "../../types/text.types.ts";
import styles from "./Text.module.scss";

export const Text = ({
  size = "text-s",
  weight = "font-normal",
  layout = "text-inline",
  align,
  style,
  children,
    className,
}: TextTypesProps) => {
  const classNames = [size, weight, layout, align, style, className, styles.text]
    .filter(Boolean)
    .join(" ");

  return <span className={classNames}>{children}</span>;
};
