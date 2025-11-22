export type SortPanelProps<T extends { title: string }> = {
  items: T[];
  onSortClick: (sortedItems: T[]) => void;
};
