import { DefaultProps } from "./default.types.ts";

export interface CardProps extends DefaultProps {
  version?: "orange-card" | "white-card" | "green-card";
}
