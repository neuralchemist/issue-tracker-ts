// mui 5
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { IIssue } from "../../../../firebase/issues/types";
// custom hooks
// import { useRemoveIssue } from "./hooks/useRemoveIssue";

interface Props {
  issue: IIssue;
}

function RemoveIssueButton({ issue }: Props) {
  // custom hook to remove issue
  //   let delete_issue_state = useRemoveIssue();

  const handleClick = () => {
    // remove issue
    // delete_issue_state.mutate(issue.id);
    // redirected to home page onSuccess by useMutate to show updated content
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

export default RemoveIssueButton;
