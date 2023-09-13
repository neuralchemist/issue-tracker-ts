// MUI 5
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// custom components
import { HeaderFooterLayout } from "../common/components";
import {
  FormFootnote,
  FormIcon,
  FormLayout,
  SignupForm,
} from "../features/Auth/components";
// custom utils
import { SIGNIN } from "../common/utils/routes";

export function SignupPage() {
  return (
    <HeaderFooterLayout>
      <FormLayout>
        <FormIcon label="Sign up" icon={<LockOutlinedIcon color="primary" />} />
        <SignupForm />
        <FormFootnote message="Already have an account? Sign in" to={SIGNIN} />
      </FormLayout>
    </HeaderFooterLayout>
  );
}
