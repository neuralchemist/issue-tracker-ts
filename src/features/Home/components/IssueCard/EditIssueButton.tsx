// react-router-dom
import { useNavigate } from "react-router-dom";
// mui 5
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
// custom types
import { IIssue } from "@entities/issue/types";
// custom utils
import { EDITISSUE } from "@common/utils/routes";

interface Props {
  issue: IIssue;
}

export function EditIssueButton({ issue }: Props) {
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

