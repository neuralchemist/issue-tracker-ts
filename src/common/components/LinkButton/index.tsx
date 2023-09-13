import { ReactNode } from "react";
// custom styles
import { StyledNavLink, StyledButton } from "./styles";

interface Props {
  to: string;
  label: string;
  startIcon?: ReactNode | null;
}

export function LinkButton({ to, label, startIcon = null }: Props) {
  return (
    <StyledNavLink to={to}>
      <StyledButton startIcon={startIcon && startIcon} variant="text">
        {label}
      </StyledButton>
    </StyledNavLink>
  );
}
