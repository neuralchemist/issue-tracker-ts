import { useContext } from "react";
import { IThemeModeContext } from "../utils/types";
import { ThemeModeContext } from "../context/ThemeProviderCustom";

function useThemeMode(): IThemeModeContext {
  const currentThemeMode = useContext(ThemeModeContext);
  if (!currentThemeMode)
    throw new Error(
      "useThemeModeshould be used within <ThemeModeContext.Provider>"
    );
  return currentThemeMode;
}

export default useThemeMode;
