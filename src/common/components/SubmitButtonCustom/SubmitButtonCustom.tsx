// mui5
import Button from "@mui/material/Button";

interface Props {
  label: string;
  isDisabled: boolean;
}

function SubmitButtonCustom({ label, isDisabled }: Props) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      disabled={isDisabled}
      sx={{ mt: 1, mb: 1 }}
    >
      {label}
    </Button>
  );
}

export default SubmitButtonCustom;
