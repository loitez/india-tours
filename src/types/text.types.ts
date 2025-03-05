import { DefaultProps } from "./default.types.ts";

export interface TextTypesProps extends DefaultProps {
  size?:
    | "text-xs"
    | "text-s"
    | "text-m"
    | "text-l"
    | "text-h1"
    | "text-h2"
    | "text-h3"
    | "text-h4"
    | "text-h5"
    | "text-h6";
  weight?: "font-light" | "font-normal" | "font-bold";
  layout?: "text-block" | "text-inline";
  style?: "text-italic";
  align?: "text-center";
}
