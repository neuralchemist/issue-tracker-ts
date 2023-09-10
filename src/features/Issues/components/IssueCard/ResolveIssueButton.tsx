// mui 5
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
import { IIssue, IIssueUpdate } from "../../../../entities/issue/types";
import { useUpdateIssue } from "../../../../entities/issue/hooks";

interface Props {
  issue: IIssue;
}

function ResolveIssueButton({ issue }: Props) {
  // custom update hook
  const { updateIssue, status } = useUpdateIssue();

  const isResolved = issue.resolved;

  // mui5 icons
  const icon_content = isResolved ? <UndoIcon /> : <DoneIcon />;
  const label_content = isResolved ? "Undo" : "Done";

  const handleClick = () => {
    const _issue: IIssueUpdate = {
      resolved: !issue.resolved,
    };
    updateIssue(issue.id, _issue);
    // will be redirected to home page onSuccess by useMutate 
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
