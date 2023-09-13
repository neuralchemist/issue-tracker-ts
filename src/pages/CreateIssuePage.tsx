// mui
import { Container } from "@mui/material";
// custom components
import { HeaderFooterLayout } from "../common/components";
import { CreateIssueForm } from "../features/Issues/components";

export function CreateIssuePage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs" sx={{ marginTop: 8 }}>
        <CreateIssueForm />
      </Container>
    </HeaderFooterLayout>
  );
}

