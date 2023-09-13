// custom styled
import { StyledUserActions } from "./styles";
// custom components
import { UserInfo } from "./UserInfo";
import { ResolveIssueButton } from "./ResolveIssueButton";
// custom types
import { IIssue } from "@entities/issue/types";

/**
 * issue is assigned to user.
 * assigned can resolve or unresolve an issue
 */

interface Props {
  issue: IIssue;
}

export function UserActionsAssigned({ issue }: Props) {
  return (
    <StyledUserActions>
      <ResolveIssueButton issueId={issue["id"]} resolved={issue.resolved} />
      <UserInfo name={issue.author} label="By:" />
    </StyledUserActions>
  );
}
