export type IFilterValue =
  | "all"
  | "assigned"
  | "created"
  | "high"
  | "medium"
  | "low";

export interface IFilterOption {
  label: string;
  value: IFilterValue;
}
