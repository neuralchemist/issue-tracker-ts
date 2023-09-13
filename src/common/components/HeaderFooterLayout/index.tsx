import { ReactNode } from "react";
// custom styles
import { StyledHeaderFooterLayout } from "./styles";
// custom components
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import MainContainer from "./MainContainer";

interface Props {
  children: ReactNode;
}

export function HeaderFooterLayout({ children }: Props) {
  return (
    <StyledHeaderFooterLayout id="HeaderFooterLayout">
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </StyledHeaderFooterLayout>
  );
}

