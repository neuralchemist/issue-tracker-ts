// mui 5
import Chip from "@mui/material/Chip";
import { IIssue } from "../../../../firebase/issues/types";

interface Props {
  issue: IIssue;
}

type IColor = "error" | "warning" | "info"

// priority = "high" | "medium" | "low"
const priorityColorMap = {
  high: "error",
  medium: "warning",
  low: "info",
};

function IssuePriorityChip({ issue }: Props) {

	const color = priorityColorMap[issue.priority] as IColor
  return (
    <>
      {issue.resolved ? (
        <Chip
          label="resolved"
          color="success"
          variant="filled"
          sx={{ width: "80px" }}
        />
      ) : (
        <Chip
          label={issue.priority}
          color={color}
          variant="filled"
          sx={{ width: "80px" }}
        />
      )}
    </>
  );
}

export default IssuePriorityChip;
