// mui
import { Container } from "@mui/material";
// custom components
import { HeaderFooterLayout } from "@common/components";
import { EditIssueForm } from "@features/Issues/components";

export function EditIssuePage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs" sx={{ marginTop: 8 }}>
        <EditIssueForm />
      </Container>
    </HeaderFooterLayout>
  );
}

