// custom components
import { ErrorMessage } from "../../../common/components";
import { IssueCard, IssueStack } from "../components";
import useFindAllIssues from "../hooks/useFindAllIssues";
import { sortIssueInDescendingPriority } from "../utils";

function IssueListContainer() {
  // hook to fetch all issues form users collection
  const { issues, status } = useFindAllIssues();

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

  const sortedIssues = issues;

  if (sortedIssues) {
    sortedIssues.sort(sortIssueInDescendingPriority);
  }

  return <>{issues ? <IssueStack issues={issues} card={IssueCard} /> : null}</>;
}

export default IssueListContainer;
