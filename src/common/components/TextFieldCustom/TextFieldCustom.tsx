// mui 5
import TextField from "@mui/material/TextField";
// react-hook-form
import { useFormContext } from "react-hook-form";

interface Props {
  type?: string;
  label: string;
  name: string;
  required: boolean;
}

function TextFieldCustom({ type = "text", label, name, required }: Props) {
  // react-hook-form
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // mui config
  const muiConfig = {
    // variant: "standard",
    // margin: "normal",
    fullWidth: true,
  };

  const helperText = errors[name] ? errors[name]?.message : "";

  return (
    <TextField
      type={type}
      label={label}
      required={required}
      error={!!errors[name]}
      helperText={helperText as string}
      {...register(name)}
      {...muiConfig}
    />
  );
}

export default TextFieldCustom;
