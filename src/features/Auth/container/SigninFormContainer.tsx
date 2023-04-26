import { useState } from "react";
// react-router-dom
import { useNavigate, useLocation } from "react-router-dom";
// custom hook
import { useAuth } from "../../../firebase/auth/hook";
// custom routes
import { HOME } from "../../../common/utils/routes";
import { SigninForm } from "../components";
import { IStatus } from "../../../common/types";
import { FieldValues } from "react-hook-form";

function SigninFormContainer() {
  // status and error state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<IStatus>("typing");
  // react-router-dom logic
  const navigate = useNavigate();
  const location = useLocation();

  // firebase logic
  const { signIn } = useAuth();

  const onSubmit = async (values: FieldValues) => {
    const { email, password } = values;
    const redirect_location = location.state?.from?.pathname || HOME;

    try {
      setStatus("loading");
      setErrorMessage(null);

      await signIn(email, password);
      setStatus("success");

      navigate(redirect_location);
    } catch (err) {
      // console.error('SignIn Error: ',err);
      setErrorMessage("failed to sign in");
      setStatus("error");
    }
  };

  return (
    <SigninForm
      onSubmit={onSubmit}
      status={status}
      errorMessage={errorMessage}
    />
  );
}

export default SigninFormContainer;
