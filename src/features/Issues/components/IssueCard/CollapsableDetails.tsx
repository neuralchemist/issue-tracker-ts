// mui 5
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { IIssue } from "../../../../firebase/issues/types";

/**
 * show details about the issue. Can be collapsed or expanded
 */

interface Props {
  issue: IIssue;
  expanded: boolean;
}

function CollapsableDetails({ expanded, issue }: Props) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Divider variant="fullWidth" />
      <CardContent>
        <Typography paragraph>{issue.description}</Typography>
      </CardContent>
    </Collapse>
  );
}

export default CollapsableDetails;
