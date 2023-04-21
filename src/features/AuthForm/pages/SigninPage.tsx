import { HeaderFooterLayout } from "../../../common/components";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormPaper, FormContainer } from "./styles";
import { FormIcon, SigninForm } from "../components";
import { FormFootnote } from "../components";
import { SIGNUP } from "../../../common/utils/routes";

function SigninPage() {
  return (
    <HeaderFooterLayout>
      <FormContainer maxWidth="xs">
        <FormPaper elevation={0}>
          <FormIcon
            label="Sign in"
            icon={<LockOutlinedIcon color="primary" />}
          />
          <SigninForm />
          <FormFootnote message="Don't have and account? Sign Up" to={SIGNUP} />
        </FormPaper>
      </FormContainer>
    </HeaderFooterLayout>
  );
}

export default SigninPage;
