// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// initial data

// custom validator
import { SigninValidator } from "../../validations";
import {
  TextFieldCustom,
  SubmitButtonCustom,
  ErrorMessage,
} from "../../../../common/components";
import { ISignIn } from "../../types";
import defaultSigninValues from "./defaultSigninValues";
import { QueryStatus } from "@tanstack/react-query";

interface Props {
  status: QueryStatus;
  errorMessage: string | null;
  onSubmit: (values: ISignIn) => Promise<void>;
}

const defaultValues = defaultSigninValues;

function SigninForm({ onSubmit, status, errorMessage }: Props) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(SigninValidator),
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

export default SigninForm;
