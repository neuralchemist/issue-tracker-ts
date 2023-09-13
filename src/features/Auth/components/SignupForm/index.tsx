// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// react-router-dom
import { useNavigate, useLocation } from "react-router-dom";

import {
  TextFieldCustom,
  SubmitButtonCustom,
  ErrorMessage,
} from "../../../../common/components";
// custom hooks
import { useSignup } from "../../../../entities/auth/hooks";
import { signupValidator } from "../../../../entities/auth/validators";
import { HOME } from "../../../../common/utils/routes";

const defaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function SignupForm() {
  // react-router-dom logic
  const navigate = useNavigate();
  const location = useLocation();

  // firebase logic
  const { signup, status, error } = useSignup();
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(signupValidator),
  });

  const isDisabled = status === "loading";

  const onSubmit = async (values: FieldValues) => {
    const { email, password, username } = values;
    const redirect_location = location.state?.from?.pathname || HOME;

    signup(
      { email, password, username },
      { onSuccess: () => navigate(redirect_location) }
    );
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Grid container spacing={1} paddingX={1}>
          <Grid item xs={12}>
            <TextFieldCustom
              type="text"
              label="Username"
              name="username"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextFieldCustom type="email" label="Email" name="email" required />
          </Grid>

          <Grid item xs={12}>
            <TextFieldCustom
              type="password"
              label="Password"
              name="password"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextFieldCustom
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <SubmitButtonCustom label="Sign up" isDisabled={isDisabled} />
          </Grid>

          {status === "error" ? (
            <Grid item xs={12}>
              <ErrorMessage message={error?.message || ""} />
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </FormProvider>
  );
}
