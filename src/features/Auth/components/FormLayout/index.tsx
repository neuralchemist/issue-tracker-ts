import { StyledFormContainer, StyledFormPaper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function FormLayout({ children }: Props) {
  return (
    <StyledFormContainer maxWidth="xs">
      <StyledFormPaper elevation={0}>{children}</StyledFormPaper>
    </StyledFormContainer>
  );
}
