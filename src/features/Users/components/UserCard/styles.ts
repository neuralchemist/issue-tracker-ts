// mui 5
import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const StyledUserCard = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // background: theme.palette.background.default,
}));
