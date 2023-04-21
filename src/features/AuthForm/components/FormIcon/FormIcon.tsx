import { ReactNode } from "react";
// mui5
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// custom styles
import { StyledFormIcon } from "./styles";

interface Props {
  label: string;
  icon: ReactNode;
}

function FormIcon({ label, icon: IconComponent }: Props) {
  return (
    <StyledFormIcon>
      <Avatar sx={{  backgroundColor: "background.paper" }}>
        {IconComponent}
      </Avatar>
      <Typography component="h1" variant="h5">
        {label}
      </Typography>
    </StyledFormIcon>
  );
}

export default FormIcon;
