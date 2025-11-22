import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "../../types";
import {Field, useField} from "formik";

export const Checkbox = ({ children, id, ...props }: CheckboxProps) => {
    const [field] = useField({ ...props, type: 'checkbox' });

    return (
    <div className={styles.checkbox}>
      <Field type="checkbox" id={id} {...field} {...props} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
