// mui 5
import TextField from "@mui/material/TextField";
// react-hook-form
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  required: boolean;
}

export function TextAreaFieldCustom({ label, name, required }: Props) {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // mui config
  const muiConfig = {
    fullWidth: true,
    multiline: true,
  };

  const helperText = errors[name] ? errors[name]?.message : "";

  return (
    <TextField
      label={label}
      required={required}
      error={!!errors[name]}
      helperText={helperText as string}
      {...register(name)}
      {...muiConfig}
      rows={4}
    />
  );
}

