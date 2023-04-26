// MUI 5
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// custom styles
import { FormPaper, FormContainer } from "./styles";
// custom components
import { HeaderFooterLayout } from "../../../common/components";
import { FormFootnote, FormIcon } from "../components";
import { SIGNIN } from "../../../common/utils/routes";
import { SignupFormContainer } from "../container";

function SignupPage() {
  return (
    <HeaderFooterLayout>
      <FormContainer maxWidth="xs">
        <FormPaper elevation={0}>
          <FormIcon
            label="Sign up"
            icon={<LockOutlinedIcon color="primary" />}
          />
          <SignupFormContainer />
          <FormFootnote
            message="Already have an account? Sign in"
            to={SIGNIN}
          />
        </FormPaper>
      </FormContainer>
    </HeaderFooterLayout>
  );
}

export default SignupPage;
