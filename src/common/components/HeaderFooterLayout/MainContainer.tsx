import React from "react";
import Container from "@mui/material/Container";
import { SxProps } from "@mui/system";

interface Props {
  sx?: SxProps;
  children: React.ReactNode;
}

function MainContainer({ sx, children }: Props) {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        marginTop: 9,
        padding: 0,
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

export default MainContainer;
