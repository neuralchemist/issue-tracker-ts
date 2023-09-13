import { useContext } from "react";
import { IThemeSetModeContext } from "../types";
import { ThemeSetModeContext } from "../context/ThemeProviderCustom";

export function useThemeSetMode(): IThemeSetModeContext {
  const currentThemeSetMode = useContext(ThemeSetModeContext);
  if (!currentThemeSetMode)
    throw new Error(
      "useThemeSetMode should be used within <ThemeSetModeContext.Provider>"
    );
  return currentThemeSetMode;
}

