// mui5
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// react-hook-form
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// custom components
import {
  ErrorMessage,
  SelectFieldCustom,
  SubmitButtonCustom,
  TextAreaFieldCustom,
  TextFieldCustom,
} from "../../../../common/components";

// constants
import { priority_options } from "../../utils";
import { IssueValidator } from "../../validators";
import { IOptions } from "../../../../common/types/form.types";
import { IIssueCreateForm } from "../../types";

interface Props {
  isLoading: boolean;
  isError: boolean;
  submitButtonName: string;
  onSubmit: (values: IIssueCreateForm) => Promise<void>;
  defaultValues: IIssueCreateForm;
  allUserOptions: IOptions;
}

function IssueForm({
  defaultValues,
  onSubmit,
  isLoading,
  isError,
  allUserOptions,
  submitButtonName,
}: Props) {
  // react-form-hook logic
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(IssueValidator),
  });

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextFieldCustom label="Title" name="title" required />
          </Grid>

          <Grid item xs={12}>
            <TextAreaFieldCustom
              label="Description"
              name="description"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <SelectFieldCustom
              options={priority_options}
              label="Priority"
              name="priority"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <SelectFieldCustom
              options={allUserOptions}
              label="Assign To"
              name="assigned_id"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <SubmitButtonCustom
              label={submitButtonName}
              isDisabled={isLoading}
            />
          </Grid>

          {isError ? (
            <Grid item xs={12}>
              <ErrorMessage message="failed to create issue" />
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </FormProvider>
  );
}

export default IssueForm;
