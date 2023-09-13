// react-router-dom
import { Link as RouterLink } from "react-router-dom";
// mui5
import Link from "@mui/material/Link";
// custom styles
import { StyledFormFootnote } from "./styles";

interface Props {
  message: string;
  to: string;
}

export function FormFootnote({ message, to }: Props) {
  return (
    <StyledFormFootnote>
      <Link
        component={RouterLink}
        to={to}
        color="text.secondary"
        variant="body2"
        sx={{ textDecoration: "none" }}
      >
        {message}
      </Link>
    </StyledFormFootnote>
  );
}

