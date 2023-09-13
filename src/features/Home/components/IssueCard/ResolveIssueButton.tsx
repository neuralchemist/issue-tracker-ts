// mui 5
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
// custom types
import { IIssue, IIssueUpdate } from "@entities/issue/types";
// custom hooks
import { useUpdateIssue } from "@entities/issue/hooks";

interface Props {
  issueId: IIssue["id"];
  resolved: IIssue["resolved"];
}

export function ResolveIssueButton({ issueId, resolved }: Props) {
  // custom update hook
  const { updateIssue, status } = useUpdateIssue();

  // mui5 icons
  const icon_content = resolved ? <UndoIcon /> : <DoneIcon />;
  const label_content = resolved ? "Undo" : "Done";

  const handleClick = () => {
    const _issue: IIssueUpdate = {
      resolved: !resolved,
    };
    updateIssue(issueId, _issue);
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
