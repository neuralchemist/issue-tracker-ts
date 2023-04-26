import { FieldValue, Timestamp } from "firebase/firestore";

export type IPriority = "high" | "medium" | "low";

// from firestore
export interface IIssue {
  id: string;
  title: string;
  description: string;
  priority: IPriority;
  assigned_id: string;
  assigned_to: string;
  author_id: string;
  author: string;
  resolved: boolean;
  created_at: FieldValue;
  updated_at: FieldValue;
}

// partial issue fields from the create issue form
export type IIssueCreatePartial = Pick<
  IIssue,
  | "title"
  | "description"
  | "priority"
  | "assigned_to"
  | "assigned_id"
  | "resolved"
  | "author_id"
  | "author"
>;

// partial issue fields form the update issue form
export type IIssueUpdatePartial = Partial<
  Pick<
    IIssue,
    | "title"
    | "description"
    | "priority"
    | "assigned_to"
    | "assigned_id"
    | "resolved"
  >
>;

export interface IIssueUpdateWithTime {
  title?: string;
  description?: string;
  priority?: IPriority;
  assigned_to?: string;
  assigned_id?: string;
  resolved?: boolean;

  updated_at: FieldValue;
}
export interface IIssueUpdateById {
  id: IIssue["id"];
  partialIssue: IIssueUpdatePartial;
}

// issue fields added to  firestore database on create
export type IIssueCreateDTO = Omit<IIssue, "id">;

// issue fields added to  firestore database on update
export type IIssueUpdateDTO = Omit<
  IIssue,
  "id" | "author_id" | "author" | "updated_at"
>;
