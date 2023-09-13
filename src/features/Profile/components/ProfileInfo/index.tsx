// react-router-dom
import { useNavigate } from "react-router-dom";
// mui5
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// custom components
import { ErrorMessage } from "@common/components";
// custom styles
import { StyledProfile } from "./styles";
// custom utils
import { HOME } from "@common/utils/routes";
// custom hooks
import { useAuth, useSignout } from "@entities/auth/hooks";

export function ProfileInfo() {
  // react-router logic
  const navigate = useNavigate();

  const { user } = useAuth();
  const { signout, status, error } = useSignout();

  const handleSignout = () => {
    signout({ onSuccess: () => navigate(HOME) });
  };

  return (
    <StyledProfile maxWidth="xs">
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
        onClick={handleSignout}
        disabled={status === "loading"}
      >
        Sign Out
      </Button>

      {status === "error" ? (
        <ErrorMessage message={error?.message || ""} />
      ) : null}
    </StyledProfile>
  );
}


