// custom components
import { Container } from "@mui/material";
import { HeaderFooterLayout } from "../../../common/components";
import { EditIssueContainer } from "../../Issues/container";

function EditIssuePage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs" sx={{ marginTop: 8 }}>
        <EditIssueContainer />
      </Container>
    </HeaderFooterLayout>
  );
}

export default EditIssuePage;
