// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// initial data
import initialData from "../SignupForm/initialData";
// custom validator
import { SigninValidator } from "../../validations";
import {
  TextFieldCustom,
  SubmitButtonCustom,
  ErrorMessage,
} from "../../../../common/components";

function SigninForm() {
  const defaultValues = initialData;
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(SigninValidator),
  });

  const onSubmit = async () => {
    alert("submitted");
  };

  const isLoading = false;
  const error = "";

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
            <SubmitButtonCustom label="Sign in" isDisabled={isLoading} />
          </Grid>

          <Grid item xs={12}>
            <ErrorMessage message={error} />
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
}

export default SigninForm;
