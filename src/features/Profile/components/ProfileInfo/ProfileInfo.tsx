// mui5
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// custom components
import { IStatus } from "../../../../common/types";
import { ErrorMessage } from "../../../../common/components";
import { StyledProfileBox } from "./styles";
import { IAuthUser } from "../../../../firebase/auth/types";

interface Props {
  user: IAuthUser | null;
  onSignout: () => Promise<void>;
  status: IStatus;
  errorMessage: string | null;
}

function ProfileInfo({ user, onSignout, status, errorMessage }: Props) {
  return (
    <Container maxWidth="xs">
      <StyledProfileBox>
        <Typography variant="h3" align="center" color="text.primary">
          {user?.username}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          {user?.email}
        </Typography>

        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={onSignout}
          disabled={status === "loading"}
        >
          Sign Out
        </Button>

        {errorMessage !== null ? <ErrorMessage message={errorMessage} /> : null}
      </StyledProfileBox>
    </Container>
  );
}

export default ProfileInfo;
