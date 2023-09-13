// styled components
import { StyledUserActions } from "./styles";
// custom types
import { IIssue } from "../../../../entities/issue/types";
// custom components
import { UserInfo } from "./UserInfo";

/**
 * No user is logged in.
 * show information about author and assignee
 */

interface Props {
  author: IIssue["author"];
  assigned_to: IIssue["assigned_to"];
}

export function UserActionsAnonymous({ author, assigned_to }: Props) {
  return (
    <StyledUserActions>
      <UserInfo name={author} label="By:" />
      <UserInfo name={assigned_to} label="For:" />
    </StyledUserActions>
  );
}
