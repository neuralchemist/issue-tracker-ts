// mui 5
import { Container } from "@mui/material";
// custom components
import { UserList } from "@features/Admin/components";
import { HeaderFooterLayout } from "@common/components";

export function AdminPage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs">
        <UserList />
      </Container>
    </HeaderFooterLayout>
  );
}
