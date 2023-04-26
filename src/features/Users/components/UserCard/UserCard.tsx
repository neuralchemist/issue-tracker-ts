import { Typography } from "@mui/material";
import { IUser } from "../../../../firebase/users/types";
import { StyledUserCard } from "./styles";

interface Props {
  user: IUser;
}

function UserCard({ user }: Props) {
  return (
    <StyledUserCard>
      <Typography variant="h3" align="center" color="text.primary">
        {user?.username}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary">
        {user?.email}
      </Typography>
    </StyledUserCard>
  );
}

export default UserCard;
