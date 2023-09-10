// custom components
import { useState } from "react";
import { ErrorMessage, HeaderFooterLayout } from "../../../common/components";
import { IssueStack, IssueCard } from "../../Issues/components";
import { sortIssueInDescendingPriority } from "../../Issues/utils";
import { IIssue } from "../../../firebase/issues/types";
import { useAuth } from "../../../firebase/auth/hook";
import { IFilterValue } from "../types";
import { IssueFilter } from "../components";
import {
  filterAssignedIssue,
  filterCreatedIssue,
  filterIssueByPriority,
} from "../utils";
import { useFindAllIssue } from "../../../entities/issue/hooks";

function HomePage() {
  // set filter value
  const [filterValue, setFilterValue] = useState<IFilterValue>("all");
  // hook to fetch all issues form users collection
  const { issues, status } = useFindAllIssue();
  // get auth user
  const { authUser } = useAuth();

  let filtered_sorted_issues = issues;

  // conditions
  const hasUser = !!authUser;
  const hasIssues = !!filtered_sorted_issues;
  const canFilter = hasUser && hasIssues;
  const isFilterByPriority =
    filterValue === "high" || filterValue === "medium" || filterValue === "low";
  const isUserRequiredFilterValue =
    filterValue === "assigned" || filterValue === "created";
  const showUserRequiredMessage = !hasUser && isUserRequiredFilterValue;

  if (isFilterByPriority) {
    filtered_sorted_issues = filterIssueByPriority(
      filtered_sorted_issues as IIssue[],
      filterValue
    );
  }

  // filter
  if (canFilter && filterValue === "assigned") {
    filtered_sorted_issues = filterAssignedIssue(
      filtered_sorted_issues as IIssue[],
      authUser
    );
  }

  // filter
  if (canFilter && filterValue === "created") {
    filtered_sorted_issues = filterCreatedIssue(
      filtered_sorted_issues as IIssue[],
      authUser
    );
  }

  // sort
  if (hasIssues) {
    console.log("sorting issues in descending priority");
    filtered_sorted_issues?.sort(sortIssueInDescendingPriority);
  }

  return (
    <HeaderFooterLayout>
      <IssueFilter filterValue={filterValue} setFilterValue={setFilterValue} />

      {showUserRequiredMessage ? (
        <ErrorMessage message="can't filter. please sign in" />
      ) : null}
      <IssueStack
        issues={filtered_sorted_issues}
        card={IssueCard}
        status={status}
      />
    </HeaderFooterLayout>
  );
}

export default HomePage;
