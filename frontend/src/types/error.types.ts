export type errorTypes = "404" | "500" | "default";

export interface ErrorProps {
  error?: errorTypes;
  showToMainButton?: boolean;
}
