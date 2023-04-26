import { IOptions } from "../../../common/types";
import { IIssue } from "../../../firebase/issues/types";
import { IUser } from "../../../firebase/users/types";
import { IIssueCreateForm } from "../types";

export const ISSUE_CACHENAME = "issues";

export const priority_options: IOptions = [
  {
    label: "High",
    value: "high",
  },

  {
    label: "Medium",
    value: "medium",
  },

  {
    label: "Low",
    value: "low",
  },
];

export const defaultIssueValues: IIssueCreateForm = {
  title: "",
  description: "",
  priority: "low",
  assigned_id: "",
};

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

export function getOptionsFromAllUsers(
  all_users: IUser[],
  current_user: IUser
): IOptions {
  // filter current user from all users
  const other_users = all_users.filter((user) => user.id !== current_user.id);
  // convert to format suitable for dropdown
  const options = other_users.map((user) => ({
    label: user.username,
    value: user.id,
  }));

  return options;
}

export function findAssignedTo(all_users: IUser[], assigned_id: string): IUser {
  /**
   * extract  assigned_to  user using assigned_id from all_users
   */
  const assigned_to = all_users.find((user) => user.id === assigned_id);

  return assigned_to as IUser;
}
