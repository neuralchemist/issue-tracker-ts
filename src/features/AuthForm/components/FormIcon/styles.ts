// mui 5
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledFormIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(2)
}));
