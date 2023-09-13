import { useState } from "react";
// mui 5
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// firestore
import { Timestamp } from "firebase/firestore";
// custom styles
import { StyledCard, StyledCardHeader, StyledCardActions } from "./styles";
// custom components
import { UserActionsAuthor } from "./UserActionsAuthor";
import { UserActionsAssigned } from "./UserActionsAssigned";
import { UserActionsAnonymous } from "./UserActionsAnonymous";
import { CollapsableDetails } from "./CollapsableDetails";
import { ExpandMore } from "./ExpandMore";
import { IssuePriorityChip } from "./IssuePriorityChip";
// types
import { IIssue } from "@entities/issue/types";
// custom hooks
import { useAuth } from "@entities/auth/hooks";
// custom utils
import { timeStampToDateString } from "../../utils";

/**
 * Show information about the issue.
 *
 * Card actions depends on weather the user is Anonymous,
 * Author or Assigned.
 *
 * Anonymous - user not logged in
 * Author    - created the issue
 * Assigned  - issue assigned to.
 */

interface Props {
  issue: IIssue;
}

export function IssueCard({ issue }: Props) {
  // use to collapse / expande issue details
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { user } = useAuth();

  const isAuthor = user?.id === issue.author_id;
  const isAssigned = user?.id === issue.assigned_id;

  const created_at_string = timeStampToDateString(
    issue.created_at as Timestamp
  );

  return (
    <StyledCard>
      <StyledCardHeader
        avatar={
          <IssuePriorityChip
            priority={issue.priority}
            resolved={issue.resolved}
          />
        }
        title={issue.title}
        subheader={created_at_string}
      />

      <StyledCardActions disableSpacing>
        {isAuthor ? (
          <UserActionsAuthor issue={issue} />
        ) : isAssigned ? (
          <UserActionsAssigned issue={issue} />
        ) : (
          <UserActionsAnonymous
            author={issue.author}
            assigned_to={issue.assigned_to}
          />
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </StyledCardActions>

      <CollapsableDetails expanded={expanded} issue={issue} />
    </StyledCard>
  );
}
