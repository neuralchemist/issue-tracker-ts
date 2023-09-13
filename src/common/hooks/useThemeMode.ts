import { useContext } from "react";
import { IThemeModeContext } from "../types";
import { ThemeModeContext } from "../context/ThemeProviderCustom";

export  function useThemeMode(): IThemeModeContext {
  const currentThemeMode = useContext(ThemeModeContext);
  if (!currentThemeMode)
    throw new Error(
      "useThemeModeshould be used within <ThemeModeContext.Provider>"
    );
  return currentThemeMode;
}

