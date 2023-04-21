// MUI 5
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// custom styles
import { FormPaper, FormContainer } from "./styles";
// custom components
import { HeaderFooterLayout } from "../../../common/components";
import { FormFootnote, FormIcon, SignupForm } from "../components";
import { SIGNIN } from "../../../common/utils/routes";

function SignupPage() {
  return (
    <HeaderFooterLayout>
      <FormContainer maxWidth="xs">
        <FormPaper elevation={0}>
          <FormIcon
            label="Sign up"
            icon={<LockOutlinedIcon color="primary" />}
          />
          <SignupForm />
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
