import { ReactNode } from "react";
// react-router-dom
import { NavLink } from "react-router-dom";
// mui5
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// custom style
import { StyledTypography } from "./styles";

interface Props {
  to: string;
  label: string;
  icon: ReactNode;
}

export function BrandName({ to, label, icon: IconComponent }: Props) {
  return (
    <Box display="flex" alignItems="center" flexGrow={1}>
      <NavLink to={to} style={{ textDecoration: "none" }}>
        <IconButton>{IconComponent}</IconButton>
      </NavLink>
      <StyledTypography variant="h6" noWrap>
        {label}
      </StyledTypography>
    </Box>
  );
}

