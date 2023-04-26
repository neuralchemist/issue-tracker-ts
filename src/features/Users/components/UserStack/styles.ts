// mui 5
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export const StyledIssueStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(4, 0),
}));
