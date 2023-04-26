import { useState } from "react";
// mui 5
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// styled components
import { StyledCard, StyledCardHeader, StyledCardActions } from "./styles";
// custom components
import CollapsableDetails from "./CollapsableDetails";
import AnonymousUserActions from "./AnonymousUserActions";
import AssignedUserActions from "./AssignedUserActions";
import AuthorUserActions from "./AuthorUserActions";
import ExpandMore from "./ExpandMore";
// types
import IssuePriorityChip from "./IssuePriorityChip";
import { IIssue } from "../../../../firebase/issues/types";
import { useAuth } from "../../../../firebase/auth/hook";
import { Timestamp } from "firebase/firestore";

/**
 * Show information about the issue.
 *
 * Card actions depends on weather the user is Anonymous,
 * Author or Assigned.
 *
 * Anonymous - user not logged in
 * Author   -  created the issue
 * Assigned -  issue assigned to.
 */

interface Props {
  issue: IIssue;
}

function IssueCard({ issue }: Props) {
  // use to collapse / expande issue details
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { authUser } = useAuth();

  const isAuthor = authUser?.id === issue.author_id;
  const isAssigned = authUser?.id === issue.assigned_id;

  const created_at = issue.created_at as Timestamp;
  const created_at_string = created_at.toDate().toDateString();

  return (
    <StyledCard>
      <StyledCardHeader
        avatar={<IssuePriorityChip issue={issue} />}
        title={issue.title}
        subheader={created_at_string}
      />

      <StyledCardActions disableSpacing>
        {isAuthor ? (
          <AuthorUserActions issue={issue} />
        ) : isAssigned ? (
          <AssignedUserActions issue={issue} />
        ) : (
          <AnonymousUserActions issue={issue} />
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

export default IssueCard;
