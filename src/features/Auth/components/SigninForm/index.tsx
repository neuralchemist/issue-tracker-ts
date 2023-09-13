// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-router-dom
import { useNavigate, useLocation } from "react-router-dom";
// react-hook-form
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// custom components
import {
  TextFieldCustom,
  SubmitButtonCustom,
  ErrorMessage,
} from "@common/components";
// custom hoks
import { useSignin } from "@entities/auth/hooks";
// custom validator
import { signinValidator } from "@entities/auth/validators";
// custom utils
import { HOME } from "@common/utils/routes";

const defaultValues = {
  email: "",
  password: "",
};

export function SigninForm() {
  // react-router-logic
  const navigate = useNavigate();
  const location = useLocation();

  const { signin, status, error } = useSignin();

  const methods = useForm({
    defaultValues,
    resolver: zodResolver(signinValidator),
  });

  const isDisabled = status === "loading";

  const onSubmit = async (values: FieldValues) => {
    const { email, password } = values;
    const redirect_location = location.state?.from?.pathname || HOME;

    signin(
      { email, password },
      {
        onSuccess: () => navigate(redirect_location),
      }
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
            <SubmitButtonCustom label="Sign in" isDisabled={isDisabled} />
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
