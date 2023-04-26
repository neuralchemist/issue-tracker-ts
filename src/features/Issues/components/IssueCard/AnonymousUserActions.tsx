// styled components
import { IIssue } from "../../../../common/types";
import { StyledUserActions } from "./styles";
// custom components
import UserInfo from "./UserInfo";

/**
 * No user is logged in.
 * show information about author and assignee
 */

interface Props {
  issue: IIssue;
}
function AnonymousUserActions({ issue }: Props) {
  return (
    <StyledUserActions>
      <UserInfo name={issue.author} label="By:" />
      <UserInfo name={issue.assigned_to} label="For:" />
    </StyledUserActions>
  );
}

export default AnonymousUserActions;
