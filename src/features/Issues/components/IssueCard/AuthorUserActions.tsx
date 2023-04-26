// styled components
import { StyledUserActions } from "./styles";
// custom components
import EditIssueButton from "./EditIssueButton";
import RemoveIssueButton from "./RemoveIssueButton";
import UserInfo from "./UserInfo";
import { IIssue } from "../../../../common/types";

interface Props {
  issue: IIssue;
}

// author can remove resolved issue
function ResolvedIssue({ issue }: Props) {
  return (
    <StyledUserActions>
      <RemoveIssueButton issue={issue} />
      <UserInfo name={issue.assigned_to} label="For:" />
    </StyledUserActions>
  );
}

// author can edit unresolved Issue
function UnresolvedIssue({ issue }: Props) {
  return (
    <StyledUserActions>
      <EditIssueButton issue={issue} />
      <UserInfo name={issue.assigned_to} label="For:" />
    </StyledUserActions>
  );
}

/**
 * logged in user is the author.
 * author can edit unresolved issue and remove resolved issue
 * */
function AuthorUserActions({ issue }: Props) {
  return (
    <>
      {issue.resolved ? (
        <ResolvedIssue issue={issue} />
      ) : (
        <UnresolvedIssue issue={issue} />
      )}
    </>
  );
}

export default AuthorUserActions;
