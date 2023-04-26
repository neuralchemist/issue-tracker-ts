// react-hook-form
import { useFormContext, Controller } from "react-hook-form";
import SimpleSelect from "./SimpleSelect";
import { IOptions } from "../../types/form.types";

interface Props {
  label: string;
  name: string;
  required: boolean;
  options: IOptions
}

function SelectFieldCustom({ options, label, name, required }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SimpleSelect
          field={field}
          options={options}
          label={label}
          name={name}
          required={required}
        />
      )}
    />
  );
}

export default SelectFieldCustom;
