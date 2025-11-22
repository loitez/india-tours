import styles from "./Checkbox.module.scss";
import { CheckboxProps } from "../../types";
import { Field, useField } from "formik";
import { noop } from "../../utils/noop.ts";

export const Checkbox = ({ children, id, onChange = noop }: CheckboxProps) => {
  const [field] = useField({
    type: "checkbox",
    name: id,
  });

  const handleChange = (e) => {
    field.onChange(e);
    onChange(e);
  };

  return (
    <div className={styles.checkbox}>
      <Field
        type="checkbox"
        id={id}
        {...field}
        checked={field.value}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
