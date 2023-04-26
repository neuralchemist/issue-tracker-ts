import { IAuthUser } from "../../../firebase/auth/types";
import { IIssue, IPriority } from "../../../firebase/issues/types";

export function filterCreatedIssue(issues: IIssue[], user: IAuthUser) {
  return issues.filter((issue) => user?.id === issue.author_id);
}

export function filterAssignedIssue(issues: IIssue[], user: IAuthUser) {
  return issues.filter((issue) => user?.id === issue.assigned_id);
}

export function filterIssueByPriority(issues: IIssue[], priority: IPriority) {
  return issues.filter((issue) => issue.priority === priority);
}
