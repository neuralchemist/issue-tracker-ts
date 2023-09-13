import { Typography } from "@mui/material";
import { StyledUserCard } from "./styles";
import { IUser } from "../../../../entities/user/types";

interface Props {
  user: IUser;
}

export function UserCard({ user }: Props) {
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
