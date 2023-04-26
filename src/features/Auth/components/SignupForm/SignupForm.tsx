// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// initial data
import defaultSignupValues from "./defaultSignupValues";
import {
  TextFieldCustom,
  SubmitButtonCustom,
  ErrorMessage,
} from "../../../../common/components";
import { SignupValidator } from "../../validations";
import { ISignUp } from "../../types";
import { QueryStatus } from "@tanstack/react-query";

interface Props {
  status: QueryStatus;
  errorMessage: string | null;
  onSubmit: (values: ISignUp) => Promise<void>;
}

const defaultValues = defaultSignupValues;

function SignupForm({ onSubmit, status, errorMessage }: Props) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(SignupValidator),
  });

  const isDisabled = status === "loading";

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

          {errorMessage !== null ? (
            <Grid item xs={12}>
              <ErrorMessage message={errorMessage} />
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </FormProvider>
  );
}

export default SignupForm;
