// mui 5
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledProfileBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: theme.palette.background.paper,
}));
