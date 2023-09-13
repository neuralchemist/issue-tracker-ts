import { IIssue } from "@entities/issue/types";

export type IIssueForm = Pick<
  IIssue,
  "title" | "description" | "priority" | "assigned_id"
>;

interface IOption {
  label: string;
  value: string;
}

export type IOptions = IOption[];
