export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
}
