// react-router-dom
import { useNavigate } from "react-router-dom";
// mui 5
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { IIssue } from "../../../../firebase/issues/types";
import { EDITISSUE } from "../../../../common/utils/routes";
// custom routes

interface Props {
  issue: IIssue;
}

function EditIssueButton({ issue }: Props) {
  // react-router-dom logic
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate to 'edit-issue' page
    navigate(EDITISSUE, {
      state: { issue: issue, author_id: issue.author_id },
    });
  };
  return (
    <Button
      size="small"
      color="info"
      variant="outlined"
      startIcon={<EditIcon />}
      onClick={handleClick}
      sx={{ width: "120px" }}
    >
      Edit
    </Button>
  );
}

export default EditIssueButton;
