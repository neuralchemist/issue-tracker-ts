// mui5
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

// react-hook-form
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { IOptions } from "../../types/form.types";

interface Props {
  label: string;
  name: string;
  required: boolean;
  options: IOptions;
  field: ControllerRenderProps<FieldValues, string>;
}

function SimpleSelect({ field, options, label, name, required }: Props) {
  // react-hook-form
  const {
    formState: { errors },
  } = useFormContext();

  // mui config
  const muiConfig = {
    fullWidth: true,
  };

  const helperText = errors[name] ? errors[name]?.message : "";
  const hasError = !!errors[name];

  return (
    <FormControl {...muiConfig} error={hasError} required={required}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select labelId="select-label" {...field}>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText as string}</FormHelperText>
    </FormControl>
  );
}

export default SimpleSelect;
