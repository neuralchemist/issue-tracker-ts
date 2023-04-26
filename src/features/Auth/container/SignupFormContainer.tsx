import { useState } from "react";
// react-router-dom
import { useNavigate, useLocation } from "react-router-dom";
// custom hook
import { useAuth } from "../../../firebase/auth/hook";
// custom routes
import { HOME } from "../../../common/utils/routes";
import { SignupForm } from "../components";
import { FieldValues } from "react-hook-form";
import { QueryStatus } from "@tanstack/react-query";

function SignupFormContainer() {
  // status and error state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<QueryStatus>("success");
  // react-router-dom logic
  const navigate = useNavigate();
  const location = useLocation();

  // firebase logic
  const { signUp } = useAuth();

  const onSubmit = async (values: FieldValues) => {
    const { email, password, username } = values;
    const redirect_location = location.state?.from?.pathname || HOME;

    try {
      setStatus("loading");
      setErrorMessage(null);

      await signUp(email, password, username);
      setStatus("success");

      navigate(redirect_location);
    } catch (err) {
      // console.error('SignUp Error: ',err);
      setErrorMessage("failed to sign up");
      setStatus("error");
    }
  };

  return (
    <SignupForm
      onSubmit={onSubmit}
      status={status}
      errorMessage={errorMessage}
    />
  );
}

export default SignupFormContainer;
