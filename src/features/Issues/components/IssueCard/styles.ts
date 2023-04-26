// mui 5
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";


export const StyledCard = styled(Card)(({ theme }) => ({
  // mobile
  width: "100%",
  maxWidth: "345px",
  minHeight: "100px",
  borderRadius: theme.spacing(2),
  border:
    theme.palette.mode === "light"
      ? "1px solid rgba(0, 0, 0, 0.3)"
      : "1px solid rgba(255, 255, 255, 0.3)",

  // tablet
  [theme.breakpoints.up("sm")]: {
    maxWidth: "545px",
  },

  // desktop
  [theme.breakpoints.up("md")]: {
    maxWidth: "745px",
  },

}));

export const StyledCardHeader = styled(CardHeader)(() => ({
  // ------DEBUG--------
  // border: "1px dashed blue",
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  // mobile
  display: "flex",
  alignItems: "flex-end",
  // tablet / desktop
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
}));

export const StyledUserActions = styled(Box)(({ theme }) => ({
  // mobile
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(1),

  // tablet / desktop
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const StyledUserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evently",
  alignItems: "center",
  gap: theme.spacing(2),

}));
