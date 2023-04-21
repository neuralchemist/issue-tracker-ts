import React from "react";

import { StyledHeaderFooterLayout, StyledMainContainer } from "./styles";
// custom components
import Navbar from "../Navbar";
import Footer from "../Footer";
import MainContainer from "./MainContainer";

interface Props {
  children: React.ReactNode;
}

function HeaderFooterLayout({ children }: Props) {
  return (
    <StyledHeaderFooterLayout id="HeaderFooterLayout">
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </StyledHeaderFooterLayout>
  );
}

export default HeaderFooterLayout;
