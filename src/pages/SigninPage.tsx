// mui 5
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// custom utils
import { SIGNUP } from "../common/utils/routes";
// custom components
import {
  FormFootnote,
  FormIcon,
  FormLayout,
  SigninForm,
} from "../features/Auth/components";
import { HeaderFooterLayout } from "../common/components";

export function SigninPage() {
  return (
    <HeaderFooterLayout>
      <FormLayout>
        <FormIcon label="Sign in" icon={<LockOutlinedIcon color="primary" />} />
        <SigninForm />
        <FormFootnote message="Don't have and account? Sign Up" to={SIGNUP} />
      </FormLayout>
    </HeaderFooterLayout>
  );
}
