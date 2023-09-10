import { FieldValue } from "firebase/firestore";

export type IPriority = "high" | "medium" | "low";

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

export type IIssueCreate = Omit<IIssue, "id" | "created_at" | "updated_at">;

export type IIssueUpdate = Partial<
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
