// mui 5
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
// custom types
import { IIssue } from "@entities/issue/types";

interface Props {
  issueId: IIssue["id"];
}

export function RemoveIssueButton({ issueId }: Props) {
  const handleClick = () => {
    console.log(issueId);
    alert("sorry no can do");
  };
  return (
    <Button
      size="small"
      color="warning"
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={handleClick}
      //   disabled={delete_issue_state.isLoading}
      sx={{ width: "120px" }}
    >
      Remove
    </Button>
  );
}

