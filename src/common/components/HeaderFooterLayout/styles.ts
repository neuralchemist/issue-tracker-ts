import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledHeaderFooterLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: theme.palette.background.paper,
}));
