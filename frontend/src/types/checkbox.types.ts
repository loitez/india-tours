import { DefaultProps } from "./default.types.ts";
import { FieldProps } from "./input.types.ts";

export interface CheckboxProps extends DefaultProps, FieldProps {
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}
