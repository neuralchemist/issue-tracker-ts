import { useState } from "react";
// custom components
import { IssueFilter } from "../IssueFilter";
import { IssueStack } from "../IssueStack";
import { ErrorMessage } from "../../../../common/components";
// custom utils
import {
  sortIssueInDescendingPriority,
  filterAssignedIssue,
  filterCreatedIssue,
  filterIssueByPriority,
} from "../../utils";
// custom hooks
import { useFindAllIssue } from "../../../../entities/issue/hooks";
import { useAuth } from "../../../../entities/auth/hooks";
// custom types
import { IFilterValue } from "../../types";
import { IIssue } from "../../../../entities/issue/types";
import { IUser } from "../../../../entities/user/types";

export function IssueSection() {
  const [filterValue, setFilterValue] = useState<IFilterValue>("all");
  const { issues, status } = useFindAllIssue();
  // get current user
  const { user } = useAuth();

  if (status === "loading") {
    return <ErrorMessage message="loading issues" />;
  }

  if (status === "error") {
    return <ErrorMessage message="failed to load issues" />;
  }

  // empty collection message
  if (issues && issues.length === 0) {
    return <ErrorMessage message="No issues in collection" />;
  }

  let filteredSortedIssues = issues;

  // conditions
  const hasUser = !!user;
  const hasIssues = !!filteredSortedIssues;
  const canFilter = hasUser && hasIssues;

  const isFilterByPriority =
    filterValue === "high" || filterValue === "medium" || filterValue === "low";
  const isFilterByUserType =
    filterValue === "assigned" || filterValue === "created";
  const isSigninRequired = !hasUser && isFilterByUserType;

  if (hasIssues && isFilterByPriority) {
    filteredSortedIssues = filterIssueByPriority(
      filteredSortedIssues as IIssue[],
      filterValue
    );
  }

  if (canFilter && filterValue === "assigned") {
    filteredSortedIssues = filterAssignedIssue(
      filteredSortedIssues as IIssue[],
      user as IUser
    );
  }

  if (canFilter && filterValue === "created") {
    filteredSortedIssues = filterCreatedIssue(
      filteredSortedIssues as IIssue[],
      user as IUser
    );
  }

  if (hasIssues) {
    filteredSortedIssues?.sort(sortIssueInDescendingPriority);
  }

  return (
    <>
      <IssueFilter filterValue={filterValue} setFilterValue={setFilterValue} />

      {isSigninRequired ? (
        <ErrorMessage message="can't filter. please sign in" />
      ) : null}

      <IssueStack issues={filteredSortedIssues} />
    </>
  );
}
