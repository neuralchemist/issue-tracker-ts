// firestore
import { Timestamp } from "firebase/firestore";
// custom types
import { IIssue, IPriority } from "../../../entities/issue/types";
import { IUser } from "../../../entities/user/types";
import { IFilterOption } from "../types";

export function filterCreatedIssue(issues: IIssue[], user: IUser) {
  return issues.filter((issue) => user?.id === issue.author_id);
}

export function filterAssignedIssue(issues: IIssue[], user: IUser) {
  return issues.filter((issue) => user?.id === issue.assigned_id);
}

export function filterIssueByPriority(issues: IIssue[], priority: IPriority) {
  return issues.filter((issue) => issue.priority === priority);
}

export function timeStampToDateString(time: Timestamp) {
  return time.toDate().toDateString();
}

export function mapStatus(
  priority: IIssue["priority"],
  isResolved: IIssue["resolved"]
) {
  if (isResolved) {
    return 0;
  }
  switch (priority) {
    case "low":
      return 1;
    case "medium":
      return 2;
    case "high":
      return 3;
    default:
      return 3;
  }
}

export function sortIssueInDescendingPriority(
  issueA: IIssue,
  issueB: IIssue
): number {
  const statusA = mapStatus(issueA.priority, issueA.resolved);
  const statusB = mapStatus(issueB.priority, issueB.resolved);
  if (statusA > statusB) return -1;
  else if (statusA < statusB) return 1;
  else return 0;
}

export const filterOptions: IFilterOption[] = [
  {
    label: "All",
    value: "all",
  },

  {
    label: "Created",
    value: "created",
  },
  {
    label: "Assigned",
    value: "assigned",
  },
  {
    label: "High Priority",
    value: "high",
  },

  {
    label: "Medium Priority",
    value: "medium",
  },
  {
    label: "Low Priority",
    value: "low",
  },
];
