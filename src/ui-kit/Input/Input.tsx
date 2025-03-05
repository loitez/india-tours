import styles from "./Input.module.scss";
import { InputProps } from "../../types/input.types.ts";
import { inputsMap } from "../../constants/inputs.ts";

export const Input = ({ placeholder, name }: InputProps) => {
  return (
    <input
      className={styles.input}
      type={inputsMap[name]}
      placeholder={placeholder}
    />
  );
};
