// MUI 5
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

export const StyledAppBar = styled(AppBar)(() => ({
  boxShadow: "none",
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledIcon = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
}));

// export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// }));
