import { ReactNode } from "react";
// mui5
import { StyledNavLink, StyledButton } from "./styles";

interface Props {
  to: string;
  label: string;
  startIcon?: ReactNode | null;
}

function LinkButton({ to, label, startIcon = null }: Props) {
  return (
    <StyledNavLink to={to}>
      <StyledButton startIcon={startIcon && startIcon} variant="text">
        {label}
      </StyledButton>
    </StyledNavLink>
  );
}

export default LinkButton;
