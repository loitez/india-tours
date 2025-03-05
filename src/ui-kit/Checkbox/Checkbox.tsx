import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "../../types/checkbox.types.ts";

export const Checkbox = ({ children, id }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
