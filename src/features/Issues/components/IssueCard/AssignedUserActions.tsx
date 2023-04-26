// custom styled
import { StyledUserActions } from "./styles";
// custom components
import UserInfo from "./UserInfo";
import ResolveIssueButton from "./ResolveIssueButton";
import { IIssue } from "../../../../firebase/issues/types";

/**
 * issue is assigned to user.
 * assigned can resolve or unresolve an issue
 */

interface Props {
  issue: IIssue;
}

function AssignedUserActions({ issue }: Props) {
  return (
    <StyledUserActions>
      {/* assignee content */}
      <ResolveIssueButton issue={issue} />
      {/* author content */}
      <UserInfo name={issue.author} label="By:" />
    </StyledUserActions>
  );
}

export default AssignedUserActions;
