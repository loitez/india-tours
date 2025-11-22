import { DefaultProps } from "./default.types.ts";

export interface CheckboxProps extends DefaultProps {
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}
