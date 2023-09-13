// styled components
import { StyledUserActions } from "./styles";
// custom components
import { EditIssueButton } from "./EditIssueButton";
import { RemoveIssueButton } from "./RemoveIssueButton";
import { UserInfo } from "./UserInfo";
// custom types
import { IIssue } from "@entities/issue/types";

interface Props {
  issue: IIssue;
}

/**
 * logged in user is the author.
 * author can edit unresolved issue and remove resolved issue
 * */

export function UserActionsAuthor({ issue }: Props) {
  return (
    <StyledUserActions>
      {issue.resolved ? (
        <RemoveIssueButton issueId={issue.id} />
      ) : (
        <EditIssueButton issue={issue} />
      )}
      <UserInfo name={issue.assigned_to} label="For:" />
    </StyledUserActions>
  );
}
