import { IIssue } from "../../../firebase/issues/types";

// from the issue form
export type IIssueCreateForm = Pick<
  IIssue,
  "title" | "description" | "priority" | "assigned_id"
>;

export type IIssueUpdateForm = Pick<
  IIssue,
  "title" | "description" | "priority" | "assigned_id"
>;
