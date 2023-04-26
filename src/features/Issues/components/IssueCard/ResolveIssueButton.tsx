// mui 5
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import { IIssue, IIssueUpdatePartial } from "../../../../firebase/issues/types";
import { useUpdateIssue } from "../../hooks";

interface Props {
  issue: IIssue;
}

function ResolveIssueButton({ issue }: Props) {
  // custom update hook
  const { updateIssueById, status } = useUpdateIssue();

  const isResolved = issue.resolved;

  // mui5 icons
  const icon_content = isResolved ? <UndoIcon /> : <DoneIcon />;
  const label_content = isResolved ? "Undo" : "Done";

  const handleClick = () => {
    const partialIssue: IIssueUpdatePartial = {
      resolved: !issue.resolved,
    };
    updateIssueById(issue.id, partialIssue);
    // redirected to home page onSuccess by useMutate to show updated content
  };
  return (
    <Button
      size="small"
      color="info"
      variant="outlined"
      startIcon={icon_content}
      onClick={handleClick}
      disabled={status === "loading"}
      sx={{ width: "120px" }}
    >
      {label_content}
    </Button>
  );
}

export default ResolveIssueButton;
