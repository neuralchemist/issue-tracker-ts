// mui 5
import Chip from "@mui/material/Chip";
// custom types
import { IIssue } from "@entities/issue/types";

interface Props {
  priority: IIssue["priority"];
  resolved: IIssue["resolved"];
}

type IColor = "error" | "warning" | "info";

const priorityColorMap: Record<IIssue["priority"], IColor> = {
  high: "error",
  medium: "warning",
  low: "info",
};

export function IssuePriorityChip({ priority, resolved }: Props) {
  const color = priorityColorMap[priority];
  return (
    <>
      {resolved ? (
        <Chip
          label="resolved"
          color="success"
          variant="filled"
          sx={{ width: "80px" }}
        />
      ) : (
        <Chip
          label={priority}
          color={color}
          variant="filled"
          sx={{ width: "80px" }}
        />
      )}
    </>
  );
}

