import { DefaultProps } from "./default.types.ts";

export interface ButtonProps extends DefaultProps {
  version?: "primary-btn" | "secondary-btn" | "outlined-btn" | "default-btn";
}
