// custom components
import { Container } from "@mui/material";
import { HeaderFooterLayout } from "../../../common/components";
import { CreateIssueContainer } from "../../Issues/container";

function CreateIssuePage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs" sx={{marginTop: 8}}>

      <CreateIssueContainer />
      </Container>
    </HeaderFooterLayout>
  );
}

export default CreateIssuePage;
