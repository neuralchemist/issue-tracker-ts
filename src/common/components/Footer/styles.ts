import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

    // backgroundColor: theme.palette.secondary.light,
  padding: theme.spacing(1),
  marginTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));
