import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  "&.active": {
    border: `1px dotted ${theme.palette.text.primary}`,
    borderRadius: '40%'
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.spacing(2),
  color: theme.palette.text.primary,
}));
