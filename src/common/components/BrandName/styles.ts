// MUI 5
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "none",
  color: theme.palette.text.secondary,

  [theme.breakpoints.up("sm")]: {
    display: "block",
    paddingLeft: theme.spacing(1),
  },
}));
