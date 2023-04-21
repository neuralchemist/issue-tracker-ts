import { useState } from "react";
// mui5
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// react-router-dom
import { useNavigate } from "react-router-dom";
// custom routes
// import { SIGNIN } from "../Common/routes";
// custom hook
// import { useUserConsumer } from "../../Firebase/firebase-auth";
// custom components
// import Error from "../Common/Error";

function Account() {
  // loading and error state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // user hook
  const { user, doSignOut } = useUserConsumer();
  // react-router-dom
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      setError("");

      await doSignOut();
      // then navigate to sign in page
      navigate(SIGNIN);
    } catch (err) {
      setError("Failed to sign out");
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="xs" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h3" align="center" color="text.primary">
          {user?.displayName}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          {user?.email}
        </Typography>

        <Button
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogout}
          disabled={loading}
        >
          Sign Out
        </Button>

        <Error message={error} />
      </Box>
    </Container>
  );
}

export default Account;