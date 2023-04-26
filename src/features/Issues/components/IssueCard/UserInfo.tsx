// mui 5
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
// styled components
import { StyledUserInfo } from "./styles";

interface Props {
  name: string;
  label: "By:" | "For:";
}

function UserInfo({ name, label }: Props) {
  return (
    <StyledUserInfo>
      <Typography>{label}</Typography>
      <Chip
        label={name}
        color="secondary"
        variant="outlined"
        icon={<FaceIcon />}
        sx={{ minWidth: "100px" }}
      />
    </StyledUserInfo>
  );
}

export default UserInfo;
