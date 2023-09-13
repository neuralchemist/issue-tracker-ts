
// mui 5
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export const StyledFormContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const StyledFormPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1, 1),
  background: theme.palette.background.paper,
}));
