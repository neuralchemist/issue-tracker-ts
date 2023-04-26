// custom components
import { Container } from "@mui/material";
import { HeaderFooterLayout } from "../../../common/components";
import { UserListContainer } from "../../Users/container";

function AdminPage() {
  return (
    <HeaderFooterLayout>
      <Container maxWidth="xs">
        <UserListContainer />
      </Container>
    </HeaderFooterLayout>
  );
}

export default AdminPage;
