// mui5
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
// custom hooks
import { useThemeMode, useThemeSetMode } from "../../hooks";

export function ToggleThemeButton() {
  const mode = useThemeMode();
  const setMode = useThemeSetMode();

  const buttonContent =
    mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />;

  const toggleCustomTheme = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return <IconButton onClick={toggleCustomTheme}>{buttonContent}</IconButton>;
}
